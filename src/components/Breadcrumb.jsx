import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <div className="container breadcrumb-inner">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <span className="breadcrumb-item" key={item.label}>
              {item.to && !isLast ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}
              {!isLast && <ChevronRight size={14} strokeWidth={2} aria-hidden="true" />}
            </span>
          );
        })}
      </div>

      <style>{`
        .breadcrumb {
          background: var(--surface-alt);
          border-bottom: 1px solid var(--border);
        }
        .breadcrumb-inner {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px;
          padding: 12px 0;
          font-size: 0.85rem;
        }
        .breadcrumb-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
        }
        .breadcrumb-item a {
          color: var(--text-muted);
          text-decoration: none;
        }
        .breadcrumb-item a:hover {
          color: var(--electric-pink-deep);
        }
        .breadcrumb-item:last-child span {
          color: var(--ink);
          font-weight: 600;
        }
      `}</style>
    </nav>
  );
}
