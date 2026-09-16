// Individual line-item pages nested under each service, e.g. /services/monitoring/data-logger-replacement.
// One entry per raw item in the confirmed category/subcategory lists in ./services.js.
//
// Fields:
// - blurb: one-sentence summary used as the hero subtitle and SEO description.
// - description: 2-sentence elaboration used in the "About this service" section.
// - whyItMatters: item-specific risk framing (distinct from the parent service's whyItMatters,
//   which is the more general category-level version shown on the parent /services/:slug page).
//
// All content here is generic and inferred directly from the item name — no invented stats,
// timeframes, model numbers, or claims not supportable from the confirmed item list.
export const SERVICE_ITEMS = [
  // Solar Maintenance — all 10 raw items from the maintenance-repairs category in services.js
  {
    parentSlug: "solar-maintenance",
    slug: "annual-inspections",
    name: "Annual Solar Inspections",
    blurb:
      "A full inspection of your system's panels, wiring, and mounting hardware to catch issues before they affect performance.",
    description:
      "A trained technician walks your full system top to bottom — panels, wiring, and mounting hardware — checking for wear, loose connections, or early signs of trouble. You'll get a summary of what was found and any follow-up recommended.",
    whyItMatters:
      "Small issues like a loose connector or worn seal are easy to miss from the ground, but they compound over time into bigger, costlier repairs.",
  },
  {
    parentSlug: "solar-maintenance",
    slug: "panel-cleaning",
    name: "Professional Panel Cleaning",
    blurb: "Removing dirt, debris, and buildup from your panels so they can produce at their full potential.",
    description:
      "We clear dirt, pollen, and other buildup off your panels using methods safe for the glass and coating. Clean panels convert more sunlight into usable power.",
    whyItMatters:
      "Buildup on panels blocks sunlight and can shade cells unevenly, quietly cutting into the energy production you're paying for.",
  },
  {
    parentSlug: "solar-maintenance",
    slug: "performance-verification",
    name: "Performance Verification",
    blurb: "Checking your system's actual output against its expected performance.",
    description:
      "We compare your system's actual energy output against what it's expected to produce, using monitoring data and on-site readings. This confirms whether your system is performing the way it should.",
    whyItMatters:
      "Without a real performance check, underproduction can go unnoticed for months, costing you the energy savings your system was installed to deliver.",
  },
  {
    parentSlug: "solar-maintenance",
    slug: "production-monitoring",
    name: "Production Monitoring",
    blurb: "Reviewing your system's energy production as part of a routine maintenance visit.",
    description:
      "As part of a maintenance visit, we review your system's production history and flag any irregular patterns. This is a manual check during your visit, separate from the ongoing automated monitoring covered under our Monitoring service.",
    whyItMatters:
      "A hands-on check during a maintenance visit can catch a production issue that automated alerts missed or that started between service visits.",
  },
  {
    parentSlug: "solar-maintenance",
    slug: "diagnostic-reports",
    name: "Diagnostic Reports",
    blurb: "A written report documenting your system's condition and performance after an inspection.",
    description:
      "After an inspection, we put our findings in writing — system condition, any issues found, and recommended next steps. This report becomes part of your permanent service record.",
    whyItMatters:
      "Documented diagnostics make it easier to track your system's history over time and support any future warranty or insurance conversations.",
  },
  {
    parentSlug: "solar-maintenance",
    slug: "system-optimization",
    name: "System Optimization",
    blurb: "Fine-tuning your system's settings and components to get the most out of its production.",
    description:
      "We review your system's settings and components — from inverter configuration to panel-level performance — and adjust what we can to improve output. This is done during a maintenance visit, not as a full system redesign.",
    whyItMatters:
      "A system running below its potential settings leaves usable energy production on the table year after year.",
  },
  {
    parentSlug: "solar-maintenance",
    slug: "preventative-maintenance",
    name: "Preventative Maintenance",
    blurb: "Routine checks aimed at catching small wear-and-tear issues before they become costly repairs.",
    description:
      "We proactively check the components most likely to wear over time — connections, seals, and mounting hardware — and address small issues before they grow. This is the routine work that keeps a system reliable long-term.",
    whyItMatters:
      "Preventative care catches wear-and-tear problems while they're still simple, inexpensive fixes instead of major repairs.",
  },
  {
    parentSlug: "solar-maintenance",
    slug: "warranty-documentation-support",
    name: "Warranty Documentation Support",
    blurb: "Keeping your equipment warranty paperwork organized and accessible when you need it.",
    description:
      "We help you organize and locate the manufacturer and installer warranty paperwork for your system's components. Having this on hand matters if you ever need to file a warranty claim.",
    whyItMatters:
      "Manufacturer warranties often require proof of maintenance or specific documentation — without it, a valid claim can be denied on a technicality.",
  },
  {
    parentSlug: "solar-maintenance",
    slug: "annual-photo-documentation",
    name: "Annual Photo Documentation",
    blurb: "Photographing your system each year to create a visual record of its condition over time.",
    description:
      "We photograph your system each year during your scheduled visit, creating a dated visual record of its condition. These photos become part of your service history.",
    whyItMatters:
      "Photo records make it easier to spot gradual changes over time and can support insurance or warranty claims if damage occurs later.",
  },
  {
    parentSlug: "solar-maintenance",
    slug: "service-history-tracking",
    name: "Service History Tracking",
    blurb: "Maintaining a record of every inspection and service visit performed on your system.",
    description:
      "Every inspection, repair, and maintenance visit is logged to your account, giving you a running record of everything done to your system. You can reference this history anytime.",
    whyItMatters:
      "A complete service history helps with warranty claims, insurance documentation, and gives a future buyer confidence if you sell your home.",
  },

  // Repairs — all 12 raw items from the maintenance-repairs category in services.js
  {
    parentSlug: "repairs",
    slug: "solar-panel-replacement",
    name: "Solar Panel Replacement",
    blurb: "Replacing a damaged or underperforming solar panel with a new one.",
    description:
      "When a panel is physically damaged or has failed and can't be repaired, we remove it and install a replacement. We reconnect and test the panel to confirm it's producing correctly.",
    whyItMatters:
      "A single failed panel can drag down the output of an entire string, so replacing it quickly protects the rest of your system's performance.",
  },
  {
    parentSlug: "repairs",
    slug: "cell-card-replacement",
    name: "Cell Card Replacement",
    blurb: "Replacing a faulty cell card to restore a panel's full output.",
    description:
      "If a panel's internal cell card fails, we replace the component rather than the whole panel where possible. This restores the panel's output without a full panel replacement.",
    whyItMatters:
      "A failed cell card can silently reduce a panel's output for a long time before it's noticed without a technician's diagnosis.",
  },
  {
    parentSlug: "repairs",
    slug: "microinverter-replacement",
    name: "Microinverter Replacement",
    blurb: "Replacing a failed microinverter so its panel can produce power again.",
    description:
      "We swap out a failed microinverter so its connected panel can resume converting power correctly. Microinverters are tested individually, so a failure typically affects just one panel.",
    whyItMatters:
      "Because each microinverter serves a single panel, a failure is easy to overlook if you're not watching panel-level production closely.",
  },
  {
    parentSlug: "repairs",
    slug: "string-inverter-replacement",
    name: "String Inverter Replacement",
    blurb: "Replacing a failed string inverter to restore power conversion for your system.",
    description:
      "When a string inverter fails, we replace it to restore power conversion for the panels connected to that string. This is a larger-impact repair since one inverter serves multiple panels.",
    whyItMatters:
      "A failed string inverter can take an entire section of your array offline at once, making it one of the more urgent repairs to address.",
  },
  {
    parentSlug: "repairs",
    slug: "optimizer-replacement",
    name: "Optimizer Replacement",
    blurb: "Replacing a failed power optimizer to restore panel-level performance.",
    description:
      "We replace a failed power optimizer to restore panel-level performance tracking and output for that panel. Optimizers help maximize production on systems where they're installed.",
    whyItMatters:
      "A failed optimizer can limit a panel's output or throw off your monitoring data without an obvious cause.",
  },
  {
    parentSlug: "repairs",
    slug: "combiner-box-repairs",
    name: "Combiner Box Repairs",
    blurb: "Diagnosing and repairing faults inside your system's combiner box.",
    description:
      "We diagnose and repair issues inside your system's combiner box, where multiple strings of panels connect before reaching the inverter. This includes addressing loose connections, corrosion, or damaged components.",
    whyItMatters:
      "The combiner box is a central point in your system's wiring — a fault there can affect multiple strings of panels at once.",
  },
  {
    parentSlug: "repairs",
    slug: "disconnect-replacement",
    name: "Disconnect Replacement",
    blurb: "Replacing a faulty disconnect switch to keep your system safe to service.",
    description:
      "We replace a faulty disconnect switch, which is required for safely isolating your system during service or an emergency. A working disconnect is essential equipment, not optional hardware.",
    whyItMatters:
      "A failed disconnect can prevent your system from being safely shut off when it needs to be, which is a safety issue as much as a performance one.",
  },
  {
    parentSlug: "repairs",
    slug: "wiring-mc4-connector-repairs",
    name: "Wiring and MC4 Connector Repairs",
    blurb: "Fixing damaged wiring and MC4 connectors that can cause power loss or safety hazards.",
    description:
      "We repair or replace damaged wiring and MC4 connectors, which link panels together and to the rest of your system. Corroded or loose connectors are a common source of intermittent power loss.",
    whyItMatters:
      "Faulty connectors can cause arcing or intermittent faults, which are both a performance issue and, left unaddressed, a fire risk.",
  },
  {
    parentSlug: "repairs",
    slug: "junction-box-repairs",
    name: "Junction Box Repairs",
    blurb: "Repairing damage inside a junction box that's affecting your system's wiring connections.",
    description:
      "We repair damage inside a junction box that's affecting your system's wiring connections. This often involves addressing water intrusion, corrosion, or loose terminals.",
    whyItMatters:
      "Junction box issues are often hidden until they cause a noticeable drop in production or an intermittent fault.",
  },
  {
    parentSlug: "repairs",
    slug: "production-troubleshooting",
    name: "Production Troubleshooting",
    blurb: "Investigating the cause of an unexpected drop in your system's energy production.",
    description:
      "When your system's output doesn't match expectations, we investigate — checking wiring, components, shading, and monitoring data — to identify the cause. You'll get a clear explanation of what's going on and what it'll take to fix it.",
    whyItMatters:
      "Without a proper diagnosis, it's easy to keep losing energy production to a problem that's never actually identified.",
  },
  {
    parentSlug: "repairs",
    slug: "electrical-diagnostics",
    name: "Electrical Diagnostics",
    blurb: "Testing your system's electrical components to pinpoint the source of a fault.",
    description:
      "We test your system's electrical components — wiring, connections, and equipment — to pinpoint the source of a fault. This is often the first step before a repair can be scoped correctly.",
    whyItMatters:
      "Electrical issues in a solar array aren't always visible, and guessing at a fix without proper diagnostics can waste time and money.",
  },
  {
    parentSlug: "repairs",
    slug: "general-service-calls",
    name: "General Service Calls",
    blurb: "A technician visit to assess and address a system that isn't performing the way it should.",
    description:
      "If something about your system doesn't seem right, we'll send a technician to take a look, diagnose the issue, and recommend next steps. This is the starting point for most repair work.",
    whyItMatters:
      "Catching a problem early with a quick service call is almost always less costly than waiting until it becomes a bigger issue.",
  },

  // Roofing Coordination
  {
    parentSlug: "roofing-coordination",
    slug: "roof-inspections-under-panels",
    name: "Roof Inspections Underneath Installed Panels",
    blurb: "Checking the condition of your roof in the areas covered by your solar array.",
    description:
      "We check the condition of the roof surface in the areas covered by your solar array, looking for signs of wear, damage, or water intrusion. This is roof work coordinated around your existing panels, not a full roof inspection.",
    whyItMatters:
      "Roof problems under an array are easy to miss from the outside and can go unnoticed until they cause damage inside your home.",
  },
  {
    parentSlug: "roofing-coordination",
    slug: "minor-roof-repairs",
    name: "Minor Roof Repairs Around the Array",
    blurb: "Addressing small roof repairs near your panels without disrupting your solar system.",
    description:
      "We handle small roof repairs near your panels — things like minor leaks or damaged shingles — without needing to fully remove your solar system. This keeps repair work efficient and avoids unnecessary panel handling.",
    whyItMatters:
      "Small roof issues near an array are often left unaddressed because contractors are hesitant to work around panels, leaving the problem to get worse.",
  },
  {
    parentSlug: "roofing-coordination",
    slug: "flashing-sealant-replacement",
    name: "Flashing and Sealant Replacement",
    blurb: "Replacing worn flashing and sealant around panel mounts to keep your roof watertight.",
    description:
      "We replace worn flashing and sealant around your panel mounting points, which are common places for leaks to develop over time. This keeps the roof watertight where it's penetrated by mounting hardware.",
    whyItMatters:
      "Mounting points are one of the most common sources of roof leaks on a home with solar, since they penetrate the roofing material directly.",
  },
  {
    parentSlug: "roofing-coordination",
    slug: "full-re-roof-coordination",
    name: "Full Re-Roof Coordination",
    blurb: "Coordinating panel removal and reinstallation with your roofing contractor for a full re-roof.",
    description:
      "When it's time for a full re-roof, we coordinate panel removal and reinstallation with your roofing contractor so the project moves smoothly on both sides. We handle the solar portion while your roofer handles the roofing work.",
    whyItMatters:
      "Without coordination, a re-roof can turn into a scheduling and liability headache between two separate contractors who don't talk to each other.",
  },
  {
    parentSlug: "roofing-coordination",
    slug: "gutter-inspection-near-array",
    name: "Gutter Inspection Near the Array",
    blurb: "Checking gutters near your array for damage or blockages caused by roof and panel work.",
    description:
      "We check gutters near your array for damage, blockages, or debris that may result from panel installation or roof work. This is a quick check included as part of roofing-related visits.",
    whyItMatters:
      "Gutters near an array can collect debris differently than the rest of the roof, and blockages here can lead to water backing up under the roofline.",
  },

  // Detach-and-Reset
  {
    parentSlug: "detach-and-reset",
    slug: "panel-removal",
    name: "Panel Removal",
    blurb: "Safely removing panels from your roof ahead of roofing work or a system upgrade.",
    description:
      "We safely disconnect and remove your panels ahead of roof work or a system upgrade, following proper procedures to avoid damage to the panels or your roof. Removed panels are stored securely until they're ready to go back up.",
    whyItMatters:
      "Improper panel removal can crack cells, damage wiring, or void manufacturer warranties — this isn't a job for a general contractor.",
  },
  {
    parentSlug: "detach-and-reset",
    slug: "racking-mounting-removal",
    name: "Racking and Mounting Removal",
    blurb: "Removing racking and mounting hardware so roof work can proceed underneath.",
    description:
      "We remove the racking and mounting hardware that anchors your panels to the roof, clearing the way for roof work to proceed underneath. Hardware is inspected and reused or replaced as needed during reinstallation.",
    whyItMatters:
      "Racking and mounting hardware has to come off cleanly and safely to avoid roof damage and to go back on correctly.",
  },
  {
    parentSlug: "detach-and-reset",
    slug: "roofing-work-coordination",
    name: "Coordination With Your Roofing Work",
    blurb: "Scheduling panel removal and reinstallation around your roofer's timeline.",
    description:
      "We schedule panel removal and reinstallation around your roofer's timeline so the project stays on track without unnecessary delays. This keeps both teams working in sync.",
    whyItMatters:
      "Poor coordination between a roofer and solar technician is one of the most common causes of re-roof project delays.",
  },
  {
    parentSlug: "detach-and-reset",
    slug: "panel-reinstallation",
    name: "Panel Reinstallation",
    blurb: "Reinstalling your panels once roof work is complete.",
    description:
      "Once roof work is complete, we reinstall your panels, reconnect the wiring, and remount everything to the original configuration. We verify the reinstalled array matches its prior setup before moving to testing.",
    whyItMatters:
      "Reinstallation needs to be done correctly the first time — a rushed or improper reinstall can leave your system underperforming or unsafe.",
  },
  {
    parentSlug: "detach-and-reset",
    slug: "system-recommissioning-testing",
    name: "System Recommissioning and Testing",
    blurb: "Testing your system after reinstallation to confirm it's producing power safely and correctly.",
    description:
      "After reinstallation, we test your system to confirm it's producing power safely and at the level it was before removal. This includes checking connections, inverter function, and monitoring output.",
    whyItMatters:
      "Skipping recommissioning means you won't know if something was reconnected incorrectly until you notice a drop in production — or worse.",
  },

  // Monitoring
  {
    parentSlug: "monitoring",
    slug: "production-monitoring-setup",
    name: "Production Monitoring Setup",
    blurb: "Setting up monitoring so you can track how much energy your system is producing.",
    description:
      "We get your system's monitoring hardware and software up and running so you can track how much energy it's producing in real time. This is typically a one-time setup, done during install or as a standalone service.",
    whyItMatters:
      "Without monitoring set up correctly, you have no way of knowing whether your system is actually performing as expected.",
  },
  {
    parentSlug: "monitoring",
    slug: "app-portal-configuration",
    name: "App and Portal Configuration",
    blurb: "Getting your monitoring app or web portal configured and connected to your system.",
    description:
      "We configure your monitoring app or web portal so you have direct access to your system's production data. This includes account setup and connecting your login to your specific system.",
    whyItMatters:
      "An unconfigured or forgotten monitoring account means you're not actually watching your system's performance, even if the hardware is working.",
  },
  {
    parentSlug: "monitoring",
    slug: "performance-alerts",
    name: "Performance Alerts",
    blurb: "Configuring alerts that flag drops in production so issues get caught early.",
    description:
      "We set up alerts that notify you or our team when your system's production drops outside its expected range. This turns monitoring from something you have to check manually into something that flags problems for you.",
    whyItMatters:
      "Without alerts, a production drop can go unnoticed for weeks or months since most homeowners don't check their monitoring app daily.",
  },
  {
    parentSlug: "monitoring",
    slug: "wifi-connectivity-troubleshooting",
    name: "Wi-Fi and Connectivity Troubleshooting",
    blurb: "Fixing connectivity issues that are keeping your system's monitoring offline.",
    description:
      "If your system's monitoring has gone offline, we troubleshoot the connectivity issue — whether it's a Wi-Fi problem, a router change, or a hardware fault — to get your data reporting again. This is often a quick fix once the cause is identified.",
    whyItMatters:
      "A monitoring outage doesn't mean your system stopped producing — but it does mean you've lost visibility into whether it's working correctly.",
  },
  {
    parentSlug: "monitoring",
    slug: "data-logger-replacement",
    name: "Data Logger Replacement",
    blurb: "Replacing a failed data logger so your monitoring system keeps reporting accurately.",
    description:
      "When a data logger fails, we replace it to restore your system's ability to report production data. The logger is the piece of hardware responsible for sending your system's performance data to the monitoring platform.",
    whyItMatters:
      "A failed data logger cuts off your visibility into system performance even though the panels themselves may still be working fine.",
  },

  // Upgrades
  {
    parentSlug: "upgrades",
    slug: "battery-storage-add-on",
    name: "Battery Storage Add-On",
    blurb: "Adding battery storage to your existing solar system for backup power.",
    description:
      "We add battery storage to your existing solar system, giving you backup power and the ability to store excess energy your panels produce. The battery integrates with your current setup rather than requiring a new system.",
    whyItMatters:
      "Without storage, any excess energy your system produces goes unused or back to the grid instead of powering your home when you need it most.",
  },
  {
    parentSlug: "upgrades",
    slug: "panel-additions-array-expansion",
    name: "Panel Additions and Array Expansion",
    blurb: "Expanding your existing array with additional panels to increase production.",
    description:
      "We add panels to your existing array to increase your system's total production capacity. This is a good option if your energy needs have grown since your original installation.",
    whyItMatters:
      "As your household's energy use grows, your original system may no longer cover what you're actually using.",
  },
  {
    parentSlug: "upgrades",
    slug: "inverter-upgrades",
    name: "Inverter Upgrades",
    blurb: "Upgrading your inverter to improve performance or support an expanded system.",
    description:
      "We upgrade your inverter to support higher capacity, better performance, or new features, whether you're expanding your array or want to modernize existing equipment. This is a targeted upgrade to your system's power conversion equipment.",
    whyItMatters:
      "An outdated or undersized inverter can bottleneck the rest of your system, even if your panels are capable of more.",
  },
  {
    parentSlug: "upgrades",
    slug: "ev-charger-installation",
    name: "EV Charger Installation",
    blurb: "Installing an EV charger that works alongside your solar system.",
    description:
      "We install an EV charger that works alongside your existing solar system, so you can charge your vehicle using the energy your panels produce. This is coordinated with your system's existing capacity and wiring.",
    whyItMatters:
      "Adding an EV charger without accounting for your solar system's capacity can lead to inefficient charging or added strain on your home's electrical setup.",
  },
  {
    parentSlug: "upgrades",
    slug: "smart-energy-management-devices",
    name: "Smart Energy Management Devices",
    blurb: "Adding smart devices that help you manage and optimize your home's energy use.",
    description:
      "We install smart devices that help you monitor and control how your home uses energy alongside your solar production. These tools give you more visibility and control over your overall energy use.",
    whyItMatters:
      "Solar production and home energy use don't always line up perfectly — smart management tools help you get more value out of what your system produces.",
  },

  // Insurance Services
  {
    parentSlug: "insurance-services",
    slug: "storm-loss-damage-inspection",
    name: "Storm and Loss Damage Inspection",
    blurb: "Inspecting your system for damage after a storm or other loss event.",
    description:
      "After a storm or other loss event, we inspect your system for damage — checking panels, mounting hardware, and wiring for anything affected. This inspection forms the basis for any insurance claim you file.",
    whyItMatters:
      "Damage to a solar system isn't always visible from the ground, and an incomplete inspection can mean missed damage that goes unclaimed.",
  },
  {
    parentSlug: "insurance-services",
    slug: "documentation-photo-reports",
    name: "Documentation and Photo Reports",
    blurb: "Producing the documentation and photo reports insurers require to process a claim.",
    description:
      "We produce the documentation and photo reports your insurer needs to process a claim involving your solar system. This includes detailed photos and written descriptions of the damage found.",
    whyItMatters:
      "Insurance claims move faster, and are less likely to be underpaid, when they're backed by thorough, professional documentation.",
  },
  {
    parentSlug: "insurance-services",
    slug: "adjuster-coordination",
    name: "Adjuster Coordination",
    blurb: "Working directly with your insurance adjuster on your behalf.",
    description:
      "We work directly with your insurance adjuster, walking them through the damage and answering technical questions about your system. This takes the burden of translating technical detail off your shoulders.",
    whyItMatters:
      "Adjusters don't always have deep solar expertise, and having someone who does speak for your system's condition can help prevent a claim from being undervalued.",
  },
  {
    parentSlug: "insurance-services",
    slug: "claim-support",
    name: "Claim Support",
    blurb: "Guiding you through the insurance claims process for your solar system.",
    description:
      "We guide you through the insurance claims process for your solar system, from filing to resolution, so you know what to expect at each step. This includes helping you understand what your policy is likely to cover.",
    whyItMatters:
      "The claims process can be confusing to navigate alone, especially when solar equipment isn't something most adjusters see every day.",
  },
  {
    parentSlug: "insurance-services",
    slug: "repair-estimate-preparation",
    name: "Repair Estimate Preparation",
    blurb: "Preparing a detailed repair estimate to support your insurance claim.",
    description:
      "We prepare a detailed repair estimate for your damaged system, which your insurer will use to help determine your claim payout. This estimate reflects the actual scope of repair work needed.",
    whyItMatters:
      "An inaccurate or incomplete estimate can lead to a claim payout that doesn't actually cover the cost of getting your system repaired.",
  },

  // Home Energy Consulting
  {
    parentSlug: "home-energy-consulting",
    slug: "home-energy-audits",
    name: "Home Energy Audits",
    blurb: "Assessing your home's overall energy efficiency, beyond just your solar system.",
    description:
      "We assess your home's overall energy efficiency — not just your solar system — looking at where energy is being wasted. This gives you a fuller picture of your home's energy performance.",
    whyItMatters:
      "Solar panels only offset the energy you actually use — an inefficient home wastes a portion of what your system produces before it does any good.",
  },
  {
    parentSlug: "home-energy-consulting",
    slug: "attic-insulation-guidance",
    name: "Attic Insulation Guidance",
    blurb: "Advice on attic insulation improvements that reduce energy waste.",
    description:
      "We provide guidance on attic insulation improvements that can reduce the amount of energy your home loses through the roof. This is often one of the most impactful efficiency upgrades in an older home.",
    whyItMatters:
      "Poor attic insulation is one of the most common sources of energy loss in a home, working against the savings your solar system is meant to provide.",
  },
  {
    parentSlug: "home-energy-consulting",
    slug: "hvac-efficiency-checks",
    name: "HVAC Efficiency Checks",
    blurb: "Checking your HVAC system's efficiency and its impact on your energy bills.",
    description:
      "We check your HVAC system's efficiency and how it's affecting your overall energy bills. Heating and cooling are typically a home's largest energy expense.",
    whyItMatters:
      "An inefficient HVAC system can quietly offset a meaningful share of the savings your solar system generates.",
  },
  {
    parentSlug: "home-energy-consulting",
    slug: "smart-thermostat-installation",
    name: "Smart Thermostat Installation",
    blurb: "Installing a smart thermostat to help manage your home's energy use.",
    description:
      "We install a smart thermostat that helps you manage your home's heating and cooling more efficiently. This gives you more control over one of your home's biggest energy uses.",
    whyItMatters:
      "A smart thermostat helps align your energy use with your solar production, getting more value out of the power your system generates.",
  },
  {
    parentSlug: "home-energy-consulting",
    slug: "weatherization",
    name: "Weatherization",
    blurb: "Sealing and weatherizing your home to cut down on energy loss.",
    description:
      "We seal and weatherize your home — addressing drafts, gaps, and leaks — to cut down on energy loss. This complements your solar system by reducing the amount of energy your home needs in the first place.",
    whyItMatters:
      "A drafty home loses conditioned air constantly, working against the energy savings your solar investment is meant to deliver.",
  },

  // Products
  {
    parentSlug: "products",
    slug: "solar-panels",
    name: "Solar Panels",
    blurb: "Sourcing solar panels for repairs, replacements, or array expansions.",
    description:
      "We source solar panels for repairs, replacements, or array expansions, matching your existing system's specifications where possible. This helps new panels integrate properly with what's already installed.",
    whyItMatters:
      "Mismatched panel specifications can create compatibility issues and complicate future service on your system.",
  },
  {
    parentSlug: "products",
    slug: "inverters",
    name: "Inverters",
    blurb: "Sourcing inverters compatible with your existing system.",
    description:
      "We source inverters compatible with your existing system, whether you need a replacement or an upgrade. Getting the right inverter matters for both performance and long-term reliability.",
    whyItMatters:
      "An incompatible inverter can limit your system's performance or create issues that are difficult to diagnose later.",
  },
  {
    parentSlug: "products",
    slug: "battery-storage-systems",
    name: "Battery Storage Systems",
    blurb: "Sourcing battery storage systems that integrate with your solar setup.",
    description:
      "We source battery storage systems that integrate with your existing solar setup, giving you backup power and more control over your stored energy. We help match the battery to your system's actual capacity and needs.",
    whyItMatters:
      "A battery that isn't properly sized or matched to your system won't deliver the backup performance you're expecting.",
  },
  {
    parentSlug: "products",
    slug: "racking-mounting-hardware",
    name: "Racking and Mounting Hardware",
    blurb: "Sourcing racking and mounting hardware for repairs or expansions.",
    description:
      "We source racking and mounting hardware for repairs, expansions, or replacements, matched to your roof type and existing system. Proper hardware is essential to keeping your array secure.",
    whyItMatters:
      "Mismatched or substandard mounting hardware is a safety issue as much as a performance one — it's what keeps your panels attached to your roof.",
  },
  {
    parentSlug: "products",
    slug: "monitoring-hardware",
    name: "Monitoring Hardware",
    blurb: "Sourcing monitoring hardware and data loggers for your system.",
    description:
      "We source monitoring hardware and data loggers for your system, whether you're replacing a failed component or adding monitoring for the first time. This keeps your system's performance visible and trackable.",
    whyItMatters:
      "Without functioning monitoring hardware, you lose the ability to catch problems with your system before they become bigger issues.",
  },

  // Professional Services
  {
    parentSlug: "professional-services",
    slug: "system-design-consultation",
    name: "System Design Consultation",
    blurb: "Consulting on system design changes, additions, or upgrades.",
    description:
      "We consult on system design changes, additions, or upgrades, helping you understand your options before committing to a project. This is planning support, not a substitute for a formal engineering review where one is required.",
    whyItMatters:
      "Planning changes to your system without expert input can lead to compatibility issues or a design that doesn't fit your actual energy needs.",
  },
  {
    parentSlug: "professional-services",
    slug: "permitting-inspection-coordination",
    name: "Permitting and Inspection Coordination",
    blurb: "Coordinating the permitting and inspection process for solar-related work.",
    description:
      "We coordinate the permitting and inspection process for solar-related work, handling the paperwork and scheduling that comes with local requirements. This keeps your project compliant and on track.",
    whyItMatters:
      "Skipped or mishandled permitting can delay a project, create liability issues, or complicate things later if you sell your home.",
  },
  {
    parentSlug: "professional-services",
    slug: "hoa-documentation-support",
    name: "HOA Documentation Support",
    blurb: "Preparing the documentation homeowners need for HOA approval.",
    description:
      "We help prepare the documentation homeowners need to get solar-related work approved by their HOA. This includes the paperwork many HOAs require before work can begin.",
    whyItMatters:
      "Starting work without HOA approval can lead to fines or forced changes, even for work that's otherwise fully compliant.",
  },
  {
    parentSlug: "professional-services",
    slug: "warranty-registration-assistance",
    name: "Warranty Registration Assistance",
    blurb: "Helping you get equipment warranties properly registered.",
    description:
      "We help you get your equipment warranties properly registered with the manufacturer, which is often a required step to keep coverage valid. This is easy to overlook but important to have on record.",
    whyItMatters:
      "An unregistered warranty can be difficult or impossible to claim against later, even if the equipment itself is still covered.",
  },
  {
    parentSlug: "professional-services",
    slug: "system-valuation-home-sale",
    name: "System Valuation for Home Sale",
    blurb: "Providing a system valuation to support a home sale.",
    description:
      "We provide a system valuation to support a home sale, giving buyers and agents a clear picture of your solar system's condition and value. This documentation can help the sale process move more smoothly.",
    whyItMatters:
      "Buyers and their agents often have questions about a home's solar system — clear documentation can prevent it from becoming a sticking point in negotiations.",
  },
];

export function getServiceItems(parentSlug) {
  return SERVICE_ITEMS.filter((item) => item.parentSlug === parentSlug);
}

export function getServiceItem(parentSlug, slug) {
  return SERVICE_ITEMS.find((item) => item.parentSlug === parentSlug && item.slug === slug);
}
