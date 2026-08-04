import { Link } from "react-router-dom";

// Condensed summary for the Home page. Full founder story lives on the About page.
export default function AboutSection() {
  return (
    <section className="section">
      <div className="container about-summary">
        <div>
          <span className="eyebrow">Who we are</span>
          <h2>Built by a solar veteran, run like roadside assistance</h2>
          <p className="text-muted">
            Save Our Solar Club was founded to give homeowners the same peace of
            mind for their solar system that they'd expect from AAA on the road —
            fast dispatch, honest inspections, and a team that treats your
            investment like it's their own. Our founder brings 8 years of
            hands-on solar field experience to every membership.
          </p>
          <Link className="btn btn-outline" to="/about">
            Meet the founder &rarr;
          </Link>
        </div>
        <div className="placeholder-block" style={{ minHeight: 220, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* PLACEHOLDER: founder / team photo — client will provide via Google Drive */}
          Founder / team photo coming soon
        </div>
      </div>

      <style>{`
        .about-summary {
          display: grid;
          gap: 32px;
          align-items: center;
          grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .about-summary {
            grid-template-columns: 1.1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
