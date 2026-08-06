import LegalPage from "../components/LegalPage";
import { EMAIL, COMPANY_NAME } from "../data/contact";

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Save Our Solar Club collects, uses, and protects your personal information."
      path="/privacy-policy"
      effectiveDate="August 7, 2026"
    >
      <p>
        {COMPANY_NAME} ("Save Our Solar Club," "we," "us," or "our") respects
        your privacy and is committed to protecting the personal information
        you provide when visiting our website, requesting an inspection,
        enrolling in a membership, purchasing services, communicating with
        us, or otherwise interacting with our business.
      </p>
      <p>
        This Privacy Policy explains what information we collect, how we use
        it, when it may be disclosed, and the choices available to you.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following categories of information:</p>

      <h3>Personal and Contact Information</h3>
      <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Mobile or telephone number</li>
        <li>Mailing address</li>
        <li>Property or service address</li>
        <li>City, state, and ZIP code</li>
        <li>Preferred communication method</li>
      </ul>

      <h3>Solar System and Property Information</h3>
      <ul>
        <li>Solar system type and equipment information</li>
        <li>Installation and warranty details</li>
        <li>Solar production and monitoring information</li>
        <li>Maintenance and repair history</li>
        <li>Roof condition and roofing information</li>
        <li>Photographs, inspection results, and diagnostic reports</li>
        <li>Utility or energy information you voluntarily provide</li>
        <li>Information concerning insurance claims or contractor services</li>
      </ul>

      <h3>Transaction and Membership Information</h3>
      <ul>
        <li>Membership plan</li>
        <li>Enrollment information</li>
        <li>Service appointments</li>
        <li>Billing and transaction history</li>
        <li>Products or services purchased</li>
        <li>Payment status</li>
      </ul>
      <p>
        Payment information may be processed by third-party payment
        processors. Save Our Solar Club may not directly store complete
        credit card or bank account numbers.
      </p>

      <h3>Website and Technical Information</h3>
      <p>
        When you use our website, we may automatically collect certain
        information, including:
      </p>
      <ul>
        <li>Internet Protocol address</li>
        <li>Browser and device type</li>
        <li>Operating system</li>
        <li>Pages visited</li>
        <li>Referring website</li>
        <li>Date and time of access</li>
        <li>Website interaction and performance information</li>
        <li>Cookies and similar technologies</li>
      </ul>

      <h3>Communications</h3>
      <p>We may retain information you provide through:</p>
      <ul>
        <li>Website forms</li>
        <li>Telephone calls</li>
        <li>Email</li>
        <li>SMS or MMS messages</li>
        <li>Online chat</li>
        <li>Appointment requests</li>
        <li>Customer service communications</li>
        <li>Surveys, reviews, and feedback</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We may use your information to:</p>
      <ul>
        <li>Respond to inspection, estimate, consultation, and service requests</li>
        <li>Enroll and manage solar membership accounts</li>
        <li>Schedule, coordinate, and dispatch service technicians</li>
        <li>
          Provide solar inspections, cleaning, monitoring, repairs,
          maintenance, roofing coordination, detach-and-reset services,
          upgrades, and related services
        </li>
        <li>Process transactions and recurring membership payments</li>
        <li>Provide appointment confirmations and reminders</li>
        <li>
          Send service updates, technician notifications, account notices,
          and payment notifications
        </li>
        <li>Monitor solar production and identify potential system issues</li>
        <li>
          Prepare diagnostic, inspection, repair, insurance, or warranty
          documentation
        </li>
        <li>
          Communicate with contractors, technicians, roofing partners,
          insurers, adjusters, or service providers when necessary to
          complete a requested service
        </li>
        <li>Provide customer service and technical support</li>
        <li>
          Send marketing or promotional communications when you have
          provided the appropriate consent
        </li>
        <li>
          Improve our website, services, memberships, and customer
          experience
        </li>
        <li>
          Prevent fraud, misuse, unauthorized activity, or security
          incidents
        </li>
        <li>
          Comply with applicable legal, regulatory, tax, and recordkeeping
          obligations
        </li>
        <li>Enforce our agreements, policies, and legal rights</li>
      </ul>

      <h2>3. SMS AND MOBILE INFORMATION</h2>
      <p>
        When you provide your mobile number and separately consent to
        receive text messages, Save Our Solar Club may send you SMS or MMS
        messages related to your selected communication preferences.
      </p>
      <p>Messages may include:</p>
      <ul>
        <li>Inspection and consultation follow-ups</li>
        <li>Appointment confirmations and reminders</li>
        <li>Technician arrival and dispatch updates</li>
        <li>Membership and account notifications</li>
        <li>Payment and billing notifications</li>
        <li>Solar monitoring and performance alerts</li>
        <li>Maintenance, repair, and service updates</li>
        <li>Customer support communications</li>
        <li>
          Special offers, promotions, or service announcements when you
          separately consent to marketing messages
        </li>
      </ul>
      <p>Message frequency may vary. Message and data rates may apply.</p>
      <p>
        You may opt out at any time by replying <strong>STOP</strong> to any
        message. You may reply <strong>HELP</strong> for assistance or
        contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
      <p>
        Consent to receive text messages is not a condition of purchasing
        any goods or services.
      </p>

      <h3>Mobile Data Non-Sharing Disclosure</h3>
      <p>
        <strong>
          We do not share, sell, rent, release, or transfer mobile phone
          numbers, SMS opt-in information, or messaging consent data to
          third parties or affiliates for their marketing or promotional
          purposes.
        </strong>
      </p>
      <p>
        No mobile information will be shared with third parties or
        affiliates for marketing or promotional purposes. Information may be
        shared with service providers and subcontractors solely as
        necessary to support our communications, customer service,
        technology, payment processing, appointment scheduling, or delivery
        of requested services. These parties may use the information only
        to perform services on our behalf and may not use mobile opt-in
        information for their own marketing.
      </p>
      <p>
        All other categories described in this Privacy Policy exclude text
        messaging originator opt-in data and consent. Text messaging opt-in
        data and consent will not be shared with any third parties,
        affiliates, or lead generators for marketing or promotional
        purposes.
      </p>

      <h2>4. How We May Share Information</h2>
      <p>
        We may disclose personal information to the following categories of
        recipients when reasonably necessary:
      </p>

      <h3>Service Providers</h3>
      <p>We may work with vendors that provide:</p>
      <ul>
        <li>Website hosting</li>
        <li>Customer relationship management systems</li>
        <li>Appointment scheduling</li>
        <li>SMS, telephone, and email communications</li>
        <li>Payment processing</li>
        <li>Data hosting and storage</li>
        <li>Solar monitoring technology</li>
        <li>Analytics</li>
        <li>Customer service</li>
        <li>Cybersecurity</li>
        <li>Accounting or professional services</li>
      </ul>
      <p>
        These providers may access information only as necessary to perform
        services for us.
      </p>

      <h3>Technicians and Contractors</h3>
      <p>
        We may provide relevant information to technicians, solar
        contractors, electricians, roofing contractors, engineers, permit
        coordinators, inspectors, or other service professionals involved in
        fulfilling a service you requested.
      </p>

      <h3>Insurance and Warranty Support</h3>
      <p>
        At your request, we may share relevant inspection reports,
        photographs, repair estimates, scopes, or supporting documents with
        insurers, adjusters, warranty providers, or other parties involved
        in an insurance or warranty matter.
      </p>

      <h3>Business and Legal Purposes</h3>
      <p>We may disclose information when reasonably necessary to:</p>
      <ul>
        <li>
          Comply with a law, regulation, court order, subpoena, or legal
          process
        </li>
        <li>
          Protect the rights, safety, property, or security of Save Our
          Solar Club, our customers, or others
        </li>
        <li>
          Investigate fraud, security incidents, or violations of our
          agreements
        </li>
        <li>
          Complete a merger, financing, acquisition, restructuring, or sale
          of some or all business assets, subject to applicable law
        </li>
      </ul>
      <p>We do not sell mobile phone numbers or SMS consent information.</p>

      <h2>5. Cookies and Analytics</h2>
      <p>
        Our website may use cookies, pixels, analytics tools, and similar
        technologies to:
      </p>
      <ul>
        <li>Operate website features</li>
        <li>Remember preferences</li>
        <li>Understand website traffic</li>
        <li>Measure marketing effectiveness</li>
        <li>Diagnose technical problems</li>
        <li>Improve website performance</li>
      </ul>
      <p>
        You may adjust your browser settings to reject or limit cookies.
        Some website features may not function correctly when cookies are
        disabled.
      </p>

      <h2>6. Payment Processing</h2>
      <p>
        Payments may be processed through third-party payment providers.
        Payment processors maintain their own privacy and security
        practices.
      </p>
      <p>
        We encourage you to review the privacy policies of the applicable
        payment provider before submitting payment information.
      </p>

      <h2>7. Data Security</h2>
      <p>
        We use reasonable administrative, technical, and organizational
        safeguards intended to protect personal information from
        unauthorized access, disclosure, alteration, loss, or misuse.
      </p>
      <p>
        However, no website, database, internet transmission, or electronic
        storage method can be guaranteed to be completely secure. You
        provide information electronically at your own risk.
      </p>

      <h2>8. Data Retention</h2>
      <p>We may retain personal information for as long as reasonably necessary to:</p>
      <ul>
        <li>Provide services and maintain your membership</li>
        <li>Maintain service, inspection, warranty, and property records</li>
        <li>Complete transactions</li>
        <li>Resolve disputes</li>
        <li>Enforce agreements</li>
        <li>
          Comply with legal, regulatory, accounting, insurance, and tax
          requirements
        </li>
        <li>Protect against fraud or misuse</li>
      </ul>
      <p>
        When information is no longer reasonably required, we may securely
        delete, anonymize, or aggregate it, subject to applicable law.
      </p>

      <h2>9. Your Privacy Choices</h2>
      <p>
        Depending on where you reside and applicable law, you may have the
        right to request:
      </p>
      <ul>
        <li>Access to personal information we maintain about you</li>
        <li>Correction of inaccurate personal information</li>
        <li>Deletion of certain personal information</li>
        <li>A copy of certain personal information</li>
        <li>
          Information about how your personal information is used or
          disclosed
        </li>
        <li>Withdrawal of certain consent</li>
        <li>Opt-out from certain marketing communications</li>
      </ul>
      <p>
        To submit a privacy request, email{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
      <p>
        We may need to verify your identity before fulfilling a request.
        Certain information may be retained when permitted or required by
        law.
      </p>

      <h2>10. Marketing Communications</h2>
      <p>
        You may unsubscribe from marketing emails by using the unsubscribe
        link included in the message.
      </p>
      <p>
        You may unsubscribe from marketing text messages by replying{" "}
        <strong>STOP</strong>.
      </p>
      <p>
        Opting out of marketing communications does not prevent us from
        sending non-promotional communications that are necessary to
        provide requested services, administer your membership, process
        transactions, address safety or performance issues, or respond to
        you.
      </p>

      <h2>11. Children's Privacy</h2>
      <p>
        Our website and services are intended for adults and property
        owners. They are not directed toward children under 13 years of
        age.
      </p>
      <p>
        We do not knowingly collect personal information directly from
        children under 13. If we learn that we have collected such
        information, we will take reasonable steps to delete it.
      </p>

      <h2>12. Third-Party Websites</h2>
      <p>
        Our website may contain links to third-party websites, platforms,
        payment processors, social networks, or services.
      </p>
      <p>
        We are not responsible for the privacy, security, content, or
        practices of third-party websites. Your use of third-party services
        is governed by their respective policies.
      </p>

      <h2>13. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy periodically.</p>
      <p>
        When changes are made, we will update the effective date at the top
        of this page. Material changes may also be communicated through the
        website or another appropriate method.
      </p>
      <p>
        Your continued use of the website or services after an updated
        Privacy Policy becomes effective constitutes acknowledgment of the
        revised policy, to the extent permitted by law.
      </p>

      <h2>14. Contact Us</h2>
      <p>For questions, concerns, or privacy requests, contact:</p>
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
