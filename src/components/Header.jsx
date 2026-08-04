import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Phone, Mail, Clock3 } from "lucide-react";
import LightningLogo from "./LightningLogo";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, HOURS } from "../data/contact";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/membership", label: "Membership" },
  { to: "/services", label: "Services" },
  { to: "/insurance", label: "Insurance" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-bar-inner">
          <span className="utility-bar-badge">
            <Clock3 size={14} style={{ marginRight: 6, verticalAlign: -2 }} />
            {HOURS} Emergency Dispatch
          </span>
          <div className="utility-bar-links">
            <a href={PHONE_TEL}>
              <Phone size={14} />
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="utility-email">
              <Mail size={14} />
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
      <div className="container site-header-inner">
        <Link to="/" aria-label="Save Our Solar Club home" onClick={() => setOpen(false)}>
          <LightningLogo size={52} />
        </Link>

        <nav className={`site-nav ${open ? "is-open" : ""}`} aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === "/"} onClick={() => setOpen(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="site-nav-cta">
            <a className="btn btn-outline" href={PHONE_TEL}>
              {PHONE_DISPLAY}
            </a>
            <Link className="btn btn-primary" to="/membership">
              Enroll Now
            </Link>
          </div>
        </nav>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--surface);
          border-bottom: 1px solid var(--border);
        }
        .site-header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .nav-toggle {
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
          z-index: 110;
        }
        .nav-toggle span {
          width: 24px;
          height: 2px;
          background: var(--ink);
          border-radius: 2px;
        }
        .site-nav {
          position: fixed;
          inset: 72px 0 0 0;
          background: var(--surface);
          transform: translateX(100%);
          transition: transform 0.25s ease;
          overflow-y: auto;
          padding: 24px 20px 40px;
        }
        .site-nav.is-open {
          transform: translateX(0);
        }
        .site-nav ul {
          list-style: none;
          margin: 0 0 24px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .site-nav a {
          display: block;
          padding: 14px 8px;
          text-decoration: none;
          font-weight: 700;
          color: var(--ink);
          border-bottom: 1px solid var(--border);
        }
        .site-nav a.active {
          color: var(--electric-pink-deep);
        }
        .site-nav-cta {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .site-nav-cta .btn {
          width: 100%;
        }

        @media (min-width: 960px) {
          .nav-toggle {
            display: none;
          }
          .site-nav {
            position: static;
            inset: auto;
            transform: none;
            padding: 0;
            overflow: visible;
            display: flex;
            align-items: center;
            gap: 32px;
          }
          .site-nav ul {
            flex-direction: row;
            margin: 0;
            gap: 24px;
          }
          .site-nav a {
            padding: 8px 0;
            border-bottom: none;
            font-weight: 600;
          }
          .site-nav-cta {
            flex-direction: row;
          }
          .site-nav-cta .btn {
            width: auto;
          }
        }
      `}</style>
    </header>
  );
}
