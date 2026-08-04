import { Clock, MapPin, Award } from "lucide-react";

const ITEMS = [
  { icon: Clock, label: "24/7 Emergency Dispatch", detail: "Technicians on call around the clock" },
  { icon: MapPin, label: "Denver Metro Service Area", detail: "Based in Denver, CO" },
  { icon: Award, label: "8 Years in Solar", detail: "Founder-led team with hands-on field experience" },
];

export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container trust-bar-inner">
        {ITEMS.map(({ icon: Icon, label, detail }) => (
          <div className="stat-tile trust-tile" key={label}>
            <span className="icon-badge">
              <Icon size={20} strokeWidth={2} />
            </span>
            <strong>{label}</strong>
            <span className="text-muted">{detail}</span>
          </div>
        ))}
      </div>

      <style>{`
        .trust-bar {
          background: var(--surface-alt);
          border-bottom: 1px solid var(--border);
          padding: 36px 0;
        }
        .trust-bar-inner {
          display: grid;
          gap: 16px;
          grid-template-columns: 1fr;
        }
        .trust-tile {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          background: var(--surface);
        }
        .trust-tile strong {
          font-family: var(--heading);
          color: var(--ink);
          font-size: 0.98rem;
        }
        .trust-tile span.text-muted {
          font-size: 0.85rem;
        }
        @media (min-width: 720px) {
          .trust-bar-inner {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
