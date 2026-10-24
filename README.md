# Meyar for Valuation — Website

Single-page marketing site for Meyar for Valuation (معيار للتثمين), an independent valuation and appraisal firm in Muscat, Oman.

## Structure

- `index.html` — all page content (semantic HTML5, SEO meta tags, JSON-LD structured data)
- `assets/css/style.css` — styling
- `assets/js/main.js` — mobile nav toggle, footer year
- `assets/img/favicon.svg` — "TM" monogram favicon
- `robots.txt`, `sitemap.xml` — SEO crawling files

No build step, framework, or backend required — static files only.

## Deploying on Plesk

1. In Plesk, open the domain → **Git** and connect this repository.
2. Set the deployment path to the domain's document root (e.g. `httpdocs` or `public`).
3. Enable auto-deploy on push, or pull manually after each push to `main`.

## Notes / follow-ups

- The header logo is rebuilt as text/CSS (no clean source logo file was available). Swap in a real SVG/PNG logo in `assets/img/` and update `index.html` when one is ready.
- Partner bank names are listed as plain text (not logos) to avoid using low-quality/trademarked images.
- No `og:image`/`twitter:image` is set yet (no source photography was available). Add a 1200x630 share image to `assets/img/` and reference it in `index.html` for better social-share previews.
- Update `sitemap.xml`'s `<lastmod>`/content whenever the page changes meaningfully.
