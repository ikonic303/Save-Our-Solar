import concurrent.futures,json,re,urllib.request,html
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
research=ROOT/'data/source'
candidates=json.loads((research/'local-resource-candidates.json').read_text(encoding='utf-8'))
override={'New York City, NY':'https://www.nyc.gov/','Philadelphia, PA':'https://www.phila.gov/','San Francisco, CA':'https://www.sf.gov/','Washington, DC':'https://dc.gov/','Denver, CO':'https://www.denvergov.org/','Fort Worth, TX':'https://www.fortworthtexas.gov/','Las Vegas, NV':'https://www.lasvegasnevada.gov/','Boise City, ID':'https://www.cityofboise.org/','Indianapolis city (balance), IN':'https://www.indy.gov/','Albuquerque, NM':'https://www.cabq.gov/','Kansas City, MO':'https://www.kcmo.gov/','Tulsa, OK':'https://www.cityoftulsa.org/'}
# Overrides are candidate URLs only. Pages receive them only on successful read.
def fetch(r):
    key=r['city']+', '+r['state']
    url=override.get(key) or ('https://'+r['candidates'][0]['Domain name']+'/' if r['candidates'] else '')
    if not url:return {'geoid':r['geoid'],'status':'no_registry_candidate'}
    try:
        with urllib.request.urlopen(url,timeout=16) as response:
            content=response.read(1200000).decode('utf-8',errors='replace')
            title=re.search(r'<title[^>]*>(.*?)</title>',content,re.S|re.I)
            title=html.unescape(re.sub('<[^>]+>','',title.group(1))).strip() if title else ''
            blocked=any(x in title.lower() for x in ['access denied','just a moment','attention required','error','forbidden','custom domain by bitly'])
            if response.status!=200 or blocked or not title:return {'geoid':r['geoid'],'url':url,'status':'not_verified','title':title}
            return {'geoid':r['geoid'],'url':response.geturl(),'status':'verified','title':title,'organization':r['candidates'][0]['Organization name'] if r['candidates'] else 'City government','source':'https://github.com/cisagov/dotgov-data','checked':'2026-09-30'}
    except Exception as e:return {'geoid':r['geoid'],'url':url,'status':'not_verified','error':str(e)[:120]}
results=[]
with concurrent.futures.ThreadPoolExecutor(max_workers=12) as ex:
    for i,r in enumerate(ex.map(fetch,candidates),1):
        results.append(r)
        if i%40==0:print('Local resource checks',i,flush=True)
(research/'local-resource-checks.json').write_text(json.dumps(results,indent=2,ensure_ascii=False),encoding='utf-8')
good={r['geoid']:r for r in results if r['status']=='verified'}
(ROOT/'data/local-resources.json').write_text(json.dumps(good,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
print('Verified',len(good),'government resource pages',flush=True)
