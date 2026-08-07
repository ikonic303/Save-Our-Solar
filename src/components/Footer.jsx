import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock3, ExternalLink } from "lucide-react";
import LightningLogo from "./LightningLogo";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  ADDRESS_FULL,
  HOURS,
  FACEBOOK_URL,
  COMPANY_NAME,
  LEGAL_ENTITY_NAME,
} from "../data/contact";
import { SERVICE_CATEGORIES } from "../data/services";

export default function Footer() {
  const year = new Date().getFullYear();
  const featuredServices = SERVICE_CATEGORIES.slice(0, 5);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <LightningLogo size={48} />
          <p className="text-muted" style={{ marginTop: 16, maxWidth: 300 }}>
            24/7 protection and dispatch for homeowners who depend on their
            solar investment.
          </p>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline footer-social-btn"
          >
            Facebook
            <ExternalLink size={14} />
          </a>
        </div>

        <div>
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/membership">Membership</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/insurance">Insurance Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links">
            {featuredServices.map((cat) => (
              <li key={cat.id}><Link to={`/services#${cat.id}`}>{cat.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-contact-list">
            <li>
              <Phone size={15} />
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            </li>
            <li>
              <Mail size={15} />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <MapPin size={15} />
              <span>{ADDRESS_FULL}</span>
            </li>
            <li>
              <Clock3 size={15} />
              <span>{HOURS}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="footer-bottom-row">
          <p className="text-muted footer-legal">
            &copy; {year} {COMPANY_NAME}. All rights reserved. Operated by{" "}
            {LEGAL_ENTITY_NAME}.
          </p>
          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: var(--ink);
          color: var(--text-on-dark);
          padding: 64px 0 28px;
        }
        .footer-grid {
          display: grid;
          gap: 40px;
          grid-template-columns: 1fr;
        }
        .footer-heading {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-on-dark);
          margin-bottom: 4px;
        }
        .footer-social-btn {
          margin-top: 12px;
          color: var(--text-on-dark);
        }
        .footer-links {
          list-style: none;
          margin: 16px 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 11px;
          color: var(--text-on-dark-muted);
          font-size: 0.92rem;
        }
        .footer-links a {
          text-decoration: none;
          color: var(--text-on-dark-muted);
        }
        .footer-links a:hover {
          color: var(--energy-yellow);
        }
        .footer-contact-list {
          list-style: none;
          margin: 16px 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
          color: var(--text-on-dark-muted);
          font-size: 0.92rem;
        }
        .footer-contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .footer-contact-list svg {
          color: var(--energy-yellow);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .footer-contact-list a {
          text-decoration: none;
          color: var(--text-on-dark-muted);
        }
        .footer-contact-list a:hover {
          color: var(--energy-yellow);
        }
        .footer-contact-list em {
          display: block;
          font-style: normal;
          font-size: 0.74rem;
          opacity: 0.65;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          margin-top: 48px;
          padding-top: 22px;
          font-size: 0.82rem;
        }
        .footer-bottom-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-legal-links {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 0.82rem;
        }
        .footer-legal-links a {
          color: var(--text-on-dark-muted);
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .footer-legal-links a:hover {
          color: var(--energy-yellow);
        }
        @media (min-width: 720px) {
          .footer-grid {
            grid-template-columns: 1.2fr 0.9fr 0.9fr 1fr;
          }
        }
        @media (min-width: 620px) {
          .footer-bottom-row {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
}
