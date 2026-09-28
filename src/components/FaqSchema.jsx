import { Helmet } from "react-helmet-async";

// schema.org FAQPage structured data — helps answer engines (and Google's rich
// results) surface these Q&As directly. Purely additive to the visible FAQ section.
export default function FaqSchema({ faqs }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
