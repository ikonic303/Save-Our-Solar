import { Link } from "react-router-dom";
import { SERVICE_ICON_MAP } from "./serviceIcons";

export default function ServiceCategoryCard({ name, summary, icon, to = "/services" }) {
  const Icon = SERVICE_ICON_MAP[icon];

  return (
    <Link to={to} className="service-card card">
      {Icon && (
        <span className="card-icon">
          <Icon size={22} strokeWidth={2} />
        </span>
      )}
      <h3>{name}</h3>
      <p className="text-muted">{summary}</p>
      <span className="service-card-link">See details &rarr;</span>
    </Link>
  );
}
