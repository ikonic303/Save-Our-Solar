"""Generate an additive, dependency-free static service-area section.

Usage: python geo/src/build.py
Retained data makes ordinary builds offline and reproducible.
Pages are written into the Vite site's public/ folder, so Vite copies them to dist/
and Vercel serves them as static files ahead of the SPA rewrite.
"""
import base64,html,json,math,re,shutil
from collections import defaultdict
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlencode
from xml.sax.saxutils import escape as xml_escape

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT.parent/'public'
SITE=json.loads((ROOT/'data/site.json').read_text(encoding='utf-8'))
CITIES=json.loads((ROOT/'data/cities.json').read_text(encoding='utf-8'))
STATES=json.loads((ROOT/'data/states.json').read_text(encoding='utf-8'))
RESOURCES=json.loads((ROOT/'data/local-resources.json').read_text(encoding='utf-8')) if (ROOT/'data/local-resources.json').exists() else {}
ORIGIN=SITE['origin']
DATE=SITE['reviewed']
MONTHS=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
MONTH_NAMES=['January','February','March','April','May','June','July','August','September','October','November','December']
NASA='https://power.larc.nasa.gov/docs/services/api/temporal/climatology/'
DOE='https://www.energy.gov/cmei/systems/homeowners-guide-solar'
e=lambda v:html.escape(str(v),quote=True)
def city_path(c):return f'/service-areas/{c["state_slug"]}/{c["slug"]}/'
def state_path(c):return f'/service-areas/{c["state_slug"]}/'
def url(path):return ORIGIN+path
def write(path,text):
    target=OUT/path.lstrip('/');target.parent.mkdir(parents=True,exist_ok=True);target.write_text(text,encoding='utf-8')
def contact(c=None):
    params={'utm_source':'service-area','utm_medium':'website','utm_campaign':'solar-care'}
    if c:params['utm_content']=c['state_code'].lower()+'-'+c['slug']
    return url(SITE['contact_path'])+'?'+urlencode(params)
def action(c=None,label='Request an inspection',secondary=False):
    return f'<a class="button{" secondary" if secondary else ""}" href="{e(contact(c))}">{e(label)}</a>'
def month(key):return MONTH_NAMES[MONTHS.index(key)]
def stats(c):
    vals=c['solar']['values'];peak=max(MONTHS,key=lambda x:vals[x]);low=min(MONTHS,key=lambda x:vals[x])
    return vals,peak,low,round((1-vals[low]/vals[peak])*100)
def org_schema():
    return {'@type':'Organization','@id':url('/#organization'),'name':SITE['name'],'legalName':SITE['legal_name'],'url':url('/'),'telephone':SITE['phone'],'email':SITE['email'],'logo':url('/logo.png'),'description':SITE['coverage_statement'],'address':{'@type':'PostalAddress','streetAddress':'7535 East Hampden Avenue, Suite 400','addressLocality':'Denver','addressRegion':'CO','postalCode':'80231','addressCountry':'US'}}
def breadcrumbs(items):
    return '<nav class="crumbs" aria-label="Breadcrumb">'+'<span aria-hidden="true">/</span>'.join(f'<a href="{e(href)}">{e(label)}</a>' if href else f'<span aria-current="page">{e(label)}</span>' for label,href in items)+'</nav>'
def schema(path,title,items,c=None,is_collection=False):
    graph=[org_schema(),{'@type':'WebSite','@id':url('/#website'),'url':url('/'),'name':SITE['name'],'publisher':{'@id':url('/#organization')}},
    {'@type':'CollectionPage' if is_collection else 'WebPage','@id':url(path+'#webpage'),'url':url(path),'name':title,'inLanguage':'en-US','isPartOf':{'@id':url('/#website')},'publisher':{'@id':url('/#organization')},'dateModified':DATE},
    {'@type':'BreadcrumbList','@id':url(path+'#breadcrumbs'),'itemListElement':[{'@type':'ListItem','position':i+1,'name':label,'item':url(href)} for i,(label,href) in enumerate(items)]}]
    if c:
        graph.append({'@type':'Service','@id':url(path+'#service'),'name':f'Solar repair and maintenance support in {c["name"]}, {c["state_code"]}','serviceType':['Residential solar maintenance','Solar repair coordination','Solar monitoring support','Solar detach and reset coordination'],'provider':{'@id':url('/#organization')},'areaServed':{'@type':'City','name':c['name'],'containedInPlace':{'@type':'State','name':c['state'],'containedInPlace':{'@type':'Country','name':'United States'}}},'url':url(path),'description':SITE['coverage_statement']})
        graph[2]['mainEntity']={'@id':url(path+'#service')}
    return {'@context':'https://schema.org','@graph':graph}
def header():
    return f'''<a class="skip" href="#main">Skip to content</a>
<div class="topbar"><div class="wrap"><strong>24/7 dispatch line</strong><span><a href="tel:{SITE['phone']}">{SITE['phone_display']}</a> <span class="email">&nbsp; · &nbsp; <a href="mailto:{SITE['email']}">{SITE['email']}</a></span></span></div></div>
<header class="site-header"><div class="wrap header-inner"><a class="brand" href="{url('/')}"><img src="/geo-assets/logo.png" width="53" height="53" alt="Save Our Solar Club"><span>SAVE OUR<br>SOLAR CLUB</span></a><nav class="nav" aria-label="Main navigation"><a class="services-nav" href="{url('/services')}">Services</a><a href="/service-areas/">Service areas</a><a class="hide-mobile" href="{url('/membership')}">Membership</a><a class="button" href="tel:{SITE['phone']}">Call SOS</a></nav></div></header>'''
def footer():
    return f'''<footer class="site-footer"><div class="wrap"><div class="footer-grid"><div><h3>{SITE['name']}</h3><p>{SITE['coverage_statement']}</p><p>Denver office: {SITE['address']}</p></div><div><h3>Solar support</h3><a href="{url('/services')}">Services</a><a href="{url('/membership')}">Membership options</a><a href="/service-areas/">Find your city</a><a href="{url('/about')}">About the club</a></div><div><h3>Talk with our team</h3><a href="tel:{SITE['phone']}">{SITE['phone_display']}</a><a href="mailto:{SITE['email']}">{SITE['email']}</a><a href="{url('/contact')}">Request an inspection</a><p>24/7 dispatch line. Visit timing depends on availability.</p></div></div><div class="footer-bottom"><span>© 2026 {SITE['name']}. Operated by {SITE['legal_name']}.</span><span><a href="{url('/privacy-policy')}">Privacy</a> &nbsp; · &nbsp; <a href="{url('/terms-conditions')}">Terms</a></span></div></div></footer>'''
def document(path,title,description,body,structured,directory=False):
    js='<script src="/geo-assets/directory.js" defer></script>' if directory else ''
    structured_json=json.dumps(structured,ensure_ascii=False).replace('</','<\\/')
    return f'''<!doctype html>
<html lang="en-US"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{e(title)}</title><meta name="description" content="{e(description)}"><meta name="robots" content="index,follow,max-image-preview:large"><meta name="theme-color" content="#10171e"><link rel="canonical" href="{url(path)}"><link rel="alternate" type="text/markdown" href="{url(path+'index.md')}"><link rel="describedby" href="{url('/llms.txt')}"><link rel="icon" type="image/png" href="/geo-assets/logo.png"><link rel="stylesheet" href="/geo-assets/service-areas.css"><meta property="og:type" content="website"><meta property="og:title" content="{e(title)}"><meta property="og:description" content="{e(description)}"><meta property="og:url" content="{url(path)}"><meta property="og:site_name" content="Save Our Solar Club"><script type="application/ld+json">{structured_json}</script>{js}</head><body>{header()}<main id="main">{body}</main>{footer()}</body></html>'''
def solar_card(c):
    v,peak,low,drop=stats(c)
    bars=''.join(f'<div class="bar {"peak" if m==peak else "low" if m==low else ""}" style="height:{v[m]/max(v[x] for x in MONTHS)*100:.2f}%" title="{month(m)}: {v[m]:.2f} kWh/m²/day"></div>' for m in MONTHS)
    return f'''<aside class="signal" aria-labelledby="signal-title"><span class="eyebrow">Local solar context</span><h2 id="signal-title">Sunlight changes. Your care shouldn’t.</h2><div class="signal-kpi"><strong>{v['ANN']:.2f}</strong><span>kWh/m²/day<br>annual average sunlight</span></div><div class="bars" aria-hidden="true">{bars}</div><div class="bar-labels" aria-hidden="true">{''.join('<span>'+m.title()[0]+'</span>' for m in MONTHS)}</div><div class="legend"><span>Highest: {month(peak)}</span><span>Lowest: {month(low)}</span></div><p class="micro">NASA POWER regional averages, 2001–2020. Sunlight on a horizontal surface; not your system’s electricity output. <a href="#seasonal-data">See monthly values and method</a>.</p></aside>'''
def seasonal_insight(c):
    v,peak,low,drop=stats(c)
    ratio=v[low]/v[peak]
    if ratio<.35:
        heading='A strong seasonal swing calls for a fair comparison.'
        text=f'The regional sunlight average near {c["name"]} is about {drop}% lower in {month(low)} than in {month(peak)}. Comparing those two months alone can make a working array look underproductive. Start with the same month in a previous year, then review recent weather and equipment alerts.'
    elif ratio<.6:
        heading='Set your baseline to the season.'
        text=f'Near {c["name"]}, the long-term sunlight average reaches its high in {month(peak)} and its low in {month(low)}. That is about a {drop}% difference between the lowest and highest monthly daily averages. A useful service request includes the same calendar month from an earlier year, if you have it.'
    else:
        heading='A smaller seasonal swing still needs context.'
        text=f'The long-term sunlight average near {c["name"]} is about {drop}% lower in {month(low)} than in {month(peak)}. A sudden interruption or equipment fault still deserves attention even when the regional seasonal pattern is relatively steady. Save the start date and the app’s exact message.'
    return heading,text
def nearest(c):
    def dist(x):
        a=math.radians(c['latitude']);b=math.radians(x['latitude']);dy=b-a;dx=math.radians(x['longitude']-c['longitude'])
        return 2*6371*math.asin(min(1,math.sqrt(math.sin(dy/2)**2+math.cos(a)*math.cos(b)*math.sin(dx/2)**2)))
    within=sorted([x for x in CITIES if x['geoid']!=c['geoid']],key=dist)
    return [x for x in within if dist(x)<=250][:6]
def service_cards():
    data=[('01','Solar repair & diagnostics','Production stopped, an inverter reports a fault, or one part of the array falls behind? Share the error message and system details so the team can review the right diagnostic path.',['Panel, inverter, and optimizer issues','Electrical diagnostics and repair coordination'],'/services/repairs'),('02','Maintenance & cleaning','Build a service history instead of waiting for a visible failure. Ask about inspection, performance verification, cleaning, and the maintenance your equipment actually needs.',['System inspections and photo records','Cleaning and preventive maintenance'],'/services/solar-maintenance'),('03','Monitoring & connectivity','A blank app can mean a reporting problem, a production problem, or both. Tell us when reporting stopped and whether you recently changed your router or internet service.',['Monitoring setup and portal access','Wi-Fi and data-logger troubleshooting'],'/services/monitoring'),('04','Panel removal & reinstallation','Planning roof work? Coordinate your solar array with the roofing schedule so responsibilities, handling, and the return-to-service checks are clear.',['Detach and reset coordination','Roofing and solar work sequencing'],'/services/detach-and-reset'),('05','Support for an existing system','If your original installer is unavailable, start with your equipment information, installation documents, and monitoring history. The team can review available support for your system.',['Equipment and service-history review','Warranty documentation assistance'],'/services'),('06','Ongoing membership support','Compare current membership options for monitoring, inspections, and dispatch support. Confirm the enrollment terms, exclusions, and repair charges that apply to your system.',['Current options on the membership page','Address and equipment eligibility review'],'/membership')]
    return '<div class="cards">'+''.join(f'<article class="card"><span class="card-number">{n} / SOLAR CARE</span><h3>{title}</h3><p>{text}</p><ul>'+''.join('<li>'+x+'</li>' for x in bullets)+f'</ul><p style="margin:20px 0 0"><a href="{url(link)}">Explore {"membership" if n=="06" else "service details"}</a></p></article>' for n,title,text,bullets,link in data)+'</div>'
def city_faq(c):
    v,peak,low,drop=stats(c);name=c['name']
    return [
    (f'How do I request solar repair in {name}?',f'Call {SITE["phone_display"]} or use the inspection request page. Include your {name} service address, panel and inverter brands, the issue you see, and any monitoring screenshots. The team confirms address coverage, equipment compatibility, scope, and scheduling before a visit.'),
    (f'Is a production drop in {month(low)} normal near {name}?',f'The NASA regional climatology averages {v[low]:.2f} kWh/m²/day of sunlight in {month(low)}, compared with {v[peak]:.2f} in {month(peak)}. This gives seasonal context, but it cannot diagnose your array. Compare similar calendar periods and check equipment alerts before assuming the change is seasonal.'),
    ('Can you help if my original solar installer closed?', 'Tell the team that your installer is no longer available and share your installation records and equipment details. Save Our Solar Club offers support for existing systems through its national network. A service request does not automatically transfer or reinstate an installer’s or manufacturer’s warranty.'),
    ('Does an offline monitoring app mean my panels stopped working?', 'Not necessarily. A monitoring connection and electricity production are different things. Record the last time the app updated, any internet changes, and the exact alert. Ask for a review before assuming a panel or inverter needs replacement.'),
    (f'Do you have a branch office in {name}?','This page describes access to a national service network. It does not represent a separate local branch. The company lists its office in Denver, Colorado; technician availability and visit timing are confirmed for your address.'),
    ('Are repair costs included in a membership?', 'Benefits vary by membership and the work required. Review the current membership details and ask the team to explain enrollment charges, service fees, parts, labor, exclusions, and any applicable warranty coverage before authorizing work.')]
def city_page(c):
    name=e(c['name']);state=e(c['state']);code=c['state_code'];path=city_path(c)
    title=f'Solar Repair & Maintenance in {c["name"]}, {code} | SOS Club'
    description=f'Need solar repair in {c["name"]}, {code}? Get maintenance, monitoring and detach/reset support from Save Our Solar Club. Check service for your address.'
    v,peak,low,drop=stats(c);insight_h,insight_p=seasonal_insight(c)
    table=''.join(f'<tr><th scope="row">{month(m)}</th><td class="number">{v[m]:.2f}</td><td>{"Highest monthly average" if m==peak else "Lowest monthly average" if m==low else "—"}</td></tr>' for m in MONTHS)
    local=RESOURCES.get(c['geoid'])
    local_html=(f'<div class="resource"><a href="{e(local["url"])}">{name} government resources</a><p>Start with the city’s official website to locate its building or permitting department. Ask which authority handles your property and whether your proposed solar or roof work needs review. Requirements depend on the address and scope.</p></div>' if local else '<div class="resource"><h3>Confirm the authority for your address</h3><p>Before a roof project or equipment change, ask your city or county building department which permits or inspections apply. A mailing city and the authority responsible for a property can differ.</p></div>')
    nearby=nearest(c)
    nearby_html=('''<section class="section alt"><div class="wrap"><div class="section-head"><span class="eyebrow">Explore the area</span><h2>Other nearby city guides</h2><p>Use the guide for your address and confirm service availability with our team.</p></div><div class="nearby">'''+''.join(f'<a href="{city_path(x)}">{e(x["name"])}<span class="state-tag">{x["state_code"]}</span></a>' for x in nearby)+'</div></div></section>') if nearby else ''
    faqs=city_faq(c)
    body=f'''<section class="hero"><div class="wrap">{breadcrumbs([('Home',url('/')),('Service areas','/service-areas/'),(c['state'],state_path(c)),(c['name'],None)])}<div class="hero-grid"><div><span class="eyebrow">{state} / Residential solar support</span><h1>Solar repair &amp; maintenance in {name}.</h1><p>A system you already own deserves reliable support. Connect with Save Our Solar Club for repairs, maintenance, monitoring help, and panel removal and reinstallation in {name}, {code}.</p><div class="actions">{action(c)}<a class="button secondary" href="tel:{SITE['phone']}">Call {SITE['phone_display']}</a></div><p class="coverage">National network. Address-level availability. Share your equipment and service needs so we can confirm the right next step.</p></div>{solar_card(c)}</div></div></section>
<div class="intro-strip"><div class="wrap"><div><strong>Existing systems welcome</strong><span>Start with your equipment details.</span></div><div><strong>24/7 dispatch line</strong><span>Visit timing is confirmed separately.</span></div><div><strong>One place to start</strong><span>Repair, maintenance, and monitoring.</span></div></div></div>
<section class="section"><div class="wrap"><div class="section-head"><span class="eyebrow">Keep your system working</span><h2>Get the right help for your solar problem.</h2><p>For {name} homeowners, the first step is understanding whether the issue involves production, reporting, equipment, or upcoming roof work. These are the services our national platform offers; confirm the work available for your system.</p></div>{service_cards()}</div></section>
<section class="section alt" id="seasonal-data"><div class="wrap two"><div><span class="eyebrow">{name} solar conditions</span><h2>Is the change seasonal, or does your system need attention?</h2><p>{e(insight_p)}</p><h3>{e(insight_h)}</h3><p>The regional annual average is <strong>{v['ANN']:.2f} kWh/m²/day</strong>. The monthly values describe solar energy reaching a horizontal square meter of surface. They are a reference for the local seasonal pattern, not an estimate of your roof’s production or a test of system health.</p><p class="highlight">A fault alert, a sudden unexplained drop, or missing production deserves a closer look. Seasonal averages do not rule out equipment problems.</p><ul class="checklist"><li>Compare the same calendar month across years when records are available.</li><li>Separate your monitoring app’s reported production from the utility bill’s imported and exported energy.</li><li>Record the date of a sudden change, recent storms, roof work, or monitoring interruptions.</li><li>Share data from your actual system so a technician can assess roof orientation, shading, equipment, and losses.</li></ul></div><div><div class="table-wrap"><table><caption>Regional sunlight near {name}<br><span class="state-tag">Monthly average daily irradiation · kWh/m²/day</span></caption><thead><tr><th scope="col">Month</th><th class="number" scope="col">Sunlight</th><th scope="col">Seasonal context</th></tr></thead><tbody>{table}</tbody></table></div><p class="source-note">Source: <a href="{e(c['solar']['source'])}">NASA POWER data</a>, 2001–2020 climatology. The 1° × 1° grid containing the Census representative point for {name} is centered at {c['solar']['grid_center'][1]:.1f}°, {c['solar']['grid_center'][0]:.1f}°. Nearby cities can share the same grid. These are regional modeled/satellite-derived averages, not rooftop measurements, current weather, or guaranteed output. <a href="{NASA}">Method and data documentation</a>.</p></div></div></section>
<section class="section"><div class="wrap two"><div><span class="eyebrow">A better service request</span><h2>Have these details ready.</h2><p>A little information makes your first conversation more useful. You can gather these records from the ground and from your app or paperwork.</p><ul class="checklist"><li>Your {name} service address and a description of the problem.</li><li>Panel, inverter, or microinverter brand and model, if known.</li><li>App screenshots, error messages, and the last successful update.</li><li>Installation date, original installer, and available warranty documents.</li><li>Any scheduled roof work, recent system changes, and safe access details.</li></ul><p class="form-note">Leave rooftop and electrical inspection to qualified professionals. Do not open equipment or touch damaged wiring to prepare a request.</p></div><aside class="callout"><span class="eyebrow">Installer no longer available?</span><h3>You still have a place to start.</h3><p>Tell us what you know about the system and what support is missing. We can review available service options through the national network, including diagnostics, monitoring, and maintenance.</p><p>Existing warranty rights and any repair charges need to be checked against the equipment, documents, and proposed work.</p>{action(c,'Talk with our team')}</aside></div></section>
<section class="section alt"><div class="wrap two"><div><span class="eyebrow">Plan the next step</span><h2>From first call to a clear service plan.</h2><ol class="steps"><li><strong>Describe the issue.</strong><p>Send your address, system information, and symptoms through our current contact page or call the dispatch line.</p></li><li><strong>Confirm availability and scope.</strong><p>Ask about equipment support, technician availability, diagnostic charges, and what will happen during a visit.</p></li><li><strong>Review the proposed work.</strong><p>Confirm the scope, pricing, scheduling, and any warranty documentation before authorizing service.</p></li></ol><p><a href="{url('/membership')}">Compare current membership options</a> for ongoing support.</p></div><div><span class="eyebrow">{name} homeowner resources</span><h2>Coordinate the work around your home.</h2>{local_html}<div class="resource"><h3>Use the utility listed on your bill</h3><p>A city can contain more than one utility territory. Use the company on your actual bill for outage notices, interconnection questions, and meter or billing issues. A service provider cannot determine those account details from the city name alone.</p></div><div class="resource"><a href="{DOE}">U.S. Department of Energy homeowner guide</a><p>Independent background on solar equipment, ownership, roof suitability, and questions to discuss with a provider.</p></div></div></div></section>
<section class="section"><div class="wrap faq"><span class="eyebrow">Questions from solar homeowners</span><h2>Solar service in {name}: common questions.</h2>{''.join('<details><summary>'+e(q)+'</summary><p>'+e(a)+'</p></details>' for q,a in faqs)}</div></section>
{nearby_html}<section class="cta-section"><div class="wrap"><div><h2>Let’s get your solar support sorted.</h2><p>Tell us about your {name} system. We’ll help you find the next step.</p></div><a class="button dark" href="{e(contact(c))}">Request an inspection</a></div></section>'''
    structured=schema(path,title,[('Home','/'),('Service areas','/service-areas/'),(c['state'],state_path(c)),(c['name'],path)],c)
    return document(path,title,description,body,structured),body,title,description

def city_links(cities):
    return '<div class="city-list">'+''.join(f'<a class="city-link" data-state="{c["state_code"]}" data-search="{e((c["name"]+" "+c["state"]+" "+c["state_code"]).lower())}" href="{city_path(c)}">{e(c["name"])}<span class="state-tag">{c["state_code"]}</span></a>' for c in sorted(cities,key=lambda x:x['name']))+'</div>'
def directory_page(cities,state=None):
    name=state['state'] if state else 'United States';path=state_path(state) if state else '/service-areas/'
    title=f'Solar Repair & Maintenance in {name} | Save Our Solar Club' if state else 'Solar Service Areas Nationwide | Save Our Solar Club'
    description=f'Find solar maintenance, repairs, monitoring, and detach/reset support in {name}. Browse local guides and confirm service availability for your address.'
    bystate=defaultdict(list)
    for c in cities:bystate[c['state_code']].append(c)
    headings=f'Solar care in {e(name)}.' if state else 'Your solar support starts here.'
    groups=''.join(f'<section class="state-group" data-state="{code}"><h3><a href="{state_path(bystate[code][0])}">{e(STATES[code])}</a> <span class="state-tag">{len(bystate[code])} {"city" if len(bystate[code])==1 else "cities"}</span></h3>{city_links(bystate[code])}</section>' for code in sorted(bystate,key=lambda x:STATES[x]))
    state_options=''.join(f'<option value="{code}">{e(STATES[code])}</option>' for code in sorted(bystate,key=lambda x:STATES[x]))
    select=f'<div class="field"><label for="state-filter">State</label><select id="state-filter"><option value="">All states and D.C.</option>{state_options}</select></div>' if not state else ''
    body=f'''<section class="hero"><div class="wrap">{breadcrumbs([('Home',url('/')),('Service areas','/service-areas/'),(name,None)] if state else [('Home',url('/')),('Service areas',None)])}<div class="hero-grid"><div><span class="eyebrow">{e(name)} / Save Our Solar Club</span><h1>{headings}</h1><p>Repair, maintenance, monitoring, and panel removal and reinstallation for the solar system you already own. Find your city, understand its seasonal solar pattern, and connect with our team.</p><div class="actions"><a class="button" href="#cities">Find your city</a><a class="button secondary" href="tel:{SITE['phone']}">Call {SITE['phone_display']}</a></div><p class="coverage">{SITE['coverage_statement']}</p></div><figure style="margin:0"><img class="hero-photo" src="/geo-assets/solar-array.jpg" width="800" height="800" alt="Residential rooftop solar array shown on Save Our Solar Club’s website"><figcaption class="photo-caption">Solar installation image from the Save Our Solar Club website.</figcaption></figure></div></div></section>
<section class="section" id="cities"><div class="wrap"><span class="eyebrow">Find local solar guidance</span><h2>{len(cities)} city {"guide" if len(cities)==1 else "guides"}{' in '+e(name) if state else ' across all 50 states and D.C.'}.</h2><p>Each guide includes services, regional solar averages, what to prepare for an inspection, and links to keep planning moving. A listed city does not guarantee an available appointment; confirm the address and equipment with our team.</p><div class="directory-controls"><div class="field"><label for="city-search">City or state</label><input id="city-search" type="search" placeholder="Search a city or state" autocomplete="off"></div>{select}</div><p class="counter" id="city-count" role="status" aria-live="polite">{len(cities)} city guides shown</p>{groups}<p class="source-note">Directory scope: Census incorporated places with at least 100,000 residents in the July 1, 2025 estimates, including the Census table’s Urban Honolulu entry, plus the largest listed city in each state below the threshold. Washington, D.C. is included. This is a city-based directory, not a list of every suburb or metropolitan area.</p></div></section>
<section class="section alt"><div class="wrap two"><div><span class="eyebrow">The right service starts with context</span><h2>Know what changed before you book.</h2><p>Did the app go offline, did production stop, or is roof work coming up? Keep your system information and recent monitoring records handy. The team can review the service options that fit your situation.</p><p><a href="{url('/services')}">See all current services</a> or <a href="{url('/membership')}">compare membership options</a>.</p></div><div><h3>Not seeing your city?</h3><p>The guide directory is not a service boundary. Ask about your full address, including nearby communities and places not yet listed.</p>{action(None,'Check my address')}</div></div></section>'''
    items=[('Home','/'),('Service areas','/service-areas/')]+([(name,path)] if state else [])
    structured=schema(path,title,items,is_collection=True)
    structured['@graph'].append({'@type':'ItemList','itemListElement':[{'@type':'ListItem','position':i+1,'name':c['name']+', '+c['state_code'],'url':url(city_path(c))} for i,c in enumerate(sorted(cities,key=lambda x:(x['state'],x['name']))) ]})
    return document(path,title,description,body,structured,True),body,title,description

class Markdown(HTMLParser):
    def __init__(self):super().__init__();self.parts=[];self.skip=0;self.href=None
    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if tag in ('script','style'):self.skip+=1
        if self.skip:return
        if tag in ('section','div','p','nav','aside','figure','details','ul','ol','table','tr'):self.parts.append('\n\n')
        if tag in ('h1','h2','h3'):self.parts.append('\n\n'+'#'*int(tag[1])+' ')
        if tag=='li':self.parts.append('\n- ')
        if tag=='summary':self.parts.append('\n\n### ')
        if tag=='a':self.href=attrs.get('href');self.parts.append('[')
        if tag in ('th','td'):self.parts.append(' | ')
        if tag=='br':self.parts.append('\n')
    def handle_endtag(self,tag):
        if tag in ('script','style'):self.skip-=1;return
        if self.skip:return
        if tag=='a':
            href=self.href or '';href=url(href) if href.startswith('/') else href
            self.parts.append(']('+href+')');self.href=None
        if tag in ('p','h1','h2','h3','summary','li','tr','section','aside'):self.parts.append('\n\n')
    def handle_data(self,data):
        if not self.skip:self.parts.append(data)
    def output(self):return re.sub(r'\n[ \t]*\n(?:[ \t]*\n)+','\n\n',''.join(self.parts)).strip()+'\n'
def markdown(body,title,path):
    parser=Markdown();parser.feed(body)
    return f'# {title}\n\nCanonical page: {url(path)}\n\n'+parser.output()+f'\n## Contact\n\n{SITE["coverage_statement"]}\n\nPhone: {SITE["phone_display"]}\nEmail: {SITE["email"]}\nDenver office: {SITE["address"]}\n'
def sitemap(paths):
    return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+''.join(f'  <url><loc>{xml_escape(url(p))}</loc></url>\n' for p in paths)+'</urlset>\n'

def main():
    OUT.mkdir(exist_ok=True);assets=OUT/'geo-assets';assets.mkdir(exist_ok=True)
    shutil.copyfile(ROOT/'src/style.css',assets/'service-areas.css');shutil.copyfile(ROOT/'src/directory.js',assets/'directory.js')
    # Reuse the images the React site already ships rather than a second retained copy.
    for name,source in [('logo.png',OUT/'logo.png'),('solar-array.jpg',OUT/'Images/best3.jpg')]:
        if not source.exists():raise FileNotFoundError(source)
        shutil.copyfile(source,assets/name)
    inventory=[];review=[];allpaths=[]
    for c in CITIES:
        page,body,title,description=city_page(c);path=city_path(c)
        write(path+'index.html',page);write(path+'index.md',markdown(body,title,path));allpaths.append(path)
        inventory.append({'type':'city','name':c['name'],'state':c['state_code'],'path':path,'canonical':url(path),'title':title,'description':description,'population_2025':c['population_2025'],'solar_data':True,'local_government_link':c['geoid'] in RESOURCES})
        # Use real production links for navigation inside the offline review.
        preview=re.sub(r'href="(/service-areas/[^\"]*)"',lambda m:'href="'+url(m.group(1))+'"',body)
        review.append({'name':c['name']+', '+c['state_code'],'path':path,'body':preview,'title':title})
    bystate=defaultdict(list)
    for c in CITIES:bystate[c['state_code']].append(c)
    for code,group in sorted(bystate.items()):
        page,body,title,description=directory_page(group,group[0]);path=state_path(group[0]);write(path+'index.html',page);write(path+'index.md',markdown(body,title,path));allpaths.append(path)
        inventory.append({'type':'state','name':STATES[code],'state':code,'path':path,'canonical':url(path),'title':title,'description':description})
    page,body,title,description=directory_page(CITIES);path='/service-areas/';write(path+'index.html',page);write(path+'index.md',markdown(body,title,path));allpaths.insert(0,path)
    inventory.insert(0,{'type':'national','name':'United States','path':path,'canonical':url(path),'title':title,'description':description})
    # sitemaps/core.xml is generated from the React route data by scripts/generate-sitemap.js.
    write('/sitemaps/service-areas.xml',sitemap(allpaths))
    write('/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+''.join(f'  <sitemap><loc>{url(p)}</loc></sitemap>\n' for p in ['/sitemaps/core.xml','/sitemaps/service-areas.xml'])+'</sitemapindex>\n')
    write('/robots.txt',f'# Search and AI discovery. Keep any required existing private-path rules when merging.\nUser-agent: *\nAllow: /\n\nSitemap: {url("/sitemap.xml")}\n')
    llms=f'''# Save Our Solar Club

> Residential solar maintenance, repair coordination, monitoring, and dispatch support through a nationwide network of solar professionals.

Save Our Solar Club is operated by SaveOurSolar LTD. Its listed office is {SITE['address']}. Phone: {SITE['phone_display']}. Email: {SITE['email']}.

The company describes a nationwide network. City pages describe service inquiries and homeowner guidance, not local branch offices. Address coverage, technician availability, compatible equipment, costs, and visit timing are confirmed by the team. A 24/7 dispatch line is not a guarantee of a same-day on-site visit. Membership terms and fees are on the current membership page.

## Core pages

- [Home]({url('/')}): Company overview.
- [Services]({url('/services')}): Current maintenance, repairs, monitoring, roofing, and detach/reset offerings.
- [Membership]({url('/membership')}): Current plans, pricing, and terms to review with the team.
- [Insurance]({url('/insurance')}): Storm and loss-damage inspection and claim support.
- [Insights]({url('/insights')}): Homeowner guides on solar maintenance and repairs.
- [Contact]({url('/contact')}): Inspection and service inquiries.
- [About]({url('/about')}): Company and network information.

## Service areas

- [National directory]({url('/service-areas/')}): Browse {len(CITIES)} city guides across all 50 states and Washington, D.C.
- [City page index]({url('/service-areas/llms.txt')}): Links to every city guide.
- [Plain-text directory]({url('/service-areas/index.md')}): Readable directory content.
- [Service-area sitemap]({url('/sitemaps/service-areas.xml')}): Canonical national, state, and city URLs.

City pages have matching index.md versions. These mirrors contain the same homeowner guidance and are supplementary to the HTML pages.

## Local solar data

City guides include NASA POWER 2001–2020 regional solar climatology for the 1° grid containing each city’s Census representative point. Values are sunlight on a horizontal surface, in kWh/m²/day. They are not actual electricity production, rooftop measurements, current weather, savings projections, or guarantees. Nearby cities may share a regional grid. Government resource links do not imply endorsement or affiliation.

## Legal pages

- [Privacy]({url('/privacy-policy')})
- [Terms]({url('/terms-conditions')})
'''
    write('/llms.txt',llms)
    write('/service-areas/llms.txt','# Save Our Solar Club city guides\n\n> A browseable directory of solar service inquiries and local solar context. Address-level availability is confirmed with the company.\n\n## City pages\n\n'+'\n'.join(f'- [{c["name"]}, {c["state_code"]}]({url(city_path(c))}): Solar repair, maintenance, monitoring, and regional seasonality. [Markdown]({url(city_path(c)+"index.md")})' for c in sorted(CITIES,key=lambda c:(c['state'],c['name'])))+'\n')
    (ROOT/'data/page-inventory.json').write_text(json.dumps(inventory,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
    make_review(review)
    print(json.dumps({'city_pages':len(CITIES),'state_pages':len(bystate),'national_pages':1,'html_pages':len(allpaths),'local_government_links':len(RESOURCES),'output':str(OUT)},indent=2))

def make_review(pages):
    pages.sort(key=lambda x:x['name']);default=next((i for i,x in enumerate(pages) if x['name']=='Denver, CO'),0)
    options=''.join(f'<option value="{i}" {"selected" if i==default else ""}>{e(x["name"])}</option>' for i,x in enumerate(pages))
    css=(ROOT/'src/style.css').read_text(encoding='utf-8');logo='data:image/png;base64,'+base64.b64encode((OUT/'logo.png').read_bytes()).decode()
    shell=header().replace('/geo-assets/logo.png',logo).replace('href="/service-areas/"','href="'+url('/service-areas/')+'"')
    payload=json.dumps(pages,ensure_ascii=False).replace('</','<\\/')
    output=f'''<!doctype html><html lang="en-US"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Save Our Solar Club — {len(pages)} City Page Review</title><style>{css}</style></head><body><div class="review-bar"><strong>{len(pages)} CITY PAGES · OFFLINE REVIEW</strong><label for="review-city">Preview a city</label><select id="review-city">{options}</select><span>Not published. Calls and contact buttons use the existing website.</span></div>{shell}<main id="main">{pages[default]['body']}</main>{footer()}<script>const pages={payload};const selector=document.getElementById('review-city');selector.addEventListener('change',()=>{{const item=pages[Number(selector.value)];document.getElementById('main').innerHTML=item.body;document.title=item.title+' — Review';}});</script></body></html>'''
    (ROOT/'SaveOurSolar-City-Pages-Review.html').write_text(output,encoding='utf-8')

if __name__=='__main__':main()
