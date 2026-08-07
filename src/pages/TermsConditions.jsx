import LegalPage from "../components/LegalPage";
import { EMAIL, COMPANY_NAME, LEGAL_ENTITY_NAME } from "../data/contact";

export default function TermsConditions() {
  return (
    <LegalPage
      title="Terms and Conditions"
      description="The terms that govern your use of the Save Our Solar Club website, memberships, and services."
      path="/terms-conditions"
      effectiveDate="August 7, 2026"
    >
      <p>
        {LEGAL_ENTITY_NAME}, operating as {COMPANY_NAME} ("Save Our Solar
        Club," "we," "us," or "our"). These Terms and Conditions ("Terms")
        govern your use of the Save Our Solar Club website, membership
        offerings, communications, products, consultations, inspections,
        maintenance services, and related services.
      </p>
      <p>
        By accessing our website, submitting a request, enrolling in a
        membership, purchasing a service, or otherwise using our services,
        you agree to these Terms.
      </p>
      <p>If you do not agree to these Terms, do not use the website or services.</p>

      <h2>1. About Save Our Solar Club</h2>
      <p>
        Save Our Solar Club is operated by {LEGAL_ENTITY_NAME} and provides
        solar maintenance memberships, inspections, panel cleaning,
        production monitoring, diagnostics, repairs, roofing coordination,
        detach-and-reset services, monitoring technology, solar and
        electrical upgrades, insurance documentation support, energy
        consultations, and related services.
      </p>
      <p>Our contact information is:</p>
      <address>
        <strong>{COMPANY_NAME}</strong>
        <br />
        7535 East Hampden Avenue, Suite 400
        <br />
        Denver, Colorado 80231
        <br />
        Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <br />
        Website:{" "}
        <a href="https://www.saveoursolarclub.com">www.saveoursolarclub.com</a>
      </address>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years old and legally capable of entering
        into a binding agreement to use our paid services or enroll in a
        membership.
      </p>
      <p>
        When requesting services for a property, you represent that you are
        the owner, an authorized representative of the owner, or otherwise
        authorized to approve the requested work.
      </p>

      <h2>3. Service Requests and Inspections</h2>
      <p>
        Submitting a website form, requesting an inspection, scheduling a
        consultation, or speaking with a representative does not guarantee:
      </p>
      <ul>
        <li>Service availability</li>
        <li>Technician availability</li>
        <li>A particular appointment time</li>
        <li>A specific repair outcome</li>
        <li>Warranty coverage</li>
        <li>Insurance approval</li>
        <li>Eligibility for a membership</li>
        <li>A final price</li>
      </ul>
      <p>
        Services may be subject to property access, location, system
        condition, technician availability, weather, permitting, equipment
        availability, safety conditions, and additional written agreements.
      </p>
      <p>
        An inspection or diagnostic visit may be required before we can
        provide final recommendations or pricing.
      </p>

      <h2>4. Membership Plans and Enrollment</h2>
      <p>
        Save Our Solar Club may offer monthly solar maintenance membership
        plans with an enrollment fee.
      </p>
      <p>
        The selected plan, included benefits, exclusions, recurring price,
        enrollment fee, billing frequency, and cancellation terms will be
        presented during enrollment or in a separate membership agreement.
      </p>
      <p>Unless otherwise stated in writing:</p>
      <ul>
        <li>Membership benefits apply only to the enrolled property and covered solar system.</li>
        <li>Memberships may not be transferred without our written approval.</li>
        <li>Services outside the selected plan may result in additional charges.</li>
        <li>
          Repairs, replacement parts, permits, engineering, roofing work,
          electrical upgrades, equipment, emergency service, and
          third-party contractor costs may not be included in the monthly
          membership fee.
        </li>
        <li>Unused inspections, cleanings, visits, or benefits do not have cash value.</li>
        <li>Membership availability and service coverage may depend on geographic location.</li>
      </ul>
      <p>
        If a membership agreement conflicts with these general Terms, the
        membership agreement will control concerning the membership.
      </p>

      <h2>5. Recurring Billing Authorization</h2>
      <p>
        By enrolling in a recurring membership, you authorize Save Our
        Solar Club and its payment processor to charge the payment method
        you provide for:
      </p>
      <ul>
        <li>The disclosed enrollment fee</li>
        <li>Recurring membership fees</li>
        <li>Applicable taxes</li>
        <li>Authorized add-on services</li>
        <li>Other charges you separately approve</li>
      </ul>
      <p>
        Recurring charges will continue at the disclosed billing interval
        until the membership is canceled according to the applicable
        membership agreement.
      </p>
      <p>You are responsible for keeping your billing and contact information current.</p>
      <p>
        If a payment is declined, we may retry the payment, request an
        updated payment method, suspend membership benefits, or cancel the
        membership, subject to applicable law and the membership agreement.
      </p>

      <h2>6. Pricing and Estimates</h2>
      <p>
        Website prices, starting prices, membership prices, advertisements,
        and verbal discussions are informational unless confirmed in a
        written agreement or checkout page.
      </p>
      <p>Final pricing may depend on:</p>
      <ul>
        <li>Solar system size</li>
        <li>Equipment type</li>
        <li>Roof type and accessibility</li>
        <li>Property location</li>
        <li>Labor requirements</li>
        <li>Permits and engineering</li>
        <li>Equipment availability</li>
        <li>Damage severity</li>
        <li>Electrical conditions</li>
        <li>Travel requirements</li>
        <li>Safety considerations</li>
        <li>Third-party contractor charges</li>
      </ul>
      <p>
        Changes in scope, hidden conditions, additional damage, unavailable
        parts, code requirements, or customer-requested changes may result
        in additional charges.
      </p>
      <p>
        We will seek authorization before performing materially additional
        paid work whenever reasonably practicable.
      </p>

      <h2>7. Appointments, Access, and Customer Responsibilities</h2>
      <p>You agree to:</p>
      <ul>
        <li>Provide accurate property, system, contact, and billing information</li>
        <li>Provide reasonable and safe access to the property and equipment</li>
        <li>
          Disclose known hazards, roof damage, electrical problems,
          animals, access restrictions, or dangerous conditions
        </li>
        <li>Secure pets and maintain a safe work area</li>
        <li>
          Obtain any required property-owner, landlord, homeowners
          association, utility, lender, or third-party permission
        </li>
        <li>Be available or provide an authorized adult when required</li>
        <li>Follow technician safety and preparation instructions</li>
      </ul>
      <p>
        We may reschedule or refuse service when conditions are unsafe,
        access is unavailable, information is materially inaccurate, or the
        requested work is outside our service scope.
      </p>

      <h2>8. Cancellations and Rescheduling</h2>
      <p>
        Appointment cancellation, rescheduling, no-show, trip, inspection,
        and dispatch fees may apply as disclosed during scheduling or in a
        service agreement.
      </p>
      <p>
        Membership cancellation rights and any applicable notice
        requirements will be stated in the membership agreement or
        enrollment materials.
      </p>
      <p>
        Cancellation of a membership does not automatically cancel charges
        for services, products, labor, or equipment already provided or
        authorized.
      </p>

      <h2>9. Repairs, Replacement Parts, and Equipment</h2>
      <p>
        Repair recommendations are based on information available during
        inspection or diagnosis. Additional problems may become apparent
        after work begins.
      </p>
      <p>
        Replacement equipment may vary by manufacturer, model, availability,
        compatibility, warranty status, and applicable electrical or
        building requirements.
      </p>
      <p>
        We do not guarantee that original or identical equipment will
        remain available.
      </p>
      <p>Some repairs or upgrades may require:</p>
      <ul>
        <li>Manufacturer approval</li>
        <li>Utility approval</li>
        <li>Engineering</li>
        <li>Permits</li>
        <li>Inspections</li>
        <li>Roofing work</li>
        <li>Electrical work</li>
        <li>Monitoring-platform access</li>
        <li>Third-party contractor involvement</li>
      </ul>
      <p>Timeframes may be affected by matters outside our control.</p>

      <h2>10. Roofing, Detach-and-Reset, and Third-Party Services</h2>
      <p>
        Roofing, insurance, engineering, permitting, electrical, and
        detach-and-reset projects may involve independent contractors or
        third-party providers.
      </p>
      <p>
        When a third party performs work under a separate agreement, that
        third party is responsible for its own workmanship, licensing,
        warranties, insurance, scheduling, and contractual obligations.
      </p>
      <p>
        Save Our Solar Club may coordinate or assist with third-party
        services but does not guarantee an insurer's decision, an
        adjuster's approval, warranty coverage, permitting timeframes, or
        third-party performance unless expressly stated in a written
        agreement.
      </p>

      <h2>11. Insurance and Warranty Assistance</h2>
      <p>
        We may assist with inspections, photographs, estimates,
        documentation, scope verification, adjuster coordination, warranty
        documentation, or supplemental information.
      </p>
      <p>
        We do not act as an insurance company, public adjuster, attorney,
        manufacturer, or warranty administrator unless expressly licensed
        and engaged to perform such services.
      </p>
      <p>We do not guarantee:</p>
      <ul>
        <li>Insurance coverage</li>
        <li>Claim approval</li>
        <li>Payment amount</li>
        <li>Warranty approval</li>
        <li>Manufacturer response</li>
        <li>Adjuster acceptance</li>
        <li>Reimbursement</li>
      </ul>
      <p>
        The customer remains responsible for reviewing and complying with
        insurance, warranty, financing, and manufacturer requirements.
      </p>

      <h2>12. Solar Production and Savings</h2>
      <p>
        Solar production may be affected by weather, shading, utility
        restrictions, equipment condition, system design, dirt,
        degradation, grid outages, roof conditions, monitoring failures,
        and other factors.
      </p>
      <p>
        Unless expressly stated in a signed written guarantee, Save Our
        Solar Club does not guarantee:
      </p>
      <ul>
        <li>A specific amount of solar production</li>
        <li>A specific utility-bill reduction</li>
        <li>Complete elimination of electricity charges</li>
        <li>A particular financial return</li>
        <li>Continuous system operation</li>
        <li>That every problem can be identified remotely</li>
        <li>That every system can be restored or repaired</li>
      </ul>
      <p>
        Production monitoring is not a substitute for emergency electrical
        service, utility service, physical inspections, or manufacturer
        monitoring.
      </p>

      <h2>13. Customer Communications</h2>
      <p>
        You agree that we may contact you using the contact details you
        provide in connection with:
      </p>
      <ul>
        <li>Your inquiry</li>
        <li>Inspection requests</li>
        <li>Appointments</li>
        <li>Membership administration</li>
        <li>Payments</li>
        <li>Service delivery</li>
        <li>Technician dispatch</li>
        <li>Monitoring alerts</li>
        <li>Repairs</li>
        <li>Customer support</li>
      </ul>
      <p>
        Marketing communications will be sent only as permitted by
        applicable law and your communication preferences.
      </p>

      <h2>14. SMS/MMS MESSAGING TERMS</h2>

      <h3>Program Name and Sender</h3>
      <p>
        The messaging program is operated by <strong>{COMPANY_NAME}</strong>.
      </p>
      <p>
        By separately opting in to receive text messages, you authorize
        Save Our Solar Club to send SMS or MMS messages to the mobile
        number you provided.
      </p>
      <p>Depending on the consent you select, messages may include:</p>
      <ul>
        <li>Inspection-request follow-ups</li>
        <li>Appointment confirmations and reminders</li>
        <li>Technician arrival and dispatch notifications</li>
        <li>Membership and account updates</li>
        <li>Billing and payment notifications</li>
        <li>Solar production or monitoring alerts</li>
        <li>Maintenance and repair updates</li>
        <li>Customer support messages</li>
        <li>Special offers, promotions, discounts, or service announcements</li>
      </ul>

      <h3>Consent</h3>
      <p>
        Consent to receive SMS or MMS messages is not a condition of
        purchasing any goods or services.
      </p>
      <p>
        Your consent applies specifically to Save Our Solar Club and is not
        transferable to another business.
      </p>

      <h3>Message Frequency</h3>
      <p>
        Message frequency varies depending on your requests, appointments,
        membership activity, account activity, service needs, and selected
        communication preferences.
      </p>

      <h3>Message and Data Rates</h3>
      <p>
        Message and data rates may apply according to your wireless
        carrier and mobile plan.
      </p>
      <p>
        Save Our Solar Club is not responsible for charges imposed by your
        wireless carrier.
      </p>

      <h3>Opting Out</h3>
      <p>
        You may cancel the SMS service at any time by replying{" "}
        <strong>STOP</strong> to any message.
      </p>
      <p>
        After you send <strong>STOP</strong>, we may send one final message
        confirming that you have been unsubscribed. After that
        confirmation, you will no longer receive text messages from the
        applicable messaging program unless you opt in again.
      </p>
      <p>
        Other recognized opt-out keywords may include{" "}
        <strong>CANCEL, END, QUIT, REVOKE, OPT OUT,</strong> or{" "}
        <strong>UNSUBSCRIBE</strong>.
      </p>
      <p>
        To rejoin, submit a new opt-in request through our website or
        another authorized enrollment method.
      </p>

      <h3>Help</h3>
      <p>
        For assistance, reply <strong>HELP</strong> to any message or email{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>

      <h3>Carrier Disclaimer</h3>
      <p>Wireless carriers are not liable for delayed or undelivered messages.</p>
      <p>
        Message delivery is subject to effective transmission by your
        wireless provider and is not guaranteed.
      </p>

      <h3>Privacy</h3>
      <p>
        Our collection and use of information through the messaging program
        are governed by our Privacy Policy.
      </p>
      <p>
        We do not share, sell, rent, or transfer mobile phone numbers or
        SMS opt-in consent information to third parties or affiliates for
        marketing or promotional purposes.
      </p>

      <h2>15. Email Communications</h2>
      <p>
        When you provide your email address, we may send transactional,
        service, membership, appointment, billing, and customer-support
        communications.
      </p>
      <p>
        When permitted, we may also send promotional emails. You may
        unsubscribe from promotional emails through the unsubscribe link
        included in the message.
      </p>
      <p>
        Unsubscribing from promotional emails will not prevent necessary
        service or account communications.
      </p>

      <h2>16. Electronic Communications and Signatures</h2>
      <p>
        You consent to receive agreements, notices, disclosures, invoices,
        receipts, and other communications electronically.
      </p>
      <p>
        Electronic acceptance, checkbox acceptance, typed signatures, and
        electronic signatures may have the same legal effect as handwritten
        signatures to the extent permitted by law.
      </p>
      <p>
        You are responsible for retaining copies of electronic documents
        relevant to your purchase or membership.
      </p>

      <h2>17. Website Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the website for unlawful or fraudulent purposes</li>
        <li>Submit false, misleading, or unauthorized information</li>
        <li>Interfere with website security or operation</li>
        <li>Attempt unauthorized access to accounts, systems, or data</li>
        <li>Introduce malware or harmful code</li>
        <li>Scrape, copy, reproduce, or exploit website content without authorization</li>
        <li>Impersonate another person or business</li>
        <li>Use the website to harass, harm, or violate the rights of others</li>
      </ul>
      <p>
        We may restrict or terminate website access when we reasonably
        believe these Terms have been violated.
      </p>

      <h2>18. Intellectual Property</h2>
      <p>
        The website and its content, including text, branding, graphics,
        logos, photographs, videos, design elements, forms, reports, and
        software, are owned by or licensed to Save Our Solar Club and are
        protected by applicable intellectual-property laws.
      </p>
      <p>You may use the website for personal and lawful purposes only.</p>
      <p>
        You may not reproduce, distribute, modify, sell, license, publish,
        or commercially exploit our content without prior written
        permission.
      </p>

      <h2>19. Reviews, Photographs, and Submitted Materials</h2>
      <p>
        When you submit reviews, testimonials, comments, photographs, or
        other materials, you represent that you have the right to provide
        them and that they do not infringe another party's rights.
      </p>
      <p>
        We will obtain any legally required authorization before using
        customer-identifying photographs, testimonials, or project
        information for promotional purposes.
      </p>
      <p>
        Inspection, diagnostic, warranty, insurance, or service photographs
        may be retained as part of the property's service documentation.
      </p>

      <h2>20. Disclaimer of Warranties</h2>
      <p>
        To the maximum extent permitted by law, the website and general
        website content are provided on an "as is" and "as available"
        basis.
      </p>
      <p>We do not warrant that:</p>
      <ul>
        <li>The website will always be available or error-free</li>
        <li>Website information will always be complete or current</li>
        <li>Every solar system can be repaired</li>
        <li>Every replacement part will be available</li>
        <li>Every monitoring alert will identify every issue</li>
        <li>
          A particular insurer, utility, manufacturer, lender, or warranty
          provider will approve a request
        </li>
      </ul>
      <p>
        Specific workmanship, product, or equipment warranties, when
        applicable, will be described in the relevant written service
        agreement or manufacturer documentation.
      </p>
      <p>
        Nothing in these Terms excludes warranties or rights that cannot
        legally be excluded.
      </p>

      <h2>21. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Save Our Solar Club will
        not be liable for indirect, incidental, special, exemplary,
        punitive, or consequential damages arising from the website or
        services, including lost savings, lost production, lost profits,
        loss of data, utility charges, or business interruption.
      </p>
      <p>
        This limitation does not apply where prohibited by law or to
        liability that cannot legally be limited.
      </p>
      <p>
        Any limitation applicable to a specific service may also be stated
        in the relevant membership or service agreement.
      </p>

      <h2>22. Indemnification</h2>
      <p>
        To the extent permitted by law, you agree to indemnify and hold
        harmless Save Our Solar Club and its owners, employees,
        representatives, and agents from claims, losses, damages, or
        expenses arising from:
      </p>
      <ul>
        <li>Your unlawful use of the website or services</li>
        <li>Information you knowingly provide without authorization</li>
        <li>Your violation of these Terms</li>
        <li>Your infringement of another person's rights</li>
        <li>Unsafe or undisclosed conditions at the property</li>
      </ul>
      <p>
        This section does not require indemnification for conduct that
        cannot legally be indemnified.
      </p>

      <h2>23. Force Majeure</h2>
      <p>
        We are not responsible for delays or failure caused by
        circumstances beyond our reasonable control, including:
      </p>
      <ul>
        <li>Severe weather</li>
        <li>Natural disasters</li>
        <li>Fire</li>
        <li>Utility outages</li>
        <li>Grid interruptions</li>
        <li>Labor shortages</li>
        <li>Supply-chain disruptions</li>
        <li>Equipment or parts shortages</li>
        <li>Government actions</li>
        <li>Permit or inspection delays</li>
        <li>Telecommunications outages</li>
        <li>Cyber incidents</li>
        <li>Transportation interruptions</li>
        <li>Manufacturer or contractor delays</li>
      </ul>
      <p>
        We will use reasonable efforts to resume affected services when
        practicable.
      </p>

      <h2>24. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of Colorado,
        without regard to conflict-of-law principles, except where
        applicable law requires otherwise.
      </p>
      <p>
        Any disputes will be handled in the courts having jurisdiction in
        or near Denver, Colorado, unless a separate written agreement
        provides another lawful dispute-resolution procedure.
      </p>

      <h2>25. Severability</h2>
      <p>
        If any part of these Terms is found invalid or unenforceable, the
        remaining provisions will remain in effect.
      </p>
      <p>
        The invalid provision will be interpreted or modified to the
        minimum extent necessary to make it enforceable when permitted by
        law.
      </p>

      <h2>26. No Waiver</h2>
      <p>
        Failure to enforce a provision of these Terms does not waive the
        right to enforce it later.
      </p>

      <h2>27. Changes to These Terms</h2>
      <p>We may update these Terms periodically.</p>
      <p>
        The effective date at the top of this page will indicate the latest
        revision. Your continued use of the website or services following
        an update constitutes acceptance of the revised Terms, to the
        extent permitted by law.
      </p>
      <p>
        Material changes affecting an existing paid membership may also be
        governed by the applicable membership agreement and law.
      </p>

      <h2>28. Contact Us</h2>
      <p>For questions regarding these Terms, contact:</p>
      <address>
        <strong>{COMPANY_NAME}</strong>
        <br />
        7535 East Hampden Avenue, Suite 400
        <br />
        Denver, Colorado 80231
        <br />
        Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <br />
        Website:{" "}
        <a href="https://www.saveoursolarclub.com">www.saveoursolarclub.com</a>
      </address>
    </LegalPage>
  );
}
