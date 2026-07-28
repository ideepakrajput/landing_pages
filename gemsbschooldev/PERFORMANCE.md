# GEMS B School landing page — performance handoff

## Lighthouse results

Measured locally with Lighthouse 13 on July 28, 2026.

| Profile | Performance | Accessibility | Best Practices | SEO | LCP | TBT | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile | 99 | 100 | 100 | 100 | 2.1 s | 0 ms | 0.003 |
| Desktop | 100 | 100 | 100 | 100 | 0.7 s | 0 ms | 0.005 |

The reference page scored 53 for mobile performance in the same test environment, with a 6.7 s LCP and 250 ms TBT.

## What changed

- Rebuilt the page in semantic HTML, custom CSS and 2.8 KB of dependency-free JavaScript.
- Preserved the complete active landing-page content: 13 programmes, 24 recruiter logos, 9 student stories, 3 awards and events, 6 faculty members, 4 campuses, and the annual placement report.
- Removed Bootstrap, Font Awesome, Google Fonts and other render-blocking third-party UI dependencies.
- Downloaded every image found in the reference page source for local ownership.
- Added responsive WebP hero sources and optimised WebP derivatives for editorial, programme, testimonial, faculty, award and campus media.
- Prioritised only the hero image and primary font; below-the-fold images use native lazy loading and asynchronous decoding.
- Added explicit image dimensions, keyboard navigation, visible focus states, reduced-motion handling and accessible controls.

## Files

- `index.html` — production landing page
- `assets/css/styles.css` — responsive page styles
- `assets/js/main.js` — mobile navigation, programme filtering, rotating headline and testimonial controls
- `assets/images/` — complete local image library and optimised derivatives
- `reports/` — Lighthouse JSON reports

## Re-run Lighthouse

Serve the workspace root, then audit the page:

```sh
python3 -m http.server 8765
npx lighthouse http://127.0.0.1:8765/gemsbschooldev/ --only-categories=performance,accessibility,best-practices,seo
```
