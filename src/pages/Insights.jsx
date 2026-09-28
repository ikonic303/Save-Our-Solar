import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import CtaBand from "../components/CtaBand";
import { getSortedBlogPosts } from "../data/blogPosts";

function formatDate(dateStr) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function Insights() {
  const posts = getSortedBlogPosts();

  return (
    <>
      <Seo
        title="Insights"
        description="Guides and answers on solar maintenance, repairs, monitoring, insurance, and upgrades from Save Our Solar Club."
        path="/insights"
      />

      <Hero
        compact
        eyebrow="Insights"
        title="Solar guides, straight answers."
        subtitle="Practical guidance on keeping your solar system running well — maintenance, repairs, monitoring, insurance, and upgrades, explained in plain language."
      />

      <div className="section-divider" />

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {posts.map((post) => (
              <Link key={post.slug} to={`/insights/${post.slug}`} className="card insight-card">
                <span className="insight-card-meta">
                  <span className="insight-card-category">{post.category}</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </span>
                <h3>{post.title}</h3>
                <p className="text-muted">{post.excerpt}</p>
                <span className="service-card-link">Read more &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a question we didn't cover?"
        subtitle="Reach out and we'll point you in the right direction."
        primaryCta={{ to: "/contact", label: "Contact Us" }}
        secondaryCta={{ to: "/services", label: "Browse Services" }}
      />

      <style>{`
        .insight-card {
          display: block;
          padding: 24px;
          text-decoration: none;
          height: 100%;
        }
        .insight-card h3,
        .insight-card p {
          text-decoration: none;
        }
        .insight-card-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .insight-card-category {
          font-family: var(--heading);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--electric-pink-deep);
        }
      `}</style>
    </>
  );
}
