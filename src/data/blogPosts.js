// Insights blog content. Posts are dated weekly (roughly) from early August through the
// current date. Topics are chosen to map directly onto existing service pages (see
// ./serviceDetails.js and ./serviceItems.js) for internal linking and topical SEO/AEO
// coverage — each post targets a specific question homeowners search for.
//
// Content rules match the rest of the site: no invented company-specific stats, no
// fabricated testimonials, no specific phone numbers or service-area cities beyond the
// confirmed Denver location, no mention of new panel installs, and no tier-specific
// pricing. General industry facts (typical warranty lengths, panel degradation ranges,
// etc.) are stated as widely-known generalities ("most manufacturers," "typically"),
// not company-specific claims.
//
// Each post includes a `quickAnswer` (shown in a highlighted box right under the hero,
// written to directly answer the title — good for AI answer engines and featured
// snippets) and `faqs` (rendered with FAQPage schema for the same reason).
export const BLOG_POSTS = [
  {
    slug: "how-often-should-you-inspect-solar-panels",
    date: "2026-08-03",
    category: "Maintenance",
    title: "How Often Should You Get Your Solar Panels Inspected?",
    excerpt:
      "Most manufacturers recommend at least one full inspection a year. Here's what an inspection actually checks and why the schedule matters.",
    quickAnswer:
      "Most solar manufacturers and installers recommend a full system inspection at least once a year. Regular inspections catch small issues — loose connections, worn seals, early signs of wear — before they turn into costly repairs or lost energy production.",
    sections: [
      {
        heading: "Why Inspection Frequency Matters",
        paragraphs: [
          "Solar systems are largely passive once installed, which can create a false sense of set-it-and-forget-it. But panels, wiring, and mounting hardware are exposed to sun, wind, and temperature swings year-round, and small issues develop gradually rather than announcing themselves.",
          "A consistent inspection schedule is what turns those small issues into a quick fix instead of a major repair — or a warranty claim that gets denied because the problem went undocumented for too long.",
        ],
      },
      {
        heading: "What a Typical Inspection Covers",
        paragraphs: [
          "A full inspection generally checks the physical condition of your panels, the wiring and connectors linking them together, and the racking and mounting hardware securing everything to your roof. It also usually includes a performance check comparing your system's actual output to what it should be producing.",
          "The visit typically ends with a written summary of what was found and, if anything needs attention, a clear recommendation for next steps.",
        ],
      },
      {
        heading: "Signs You Might Need an Inspection Sooner",
        paragraphs: [
          "A few situations are worth an inspection outside your regular annual schedule: after a significant storm, if your monitoring app shows an unexplained drop in production, after any roof work near your array, or simply if it's been more than a year since your system was last checked.",
        ],
      },
      {
        heading: "What Happens If You Skip Inspections",
        paragraphs: [
          "Skipping inspections doesn't usually cause an immediate problem — that's exactly what makes it easy to put off. The real cost shows up gradually, in slowly declining production you never notice, and in a service history gap that can complicate a warranty or insurance claim down the road.",
        ],
      },
    ],
    faqs: [
      {
        q: "How often should solar panels be inspected?",
        a: "Most systems benefit from at least one full inspection per year, with additional checks after major storms or if you notice a drop in production.",
      },
      {
        q: "Can I inspect my solar panels myself?",
        a: "A visual check from the ground for obvious debris or damage is fine, but the electrical components should only be inspected by a qualified technician.",
      },
      {
        q: "Does inspection frequency affect my warranty?",
        a: "Some manufacturer warranties require documented maintenance to remain valid, so regular, recorded inspections can also help protect your coverage.",
      },
    ],
    related: { slug: "solar-maintenance", itemSlug: "annual-inspections", label: "Annual Solar Inspections" },
  },
  {
    slug: "do-solar-panels-need-cleaning",
    date: "2026-08-09",
    category: "Maintenance",
    title: "Do Solar Panels Need Cleaning? What Homeowners Should Know",
    excerpt:
      "Dust and pollen build up faster than rain can wash it away in a dry climate. Here's how much it actually affects your system.",
    quickAnswer:
      "Yes — dirt, pollen, and debris can reduce how much sunlight your panels convert into energy, and in a dry climate, buildup can accumulate steadily between rain events. Professional cleaning restores your panels' full output without risking damage to the glass or coating.",
    sections: [
      {
        heading: "Why Panels Get Dirty",
        paragraphs: [
          "Panels sit outside year-round, collecting dust, pollen, and the occasional bird debris. In drier climates especially, rain doesn't fall often enough or hard enough to fully rinse a panel clean, so buildup accumulates steadily over weeks and months.",
        ],
      },
      {
        heading: "How Much Cleaning Actually Affects Production",
        paragraphs: [
          "Even a light, even layer of dust can measurably reduce how much sunlight reaches your panel's cells. Uneven soiling — a streak of bird droppings or a pile of leaves in one corner — can be worse, since it can partially shade individual cells and affect a wider portion of your system's output than the dirt itself would suggest.",
        ],
      },
      {
        heading: "DIY Cleaning vs Professional Cleaning",
        paragraphs: [
          "It's tempting to hose panels off yourself, but there's real risk involved — working at height on a roof, using the wrong cleaning tools or chemicals that can scratch the glass or damage the coating, or even affecting your warranty if the manufacturer specifies approved cleaning methods.",
          "Professional cleaning uses methods safe for your specific panel type and gets the job done without you needing to get on the roof.",
        ],
      },
      {
        heading: "How Often Panels Should Be Cleaned",
        paragraphs: [
          "How often cleaning makes sense depends on your local environment — pollen season, nearby trees, dust, and how much rain your area gets. For most homeowners, cleaning fits naturally into an annual maintenance visit, with more frequent cleaning worth considering if you notice visible buildup or a production dip.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does rain clean solar panels?",
        a: "Rain helps, but it doesn't remove everything — especially caked-on dust, pollen, or bird droppings, which often need a proper cleaning to fully clear.",
      },
      {
        q: "Can dirty panels damage my system?",
        a: "Dirt itself usually doesn't damage panels, but it reduces output over time, and uneven soiling can create shading effects that impact performance more than the dirt alone would suggest.",
      },
      {
        q: "Is professional cleaning included in a membership?",
        a: "Professional panel cleaning is covered under Save Our Solar Club membership plans — see the membership page for details.",
      },
    ],
    related: { slug: "solar-maintenance", itemSlug: "panel-cleaning", label: "Professional Panel Cleaning" },
  },
  {
    slug: "signs-your-solar-inverter-is-failing",
    date: "2026-08-16",
    category: "Repairs",
    title: "Signs Your Solar Inverter Is Failing (And What to Do About It)",
    excerpt:
      "A sudden production drop, error codes, or a blank monitoring app are all worth paying attention to. Here's what to watch for.",
    quickAnswer:
      "Common warning signs of a failing inverter include a sudden drop in energy production, error codes or warning lights on the unit itself, unusual noise, or your monitoring app showing zero output from part of your system. If you notice any of these, it's worth having a technician take a look before the issue spreads.",
    sections: [
      {
        heading: "Why the Inverter Matters",
        paragraphs: [
          "Your panels generate DC power, but your home runs on AC — the inverter is what makes that conversion possible. It's one of the most active components in your entire system, which also makes it one of the more common points of failure over a system's lifetime.",
        ],
      },
      {
        heading: "Common Warning Signs",
        paragraphs: [
          "Keep an eye out for a sudden or unexplained drop in production, error codes or blinking warning lights on the inverter itself, unusual humming or buzzing noise, or your monitoring app showing no data at all from your system or part of it.",
        ],
      },
      {
        heading: "String vs Microinverter Failures",
        paragraphs: [
          "The impact of a failure depends on your system's setup. A failed microinverter typically affects just the one panel it's attached to, since each one operates independently. A failed string inverter is a bigger deal — it can take an entire section of your array offline at once, since one string inverter serves multiple panels.",
        ],
      },
      {
        heading: "What to Do If You Suspect a Failing Inverter",
        paragraphs: [
          "Don't wait it out. An inverter issue rarely resolves itself, and the longer it goes unaddressed, the more production you lose. Scheduling a diagnostic visit lets a technician confirm what's actually wrong and whether it's a repair or a full replacement.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long do solar inverters typically last?",
        a: "Most inverters are built to last around 10 to 15 years, though this varies by type and manufacturer — string inverters and microinverters often have different expected lifespans.",
      },
      {
        q: "Can a failing inverter be repaired instead of replaced?",
        a: "Sometimes — it depends on what's actually wrong. A technician's diagnostic visit is the best way to know whether a repair or a full replacement makes more sense.",
      },
      {
        q: "Will my inverter warranty cover replacement?",
        a: "It depends on your manufacturer's warranty terms and whether the failure is a covered defect. Keeping your warranty documentation on hand makes this easier to sort out.",
      },
    ],
    related: { slug: "repairs", itemSlug: "string-inverter-replacement", label: "String Inverter Replacement" },
  },
  {
    slug: "solar-panels-during-roof-replacement",
    date: "2026-08-22",
    category: "Roofing",
    title: "What Happens to Your Solar Panels During a Roof Replacement?",
    excerpt:
      "A re-roof with existing solar means coordinating panel removal and reinstallation around the roofing work. Here's how that process works.",
    quickAnswer:
      "When it's time to replace your roof, your solar panels need to be safely removed before roofing work begins and properly reinstalled once it's done — a process often called a solar detach-and-reset. Coordinating this between your roofer and a solar technician keeps both your roof and your system protected.",
    sections: [
      {
        heading: "Why You Can't Just Roof Around Your Panels",
        paragraphs: [
          "Roofing crews need full access to the roof deck to do the work correctly, and panels, racking, and wiring are all in the way. Trying to work around an installed array risks damaging the panels, the roof, or both — and it's simply not how a proper re-roof gets done.",
        ],
      },
      {
        heading: "The Detach-and-Reset Process",
        paragraphs: [
          "The process typically starts with safely removing the panels, followed by removing the racking and mounting hardware so the roofing crew has a clear deck to work on. Once the new roof is complete, the panels go back up, get reconnected, and the system is tested to confirm everything is working as it should.",
        ],
      },
      {
        heading: "Coordinating Between Your Roofer and Solar Technician",
        paragraphs: [
          "This is where projects tend to go sideways — two separate contractors on two separate schedules, with no one owning the handoff between them. Having your solar technician coordinate directly with your roofer keeps both sides of the project moving without unnecessary delays.",
        ],
      },
      {
        heading: "What to Ask Before You Start",
        paragraphs: [
          "Before scheduling a re-roof, confirm who's handling panel removal and reinstallation, how the timeline lines up with your roofer's schedule, and whether the system will be tested and documented after it goes back up.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need to remove solar panels for a roof replacement?",
        a: "In almost all cases, yes — the roofing crew needs clear access to the roof deck, so panels are removed before work begins and reinstalled once it's done.",
      },
      {
        q: "Who removes solar panels for a re-roof, the roofer or the solar company?",
        a: "Typically a solar technician handles panel removal and reinstallation, not the roofing crew, since it involves electrical components and manufacturer-specific procedures.",
      },
      {
        q: "Will removing and reinstalling panels affect their performance?",
        a: "If done properly by a trained technician, no. Recommissioning and testing after reinstallation confirms the system is producing power the way it did before removal.",
      },
    ],
    related: { slug: "detach-and-reset", itemSlug: null, label: "Detach-and-Reset" },
  },
  {
    slug: "solar-panel-warranties-explained",
    date: "2026-08-28",
    category: "Ownership",
    title: "Solar Panel Warranties Explained: What's Actually Covered",
    excerpt:
      "Most systems carry more than one warranty, and they don't all cover the same things. Here's how to tell them apart.",
    quickAnswer:
      "Most solar systems come with more than one warranty — typically a product warranty covering equipment defects and a performance warranty guaranteeing a minimum energy output over time. Coverage varies significantly by manufacturer and installer, and many warranties require documented maintenance to stay valid.",
    sections: [
      {
        heading: "The Two (or Three) Types of Solar Warranties",
        paragraphs: [
          "A product or equipment warranty covers defects in the panels, inverter, or other hardware. A performance or power warranty guarantees your panels won't degrade below a certain output threshold for a set number of years — many manufacturers offer 20 to 25 years on this one. Some installations also carry a separate workmanship warranty from the installer, covering the quality of the installation itself.",
        ],
      },
      {
        heading: "What's Typically Covered",
        paragraphs: [
          "Generally: manufacturing defects, equipment that fails to perform as specified, and — under a performance warranty — output that drops below the guaranteed threshold due to normal panel degradation.",
        ],
      },
      {
        heading: "What's Typically Not Covered",
        paragraphs: [
          "Most warranties exclude damage from storms, neglect, or unauthorized repairs, along with normal cosmetic wear. Storm and weather damage is usually a matter for your homeowners insurance, not your equipment warranty.",
        ],
      },
      {
        heading: "How to Keep Your Warranty Valid",
        paragraphs: [
          "Keep your documentation organized, maintain a record of inspections and service visits, and avoid unauthorized repairs on covered components. Many manufacturers specifically require proof of maintenance to honor a claim, which is exactly the kind of paperwork that's easy to lose track of over a decade or two.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long do solar panel warranties last?",
        a: "Many manufacturers offer 20 to 25 year performance warranties, with product warranties on hardware ranging more widely depending on the manufacturer.",
      },
      {
        q: "Does a warranty cover storm damage?",
        a: "Generally no — storm and weather damage is typically a homeowners insurance matter, not something covered under a manufacturer's equipment warranty.",
      },
      {
        q: "What voids a solar panel warranty?",
        a: "Common causes include unauthorized repairs, missing maintenance documentation, and improper installation or modification by someone other than a qualified technician.",
      },
    ],
    related: {
      slug: "professional-services",
      itemSlug: "warranty-registration-assistance",
      label: "Warranty Registration Assistance",
    },
  },
  {
    slug: "does-homeowners-insurance-cover-solar-panel-damage",
    date: "2026-09-04",
    category: "Insurance",
    title: "Does Homeowners Insurance Cover Solar Panel Damage?",
    excerpt:
      "Roof-mounted panels are usually covered the same way your roof is. Here's what that means after a storm.",
    quickAnswer:
      "In most cases, yes — solar panels mounted on your roof are typically covered under your homeowners insurance policy the same way your roof is, especially for damage from storms, hail, or other covered perils. Coverage details vary by policy, so it's worth confirming with your insurer and keeping documentation of your system's condition.",
    sections: [
      {
        heading: "How Solar Panels Are Typically Insured",
        paragraphs: [
          "For most homeowners, roof-mounted solar panels are covered as part of your dwelling coverage, the same way the rest of your roof is. Ground-mounted systems can be treated differently by some insurers, so it's worth double-checking how your specific policy classifies your setup.",
        ],
      },
      {
        heading: "What's Usually Covered",
        paragraphs: [
          "Standard homeowners policies generally cover damage from the same perils that apply to the rest of your home — storms, hail, wind, and fire among them. The specifics depend on your policy, so it's worth reviewing your coverage with your insurer rather than assuming.",
        ],
      },
      {
        heading: "What Documentation You'll Need for a Claim",
        paragraphs: [
          "Insurers typically want clear photos of the damage, a written description of what happened, and often a professional repair estimate. Having this ready — and having a system that was already documented before the damage occurred — makes the claims process noticeably smoother.",
        ],
      },
      {
        heading: "Steps to Take After Storm Damage",
        paragraphs: [
          "Avoid touching or attempting to inspect damaged equipment yourself. Document what you can see from a safe distance, contact your insurer to start the claims process, and schedule a professional inspection so any less obvious damage gets caught too.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need special insurance for solar panels?",
        a: "Usually not — roof-mounted panels are typically covered under a standard homeowners policy, but it's worth confirming the details with your insurer.",
      },
      {
        q: "What should I do immediately after storm damage to my panels?",
        a: "Avoid touching the damaged equipment, document what you can safely see, and contact both your insurer and a solar technician for a proper inspection.",
      },
      {
        q: "Will my premium go up because I have solar panels?",
        a: "It can vary by insurer, since panels add to the insured value of your home — it's worth asking your provider directly when you add or already have solar.",
      },
    ],
    related: { slug: "insurance-services", itemSlug: "storm-loss-damage-inspection", label: "Storm and Loss Damage Inspection" },
  },
  {
    slug: "why-is-my-solar-system-underproducing",
    date: "2026-09-10",
    category: "Repairs",
    title: "Why Is My Solar System Producing Less Energy Than Expected?",
    excerpt:
      "It's usually one of a handful of causes — some seasonal and normal, others worth a technician's attention.",
    quickAnswer:
      "A drop in production usually comes down to one of a few causes: dirty or shaded panels, a failing inverter or optimizer, a wiring fault, or simply seasonal changes in sunlight. Comparing your system's current output to your monitoring app's historical data is the fastest way to tell whether it's a normal seasonal dip or something that needs a technician.",
    sections: [
      {
        heading: "Normal vs Abnormal Production Changes",
        paragraphs: [
          "Some production swings are completely expected — shorter days, lower sun angles, and more clouds in the winter months all reduce output naturally. What's worth paying attention to is a drop that doesn't match the season, or one that shows up suddenly rather than gradually.",
        ],
      },
      {
        heading: "Common Causes of Underproduction",
        paragraphs: [
          "The usual suspects are dirty or shaded panels, a failing inverter or optimizer, a wiring fault somewhere in the system, or even a connectivity issue that's just making your monitoring data look wrong without an actual production problem.",
        ],
      },
      {
        heading: "How to Use Your Monitoring Data to Diagnose the Issue",
        paragraphs: [
          "Start by comparing your current production to the same period last year, if your app has that history. If panel-level data is available, check whether the drop is isolated to one panel or affecting the whole system — that distinction alone can point toward the likely cause.",
        ],
      },
      {
        heading: "When to Call a Technician",
        paragraphs: [
          "If the drop doesn't match a seasonal pattern, persists for more than a few days, or comes with error codes on your inverter or monitoring app, it's time to get a technician involved rather than keep watching and waiting.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it normal for solar production to drop in winter?",
        a: "Yes — shorter days and a lower sun angle reduce output seasonally, and this is expected rather than a sign of a problem.",
      },
      {
        q: "How do I know if it's my panels or my inverter?",
        a: "Panel-level monitoring, where available, can isolate whether a drop affects a single panel or the whole system, which helps narrow down the likely cause.",
      },
      {
        q: "Can shading really make a big difference?",
        a: "Yes — even partial shading on one panel can affect output more broadly than you'd expect, depending on how your system is wired and configured.",
      },
    ],
    related: { slug: "repairs", itemSlug: "production-troubleshooting", label: "Production Troubleshooting" },
  },
  {
    slug: "how-to-read-your-solar-monitoring-app",
    date: "2026-09-16",
    category: "Monitoring",
    title: "How to Read Your Solar Monitoring App (And What the Numbers Mean)",
    excerpt:
      "A few key numbers tell you almost everything about how your system is performing — once you know what to look for.",
    quickAnswer:
      "Most solar monitoring apps show a few key numbers — current production, daily and monthly totals, and system status alerts — that together tell you whether your system is performing normally. Understanding what to watch for makes it much easier to catch a problem early instead of after months of lost production.",
    sections: [
      {
        heading: "The Key Metrics to Know",
        paragraphs: [
          "Most apps show current output in kilowatts (a real-time snapshot), along with daily, monthly, and lifetime totals in kilowatt-hours. Some platforms also show a performance ratio, comparing actual output to what your system is expected to produce under ideal conditions.",
        ],
      },
      {
        heading: "What Normal Looks Like",
        paragraphs: [
          "A typical daily production graph looks like a smooth curve — rising in the morning, peaking around midday, and tapering off in the evening. The exact shape and height of that curve will vary with weather and season, which is normal and expected.",
        ],
      },
      {
        heading: "Red Flags to Watch For",
        paragraphs: [
          "Watch for a flat line at zero during daylight hours, a sudden drop that doesn't match the weather, gaps in your data that suggest a connectivity issue, or any error alerts from the platform itself.",
        ],
      },
      {
        heading: "Setting Up Alerts So You Don't Have to Check Manually",
        paragraphs: [
          "Most monitoring platforms let you configure alerts that flag a production drop automatically, so you're not relying on remembering to open the app. This turns monitoring from a manual habit into something that works in the background for you.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why does my app show no data?",
        a: "This is often a connectivity issue — your Wi-Fi or router — rather than an actual production problem, though it's worth having it checked if it persists.",
      },
      {
        q: "What's a normal daily production pattern?",
        a: "A smooth curve that rises in the morning, peaks midday, and falls in the evening, shaped by that day's weather and the season.",
      },
      {
        q: "Can I set up alerts for production drops?",
        a: "Yes — most monitoring platforms support this, and it's a straightforward way to catch issues early without checking the app yourself every day.",
      },
    ],
    related: { slug: "monitoring", itemSlug: "performance-alerts", label: "Performance Alerts" },
  },
  {
    slug: "should-you-add-battery-to-solar-system",
    date: "2026-09-23",
    category: "Upgrades",
    title: "Should You Add a Battery to Your Existing Solar System?",
    excerpt:
      "Backup power during outages and more control over your excess production are the two big reasons homeowners consider it.",
    quickAnswer:
      "Adding battery storage makes the most sense if you want backup power during outages or want to store excess energy your panels produce instead of sending it back to the grid. Whether it's worth it for you depends on your goals and how your existing system is set up — a consultation can help you weigh the options.",
    sections: [
      {
        heading: "What a Battery Actually Adds to Your System",
        paragraphs: [
          "A battery stores the excess energy your panels produce during the day instead of sending all of it back to the grid, and it can supply power to your home when the grid goes down. It's an addition to your existing system rather than a replacement for anything.",
        ],
      },
      {
        heading: "Signs a Battery Might Be Worth It for You",
        paragraphs: [
          "If you experience frequent power outages, want more energy independence, or your system regularly produces more than your home uses during the day, a battery is worth a closer look.",
        ],
      },
      {
        heading: "How Battery Storage Integrates With an Existing System",
        paragraphs: [
          "Compatibility depends on your current equipment — particularly your inverter. A technician can assess your existing setup and confirm what's needed to add storage cleanly, without redesigning your whole system.",
        ],
      },
      {
        heading: "Questions to Ask Before You Upgrade",
        paragraphs: [
          "Think through how much backup capacity you actually need, whether your current inverter supports the battery you're considering, and what your goals are — backup power, energy independence, or both.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I add a battery to my existing solar system?",
        a: "In most cases, yes, though compatibility depends on your existing equipment, particularly your inverter.",
      },
      {
        q: "Does a battery let my home run during a power outage?",
        a: "Yes, when properly configured for backup — depending on the battery's size, it can power select essential circuits or more of your home.",
      },
      {
        q: "Is a battery a good investment for every solar homeowner?",
        a: "It depends on your energy goals and how your system is set up — it's not a one-size-fits-all upgrade, which is why a consultation is worth having first.",
      },
    ],
    related: { slug: "upgrades", itemSlug: "battery-storage-add-on", label: "Battery Storage Add-On" },
  },
  {
    slug: "what-is-a-solar-maintenance-membership",
    date: "2026-09-29",
    category: "Membership",
    title: "What Is a Solar Maintenance Membership, and Do You Need One?",
    excerpt:
      "Bundling inspections, cleaning, monitoring support, and repair dispatch into one plan instead of paying per visit.",
    quickAnswer:
      "A solar maintenance membership bundles the ongoing care your system needs — inspections, cleaning, monitoring support, and repair dispatch — into one predictable plan instead of paying for each service separately. It's worth considering if you'd rather have your system proactively maintained than wait until something breaks.",
    sections: [
      {
        heading: "Why Solar Systems Need Ongoing Care",
        paragraphs: [
          "A solar system isn't fully maintenance-free — panels get dirty, hardware wears, and components eventually fail. Left unmanaged, small issues compound into bigger ones, quietly costing you energy production along the way.",
        ],
      },
      {
        heading: "What's Typically Included in a Membership",
        paragraphs: [
          "A membership generally bundles the recurring work a system needs — inspections, cleaning, monitoring support, and priority dispatch if something needs repair — into one ongoing plan. Exact inclusions vary by plan, so it's worth reviewing the membership page for the specifics of each tier.",
        ],
      },
      {
        heading: "Membership vs Paying As You Go",
        paragraphs: [
          "Paying per visit works fine if you're comfortable managing your own maintenance schedule and don't mind a wait when something breaks. A membership trades that for predictability — a set plan, and priority when you need a technician.",
        ],
      },
      {
        heading: "How to Decide if It's Right for You",
        paragraphs: [
          "Consider how your system is aging, whether you already have a maintenance routine in place, and how hands-on you want to be about tracking inspections, cleaning, and repairs yourself.",
        ],
      },
    ],
    faqs: [
      {
        q: "What does a solar membership typically cover?",
        a: "Generally inspections, cleaning, monitoring support, and discounted or prioritized repair service — see the membership page for what's included in each specific plan.",
      },
      {
        q: "Is a membership worth it if my system is new?",
        a: "Even new systems benefit from monitoring and eventual maintenance, so it can still make sense, though the case tends to get stronger as a system ages.",
      },
      {
        q: "Can I cancel a solar maintenance membership?",
        a: "Contact us directly for the specific terms on your plan.",
      },
    ],
    related: { slug: null, itemSlug: null, label: "Membership Plans", to: "/membership" },
  },
];

export function getBlogPost(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getSortedBlogPosts() {
  return [...BLOG_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
}
