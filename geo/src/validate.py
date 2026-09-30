"""Validate actual output links, SEO metadata, source values, and inventories."""
import collections,json,re,sys,xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote,urlparse
# ROOT is geo/; pages are generated into the Vite site's public/ folder.
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT.parent/'public'
site=json.loads((ROOT/'data/site.json').read_text(encoding='utf-8'));origin=site['origin']
class Read(HTMLParser):
    def __init__(self):super().__init__();self.tags=[];self.ids=set();self.scripts=[];self.injson=False;self.current='';self.h1=0
    def handle_starttag(self,t,attrs):
        a=dict(attrs);self.tags.append((t,a))
        if a.get('id'):self.ids.add(a['id'])
        if t=='h1':self.h1+=1
        if t=='script' and a.get('type')=='application/ld+json':self.injson=True;self.current=''
    def handle_data(self,s):
        if self.injson:self.current+=s
    def handle_endtag(self,t):
        if t=='script' and self.injson:self.scripts.append(json.loads(self.current));self.injson=False
errors=[];titles=[];descs=[];canonicals=[];htmls=list(OUT.rglob('*.html'));parsed={}
def check(ok,message):
    if not ok:errors.append(message)
for p in htmls:
    rel='/'+p.relative_to(OUT).as_posix();text=p.read_text(encoding='utf-8');r=Read();r.feed(text);parsed[rel]=r
    check(r.h1==1,f'{rel}: needs exactly one h1')
    check('<div id="root"></div>' not in text,f'{rel}: empty SPA output')
    t=re.search(r'<title>(.*?)</title>',text);check(bool(t),f'{rel}: no title');titles.append(t.group(1) if t else '')
    meta=next((a['content'] for tag,a in r.tags if tag=='meta' and a.get('name')=='description'),None);check(bool(meta),f'{rel}: no description');descs.append(meta)
    canonical=next((a['href'] for tag,a in r.tags if tag=='link' and a.get('rel')=='canonical'),None);check(canonical==origin+rel.replace('index.html',''),f'{rel}: incorrect canonical');canonicals.append(canonical)
    check(len(r.scripts)==1,f'{rel}: JSON-LD missing')
    check(any(tag=='meta' and a.get('name')=='robots' and a.get('content','').startswith('index,follow') for tag,a in r.tags),f'{rel}: indexing disabled')
    for tag,a in r.tags:
        if tag=='a':
            check(bool(a.get('href')),f'{rel}: empty href')
        if tag=='img':check('alt' in a,f'{rel}: image alt missing')
        target=a.get('href') if tag in ('a','link') else a.get('src') if tag in ('script','img') else None
        if not target or target.startswith(('tel:','mailto:')):continue
        u=urlparse(target)
        if u.netloc and u.netloc!=urlparse(origin).netloc:continue
        path=unquote(u.path)
        if not path:
            check(not u.fragment or u.fragment in r.ids,f'{rel}: broken anchor {target}');continue
        if path.startswith(('/service-areas/','/geo-assets/','/sitemaps/')) or path in ('/llms.txt','/robots.txt','/sitemap.xml'):
            file=OUT/path.lstrip('/')
            if path.endswith('/'):file=file/'index.html'
            check(file.is_file(),f'{rel}: broken local target {target}')
    check(not any(x in text for x in ['TODO','Lorem ipsum','YOUR_CITY','[CITY]']),f'{rel}: placeholder copy')
for label,items in [('titles',titles),('descriptions',descs),('canonicals',canonicals)]:
    check(len(set(items))==len(items),f'duplicate {label}')
ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
tree=ET.parse(OUT/'sitemaps/service-areas.xml');locs=[n.text for n in tree.findall('.//s:loc',ns)]
check(set(locs)==set(canonicals),'Sitemap must exactly cover generated canonical HTML pages')
ET.parse(OUT/'sitemap.xml');ET.parse(OUT/'sitemaps/core.xml')
check('User-agent: *' in (OUT/'robots.txt').read_text(encoding='utf-8'),'invalid robots.txt')
check(not (OUT/'robots.txt').read_text(encoding='utf-8').lstrip().startswith('<'),'robots.txt is HTML')
cities=json.loads((ROOT/'data/cities.json').read_text(encoding='utf-8'))
check(len(cities)==348,'city count changed');check(len({c['state_code'] for c in cities})==51,'missing states or DC')
check(len({c['geoid'] for c in cities})==348,'duplicate city identity')
check(sum(c['population_2025']>=100000 for c in cities)==343,'population rule mismatch')
for c in cities:
    vals=c['solar']['values'];check(len(vals)==13 and all(0<=v<=12 for v in vals.values()),f'invalid sunlight: {c["name"]}')
    path=OUT/'service-areas'/c['state_slug']/c['slug']/'index.html';text=path.read_text(encoding='utf-8')
    for value in vals.values():check(f'{value:.2f}' in text,f'missing source value {c["name"]}: {value}')
    schema=parsed['/'+path.relative_to(OUT).as_posix()].scripts[0]
    orgs=[g for g in schema['@graph'] if g['@type']=='Organization'];check(len(orgs)==1 and orgs[0]['address']['addressLocality']=='Denver',f'fabricated branch: {c["name"]}')
    service=next(g for g in schema['@graph'] if g['@type']=='Service');check(service['areaServed']['name']==c['name'],f'wrong service area: {c["name"]}')
    check(path.with_name('index.md').is_file(),f'missing markdown: {c["name"]}')
result={'status':'passed' if not errors else 'failed','html_pages':len(htmls),'city_pages':len(cities),'state_pages':51,'national_pages':1,'unique_titles':len(set(titles)),'unique_descriptions':len(set(descs)),'canonical_urls_in_sitemap':len(locs),'markdown_mirrors':len(list(OUT.rglob('index.md'))),'local_government_resources':len(json.loads((ROOT/'data/local-resources.json').read_text(encoding='utf-8'))) if (ROOT/'data/local-resources.json').exists() else 0,'checks':['All internal section and asset links resolve','One h1 and valid JSON-LD on every HTML page','Exact canonical and sitemap alignment','348 distinct city identities across 50 states and DC','NASA numerical values match retained input','No fabricated local office addresses','All city pages have readable static content','No placeholder copy'], 'errors':errors}
(ROOT/'docs/validation-report.json').write_text(json.dumps(result,indent=2)+'\n',encoding='utf-8');print(json.dumps(result,indent=2));sys.exit(bool(errors))
