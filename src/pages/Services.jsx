import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import Accordion from "../components/Accordion";
import CtaBand from "../components/CtaBand";
import { SERVICE_CATEGORIES } from "../data/services";
import { SERVICE_ICON_MAP } from "../components/serviceIcons";

export default function Services() {
  const { hash } = useLocation();
  const hashId = hash.replace("#", "");
  const matchedCategory =
    SERVICE_CATEGORIES.find((cat) => cat.id === hashId) ??
    SERVICE_CATEGORIES.find((cat) => cat.subcategories?.some((sub) => sub.id === hashId));

  useEffect(() => {
    if (!matchedCategory) return;
    const el = document.getElementById(matchedCategory.id);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash]);

  return (
    <>
      <Seo
        title="Services"
        description="Solar maintenance, repairs, roofing, monitoring, upgrades, insurance support, and more — every service Save Our Solar Club offers, delivered coast to coast through our nationwide network."
        path="/services"
      />

      <Hero
        compact
        eyebrow="Services"
        title="Everything your solar system needs, under one roof."
        subtitle="Browse our full list of services by category. Members get priority access and pricing across all of them."
      />

      <div className="section-divider" />

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <Accordion
            key={hash || "default"}
            items={SERVICE_CATEGORIES}
            defaultOpenId={matchedCategory?.id}
            renderLabel={(cat) => {
              const Icon = SERVICE_ICON_MAP[cat.icon];
              return (
                <span className="accordion-label-inner">
                  {Icon && (
                    <span className="icon-badge">
                      <Icon size={18} strokeWidth={2} />
                    </span>
                  )}
                  {cat.name}
                </span>
              );
            }}
            renderContent={(cat) => (
              <>
                <p className="text-muted">{cat.summary}</p>
                {cat.subcategories ? (
                  <div className="service-subcategories">
                    {cat.subcategories.map((sub) => {
                      const SubIcon = SERVICE_ICON_MAP[sub.icon];
                      return (
                        <div className="service-subcategory" key={sub.id}>
                          <h4 className="service-subcategory-heading">
                            {SubIcon && <SubIcon size={16} strokeWidth={2} />}
                            {sub.name}
                          </h4>
                          <ul>
                            {sub.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <ul>
                    {cat.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </>
            )}
          />
        </div>
      </section>

      <CtaBand
        title="Need help with something specific?"
        subtitle="Tell us what's going on and we'll dispatch a technician to your service area."
        primaryCta={{ to: "/contact", label: "Request Inspection" }}
        secondaryCta={{ to: "/membership", label: "Enroll Now" }}
      />
    </>
  );
}
