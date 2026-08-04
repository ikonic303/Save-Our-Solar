// Credential/guarantee badges are intentionally rendered as dashed PLACEHOLDER chips —
// no license number, insurance carrier, certification, or guarantee terms were supplied by
// the client. Do not replace with invented claims; swap each chip for real copy once confirmed.
export default function Credentials() {
  const badges = [
    "Licensing info — [PLACEHOLDER]",
    "Insurance / bonding — [PLACEHOLDER]",
    "Certifications — [PLACEHOLDER]",
    "Guarantee terms — [PLACEHOLDER]",
  ];

  return (
    <section className="section credentials-section">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Why homeowners trust us</span>
          <h2>Backed by real credentials, not just promises</h2>
          <p className="text-muted">
            We'll display our licensing, insurance, and certification details
            here once finalized — no placeholders left standing at launch.
          </p>
        </div>
        <div className="badge-row">
          {badges.map((label) => (
            <span className="badge-placeholder" key={label}>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
