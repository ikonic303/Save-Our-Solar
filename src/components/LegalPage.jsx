import Seo from "./Seo";
import Hero from "./Hero";

export default function LegalPage({ title, description, path, effectiveDate, children }) {
  return (
    <>
      <Seo title={title} description={description} path={path} />

      <Hero compact eyebrow="Legal" title={title} />

      <div className="section-divider" />

      <section className="section">
        <div className="container legal-content">
          <p className="legal-updated">Effective Date: {effectiveDate}</p>
          {children}
        </div>
      </section>
    </>
  );
}
