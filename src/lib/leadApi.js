// STUB: represents sending a captured lead to the CRM and triggering the technician
// dispatch workflow for the caller's service area. No real backend is wired up yet.
//
// Wire this up to the real integration later, e.g.:
//   - POST to a CRM webhook (HubSpot / Salesforce / GoHighLevel / Zapier catch hook)
//   - POST to an internal dispatch API that assigns a technician by service-area ZIP
//
// Zapier's MCP tools (execute_zapier_write_action) are one option for the CRM-webhook leg
// once a specific "send lead" Zap is configured — left as a follow-up integration.
export async function submitLead(lead) {
  console.info("[stub] submitLead -> CRM + dispatch workflow", lead);

  // Simulate network latency for a realistic loading state.
  await new Promise((resolve) => setTimeout(resolve, 700));

  // Simulated success response shape a real API might return.
  return {
    ok: true,
    leadId: `LEAD-${Date.now()}`,
    dispatchTriggered: true,
  };
}
