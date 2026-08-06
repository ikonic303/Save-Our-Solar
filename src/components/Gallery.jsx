import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { GALLERY_IMAGES } from "../data/gallery";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);
  const isOpen = openIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i + 1) % GALLERY_IMAGES.length);
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <section className="section gallery-section">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Real installs, real results</span>
          <h2>See our network's work</h2>
          <p className="text-muted">
            A look at real solar installations completed through the Save Our
            Solar Club network, coast to coast.
          </p>
        </div>

        <div className="gallery-grid">
          {GALLERY_IMAGES.map((img, i) => (
            <button
              type="button"
              className="gallery-item"
              key={img.src}
              onClick={() => setOpenIndex(i)}
              aria-label={`View larger image: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <span className="gallery-item-overlay">
                <ZoomIn size={20} strokeWidth={2} />
              </span>
            </button>
          ))}
        </div>
      </div>

      {isOpen &&
        createPortal(
          // Rendered via portal directly on document.body — <main> has a page-transition
          // CSS animation on transform/opacity, which makes browsers implicitly promote it
          // to its own stacking context with no explicit z-index. That traps any
          // position:fixed descendant (like this lightbox) below the sticky header's
          // z-index:100, no matter how high a z-index we give the lightbox itself.
          // Portaling to <body> escapes that ancestor stacking context entirely.
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            onClick={() => setOpenIndex(null)}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={26} />
            </button>

            <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
              <img src={GALLERY_IMAGES[openIndex].src} alt={GALLERY_IMAGES[openIndex].alt} />
              <figcaption>
                {openIndex + 1} / {GALLERY_IMAGES.length}
              </figcaption>
            </figure>

            <button
              type="button"
              className="lightbox-nav lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i + 1) % GALLERY_IMAGES.length);
              }}
              aria-label="Next image"
            >
              <ChevronRight size={26} />
            </button>
          </div>,
          document.body
        )}

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .gallery-item {
          position: relative;
          aspect-ratio: 1 / 1;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border);
          padding: 0;
          cursor: pointer;
          background: var(--surface-alt);
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .gallery-item-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(11, 14, 18, 0);
          color: transparent;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .gallery-item:hover img,
        .gallery-item:focus-visible img {
          transform: scale(1.06);
        }
        .gallery-item:hover .gallery-item-overlay,
        .gallery-item:focus-visible .gallery-item-overlay {
          background: rgba(11, 14, 18, 0.35);
          color: #fff;
        }
        @media (min-width: 640px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (min-width: 960px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(11, 14, 18, 0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: lightbox-fade-in 0.2s ease both;
        }
        @keyframes lightbox-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .lightbox-figure {
          margin: 0;
          max-width: min(90vw, 1000px);
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .lightbox-figure img {
          max-width: 100%;
          max-height: 78vh;
          border-radius: var(--radius-md);
          object-fit: contain;
          box-shadow: var(--shadow-dark);
        }
        .lightbox-figure figcaption {
          color: var(--text-on-dark-muted);
          font-size: 0.85rem;
        }
        .lightbox-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #fff;
          width: 40px;
          height: 40px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .lightbox-close:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .lightbox-nav {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #fff;
          width: 44px;
          height: 44px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
        }
        .lightbox-nav:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        @media (max-width: 640px) {
          .lightbox-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          .lightbox-prev {
            left: 8px;
          }
          .lightbox-next {
            right: 8px;
          }
        }
      `}</style>
    </section>
  );
}
