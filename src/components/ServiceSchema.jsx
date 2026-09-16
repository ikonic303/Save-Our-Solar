import { Helmet } from "react-helmet-async";
import { COMPANY_NAME, ADDRESS } from "../data/contact";

// schema.org Service structured data, following the JSON-LD-via-Helmet pattern
// already used by OrganizationSchema.
export default function ServiceSchema({ name, description, path }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: COMPANY_NAME,
    },
    areaServed: `${ADDRESS.city} Metro Area`,
    url: `https://www.saveoursolarclub.com${path}`,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
