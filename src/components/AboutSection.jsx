import { Link } from "react-router-dom";

// Condensed summary for the Home page. Full founder story lives on the About page.
export default function AboutSection() {
  return (
    <section className="section">
      <div className="container about-summary">
        <div>
          <span className="eyebrow">Who we are</span>
          <h2>A national solar protection platform, run like roadside assistance</h2>
          <p className="text-muted">
            Save Our Solar Club was founded to give homeowners the same peace of
            mind for their solar system that they'd expect from AAA on the road —
            fast dispatch, honest inspections, and a team that treats your
            investment like it's their own. We're backed by a nationwide network
            of experienced solar installers and service professionals with
            hundreds of years of combined industry experience, delivering
            coast-to-coast coverage. Our founder brings 8 years of hands-on
            solar field experience to every membership.
          </p>
          <Link className="btn btn-outline" to="/about">
            Meet the founder &rarr;
          </Link>
        </div>
        <div className="about-summary-photo">
          <img src="/Images/donavin-owner.jpg" alt="Donavin Kisner, Founder of Save Our Solar Club" />
        </div>
      </div>

      <style>{`
        .about-summary {
          display: grid;
          gap: 32px;
          align-items: center;
          grid-template-columns: 1fr;
        }
        .about-summary-photo {
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-card);
        }
        .about-summary-photo img {
          width: 100%;
          height: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          object-position: top;
          display: block;
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
