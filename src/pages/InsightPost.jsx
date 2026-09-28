import { useParams, Link } from "react-router-dom";
import { Lightbulb } from "lucide-react";
import Seo from "../components/Seo";
import ArticleSchema from "../components/ArticleSchema";
import FaqSchema from "../components/FaqSchema";
import Hero from "../components/Hero";
import Breadcrumb from "../components/Breadcrumb";
import CtaBand from "../components/CtaBand";
import NotFound from "./NotFound";
import { getBlogPost } from "../data/blogPosts";

function formatDate(dateStr) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function InsightPost() {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) return <NotFound />;

  const { title, excerpt, quickAnswer, category, date, sections, faqs, related } = post;
  const path = `/insights/${slug}`;
  const relatedTo = related.to || `/services/${related.slug}${related.itemSlug ? `/${related.itemSlug}` : ""}`;

  return (
    <>
      <Seo title={title} description={excerpt} path={path} />
      <ArticleSchema title={title} description={excerpt} path={path} datePublished={date} />
      <FaqSchema faqs={faqs} />

      <Breadcrumb items={[{ label: "Insights", to: "/insights" }, { label: title }]} />

      <Hero compact eyebrow={category} title={title} subtitle={excerpt} />

      <div className="section-divider" />

      <section className="section">
        <div className="container insight-body">
          <p className="insight-date">
            Published <time dateTime={date}>{formatDate(date)}</time>
          </p>

          <div className="card insight-quick-answer">
            <span className="card-icon">
              <Lightbulb size={22} strokeWidth={2} />
            </span>
            <h3>Quick Answer</h3>
            <p className="text-muted">{quickAnswer}</p>
          </div>

          {sections.map((section) => (
            <div className="insight-section" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p className="text-muted" key={i}>
                  {p}
                </p>
              ))}
            </div>
          ))}

          <div className="insight-section">
            <h2>Frequently Asked Questions</h2>
            <div className="insight-faq-list">
              {faqs.map((faq) => (
                <div className="card insight-faq-item" key={faq.q}>
                  <h3>{faq.q}</h3>
                  <p className="text-muted">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card insight-related">
            <h3>Related Service</h3>
            <p className="text-muted">
              Read more about {related.label.toLowerCase()} and how it's covered under your membership.
            </p>
            <Link className="btn btn-primary" to={relatedTo}>
              View {related.label} &rarr;
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to get your system taken care of?"
        subtitle="Enroll in Save Our Solar Club, or reach out with questions — we're here to help."
        primaryCta={{ to: "/membership", label: "Join Save Our Solar Club" }}
        secondaryCta={{ to: "/contact", label: "Questions? Contact us" }}
      />

      <style>{`
        .insight-body {
          max-width: 760px;
        }
        .insight-date {
          color: var(--text-muted);
          font-size: 0.88rem;
          margin-bottom: 28px;
        }
        .insight-quick-answer {
          padding: 28px;
          margin-bottom: 40px;
          border-color: var(--energy-yellow);
          background: linear-gradient(180deg, rgba(216, 245, 0, 0.08), transparent);
        }
        .insight-section {
          margin-bottom: 36px;
        }
        .insight-section h2 {
          margin-bottom: 14px;
        }
        .insight-section p {
          margin-bottom: 14px;
        }
        .insight-faq-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .insight-faq-item {
          padding: 22px 24px;
        }
        .insight-faq-item h3 {
          font-size: 1rem;
          margin-bottom: 8px;
        }
        .insight-faq-item p {
          margin-bottom: 0;
        }
        .insight-related {
          padding: 28px;
          margin-top: 40px;
        }
        .insight-related .btn {
          margin-top: 8px;
        }
      `}</style>
    </>
  );
}
