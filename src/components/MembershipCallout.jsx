import { Link } from "react-router-dom";

// Generic membership tie-in used on service and service-item pages. Deliberately does not
// name which tier includes what — tier-by-tier feature breakdowns aren't client-confirmed yet.
export default function MembershipCallout({ name }) {
  return (
    <section className="section">
      <div className="container">
        <div className="card membership-callout">
          <h3>Covered under your membership</h3>
          <p className="text-muted">
            {name} is covered under your Save Our Solar Club membership plan.
            Not a member yet? Enrollment starts with a one-time fee and a
            monthly plan that fits how much coverage you want.
          </p>
          <Link className="btn btn-primary" to="/membership">
            See membership plans &rarr;
          </Link>
        </div>
      </div>

      <style>{`
        .membership-callout {
          padding: 32px;
          border-color: var(--energy-yellow);
          background: linear-gradient(180deg, rgba(216, 245, 0, 0.08), transparent);
        }
        .membership-callout .btn {
          margin-top: 8px;
        }
      `}</style>
    </section>
  );
}
