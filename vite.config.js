import { defineConfig } from 'vite'

export default defineConfig({
  base: '/math-blast-website/',
  plugins: [],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
        privacy: 'privacy.html',
        terms: 'terms.html',
        legal: 'legal.html'
      }
    }
  }
})
