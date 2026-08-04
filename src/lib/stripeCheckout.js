// STUB: mock Stripe Checkout integration. No live or test Stripe keys are configured yet.
//
// To wire up the real flow later:
//   1. Add @stripe/stripe-js and load with the publishable key (import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
//   2. Create a backend endpoint (e.g. POST /api/create-checkout-session) that creates a
//      Stripe Checkout Session for the $899 enrollment fee + the selected monthly tier price,
//      then redirects the browser to session.url (or use stripe.redirectToCheckout).
//   3. Handle success/cancel redirect URLs and a webhook (checkout.session.completed) to
//      activate the membership + kick off the CRM/dispatch workflow (see lib/leadApi.js).
export async function startCheckout({ tier, enrollmentFee }) {
  console.info("[stub] startCheckout -> would create a Stripe Checkout session for", {
    tier,
    enrollmentFee,
  });

  await new Promise((resolve) => setTimeout(resolve, 900));

  // In the real integration this would be `window.location.href = session.url`.
  return {
    ok: true,
    mock: true,
    message:
      "This is a mock checkout flow — no payment was processed. Live Stripe keys are not yet configured.",
  };
}
