import { CheckCircle2 } from "lucide-react";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import LeadForm from "../components/LeadForm";
import CtaBand from "../components/CtaBand";
import { SERVICE_CATEGORIES } from "../data/services";

const insuranceCategory = SERVICE_CATEGORIES.find((c) => c.id === "insurance");

export default function Insurance() {
  return (
    <>
      <Seo
        title="Insurance Services"
        description="Storm and loss damage inspections, documentation, and adjuster coordination for your solar system. Save Our Solar Club helps homeowners navigate insurance claims."
        path="/insurance"
      />

      <Hero
        compact
        eyebrow="Insurance services"
        title="Storm damage? We handle the paperwork so you don't have to."
        subtitle="From documentation to adjuster coordination, our team helps you move through the insurance process with a damaged solar system."
      />

      <div className="section-divider" />

      <section className="section">
        <div className="container insurance-grid">
          <div>
            <div className="section-head">
              <span className="eyebrow">What's included</span>
              <h2>{insuranceCategory.summary}</h2>
            </div>
            <ul className="insurance-list">
              {insuranceCategory.items.map((item) => (
                <li key={item} className="card insurance-list-item">
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-muted" style={{ marginTop: 24 }}>
              Insurance support is included with every Save Our Solar Club
              membership tier, and available a la carte for non-members
              following a storm or covered loss event.
            </p>
          </div>

          <LeadForm heading="Request a Damage Inspection" />
        </div>
      </section>

      <CtaBand
        title="Not a member yet?"
        subtitle="Enroll now to get priority insurance support built into your plan."
        primaryCta={{ to: "/membership", label: "Enroll Now" }}
        secondaryCta={{ to: "/services", label: "Browse All Services" }}
      />

      <style>{`
        .insurance-grid {
          display: grid;
          gap: 40px;
          grid-template-columns: 1fr;
          align-items: start;
        }
        .insurance-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .insurance-list-item {
          padding: 16px 20px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .insurance-list-item svg {
          color: var(--electric-pink-deep);
          flex-shrink: 0;
        }
        @media (min-width: 900px) {
          .insurance-grid {
            grid-template-columns: 1.1fr 1fr;
          }
        }
      `}</style>
    </>
  );
}
