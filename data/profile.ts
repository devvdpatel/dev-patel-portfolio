/**
 * ============================================================================
 * PROFILE — your identity, links, headline, and the numbers in the hero.
 * ============================================================================
 * This is the FIRST file to edit when you make the site your own.
 * Everything here flows into the Hero, About, Contact, Footer, and SEO tags.
 */

export const profile = {
  name: "Dev Patel",

  // Shown under your name. The <Hero> rotates through `roles`; `headline` is the
  // single-line fallback used in metadata and on small screens.
  headline: "Data Analyst · Data Scientist · Business & Finance Analyst",
  roles: [
    "Data Analyst",
    "Data Scientist",
    "Business Analyst",
    "Finance Analyst",
  ],

  // One punchy line for the hero (keep it under ~140 characters).
  tagline:
    "M.S. Data Science. I turn messy, large-scale data into forecasts, optimization decisions, and dashboards that move business metrics.",

  // 2–3 sentences for the About section.
  summary:
    "I'm a data scientist and analyst with an M.S. in Data Science (CSU East Bay) and a B.S. in Mathematics. My work spans 50M+ row demand-forecasting pipelines, financial forecasting for multi-million-dollar public budgets, and predictive marketing that lifted enrollment 10%. I pair statistical rigor — cross-validation, Monte Carlo, optimization — with clear communication, translating models into plain-English decisions for non-technical stakeholders.",

  location: "San Francisco, CA · Open to relocation · Remote or hybrid",

  // ── Contact + social links ────────────────────────────────────────────────
  // Public contact email (chosen over the résumé's devptl2000@gmail.com).
  email: "careers.devpatel@gmail.com",
  linkedin: "https://www.linkedin.com/in/devpatel2000/",
  github: "https://github.com/devvdpatel",

  // Path to your résumé inside /public. Replace public/resume.pdf to update it.
  resume: "/resume.pdf",

  // Phone is intentionally omitted from the public site for privacy.
  // Add it back here only if you want it shown.
  // phone: "+1 (415) 963-2605",
};

/**
 * SITE / SEO config. After deploying, set `url` to your real domain
 * (e.g. https://devpatel.vercel.app) so Open Graph, sitemap, and robots
 * generate correct absolute links.
 */
export const site = {
  url: "https://dev-p-portfolio.vercel.app", // live production URL
  title: "Dev Patel — Data Analyst & Data Scientist",
  description:
    "Portfolio of Dev Patel — M.S. Data Science. Forecasting, optimization, BI dashboards, and financial analysis. Seeking Data Analyst, Data Scientist, Business & Finance Analyst roles.",
  // Keywords help you describe the page; modern search engines weight content
  // more heavily, but these are still useful for clarity.
  keywords: [
    "Dev Patel",
    "Data Analyst",
    "Data Scientist",
    "Business Analyst",
    "Financial Analyst",
    "Machine Learning",
    "Forecasting",
    "SQL",
    "Python",
    "Tableau",
    "Power BI",
    "Portfolio",
  ],
};

/**
 * Headline metrics shown as a row of stat cards in the hero.
 * Keep these punchy and truthful — recruiters scan numbers first.
 */
export const stats = [
  { value: "3.8/4.0", label: "Graduate GPA" },
  { value: "50M+", label: "Rows of data modeled" },
  { value: "90%", label: "Forecast accuracy" },
  { value: "6", label: "End-to-end projects" },
];
