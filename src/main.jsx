import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

const container = document.getElementById('root')

// Production pages arrive prerendered by scripts/prerender.js; hydrate that markup.
// Its head tags are only for crawlers — React hoists its own copies — so drop them first
// to avoid duplicate <title>/<meta>. The dev server serves an empty #root, so render.
if (container.hasChildNodes()) {
  document.head.querySelectorAll('[data-prerender]').forEach((node) => node.remove())
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
