# Dev Patel — Portfolio Website

A modern, fast, recruiter-friendly portfolio built with **Next.js 14 (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**. Designed to be scannable in under 30 seconds, fully responsive, accessible, dark-mode ready, and deployable to **Vercel** in minutes.

> Pre-filled with Dev Patel's real profile, projects, and links. Everything you'd want to change lives in the **`data/`** folder — no need to touch component code.

---

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14 (App Router) | Fast, SEO-friendly, first-class Vercel support |
| Language | TypeScript | Catches typos before they ship |
| Styling | Tailwind CSS v3 | Rapid, consistent, easy to re-theme |
| Icons | lucide-react | Clean, lightweight, tree-shakeable |
| Animation | IntersectionObserver (custom `Reveal`) | Subtle scroll reveals, **zero** heavy dependencies |
| Fonts | Inter + Sora via `next/font` | Self-hosted, no layout shift |

---

## Quick start

**Prerequisites:** [Node.js](https://nodejs.org) 18.17 or newer (includes `npm`).

In **VS Code**, open this folder and open the integrated terminal (``Ctrl + ` ``), then:

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server
```

Open **http://localhost:3000**. Edits to any file hot-reload instantly.

Other commands:

```bash
npm run build    # production build (run this before deploying to catch errors)
npm run start    # serve the production build locally
npm run lint     # check for lint issues
```

---

## Project structure

```
dev-patel-portfolio/
├── app/
│   ├── layout.tsx            # <html> shell: fonts, SEO metadata, theme script, JSON-LD
│   ├── page.tsx             # composes the page sections in order
│   ├── globals.css          # Tailwind + design tokens (buttons, cards, animations)
│   ├── opengraph-image.tsx  # auto-generated social share image (1200×630)
│   ├── icon.svg             # favicon (DP monogram)
│   ├── sitemap.ts           # /sitemap.xml
│   ├── robots.ts            # /robots.txt
│   └── not-found.tsx        # 404 page
├── components/              # one file per UI piece (all reusable)
│   ├── Navbar.tsx  Hero.tsx  About.tsx  Skills.tsx
│   ├── Projects.tsx  ProjectCard.tsx  Experience.tsx
│   ├── Education.tsx  Resume.tsx  Contact.tsx  Footer.tsx
│   └── Section.tsx  SectionHeading.tsx  Reveal.tsx  RotatingText.tsx
│       ThemeToggle.tsx  SocialLinks.tsx
├── data/                    # ← EDIT THESE to make the site yours
│   ├── profile.ts           # name, headline, links, summary, hero stats, SEO
│   ├── skills.ts            # skill categories + items
│   ├── projects.ts          # project cards
│   ├── experience.ts        # work history
│   └── education.ts         # degrees + coursework
├── public/
│   └── resume.pdf           # ← replace with your latest résumé (keep the name)
├── tailwind.config.ts       # colors, fonts, animations
└── package.json
```

---

## How to customize

Almost everything is data-driven. You rarely need to open a component.

### 1. Your details, links, and headline — `data/profile.ts`
- `name`, `headline`, `roles` (the rotating words in the hero), `tagline`, `summary`
- `email`, `linkedin`, `github`
- `stats` — the four big numbers in the hero
- **Email note:** the file defaults to `careers.devpatel@gmail.com`. Your résumé uses `devptl2000@gmail.com`. **Pick one** and use it everywhere.

### 2. Your résumé PDF — `public/resume.pdf`
Replace the file at **`public/resume.pdf`** with your latest version, keeping the **same filename**. Every "Download Résumé" button points there automatically. (To use a different name, update `resume:` in `data/profile.ts`.)

### 3. Skills — `data/skills.ts`
Edit categories and the `items` array in each. Each category's `icon` must be one of:
`bar-chart`, `code`, `trending-up`, `wallet`, `database`, `clipboard`.

### 4. Projects — `data/projects.ts`
Each object is one card. Set `github`/`demo` to a URL, or `null` to hide that button. `featured: true` pins a card to the top with a highlighted border. Three projects currently link to your GitHub profile — paste the specific repo URLs once those repos are public.

### 5. Experience & Education — `data/experience.ts`, `data/education.ts`
Plain arrays. Lead each experience bullet with an action verb and a number.

### 6. Colors — `tailwind.config.ts`
Change the whole accent palette in one place by editing the `brand` color scale (and `accent` for the green "impact" highlights). The default is an analytical indigo → emerald.

### 7. SEO — `data/profile.ts` (`site` object)
After deploying, set `site.url` to your real domain so Open Graph tags, the sitemap, and robots.txt generate correct absolute links.

---

## Deploy to Vercel (step by step)

### Option A — GitHub + Vercel dashboard (recommended)

1. **Create a GitHub repo** and push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/devvdpatel/portfolio.git
   git push -u origin main
   ```
2. Go to **https://vercel.com** and sign in with GitHub.
3. Click **Add New… → Project**, then **Import** your `portfolio` repo.
4. Vercel auto-detects Next.js — leave all build settings at their defaults and click **Deploy**.
5. In ~1 minute you'll get a live URL like `https://portfolio-xyz.vercel.app`.
6. Copy that URL into `site.url` in `data/profile.ts`, commit, and push — Vercel redeploys automatically on every push.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # first run links/creates the project (accept defaults)
vercel --prod   # deploy to production
```

### Custom domain (optional)
In your Vercel project → **Settings → Domains**, add a domain (e.g. `devpatel.com`) and follow the DNS instructions. Then update `site.url`.

---

## SEO included out of the box
- Per-page `<title>`/description, Open Graph + Twitter cards (`app/layout.tsx`)
- Auto-generated **social share image** (`app/opengraph-image.tsx`)
- **JSON-LD `Person`** structured data for rich search results
- `sitemap.xml` and `robots.txt`
- Semantic landmarks (`<header> <main> <footer>`), one `<h1>`, logical heading order

## Accessibility included
- "Skip to content" link, visible keyboard focus rings, `aria-label`s on icon-only buttons
- Respects `prefers-reduced-motion` (animations disable themselves)
- WCAG-AA-minded color contrast in both light and dark mode
- Fully keyboard-navigable; semantic `<dl>`, `<ul>`, `<article>` markup

---

## Ideas to make it even stronger
- Add **1–2 screenshots or a short GIF** per featured project (recruiters love visuals).
- Embed a **live Tableau/Power BI dashboard** or a Streamlit demo and link it as a "Live demo".
- Add a `/resume` route or a "Case study" page for your flagship inventory-optimization project.
- Wire the contact section to a form via **Formspree** or **Resend** if you prefer a form over `mailto:`.
- Add **Vercel Analytics** (`npm i @vercel/analytics`) to see how recruiters use the page.

---

Built with Next.js & Tailwind CSS. © Dev Patel.
