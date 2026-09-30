import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The static service-area pages in public/service-areas/ are folders with an
// index.html. The dev server only serves exact public file paths, so without
// this, /service-areas/... falls through to the React app. Vercel and
// `vite preview` already resolve folder indexes.
const serviceAreaIndexes = {
  name: 'service-area-indexes',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const [path, query] = req.url.split('?')
      if (path.startsWith('/service-areas/') && path.endsWith('/')) {
        req.url = path + 'index.html' + (query ? '?' + query : '')
      }
      next()
    })
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), serviceAreaIndexes],
})
