/**
 * PROFILE: identity, links, headline, and the numbers in the hero.
 * Everything here flows into the Hero, About, Contact, Footer, and SEO tags.
 */

export const profile = {
  name: "Dev Patel",

  // `roles` rotate under the name in the hero. `headline` is used in metadata
  // and the social share image.
  headline: "Data Analyst · Forecasting, Inventory & Finance",
  roles: [
    "Data Analyst",
    "Operations Analyst",
    "Supply Chain Analyst",
    "Financial Analyst",
  ],

  // One line under the rotating role (keep it under ~140 characters).
  tagline:
    "I build forecasting, simulation, and optimization models in Python, SQL, and R, mostly for supply chain and finance decisions.",

  // Short bio used for metadata and anywhere a one-paragraph summary is needed.
  summary:
    "Data analyst with an M.S. in Business Analytics from Cal State East Bay and a B.S. in Mathematics from Cal State Stanislaus. I've worked on budget analysis for the City of Modesto, admissions reporting at Cal State Stanislaus, and a team capstone that forecasts Walmart demand and sets reorder policies.",

  location: "San Francisco, CA · Open to relocation · Remote or hybrid",

  // Contact and social links
  email: "careers.devpatel@gmail.com",
  linkedin: "https://www.linkedin.com/in/devpatel2000/",
  github: "https://github.com/devvdpatel",

  // Path to the resume inside /public. Replace public/resume.pdf to update it.
  resume: "/resume.pdf",

  // Phone is left off the public site on purpose.
  // phone: "+1 (415) 963-2605",
};

/**
 * SITE / SEO config.
 */
export const site = {
  url: "https://dev-p-portfolio.vercel.app",
  title: "Dev Patel | Data Analyst",
  description:
    "Dev Patel, M.S. Business Analytics (Cal State East Bay). Demand forecasting, inventory optimization, and financial analysis in Python, SQL, and R.",
  keywords: [
    "Dev Patel",
    "Data Analyst",
    "Operations Analyst",
    "Supply Chain Analyst",
    "Financial Analyst",
    "Demand Forecasting",
    "Inventory Optimization",
    "SQL",
    "Python",
    "R",
    "Tableau",
    "Portfolio",
  ],
};

/**
 * Stat cards in the hero. Every number here should match the resume.
 */
export const stats = [
  { value: "3.8/4.0", label: "Graduate GPA" },
  { value: "$228.6M", label: "City budget analyzed" },
  { value: "600", label: "Item-store series forecast" },
  { value: "6", label: "Portfolio projects" },
];
