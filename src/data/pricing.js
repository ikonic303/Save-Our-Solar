// Membership pricing.
// Enrollment fee and the 3 monthly tier prices below were confirmed by the client (2026-08-04).
// NOTE: the per-tier "included" bullet lists are DRAFT marketing copy, not confirmed against the
// source doc line-by-line — review with the client before launch and adjust wording/inclusions.

export const ENROLLMENT_FEE = 899;

export const TIERS = [
  {
    id: "basic",
    name: "Basic Guard",
    price: 29,
    description: "Baseline protection to keep your system monitored and inspection-ready.",
    included: [
      "Annual system inspection",
      "Remote performance monitoring",
      "Priority phone & email support",
      "Member pricing on repairs",
    ],
    featured: false,
    paymentLink: "https://links.ikonicmarketing303.com/payment-link/6a7a40b373c7ff66b05e782a",
  },
  {
    id: "plus",
    name: "Plus Guard",
    price: 79,
    description: "Our most popular plan — proactive maintenance plus faster dispatch.",
    included: [
      "Everything in Basic Guard",
      "Bi-annual system inspection & cleaning",
      "Priority technician dispatch",
      "Storm / severe-weather check-ins",
      "Discounted diagnostic service calls",
    ],
    featured: true,
    paymentLink: "https://links.ikonicmarketing303.com/payment-link/6a7a40ca73c7ff66b05e782c",
  },
  {
    id: "premier",
    name: "Premier Guard",
    price: 199,
    description: "Full-service coverage for homeowners who want the least to think about.",
    included: [
      "Everything in Plus Guard",
      "Quarterly system inspection & cleaning",
      "Same-day / next-day emergency dispatch (subject to availability)",
      "Insurance documentation support",
      "Extended workmanship coverage on eligible repairs",
    ],
    featured: false,
    paymentLink: "https://links.ikonicmarketing303.com/payment-link/6a7a40d873c7ff66b05e782d",
  },
];
