import { Helmet } from "react-helmet-async";
import { COMPANY_NAME, EMAIL, PHONE_TEL, ADDRESS, FACEBOOK_URL } from "../data/contact";

// LocalBusiness JSON-LD structured data.
export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: COMPANY_NAME,
    email: EMAIL,
    telephone: PHONE_TEL.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${ADDRESS.line1}, ${ADDRESS.line2}`,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.zip,
      addressCountry: "US",
    },
    openingHours: "Mo-Su 00:00-23:59",
    sameAs: [FACEBOOK_URL],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
