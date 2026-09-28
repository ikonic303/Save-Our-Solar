import { Helmet } from "react-helmet-async";
import { COMPANY_NAME } from "../data/contact";

// schema.org BlogPosting structured data, following the JSON-LD-via-Helmet pattern
// already used by OrganizationSchema and ServiceSchema.
export default function ArticleSchema({ title, description, path, datePublished }) {
  const url = `https://www.saveoursolarclub.com${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    url,
    mainEntityOfPage: url,
    author: {
      "@type": "Organization",
      name: COMPANY_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY_NAME,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
