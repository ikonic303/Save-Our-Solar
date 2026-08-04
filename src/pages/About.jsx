import Seo from "../components/Seo";
import Hero from "../components/Hero";
import CtaBand from "../components/CtaBand";

/*
  PLACEHOLDER CONTENT NOTICE:
  The brief asked for "the founder story copy from the source doc" (mission, founder's
  background, vision to serve 1M systems by 2030) but that source doc text was not actually
  provided in this conversation — only the two facts below were confirmed:
    - Founder has 8 years of experience in solar
    - Vision to serve 1 million solar systems by 2030
  Everything else in this section (founder name, specific bio details, mission wording) is
  DRAFT copy and marked with [PLACEHOLDER] — replace with the real source doc text before launch.
*/

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Meet the team behind Save Our Solar Club — founded on 8 years of hands-on solar field experience, with a mission to protect 1 million solar systems by 2030."
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
            <h2>[FOUNDER_NAME] — [PLACEHOLDER]</h2>
            <p className="text-muted">
              [PLACEHOLDER — founder background copy pending from source doc.] Our
              founder brings 8 years of hands-on experience in the solar
              industry, working directly with homeowners to install, maintain,
              and repair residential solar systems. That field experience is
              what shaped Save Our Solar Club's approach: real technicians,
              honest inspections, and no runaround.
            </p>
          </div>

          <div className="placeholder-block" style={{ marginBottom: 40, minHeight: 220, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* PLACEHOLDER: founder / team photo — client will provide via Google Drive */}
            Founder / team photo coming soon
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
    </>
  );
}
