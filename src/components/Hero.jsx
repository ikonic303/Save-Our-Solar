import { Link } from "react-router-dom";
import { Clock3, MapPin, ShieldCheck, Image as ImageIcon, Activity } from "lucide-react";

const DEFAULT_BADGES = [
  { icon: Clock3, label: "24/7 Dispatch" },
  { icon: MapPin, label: "Coast-to-Coast Coverage" },
  { icon: ShieldCheck, label: "Nationwide Network" },
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
  imageSrc = null,
  imageAlt = "",
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
            <div className="hero-image-glow" aria-hidden="true" />
            <div className="hero-image-float">
              <div className="hero-image-frame">
                <div className="hero-image-inner">
                  {imageSrc ? (
                    <img src={imageSrc} alt={imageAlt} />
                  ) : (
                    <div className="hero-image-placeholder">
                      {/* PLACEHOLDER: swap imageSrc for a real photo */}
                      <ImageIcon size={36} strokeWidth={1.5} />
                      <span>Solar technician photo coming soon</span>
                    </div>
                  )}
                </div>
              </div>

              {imageSrc && (
                <div className="hero-image-badge">
                  <span className="hero-image-badge-icon">
                    <Activity size={16} strokeWidth={2.2} />
                  </span>
                  <div>
                    <strong>24/7 Monitored</strong>
                    <span>Every install, always on</span>
                  </div>
                </div>
              )}
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
        .hero-image {
          position: relative;
        }
        .hero-image-glow {
          position: absolute;
          inset: -10%;
          background:
            radial-gradient(circle at 30% 20%, rgba(216,245,0,0.22), transparent 55%),
            radial-gradient(circle at 80% 85%, rgba(255,163,172,0.22), transparent 55%);
          filter: blur(28px);
          z-index: 0;
          animation: hero-glow-pulse 6s ease-in-out infinite;
        }
        .hero-image-float {
          position: relative;
          animation: hero-image-float 7s ease-in-out infinite;
        }
        .hero-image-frame {
          position: relative;
          z-index: 1;
          padding: 3px;
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, var(--energy-yellow), var(--electric-pink));
          box-shadow: var(--shadow-dark);
        }
        .hero-image-badge {
          position: absolute;
          z-index: 2;
          left: 24px;
          bottom: -22px;
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--surface);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-card-hover);
          padding: 10px 16px 10px 10px;
          animation: hero-badge-in 0.6s cubic-bezier(0.16, 0.84, 0.44, 1) 1s both;
        }
        .hero-image-badge-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 9px;
          background: var(--energy-yellow);
          color: var(--ink);
          flex-shrink: 0;
        }
        .hero-image-badge strong {
          display: block;
          font-family: var(--heading);
          font-size: 0.82rem;
          color: var(--ink);
          white-space: nowrap;
        }
        .hero-image-badge span:not(.hero-image-badge-icon) {
          display: block;
          font-size: 0.7rem;
          color: var(--text-muted);
          white-space: nowrap;
        }
        @keyframes hero-image-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes hero-glow-pulse {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.06); }
        }
        @keyframes hero-badge-in {
          from { opacity: 0; transform: translateY(12px) scale(0.92); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-image-float,
          .hero-image-glow {
            animation: none;
          }
          .hero-image-badge {
            animation: none;
          }
        }
        .hero-image-inner {
          position: relative;
          aspect-ratio: 16 / 9;
          border-radius: calc(var(--radius-lg) - 3px);
          overflow: hidden;
          background: rgba(255, 255, 255, 0.04);
        }
        .hero-image-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .hero-image-inner::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(11,14,18,0) 55%, rgba(11,14,18,0.55) 100%);
          pointer-events: none;
        }
        .hero-image-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          height: 100%;
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
          .hero-image-inner {
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
