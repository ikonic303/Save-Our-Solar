// Category order, groupings, and the Solar Maintenance & Repairs item list were confirmed
// by the client (2026-08-07). The item lists for Roofing Services, Solar Detach & Reset,
// and the five subcategories under "Additional Solar & Homeowner Services" are still DRAFT
// copy carried over from the original brief — not yet reconciled line-by-line against the
// client's full source doc. Replace/verify before launch.
//
// `icon` is a lucide-react icon name, mapped to a component in components/serviceIcons.js.
// The final category has no flat `items` list — instead it groups five `subcategories`,
// each rendered as its own subheading inside one combined accordion panel.
export const SERVICE_CATEGORIES = [
  {
    id: "monitoring",
    name: "Monitoring & Technology",
    icon: "Gauge",
    summary: "Stay informed with real-time visibility into system performance.",
    items: [
      "Production monitoring setup",
      "App & portal configuration",
      "Performance alerts",
      "Wi-Fi / connectivity troubleshooting",
      "Data logger replacement",
    ],
  },
  {
    id: "maintenance-repairs",
    name: "Solar Maintenance & Repairs",
    icon: "Wrench",
    summary: "Routine care and expert repair, all under one roof.",
    items: [
      "Annual solar inspections",
      "Professional panel cleaning",
      "Performance verification",
      "Production monitoring",
      "Diagnostic reports",
      "System optimization",
      "Preventative maintenance",
      "Warranty documentation support",
      "Annual photo documentation",
      "Service history tracking",
      "Solar panel replacement",
      "Cell card replacement",
      "Microinverter replacement",
      "String inverter replacement",
      "Optimizer replacement",
      "Combiner box repairs",
      "Disconnect replacement",
      "Wiring and MC4 connector repairs",
      "Junction box repairs",
      "Production troubleshooting",
      "Electrical diagnostics",
      "General service calls",
    ],
  },
  {
    id: "roofing",
    name: "Roofing Services",
    icon: "Home",
    summary: "Roof work coordinated around your existing solar array.",
    items: [
      "Roof inspection under panels",
      "Minor roof repairs",
      "Flashing & sealant replacement",
      "Full re-roof coordination",
      "Gutter inspection near array",
    ],
  },
  {
    id: "detach-reset",
    name: "Solar Detach & Reset",
    icon: "RefreshCw",
    summary: "Safe removal and reinstallation of panels for roof work or upgrades.",
    items: [
      "Panel removal",
      "Racking & mounting removal",
      "Roof work coordination",
      "Panel reinstallation",
      "System recommissioning & testing",
    ],
  },
  {
    id: "additional-services",
    name: "Additional Solar & Homeowner Services",
    icon: "LayoutGrid",
    summary: "Upgrades, insurance support, home energy services, products, and professional services — all in one place.",
    subcategories: [
      {
        id: "upgrades",
        name: "Upgrades",
        icon: "TrendingUp",
        items: [
          "Battery storage add-on",
          "Panel additions / array expansion",
          "Inverter upgrades",
          "EV charger installation",
          "Smart energy management devices",
        ],
      },
      {
        id: "insurance",
        name: "Insurance Services",
        icon: "ShieldCheck",
        summary: "Documentation and support when storms or damage strike.",
        items: [
          "Storm / loss damage inspection",
          "Documentation & photo reports",
          "Adjuster coordination",
          "Claim support",
          "Repair estimate preparation",
        ],
      },
      {
        id: "home-energy",
        name: "Home Energy Services",
        icon: "Flame",
        items: [
          "Home energy audits",
          "Attic insulation",
          "HVAC efficiency check",
          "Smart thermostat installation",
          "Weatherization",
        ],
      },
      {
        id: "products",
        name: "Products",
        icon: "Package",
        items: [
          "Solar panels",
          "Inverters",
          "Battery storage systems",
          "Racking & mounting hardware",
          "Monitoring hardware",
        ],
      },
      {
        id: "professional",
        name: "Professional Services",
        icon: "ClipboardList",
        items: [
          "System design consultation",
          "Permitting & inspection coordination",
          "HOA documentation support",
          "Warranty registration assistance",
          "System valuation for home sale",
        ],
      },
    ],
  },
];
