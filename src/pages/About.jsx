import Seo from "../components/Seo";
import Hero from "../components/Hero";
import CtaBand from "../components/CtaBand";

/*
  PLACEHOLDER CONTENT NOTICE:
  The brief asked for "the founder story copy from the source doc" (mission, founder's
  background, vision to serve 1M systems by 2030) but that source doc text was not actually
  provided in this conversation — only these facts were confirmed:
    - Founder name: Donavin Kisner
    - Founder has 8 years of experience in solar
    - Vision to serve 1 million solar systems by 2030
  Everything else in this section (specific bio details, mission wording) is DRAFT copy and
  marked with [PLACEHOLDER] — replace with the real source doc text before launch.
*/

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Meet the team behind Save Our Solar Club — a national solar protection platform backed by a nationwide network of experienced solar professionals, with a mission to protect 1 million solar systems by 2030."
        path="/about"
      />

      <Hero
        compact
        eyebrow="About us"
        title="We started Save Our Solar Club because solar owners deserve a safety net."
        subtitle="[PLACEHOLDER — replace with real founder story copy from source doc]"
      />

      <div className="section-divider" />

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="section-head">
            <span className="eyebrow">Our mission</span>
            <h2>Protect every homeowner's solar investment like it's our own</h2>
            <p className="text-muted">
              [PLACEHOLDER — mission statement copy pending from source doc.] Solar
              systems are a major investment, but most homeowners have nowhere to
              turn when something goes wrong. Save Our Solar Club exists to be
              that safety net — fast, honest, and available 24/7.
            </p>
          </div>

          <div className="section-head">
            <span className="eyebrow">Founder's story</span>
          </div>

          <div className="founder-card card">
            <div className="founder-card-photo">
              <img src="/Images/donavin-owner.jpg" alt="Donavin Kisner, Founder of Save Our Solar Club" />
            </div>
            <div className="founder-card-body">
              <h2>Donavin Kisner</h2>
              <p className="founder-card-role">Founder, Save Our Solar Club</p>
              <p className="text-muted">
                Our founder brings 8 years of hands-on experience in the solar
                industry, working directly with homeowners to install, maintain,
                and repair residential solar systems. That field experience is
                what shaped Save Our Solar Club's approach: real technicians,
                honest inspections, and no runaround.
              </p>
              <p className="founder-card-draft-note">
                Draft bio — full founder story pending final copy from client.
              </p>
            </div>
          </div>

          <div className="section-head">
            <span className="eyebrow">Our network</span>
            <h2>A nationwide network, coast to coast</h2>
            <p className="text-muted">
              Save Our Solar Club is a national solar technology platform. We're
              supported by a nationwide network of experienced solar installers
              and service professionals with hundreds of years of combined
              industry experience — so wherever your system is, a qualified
              technician is never far away. Our team is based in Denver,
              Colorado, but our coverage runs coast to coast.
            </p>
          </div>

          <div className="section-head">
            <span className="eyebrow">Our vision</span>
            <h2>1 million systems protected by 2030</h2>
            <p className="text-muted">
              We're building Save Our Solar Club to become the trusted name in
              solar protection nationwide — with a goal of covering 1 million
              solar systems by 2030.
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
        .founder-card-draft-note {
          display: inline-flex;
          margin-top: 16px;
          padding: 7px 14px;
          border: 1.5px dashed var(--border-strong);
          border-radius: 999px;
          background: var(--surface-alt);
          color: var(--text-muted);
          font-size: 0.78rem;
        }
        @media (min-width: 620px) {
          .founder-card {
            grid-template-columns: 220px 1fr;
            align-items: center;
          }
          .founder-card-photo img {
            aspect-ratio: 1 / 1;
          }
        }
      `}</style>
    </>
  );
}
