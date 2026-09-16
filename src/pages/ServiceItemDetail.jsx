import { useParams } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import Seo from "../components/Seo";
import ServiceSchema from "../components/ServiceSchema";
import Hero from "../components/Hero";
import Breadcrumb from "../components/Breadcrumb";
import CtaBand from "../components/CtaBand";
import TestimonialSlot from "../components/TestimonialSlot";
import HowItWorksSection from "../components/HowItWorksSection";
import MembershipCallout from "../components/MembershipCallout";
import NotFound from "./NotFound";
import { getServiceDetail } from "../data/serviceDetails";
import { getServiceItem } from "../data/serviceItems";

export default function ServiceItemDetail() {
  const { slug, itemSlug } = useParams();
  const service = getServiceDetail(slug);
  const item = getServiceItem(slug, itemSlug);

  if (!service || !item) return <NotFound />;

  const { name, blurb, description, whyItMatters } = item;
  const path = `/services/${slug}/${itemSlug}`;

  return (
    <>
      <Seo
        title={name}
        description={`${blurb} Part of ${service.name}, covered under Save Our Solar Club membership plans.`}
        path={path}
      />
      <ServiceSchema name={name} description={blurb} path={path} />

      <Breadcrumb
        items={[
          { label: "Services", to: "/services" },
          { label: service.name, to: `/services/${slug}` },
          { label: name },
        ]}
      />

      <Hero
        compact
        eyebrow={service.eyebrow}
        title={name}
        subtitle={blurb}
        primaryCta={{ to: "/contact", label: "Request Inspection" }}
        secondaryCta={{ to: "/membership", label: "Enroll Now" }}
      />

      <div className="section-divider" />

      <section className="section">
        <div className="container service-item-grid">
          <div className="card">
            <h3>About this service</h3>
            <p className="text-muted">{description}</p>
          </div>

          <div className="card service-item-why">
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
        title={`Ready to get ${name.toLowerCase()} handled?`}
        subtitle="Enroll in Save Our Solar Club, or reach out with questions — we're here to help."
        primaryCta={{ to: "/membership", label: "Join Save Our Solar Club" }}
        secondaryCta={{ to: "/contact", label: "Questions? Contact us" }}
      />

      <style>{`
        .service-item-grid {
          display: grid;
          gap: 24px;
          grid-template-columns: 1fr;
          align-items: start;
        }
        .service-item-grid .card {
          padding: 28px;
        }
        .service-item-why {
          padding: 28px;
        }
        @media (min-width: 900px) {
          .service-item-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
}
