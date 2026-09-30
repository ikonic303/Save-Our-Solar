"""Read-only production acceptance checks. Never submits forms or changes state."""
import json,sys,urllib.request,urllib.error,xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor
BASE=(sys.argv[1] if len(sys.argv)>1 else 'https://www.saveoursolarclub.com').rstrip('/')
targets=[('/robots.txt','robots'),('/llms.txt','llms'),('/sitemap.xml','xml'),('/sitemaps/core.xml','xml'),('/sitemaps/service-areas.xml','xml'),('/service-areas/','html'),('/service-areas/colorado/denver/','html'),('/service-areas/new-york/new-york-city/','html'),('/service-areas/vermont/burlington/','html'),('/service-areas/colorado/denver/index.md','md'),('/service-areas/not-a-real-place/','missing')]
def run(item):
    path,kind=item
    try:
        with urllib.request.urlopen(BASE+path,timeout=25) as r:
            b=r.read().decode('utf-8');typ=r.headers.get('Content-Type','');issues=[]
            if kind=='missing':issues.append('Missing route returned 200; expected 404')
            elif kind=='robots':
                if 'User-agent:' not in b or '<html' in b.lower() or 'text/plain' not in typ:issues.append('robots.txt is not a text robots file')
            elif kind=='llms':
                if not b.startswith('# Save Our Solar Club') or 'text/plain' not in typ:issues.append('llms.txt format/content type mismatch')
            elif kind=='xml':
                try:ET.fromstring(b)
                except ET.ParseError:issues.append('Invalid XML')
                if 'xml' not in typ:issues.append('Expected XML content type')
            elif kind=='html':
                if '<h1>' not in b or 'application/ld+json' not in b:issues.append('Expected static page body and structured data')
                if f'href="https://www.saveoursolarclub.com{path}"' not in b:issues.append('Expected canonical URL not found')
                if 'noindex' in r.headers.get('X-Robots-Tag','').lower():issues.append('HTML is noindexed by response header')
                if 'text/html' not in typ:issues.append('Expected HTML content type')
            elif kind=='md':
                if '<html' in b.lower() or not b.startswith('#'):issues.append('Markdown is being rewritten')
                if 'noindex' not in r.headers.get('X-Robots-Tag','').lower():issues.append('Add noindex response header to Markdown mirror')
            return {'path':path,'status':r.status,'passed':not issues,'issues':issues}
    except urllib.error.HTTPError as err:
        return {'path':path,'status':err.code,'passed':kind=='missing' and err.code==404}
    except Exception as err:return {'path':path,'passed':False,'error':str(err)}
with ThreadPoolExecutor(max_workers=4) as pool:results=list(pool.map(run,targets))
print(json.dumps(results,indent=2));sys.exit(0 if all(x['passed'] for x in results) else 1)
