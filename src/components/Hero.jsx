import { Link } from "react-router-dom";
import { Clock3, MapPin, ShieldCheck, Image as ImageIcon } from "lucide-react";

const DEFAULT_BADGES = [
  { icon: Clock3, label: "24/7 Dispatch" },
  { icon: MapPin, label: "Denver Metro" },
  { icon: ShieldCheck, label: "8 Yrs in Solar" },
];

export default function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  compact = false,
  badges = null,
  showImage = false,
}) {
  const showBadges = badges !== false && !compact;
  const badgeItems = badges || DEFAULT_BADGES;

  return (
    <section className={`hero section-dark ${compact ? "hero-compact" : ""}`}>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
      </div>
      <div className={`container hero-layout ${showImage ? "has-image" : ""}`}>
        <div className="hero-inner">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}

          {(primaryCta || secondaryCta) && (
            <div className="hero-ctas">
              {primaryCta && (
                <Link className="btn btn-primary btn-lg" to={primaryCta.to}>
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link className="btn btn-secondary btn-lg" to={secondaryCta.to}>
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}

          {showBadges && (
            <div className="hero-badges">
              {badgeItems.map(({ icon: Icon, label }) => (
                <span className="hero-badge" key={label}>
                  <Icon size={15} strokeWidth={2.2} />
                  {label}
                </span>
              ))}
            </div>
          )}
        </div>

        {showImage && (
          <div className="hero-image">
            <div className="hero-image-frame">
              {/* PLACEHOLDER: hero photo (technician on a roof / solar panel close-up) —
                  client will provide via Google Drive. Swap this block for a real <img>. */}
              <ImageIcon size={36} strokeWidth={1.5} />
              <span>Solar technician photo coming soon</span>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .hero {
          position: relative;
          padding: 64px 0 56px;
          background: var(--ink);
          overflow: hidden;
        }
        .hero-compact {
          padding: 52px 0 44px;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 12% 15%, rgba(216,245,0,0.16), transparent 42%),
            radial-gradient(circle at 88% 85%, rgba(255,163,172,0.18), transparent 48%),
            linear-gradient(180deg, #0b0e12 0%, #14181f 100%);
        }
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 80% 60% at 30% 20%, black, transparent 70%);
        }
        .hero-layout {
          position: relative;
          display: grid;
          gap: 40px;
          align-items: center;
        }
        .hero-inner {
          max-width: 800px;
        }
        .hero-layout.has-image .hero-inner {
          max-width: none;
        }
        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-on-dark-muted);
          max-width: 620px;
          margin-bottom: 28px;
        }
        .hero-ctas {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .hero-image-frame {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          aspect-ratio: 16 / 9;
          border-radius: var(--radius-lg);
          border: 1.5px dashed rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.04);
          color: var(--text-on-dark-muted);
          font-size: 0.88rem;
          text-align: center;
          padding: 24px;
        }
        @media (min-width: 560px) {
          .hero-ctas {
            flex-direction: row;
          }
        }
        @media (min-width: 860px) {
          .hero-layout.has-image {
            grid-template-columns: 1.15fr 0.85fr;
          }
          .hero-image-frame {
            aspect-ratio: 4 / 5;
          }
        }
        @media (min-width: 768px) {
          .hero {
            padding: 100px 0 84px;
          }
          .hero-compact {
            padding: 68px 0 56px;
          }
        }
      `}</style>
    </section>
  );
}
