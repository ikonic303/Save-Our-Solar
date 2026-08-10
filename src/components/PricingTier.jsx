export default function PricingTier({ tier, onSelect, ctaHref, ctaLabel = "Enroll Now" }) {
  const btnClass = `btn btn-block ${tier.featured ? "btn-primary" : "btn-outline"}`;

  return (
    <div className={`pricing-tier card ${tier.featured ? "is-featured" : ""}`}>
      {tier.featured && <span className="pricing-tier-badge">Most Popular</span>}
      <h3>{tier.name}</h3>
      <p className="pricing-tier-price">
        ${tier.price}
        <span>/mo</span>
      </p>
      <p className="text-muted">{tier.description}</p>
      <ul className="pricing-tier-list">
        {tier.included.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {ctaHref ? (
        <a href={ctaHref} className={btnClass}>
          {ctaLabel}
        </a>
      ) : (
        <button type="button" className={btnClass} onClick={() => onSelect(tier)}>
          {ctaLabel}
        </button>
      )}
    </div>
  );
}
