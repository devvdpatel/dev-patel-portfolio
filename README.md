# Dev Patel Portfolio

Source for my portfolio site, live at [dev-p-portfolio.vercel.app](https://dev-p-portfolio.vercel.app).

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and lucide-react icons. It deploys to Vercel on every push to `main`.

## Run it locally

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build; run before pushing to catch errors
npm run lint
```

## Where the content lives

Most text is in `data/`, so content changes rarely touch a component.

| File | What it holds |
|---|---|
| `data/profile.ts` | Name, rotating roles, tagline, links, hero stats, SEO title and description |
| `data/experience.ts` | Work history bullets |
| `data/projects.ts` | Project cards (`featured: true` pins a card to the top) |
| `data/skills.ts` | Skill categories |
| `data/education.ts` | Degrees and coursework |
| `public/resume.pdf` | The resume behind every download button; replace the file and keep the name |

Section headings and the About text are in `components/` (`About.tsx`, `Projects.tsx`, and so on).

Keep the numbers in `data/` matching the resume, since recruiters often open both.

## Project structure

```
app/          layout, page, metadata, social image, sitemap, robots, 404
components/   one file per section, plus small shared pieces
data/         site content
public/       resume.pdf
```
