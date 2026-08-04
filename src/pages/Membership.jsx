import { useState } from "react";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import PricingTier from "../components/PricingTier";
import CtaBand from "../components/CtaBand";
import { TIERS, ENROLLMENT_FEE } from "../data/pricing";
import { startCheckout } from "../lib/stripeCheckout";

export default function Membership() {
  const [selectedTier, setSelectedTier] = useState(null);
  const [loadingTierId, setLoadingTierId] = useState(null);
  const [checkoutResult, setCheckoutResult] = useState(null);

  async function handleSelect(tier) {
    setSelectedTier(tier);
    setLoadingTierId(tier.id);
    setCheckoutResult(null);
    try {
      const result = await startCheckout({ tier, enrollmentFee: ENROLLMENT_FEE });
      setCheckoutResult(result);
    } finally {
      setLoadingTierId(null);
    }
  }

  return (
    <>
      <Seo
        title="Membership & Pricing"
        description="Save Our Solar Club membership pricing: $899 enrollment plus a monthly plan starting at $29/mo. Enroll today for 24/7 solar protection."
        path="/membership"
      />

      <Hero
        compact
        eyebrow="Membership"
        title="Choose the coverage that fits your system."
        subtitle="Every membership includes a one-time enrollment fee, then a monthly plan billed to keep your protection active."
      />

      <div className="section-divider" />

      <section className="section">
        <div className="container">
          <div className="enrollment-fee-banner card">
            <div>
              <h3>One-time enrollment fee</h3>
              <p className="text-muted">
                Covers your initial system assessment and account setup.
              </p>
            </div>
            <p className="enrollment-fee-amount">${ENROLLMENT_FEE}</p>
          </div>

          <div className="grid grid-3" style={{ marginTop: 40 }}>
            {TIERS.map((tier) => (
              <PricingTier
                key={tier.id}
                tier={tier}
                onSelect={handleSelect}
                loading={loadingTierId === tier.id}
              />
            ))}
          </div>

          {checkoutResult && (
            <div className="card checkout-result" role="status">
              <h3>
                {selectedTier?.name} selected — ${ENROLLMENT_FEE} enrollment + $
                {selectedTier?.price}/mo
              </h3>
              <p className="text-muted">{checkoutResult.message}</p>
              <p style={{ fontSize: "0.85rem" }} className="text-muted">
                {/* PLACEHOLDER: this is a mock checkout stub. Wire up real Stripe Checkout
                    (see src/lib/stripeCheckout.js) once live/test keys are available. */}
                [stub] No live Stripe keys configured — this simulates a checkout redirect.
              </p>
            </div>
          )}

          <p className="text-muted" style={{ marginTop: 24, fontSize: "0.9rem" }}>
            Payments are processed securely via Stripe. You can cancel or change
            your plan at any time.
          </p>
        </div>
      </section>

      <CtaBand
        title="Not sure which plan is right for you?"
        subtitle="Request a free inspection first — we'll help you pick the right level of coverage."
        primaryCta={{ to: "/contact", label: "Request Inspection" }}
        secondaryCta={{ to: "/services", label: "Browse Services" }}
      />

      <style>{`
        .enrollment-fee-banner {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: flex-start;
          justify-content: space-between;
          padding: 28px 24px;
          background: var(--surface-alt);
        }
        .enrollment-fee-amount {
          font-size: 2.4rem;
          font-weight: 800;
          color: var(--ink);
          margin: 0;
        }
        .checkout-result {
          margin-top: 32px;
          padding: 24px;
          border-color: var(--energy-yellow);
        }
        @media (min-width: 640px) {
          .enrollment-fee-banner {
            flex-direction: row;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}
