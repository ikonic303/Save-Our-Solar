import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="This page doesn't exist." path="/404" />
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <h1>404</h1>
          <p className="text-muted">We couldn't find that page.</p>
          <Link className="btn btn-primary" to="/">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
