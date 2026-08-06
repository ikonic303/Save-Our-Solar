import { Helmet } from "react-helmet-async";

// Real lead-capture form, hosted externally (GoHighLevel/Ikonic Marketing widget).
// This replaces the mock LeadForm + lib/leadApi.js stub on the Contact page — submissions
// go straight to the connected CRM, no dispatch-webhook stub needed here anymore.
const FORM_ID = "7wnvPG4XZLS8PgWYKxIx";

export default function EmbeddedInspectionForm() {
  return (
    <div className="embedded-form card">
      <Helmet>
        <script src="https://links.ikonicmarketing303.com/js/form_embed.js"></script>
      </Helmet>
      <iframe
        src={`https://links.ikonicmarketing303.com/widget/form/${FORM_ID}`}
        style={{ width: "100%", height: "100%", border: "none", borderRadius: 20 }}
        id={`inline-${FORM_ID}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Request an Inspection"
        data-height="1314"
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        title="Request an Inspection"
      />
    </div>
  );
}
