import { Phone, Mail, MapPin, Clock3 } from "lucide-react";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import EmbeddedInspectionForm from "../components/EmbeddedInspectionForm";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, ADDRESS_FULL, HOURS } from "../data/contact";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact / Request Inspection"
        description="Request a solar system inspection or get in touch with Save Our Solar Club. Available 24/7, coast to coast, to protect your solar investment."
        path="/contact"
      />

      <Hero
        compact
        eyebrow="Contact us"
        title="Request an inspection — we'll take it from here."
        subtitle="Tell us about your system and we'll dispatch a technician to your service area."
      />

      <div className="section-divider" />

      <section className="section">
        <div className="container contact-grid">
          <EmbeddedInspectionForm />

          <div className="contact-info card">
            <h3>Reach us directly</h3>
            <ul className="contact-info-list">
              <li>
                <span className="icon-badge"><Phone size={16} /></span>
                <div>
                  <strong>Phone</strong>
                  <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
                </div>
              </li>
              <li>
                <span className="icon-badge"><Mail size={16} /></span>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>
              </li>
              <li>
                <span className="icon-badge"><MapPin size={16} /></span>
                <div>
                  <strong>Headquarters</strong>
                  <span>{ADDRESS_FULL}</span>
                  <span className="text-muted" style={{ fontSize: "0.78rem" }}>
                    Service available coast to coast through our nationwide network
                  </span>
                </div>
              </li>
              <li>
                <span className="icon-badge"><Clock3 size={16} /></span>
                <div>
                  <strong>Hours</strong>
                  <span>{HOURS}</span>
                </div>
              </li>
            </ul>

            <div className="placeholder-block" style={{ marginTop: 24 }}>
              {/* PLACEHOLDER: embed a nationwide coverage map once available */}
              Nationwide coverage map coming soon
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-grid {
          display: grid;
          gap: 40px;
          grid-template-columns: 1fr;
          align-items: start;
        }
        .contact-info {
          padding: 28px 24px;
        }
        .contact-info-list {
          list-style: none;
          margin: 20px 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .contact-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .contact-info-list li > div {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .contact-info-list strong {
          font-family: var(--heading);
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }
        .contact-info-list a {
          text-decoration: none;
          font-weight: 700;
          color: var(--ink);
        }
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1.2fr 1fr;
          }
        }
      `}</style>
    </>
  );
}
