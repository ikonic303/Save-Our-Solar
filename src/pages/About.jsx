import Seo from "../components/Seo";
import Hero from "../components/Hero";
import CtaBand from "../components/CtaBand";

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Save Our Solar Club is a national technology platform connecting homeowners with a nationwide network of experienced solar professionals, with a mission to protect 1 million solar systems by 2030."
        path="/about"
      />

      <Hero
        compact
        eyebrow="About us"
        title="We started Save Our Solar Club because solar owners deserve a safety net."
        subtitle="A national technology platform connecting homeowners with a nationwide network of experienced solar professionals — so no one is ever left without support."
      />

      <div className="section-divider" />

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="section-head">
            <span className="eyebrow">Founder's story</span>
            <h2>Built to solve the solar industry's service gap</h2>
          </div>

          <div className="founder-card card">
            <div className="founder-card-photo">
              <img src="/Images/donavin-owner.jpg" alt="Donavin Kisner, Founder of Save Our Solar Club" />
            </div>
            <div className="founder-card-body">
              <h2>Donavin Kisner</h2>
              <p className="founder-card-role">Founder, Save Our Solar Club</p>
              <p className="text-muted">
                Save Our Solar Club was created after seeing firsthand how
                many homeowners were left without reliable support after
                their original solar installer went out of business, stopped
                servicing their area, or simply could not provide long-term
                maintenance.
              </p>
              <p className="text-muted">
                That industry-wide problem inspired the creation of a
                technology-driven platform that connects homeowners with
                qualified solar professionals across the country.
              </p>
              <p className="text-muted">
                Rather than relying on one company, one installer, or one
                local market, Save Our Solar Club brings together a growing
                national network of experienced industry professionals with
                hundreds of years of combined solar experience.
              </p>
              <p className="text-muted">
                The goal is to create a dependable support system homeowners
                can rely on throughout the entire life of their solar
                investment.
              </p>
            </div>
          </div>

          <div className="section-head">
            <span className="eyebrow">Our mission</span>
            <h2>Protect every homeowner's solar investment like it's our own</h2>
            <p className="text-muted">
              Save Our Solar Club is a technology platform built to solve one
              of the biggest challenges in the solar industry: long-term
              homeowner support.
            </p>
            <p className="text-muted">
              We connect homeowners with a nationwide network of experienced
              solar professionals who provide maintenance, monitoring,
              diagnostics, repairs, inspections, roofing support, system
              upgrades, and other essential services throughout the life of
              a solar system.
            </p>
            <p className="text-muted">
              Our mission is simple: make dependable solar support accessible
              coast to coast, so homeowners are never left without help when
              their system needs attention.
            </p>
          </div>

          <div className="section-head">
            <span className="eyebrow">Our network</span>
            <h2>A nationwide network, coast to coast</h2>
            <p className="text-muted">
              Save Our Solar Club is powered by a national network of solar
              installers, technicians, electricians, roofing professionals,
              and service providers with hundreds of years of combined
              industry experience.
            </p>
            <p className="text-muted">
              Our technology platform helps connect homeowners with qualified
              professionals in their area while coordinating inspections,
              maintenance, monitoring, repairs, roofing services, detach and
              resets, system upgrades, and ongoing support.
            </p>
            <p className="text-muted">
              From coast to coast, our goal is to make professional solar
              service easier to access, easier to manage, and more
              dependable — regardless of who originally installed the
              system.
            </p>
          </div>

          <div className="section-head">
            <span className="eyebrow">Our vision</span>
            <h2>1 million systems protected by 2030</h2>
            <p className="text-muted">
              Our vision is to build the nation's leading technology and
              service platform for long-term solar protection.
            </p>
            <p className="text-muted">
              By combining technology, centralized service coordination,
              proactive monitoring, and a nationwide network of experienced
              solar professionals, our goal is to protect 1 million
              residential solar systems by 2030.
            </p>
            <p className="text-muted">
              We are building an infrastructure that gives homeowners
              something the solar industry has historically lacked:
              reliable support throughout the entire lifespan of their
              system.
            </p>
            <p className="about-tagline">
              One platform. A nationwide network. Long-term protection for
              solar homeowners.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />

      <style>{`
        .founder-card {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          padding: 28px;
          margin-bottom: 40px;
        }
        .founder-card-photo {
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border);
        }
        .founder-card-photo img {
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          object-position: top;
          display: block;
        }
        .founder-card-body h2 {
          margin-bottom: 2px;
        }
        .founder-card-role {
          font-family: var(--heading);
          font-weight: 700;
          color: var(--electric-pink-deep);
          font-size: 0.92rem;
          margin-bottom: 14px;
        }
        .founder-card-body p:last-child {
          margin-bottom: 0;
        }
        .about-tagline {
          font-family: var(--heading);
          font-weight: 700;
          color: var(--ink);
          font-size: 1.05rem;
          margin-top: 20px;
        }
        @media (min-width: 620px) {
          .founder-card {
            grid-template-columns: 220px 1fr;
            align-items: start;
          }
          .founder-card-photo img {
            aspect-ratio: 1 / 1;
          }
        }
      `}</style>
    </>
  );
}
