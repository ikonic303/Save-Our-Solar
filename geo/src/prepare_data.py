"""Build the city inventory from retained Census files and NASA public data.
Uses the retained Census row export and Gazetteer archive.
The preparation and web build use only the standard library.
"""
import csv, io, json, math, re, unicodedata, urllib.request, zipfile
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RESEARCH = ROOT / 'data' / 'source'
STATE_TEXT = '''AL|Alabama
AK|Alaska
AZ|Arizona
AR|Arkansas
CA|California
CO|Colorado
CT|Connecticut
DE|Delaware
DC|District of Columbia
FL|Florida
GA|Georgia
HI|Hawaii
ID|Idaho
IL|Illinois
IN|Indiana
IA|Iowa
KS|Kansas
KY|Kentucky
LA|Louisiana
ME|Maine
MD|Maryland
MA|Massachusetts
MI|Michigan
MN|Minnesota
MS|Mississippi
MO|Missouri
MT|Montana
NE|Nebraska
NV|Nevada
NH|New Hampshire
NJ|New Jersey
NM|New Mexico
NY|New York
NC|North Carolina
ND|North Dakota
OH|Ohio
OK|Oklahoma
OR|Oregon
PA|Pennsylvania
RI|Rhode Island
SC|South Carolina
SD|South Dakota
TN|Tennessee
TX|Texas
UT|Utah
VT|Vermont
VA|Virginia
WA|Washington
WV|West Virginia
WI|Wisconsin
WY|Wyoming'''
states = dict(line.split('|') for line in STATE_TEXT.splitlines())
state_codes = {v:k for k,v in states.items()}
def slug(value):
    value=unicodedata.normalize('NFKD',value).encode('ascii','ignore').decode().lower()
    return re.sub(r'[^a-z0-9]+','-',value).strip('-')

rows=json.loads((RESEARCH/'selected-population.json').read_text(encoding='utf-8'))
with zipfile.ZipFile(RESEARCH/'census-places-2025.zip') as z:
    places=list(csv.DictReader(io.StringIO(z.read(z.namelist()[0]).decode()),delimiter='|'))
gaz={(p['USPS'],p['NAME']):p for p in places}
cities=[]
aliases={'New York':'New York City','Urban Honolulu':'Honolulu','Nashville-Davidson metropolitan government (balance)':'Nashville','Louisville/Jefferson County metro government (balance)':'Louisville','Indianapolis (balance)':'Indianapolis','Indianapolis city (balance)':'Indianapolis','Boise City':'Boise','San Buenaventura (Ventura)':'Ventura','Lexington-Fayette urban county':'Lexington','Augusta-Richmond County consolidated government (balance)':'Augusta','Athens-Clarke County unified government (balance)':'Athens','Macon-Bibb County':'Macon'}
for r in rows:
    legal,state=r['name'].rsplit(', ',1)
    code=state_codes[state];g=gaz[(code,legal)]
    clean=re.sub(r' (city|town|village|municipality|CDP|borough)$','',legal)
    clean=aliases.get(clean,clean)
    cities.append({'name':clean,'legal_name':legal,'state':state,'state_code':code,'slug':slug(clean),'state_slug':slug(state),'population_2025':r['population'],'census_rank':r['rank'],'geoid':g['GEOID'],'latitude':float(g['INTPTLAT']),'longitude':float(g['INTPTLONG']),'selection':'population_100000' if r['population']>=100000 else 'largest_city_in_state','coverage':'national_network_check_address'})

tiles=sorted({(math.floor(c['latitude']/5)*5,math.floor(c['longitude']/5)*5) for c in cities})
cache=RESEARCH/'nasa-tiles';cache.mkdir(exist_ok=True)
def get_tile(tile):
    lat,lon=tile;path=cache/f'{lat}_{lon}.json'
    url=f'https://power.larc.nasa.gov/api/temporal/climatology/regional?latitude-min={lat}&latitude-max={lat+5}&longitude-min={lon}&longitude-max={lon+5}&parameters=ALLSKY_SFC_SW_DWN&community=RE&format=JSON'
    if not path.exists():
        with urllib.request.urlopen(url,timeout=45) as r: data=r.read()
        j=json.loads(data)
        if not j.get('features'):raise ValueError(f'No NASA features: {tile}')
        path.write_bytes(data)
    return tile,json.loads(path.read_text(encoding='utf-8')),url
print(f'Fetching {len(tiles)} regional solar tiles for {len(cities)} cities',flush=True)
solar={};errors=[]
with ThreadPoolExecutor(max_workers=4) as ex:
    fs={ex.submit(get_tile,t):t for t in tiles}
    for i,f in enumerate(as_completed(fs),1):
        try:
            tile,j,url=f.result();solar[tile]=(j,url)
            print(f'NASA {i}/{len(tiles)} OK {tile}',flush=True)
        except Exception as e: errors.append((fs[f],str(e)));print('FAILED',fs[f],str(e),flush=True)
if errors:
    (RESEARCH/'nasa-errors.json').write_text(json.dumps(errors,indent=2),encoding='utf-8')
    raise SystemExit('Some NASA data unavailable. Rerun to resume retained tiles.')
for c in cities:
    tile=(math.floor(c['latitude']/5)*5,math.floor(c['longitude']/5)*5)
    j,url=solar[tile]
    target=(math.floor(c['longitude'])+.5,math.floor(c['latitude'])+.5)
    f=next((f for f in j['features'] if tuple(f['geometry']['coordinates'][:2])==target),None)
    if f is None:raise ValueError(f'No containing grid for {c["name"]}')
    values=f['properties']['parameter']['ALLSKY_SFC_SW_DWN']
    assert len(values)==13 and all(0<=v<=12 for v in values.values())
    c['solar']={'values':values,'grid_center':list(target),'units':'kWh/m²/day','period':'2001–2020','source':url,'spatial_resolution':'1° × 1° regional grid'}
(ROOT/'data/cities.json').write_text(json.dumps(cities,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
(ROOT/'data/states.json').write_text(json.dumps(states,indent=2)+'\n',encoding='utf-8')
print('Saved',len(cities),'cities with verified NASA data',flush=True)
