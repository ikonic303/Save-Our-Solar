export default function PricingTier({ tier, onSelect, loading }) {
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
      <button
        type="button"
        className={`btn btn-block ${tier.featured ? "btn-primary" : "btn-outline"}`}
        onClick={() => onSelect(tier)}
        disabled={loading}
      >
        {loading ? "Redirecting…" : "Enroll Now"}
      </button>
    </div>
  );
}
