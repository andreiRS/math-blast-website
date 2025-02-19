# MathBlast! Website

This repository contains the landing page for MathBlast!, a fun and engaging math game for kids aged 8-10 years old.

## Website Structure

- `src/` - Source files
  - `index.html` - Main landing page
  - `input.css` - Source CSS file with Tailwind directives
  - `main.js` - JavaScript entry point
  - `assets/` - Images and video files
- `dist/` - Production build output
- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `package.json` - Project dependencies and scripts

## Development

The website is built with HTML, Tailwind CSS, and Vite for optimal development experience and production builds. It's designed to be hosted on GitHub Pages.

### Prerequisites

- Node.js (latest LTS version)
- npm (comes with Node.js)

### Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

This will start a local development server with hot reload.

3. For production build:
```bash
npm run build
```

### Adding Content

1. Add the following files to the `src/assets` directory:
   - `hero-video.mp4` - App demo video (optimized for web)
   - `poster.jpg` - Video poster image
   - `app-store-badge.png` - App Store badge
   - `google-play-badge.png` - Google Play Store badge

### Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch.

To deploy manually:
1. Run `npm run build` to generate the production build
2. Enable GitHub Pages in your repository settings
3. Set the build directory to `/docs` or configure your deployment workflow

## License

Copyright 2025 MathBlast! All rights reserved.