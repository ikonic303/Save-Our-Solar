import StatCounter from "./StatCounter";
import { IMPACT_STATS } from "../data/stats";

export default function ImpactStats() {
  return (
    <section className="impact-stats section-dark">
      <div className="container impact-stats-grid">
        {IMPACT_STATS.map((stat) => (
          <div className="impact-stat" key={stat.label}>
            <StatCounter
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.decimals}
            />
            <span className="impact-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <style>{`
        .impact-stats {
          position: relative;
          padding: 56px 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(216,245,0,0.08), transparent 45%),
            radial-gradient(circle at 80% 80%, rgba(255,163,172,0.1), transparent 45%),
            var(--ink);
        }
        .impact-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px 20px;
          text-align: center;
        }
        .impact-stat {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .stat-counter {
          font-family: var(--heading);
          font-weight: 800;
          font-size: clamp(2rem, 4vw, 2.8rem);
          letter-spacing: -0.02em;
          color: var(--text-on-dark);
        }
        .impact-stat-label {
          font-size: 0.85rem;
          color: var(--text-on-dark-muted);
        }
        @media (min-width: 768px) {
          .impact-stats {
            padding: 72px 0;
          }
          .impact-stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
