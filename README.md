# Meyar for Valuation — Website

Bilingual marketing site for Meyar for Valuation (معيار للتثمين), an independent valuation and appraisal firm in Muscat, Oman.

## Structure

- `index.html` — English page (`lang="en" dir="ltr"`)
- `ar/index.html` — Arabic page (`lang="ar" dir="rtl"`), full translation, mirrored layout
- `assets/css/style.css` — shared stylesheet for both languages. Uses CSS logical properties (`margin-inline-start`, `inset-inline-end`, etc.) so RTL mirroring comes from `dir="rtl"` on `<html>` rather than a separate stylesheet
- `assets/js/main.js` — mobile nav toggle, sticky header state, scroll-reveal animations, animated stat counters, back-to-top button
- `assets/img/favicon.svg` — "TM" monogram favicon
- `assets/img/clients/` — the 11 partner bank logos (see below)
- `robots.txt`, `sitemap.xml` — SEO crawling files, with `hreflang` alternates linking the two language versions

No build step, framework, or backend required — static files only.

## Internationalisation

Each language is its own fully server-rendered HTML page (not a JS-driven toggle), which keeps both versions fully crawlable and indexable. Both pages carry `hreflang` alternate `<link>` tags to each other plus `x-default` → English, and `sitemap.xml` repeats the same alternates per Google's multilingual sitemap format.

Arabic headings use "Markazi Text" and body text uses "Cairo" (loaded alongside the English "Playfair Display"/"Inter" pair in the same Google Fonts request). If you edit copy on one language page, remember to mirror the change on the other — there is no shared content source.

## Client logos

Real bank logos live in `assets/img/clients/`. Three (`ahlibank.png`, `oman-housing-bank.png`, `ahli-islamic.png`) are pure-white artwork and ship with the `logo-invert` class, which CSS-inverts them to render dark on the light tile — don't remove that class or they'll disappear on the white card.

## Deploying on Plesk

1. In Plesk, open the domain → **Git** and connect this repository.
2. Set the deployment path to the domain's document root (e.g. `httpdocs` or `public`).
3. Enable auto-deploy on push, or pull manually after each push to `main`.

## Notes / follow-ups

- The header logo is rebuilt as text/CSS (no clean source logo file was available). Swap in a real SVG/PNG logo in `assets/img/` and update both HTML files when one is ready.
- No `og:image`/`twitter:image` is set yet (no source photography was available). Add a 1200x630 share image to `assets/img/` and reference it in both HTML files for better social-share previews.
- Update `sitemap.xml`'s content whenever either page changes meaningfully.
