# SSEC Sutomo 1 — Official Website

<p align="center">
  <img src="assets/home/ssec.png" alt="SSEC Sutomo 1 logo" width="420">
</p>

<p align="center">
  The official website for <strong>Sutomo 1 Science Exploration Club</strong>, a student science community at SMA Sutomo 1 Medan.
</p>

## About the project

This website presents SSEC's identity, activities, annual science events, organization history, member profiles, FAQ, and contact channels through an interactive visual experience.

The site is built as a static front-end project and can be hosted on GitHub Pages, Vercel, Netlify, or any conventional web server.

## Highlights

- Animated landing page and loading sequence
- Responsive desktop and mobile navigation
- Club profile and science exploration overview
- TWOS activity archive and history pages
- TACOS event showcase
- Interactive galleries and sliders
- Instagram embeds for committee archives
- FAQ accordion and visitor-message interface
- Reduced-motion-aware loading behavior

## Technology

| Area | Technology |
| --- | --- |
| Structure | HTML5 |
| Styling | CSS3, responsive layouts, animations |
| Interaction | Vanilla JavaScript |
| Data submission | Firebase Firestore |
| External media | Instagram Embed API |
| Hosting | Static-site compatible |

## Project structure

```text
.
├── index.html              Main landing page
├── style.css               Main website styles
├── twos-2024.html          TWOS 2024/2025 gallery
├── twos-history.html       TWOS history page
├── twos-flow.css           TWOS gallery styles
├── twos-flow.js            TWOS gallery interactions
├── assets/                 Images and visual assets
├── scripts/                Repository validation tools
└── .github/workflows/      Automated quality checks
```

## Run locally

Because the project uses browser modules and external embeds, run it through a local HTTP server instead of opening `index.html` directly.

### Python

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Visual Studio Code

You can also use the **Live Server** extension and open `index.html` through it.

## Firebase setup

The FAQ message form uses Firebase Firestore. Before enabling submissions, define a Firebase web configuration and make sure Firestore security rules only allow the operations the site genuinely needs.

Do not commit service-account credentials, private keys, or admin SDK secrets. Firebase web configuration values are client-side identifiers, but database security must still be enforced through Firestore rules.

## Quality checks

The repository includes a static-site validator that checks local HTML and CSS references for missing files.

Run it locally with:

```bash
node scripts/check-static-site.mjs
```

The same validation runs automatically on pushes and pull requests through GitHub Actions.

## Main pages

- `index.html` — homepage and full club presentation
- `twos-2024.html` — TWOS 2024/2025 visual archive
- `twos-history.html` — history of The Wonder of Science

## Credits

- **Developer:** Victoria Mitsu
- **Contributor:** Cyra Naysa Y.
- **Writer:** Eva Cangelia J.

## Content rights

The SSEC name, writing, photographs, event documentation, logos, and other organization materials belong to their respective owners and contributors. They may not be reused or redistributed without permission.
