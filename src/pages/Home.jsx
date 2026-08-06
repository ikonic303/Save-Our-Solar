import Seo from "../components/Seo";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import ServiceCategoryCard from "../components/ServiceCategoryCard";
import PricingTier from "../components/PricingTier";
import AboutSection from "../components/AboutSection";
import ImpactStats from "../components/ImpactStats";
import Gallery from "../components/Gallery";
import CtaBand from "../components/CtaBand";
import { SERVICE_CATEGORIES } from "../data/services";
import { TIERS, ENROLLMENT_FEE } from "../data/pricing";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Seo
        title="Protect Your Solar Investment"
        description="24/7 solar maintenance, repair, and dispatch membership backed by a nationwide network of solar professionals. Request an inspection or enroll in a Save Our Solar Club membership today."
        path="/"
      />

      <Hero
        eyebrow="Roadside assistance for your solar system"
        title="Protecting your solar investment, 24/7."
        subtitle="Panels don't fix themselves. When something goes wrong, Save Our Solar Club dispatches real technicians to your door — fast. Enroll in a membership and never face a solar problem alone."
        primaryCta={{ to: "/contact", label: "Request Inspection" }}
        secondaryCta={{ to: "/membership", label: "Enroll Now" }}
        showImage
        imageSrc="/Images/best3.jpg"
        imageAlt="Rooftop solar panel installation"
      />

      <div className="section-divider" />
      <TrustBar />

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">What we do</span>
            <h2>Full-service solar care, all in one membership</h2>
            <p className="text-muted">
              From routine maintenance to storm damage and insurance paperwork,
              our team covers every part of keeping your system running.
            </p>
          </div>
          <div className="grid grid-3">
            {SERVICE_CATEGORIES.slice(0, 6).map((cat) => (
              <ServiceCategoryCard
                key={cat.id}
                name={cat.name}
                summary={cat.summary}
                icon={cat.icon}
                to={`/services#${cat.id}`}
              />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link className="btn btn-outline" to="/services">
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />
      <ImpactStats />
      <div className="section-divider" />

      <Gallery />

      <section className="section section-alt">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Membership</span>
            <h2>Pick your level of protection</h2>
            <p className="text-muted">
              Every membership starts with a ${ENROLLMENT_FEE} enrollment fee,
              then a monthly plan that fits how much coverage you want.
            </p>
          </div>
          <div className="grid grid-3">
            {TIERS.map((tier) => (
              <PricingTier key={tier.id} tier={tier} onSelect={() => navigate("/membership")} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link className="btn btn-outline" to="/membership">
              See full membership details &rarr;
            </Link>
          </div>
        </div>
      </section>

      <AboutSection />

      <CtaBand />
    </>
  );
}
