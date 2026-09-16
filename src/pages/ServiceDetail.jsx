import { useParams, Link } from "react-router-dom";
import { ChevronRight, AlertTriangle } from "lucide-react";
import Seo from "../components/Seo";
import ServiceSchema from "../components/ServiceSchema";
import Hero from "../components/Hero";
import CtaBand from "../components/CtaBand";
import TestimonialSlot from "../components/TestimonialSlot";
import HowItWorksSection from "../components/HowItWorksSection";
import MembershipCallout from "../components/MembershipCallout";
import NotFound from "./NotFound";
import { getServiceDetail } from "../data/serviceDetails";
import { getServiceItems } from "../data/serviceItems";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceDetail(slug);

  if (!service) return <NotFound />;

  const { name, eyebrow, valueProp, whyItMatters } = service;
  const items = getServiceItems(slug);
  const path = `/services/${slug}`;

  return (
    <>
      <Seo
        title={name}
        description={`${valueProp} Save Our Solar Club membership plans cover this service for homeowners in the greater Denver metro area.`}
        path={path}
      />
      <ServiceSchema
        name={name}
        description={valueProp}
        path={path}
      />

      <Hero
        compact
        eyebrow={eyebrow}
        title={name}
        subtitle={valueProp}
        primaryCta={{ to: "/contact", label: "Request Inspection" }}
        secondaryCta={{ to: "/membership", label: "Enroll Now" }}
      />

      <div className="section-divider" />

      <section className="section">
        <div className="container service-detail-grid">
          <div>
            <div className="section-head">
              <span className="eyebrow">What this service covers</span>
              <h2>Scope of work</h2>
            </div>
            <ul className="service-detail-list">
              {items.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/services/${slug}/${item.slug}`}
                    className="card service-detail-list-item"
                  >
                    {item.name}
                    <ChevronRight size={18} strokeWidth={2} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="card service-detail-why">
            <span className="card-icon">
              <AlertTriangle size={22} strokeWidth={2} />
            </span>
            <h3>Why it matters</h3>
            <p className="text-muted">{whyItMatters}</p>
          </div>
        </div>
      </section>

      <TestimonialSlot />

      <HowItWorksSection />

      <MembershipCallout name={name} />

      <CtaBand
        title={`Ready to get your ${name.toLowerCase()} handled?`}
        subtitle="Enroll in Save Our Solar Club, or reach out with questions — we're here to help."
        primaryCta={{ to: "/membership", label: "Join Save Our Solar Club" }}
        secondaryCta={{ to: "/contact", label: "Questions? Contact us" }}
      />

      <style>{`
        .service-detail-grid {
          display: grid;
          gap: 40px;
          grid-template-columns: 1fr;
          align-items: start;
        }
        .service-detail-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .service-detail-list-item {
          padding: 16px 20px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          text-decoration: none;
          color: inherit;
        }
        .service-detail-list-item svg {
          color: var(--electric-pink-deep);
          flex-shrink: 0;
        }
        .service-detail-why {
          padding: 28px;
        }
        @media (min-width: 900px) {
          .service-detail-grid {
            grid-template-columns: 1.1fr 1fr;
          }
        }
      `}</style>
    </>
  );
}
