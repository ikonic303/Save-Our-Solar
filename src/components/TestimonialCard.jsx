// No testimonials have been supplied by the client yet.
// This renders a clearly-marked empty/placeholder state — do NOT fill in with invented quotes,
// names, star ratings, or review counts. Replace with real TestimonialCard instances once available.
export default function TestimonialCard({ quote, name, location, rating }) {
  if (!quote) {
    return (
      <div className="placeholder-block">
        Customer testimonials coming soon. [PLACEHOLDER — no reviews provided yet]
      </div>
    );
  }

  return (
    <div className="card testimonial-card">
      {rating && <div className="testimonial-rating">{"★".repeat(rating)}</div>}
      <p className="testimonial-quote">&ldquo;{quote}&rdquo;</p>
      <p className="testimonial-attribution">
        <strong>{name}</strong>
        {location && <span className="text-muted"> — {location}</span>}
      </p>
    </div>
  );
}
