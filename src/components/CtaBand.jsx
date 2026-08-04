import { Link } from "react-router-dom";

export default function CtaBand({
  title = "Your solar system is a big investment. Protect it.",
  subtitle = "Join Save Our Solar Club and get 24/7 coverage backed by real technicians.",
  primaryCta = { to: "/membership", label: "Enroll Now" },
  secondaryCta = { to: "/contact", label: "Request Inspection" },
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <div>
          <h2>{title}</h2>
          <p style={{ color: "var(--ink)", opacity: 0.75 }}>{subtitle}</p>
        </div>
        <div className="cta-band-buttons">
          <Link className="btn btn-primary btn-lg" to={primaryCta.to}>
            {primaryCta.label}
          </Link>
          <Link className="btn btn-outline btn-lg" to={secondaryCta.to}>
            {secondaryCta.label}
          </Link>
        </div>
      </div>

      <style>{`
        .cta-band {
          background: var(--electric-pink);
          padding: 56px 0;
        }
        .cta-band-inner {
          display: flex;
          flex-direction: column;
          gap: 24px;
          text-align: center;
          align-items: center;
        }
        .cta-band h2 {
          color: var(--ink);
        }
        .cta-band-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }
        @media (min-width: 640px) {
          .cta-band-inner {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
          .cta-band-buttons {
            flex-direction: row;
            width: auto;
          }
        }
      `}</style>
    </section>
  );
}
