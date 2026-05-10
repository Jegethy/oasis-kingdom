# Oasis Kingdom — Official Landing Page

A modern, responsive landing page for Oasis Kingdom built with Astro. Minimal, atmospheric, and optimized for Cloudflare Pages deployment.

## Quick Start

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The site will hot-reload as you make changes.

### Build for Production

```bash
npm run build
```

This generates a static site in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Site Content

Edit [src/data/site.ts](src/data/site.ts) to customize:
- Site title, description, tagline, and supporting text
- Social media links (Discord, Twitter, Instagram, TikTok, Email)
- Copyright year
- Color palette

### Styling

Edit [src/styles/global.css](src/styles/global.css) to customize:
- CSS custom properties (colors, fonts, spacing)
- Layout and responsive breakpoints
- Animations and transitions
- Hover/focus states

### Page Content

Edit [src/pages/index.astro](src/pages/index.astro) to modify:
- HTML structure and metadata
- Open Graph and Twitter cards
- Font imports
- SVG icons for social links

### Favicon

Replace [public/favicon.svg](public/favicon.svg) with your own SVG icon.

## Deployment

### Cloudflare Pages

This project is configured for Cloudflare Pages deployment.

1. Push your repository to GitHub
2. Connect your GitHub repository to Cloudflare Pages
3. Set the following build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`

The site will automatically deploy on every push to the main branch.

### Deployment to Other Platforms

The `dist/` folder contains a fully static site and can be deployed to any static hosting service:
- **Vercel:** Upload the `dist` folder
- **Netlify:** Upload the `dist` folder
- **GitHub Pages:** Use the `dist` folder as the source
- **AWS S3 + CloudFront:** Sync the `dist` folder to S3

## Project Structure

```
oasis-kingdom/
├── src/
│   ├── pages/
│   │   └── index.astro          # Main landing page
│   ├── styles/
│   │   └── global.css           # Global styles & CSS variables
│   └── data/
│       └── site.ts              # Site configuration & content
├── public/
│   └── favicon.svg              # Favicon (SVG)
├── package.json                 # Dependencies & scripts
├── astro.config.mjs             # Astro configuration
└── README.md                     # This file
```

## Technical Details

- **Framework:** Astro 4.13+
- **Styling:** CSS (no framework required)
- **Fonts:** Google Fonts (Cinzel Decorative, Inter)
- **Icons:** Inline SVG
- **Static Only:** No backend, database, authentication, or cookies
- **Accessibility:** WCAG 2.1 AA compliant
- **SEO:** Open Graph, Twitter Cards, responsive viewport

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first responsive design (320px and up)

## License

© 2026 Oasis Kingdom. All rights reserved.
