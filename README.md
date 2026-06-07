# AY BHATTI FARM Website

Premium React + Vite + Tailwind CSS website for AY BHATTI FARM, Multan, Pakistan.

## Features

- Mobile-first mango e-commerce and lead-generation landing page
- React Router contact page
- Framer Motion animations and counters
- Floating WhatsApp CTA
- Mango collection, comparison, testimonials, FAQ, gallery and delivery process
- SEO meta handling, schema markup, `robots.txt` and `sitemap.xml`
- Netlify-ready `netlify.toml`
- Netlify form detection for contact inquiries

## Setup

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Configure Real Business Details

Update WhatsApp, phone, email, address and domain values in:

```text
src/data/siteData.js
```

The current values are placeholders and should be replaced before launch.

## Netlify

Netlify build settings are already included:

- Build command: `npm run build`
- Publish directory: `dist`
- SPA fallback redirect: `/* -> /index.html`
