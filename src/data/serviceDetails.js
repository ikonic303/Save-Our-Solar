// Content for the 10 service detail pages (/services/:slug), rendered by
// src/pages/ServiceDetail.jsx. Each service's scope-of-work bullets live in
// ./serviceItems.js (one entry per item, each with its own /services/:slug/:itemSlug
// page) rather than duplicated here.
//
// Deliberately generic, per client sign-off scope: no invented stats, testimonials,
// phone numbers, service-area cities, or tier-by-tier pricing breakdowns. Pricing and
// membership tier details live on /membership — link there instead of restating numbers.
export const SERVICE_DETAILS = [
  {
    slug: "solar-maintenance",
    name: "Solar Maintenance",
    eyebrow: "Solar Maintenance",
    valueProp:
      "Keep your solar system running at peak performance with scheduled inspections, cleaning, and diagnostics.",
    whyItMatters:
      "Solar systems lose efficiency gradually — dirt, debris, and small faults rarely announce themselves. Skipping routine maintenance can mean lower energy production, voided manufacturer warranties, and repairs that cost more the longer they go unaddressed.",
  },
  {
    slug: "repairs",
    name: "Repairs",
    eyebrow: "Repairs",
    valueProp:
      "When something on your system fails, our technicians diagnose and fix it — from wiring to inverters.",
    whyItMatters:
      "A failed component doesn't just cut into your energy production — left alone, electrical issues in a solar array can become a safety hazard. Getting repairs handled by a qualified technician protects your system, your home, and your warranty coverage.",
  },
  {
    slug: "roofing-coordination",
    name: "Roofing Coordination",
    eyebrow: "Roofing Coordination",
    valueProp:
      "Get roof work done around your existing solar array without coordinating two separate contractors yourself.",
    whyItMatters:
      "Roof issues under a solar array are easy to miss and expensive to ignore — leaks can cause structural damage long before they're visible from inside your home. Coordinating roofing and solar work together avoids the disconnects that come from hiring separate contractors.",
  },
  {
    slug: "detach-and-reset",
    name: "Detach-and-Reset",
    eyebrow: "Detach & Reset",
    valueProp:
      "Need your panels off for roof work or an upgrade? We handle the safe removal and reinstallation.",
    whyItMatters:
      "Removing and reinstalling solar panels isn't a job for a general contractor — improper handling can damage panels, void warranties, or leave a system unsafe once it's reconnected. A proper detach-and-reset keeps your equipment protected and your system verified before it goes back online.",
  },
  {
    slug: "monitoring",
    name: "Monitoring",
    eyebrow: "Monitoring",
    valueProp:
      "Stay ahead of problems with real-time visibility into how your system is performing.",
    whyItMatters:
      "A system that isn't monitored can underperform for months before anyone notices — by which point you've already lost the energy savings you paid for. Reliable monitoring catches production drops and connectivity issues early, before they turn into bigger repairs.",
  },
  {
    slug: "upgrades",
    name: "Upgrades",
    eyebrow: "Upgrades",
    valueProp:
      "Expand what your existing solar system can do, from battery backup to EV charging.",
    whyItMatters:
      "Your energy needs change over time — more panels, an EV, or backup power during outages. Upgrading through a team that already knows your system avoids compatibility issues and keeps everything working together instead of as disconnected add-ons.",
  },
  {
    slug: "insurance-services",
    name: "Insurance Services",
    eyebrow: "Insurance Services",
    valueProp:
      "Storm or loss damage to your system? We handle documentation and adjuster coordination so you don't have to.",
    whyItMatters:
      "Insurance claims involving solar systems move faster and go smoother with proper documentation from people who understand the equipment. Without it, claims can be delayed, underpaid, or denied outright over paperwork gaps.",
  },
  {
    slug: "home-energy-consulting",
    name: "Home Energy Consulting",
    eyebrow: "Home Energy Consulting",
    valueProp:
      "Get expert guidance on the other side of your home's energy efficiency — beyond just your solar array.",
    whyItMatters:
      "Solar panels only offset the energy your home actually uses — a leaky, poorly insulated house wastes a share of what your system produces. Addressing efficiency alongside your solar investment gets more value out of both.",
  },
  {
    slug: "products",
    name: "Products",
    eyebrow: "Products",
    valueProp:
      "Source the exact solar equipment and hardware your system needs for repairs, upgrades, or replacements.",
    whyItMatters:
      "Mismatched or off-spec parts can hurt performance, complicate future service, and create warranty headaches down the line. Sourcing components through a team that knows your system keeps everything compatible and properly documented.",
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    eyebrow: "Professional Services",
    valueProp:
      "Get expert support for the paperwork and planning side of owning a solar system.",
    whyItMatters:
      "The administrative side of owning a solar system — permits, HOA approvals, warranty registration, resale documentation — is easy to fall behind on, but gaps here can delay projects, jeopardize coverage, or complicate a home sale. Getting it handled properly the first time avoids problems later.",
  },
];

export function getServiceDetail(slug) {
  return SERVICE_DETAILS.find((service) => service.slug === slug);
}
