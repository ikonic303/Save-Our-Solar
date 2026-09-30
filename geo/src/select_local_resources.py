"""Suggest city government domains from the official .gov registry.
Selections are reviewed before inclusion in pages; this script does not infer permits.
"""
import json,re
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
def norm(s):return re.sub(r'[^a-z0-9]','',s.lower()).replace('saint','st')
rows=json.loads((ROOT/'data/source/city-domains.json').read_text(encoding='utf-8'))
cities=json.loads((ROOT/'data/cities.json').read_text(encoding='utf-8'))
result=[]
for c in cities:
    name=norm(c['name']).replace('newyorkcity','newyork')
    candidates=[r for r in rows if r['State']==c['state_code'] and norm(r['City'])==name]
    scored=[]
    for r in candidates:
        org=norm(r['Organization name']);domain=r['Domain name'].lower();dn=norm(domain.removesuffix('.gov'))
        if any(word in org+dn for word in ['police','court','library','school','election','fire','transit','water','airport','housing','museum','council','utilities','utility','park','recreation','clerk','judge','sheriff','historic','tourism']):continue
        exactorg=org in ['cityof'+name,name+'city',name,'townof'+name,'municipalityof'+name,'cityandcountyof'+name]
        score=40 if exactorg else 0
        if dn==name:score+=40
        if dn in [name+c['state_code'].lower(),name+'city','cityof'+name,name+'gov']:score+=30
        if name in dn:score+=10
        if score>=40:scored.append((score,r))
    scored.sort(key=lambda x:(-x[0],len(x[1]['Domain name'])))
    result.append({'city':c['name'],'state':c['state_code'],'geoid':c['geoid'],'candidates':[r for _,r in scored[:3]]})
(ROOT/'data/source/local-resource-candidates.json').write_text(json.dumps(result,indent=2),encoding='utf-8')
for r in result:
 print(f'{r["city"]}, {r["state"]}: '+ ' | '.join(c['Domain name']+' ['+c['Organization name']+']' for c in r['candidates']))
