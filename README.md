# RESCITE

A single-page resume / portfolio site for **Oscar Ayala** — Software Quality Assurance Analyst and Agentic AI Practitioner.

🌐 **Live site:** https://sikaros.github.io/rescite/

## What this is

A monochrome, paper-resume-aesthetic web app built with **Sencha Ext JS 7.7** (modern toolkit). Designed to be skim-friendly for recruiters in 10 seconds and drill-in for those who want depth. Light + dark mode, scroll-reveal animations, JSON-LD `Person`/`ProfilePage` schema for AI/SEO, A11y 100 / SEO 100 on Lighthouse.

The site is also a portfolio piece: the source demonstrates Sencha Ext JS architecture, theming with CSS custom properties, MVVM patterns, IntersectionObserver-driven scroll effects, and accessibility discipline (Lighthouse 100 a11y, full `prefers-reduced-motion` support).

## Tech stack

- **Framework:** Sencha Ext JS 7.7.0.31 (modern toolkit only)
- **Build:** Sencha Cmd 7.7.0.36
- **Theme:** Custom local package `rescite-theme` extending `theme-material`
- **Light/dark:** CSS custom properties driven by `prefers-color-scheme` + a runtime toggle
- **Hosting:** GitHub Pages (served from `/docs/`)

## Repo layout

```
RESCITE/
├── rescite/                              # Sencha workspace + app source
│   ├── app/
│   │   ├── data/Resume.js                # All resume content (single source of truth)
│   │   ├── view/<section>/               # One component per page section
│   │   └── view/main/                    # Shell + scroll/theme controller
│   ├── packages/local/rescite-theme/     # Custom theme package
│   ├── app.json                          # Sencha app manifest
│   └── index.html                        # Pre-Ext theme bootstrap + JSON-LD
├── docs/                                 # Production build (served by GitHub Pages)
└── .gitignore                            # Excludes _source/, rescite/build/, rescite/ext/
```

## Build locally

You'll need [Sencha Cmd](https://www.sencha.com/products/extjs/cmd-download/) installed.

```sh
# 1. Restore the Ext JS framework (gitignored, ~140MB)
cd rescite
sencha framework upgrade ext

# 2. Development with live reload (localhost:1841)
sencha app watch

# 3. Production build → docs/
sencha app build production
cp -r build/production/RESCITE/* ../docs/
```

## Editing content

All resume content (hero, about, experience, skills, projects, certifications, education, etc.) lives in one file:
[`rescite/app/data/Resume.js`](rescite/app/data/Resume.js). Edit, rebuild, commit both `rescite/` and `docs/`.

## License

Content (resume text, photo, certifications) is © Oscar Ayala — all rights reserved.
Source code structure may be used as reference for similar personal-site projects.
