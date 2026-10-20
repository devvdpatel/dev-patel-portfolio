/**
 * PROJECTS: each object renders one <ProjectCard>.
 * `featured: true` cards get a highlighted border and sit first.
 * Set `github` / `demo` to null to hide that button.
 *
 * The traffic and breast cancer projects link to the GitHub profile until
 * they have their own public repos.
 */

export interface Project {
  title: string;
  period: string;
  /** One-line summary shown under the title. */
  blurb: string;
  /** The question the project set out to answer. */
  problem: string;
  /** What came out of it. Keep numbers traceable to the code or report. */
  impact: string;
  /** Tools, shown as tags. */
  tags: string[];
  github: string | null;
  demo: string | null;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Agentic AI for Inventory Optimization",
    period: "Jan 2026 - May 2026",
    blurb:
      "MSBA capstone, team of 3. A Streamlit app that forecasts item-level demand on Walmart M5 data, tests reorder policies in simulation, and picks a stocking plan under a cash budget.",
    problem:
      "A store has hundreds of items and a fixed amount of cash for inventory. How much of each should it reorder, and what does a tighter budget cost?",
    impact:
      "I built the Claude assistant that answers questions about the results and reruns demand shocks on request, and connected the four modeling modules to it. The LightGBM forecast reached RMSE 1.79 (R² 0.65) on 600 item-store series (1.1M rows). In simulation, a fully binding budget raised total operating cost 5 to 12%.",
    tags: ["Python", "LightGBM", "Monte Carlo", "Pyomo", "Streamlit", "Claude API"],
    github: "https://github.com/devvdpatel/Inventory-Optimization-using-Agentic-AI",
    demo: null,
    featured: true,
  },
  {
    title: "People Analytics Warehouse",
    period: "2026",
    blurb:
      "An HR attrition warehouse built with dbt on DuckDB, with 74 data tests that run in GitHub Actions on every change.",
    problem:
      "HR metrics are only useful if people trust them. I wanted a warehouse where a broken model can't be merged.",
    impact:
      "Staging and mart layers in a star schema, 74 dbt tests, CI that blocks a merge when a test fails, and published dbt docs with column-level lineage.",
    tags: ["dbt", "DuckDB", "SQL", "GitHub Actions", "Python"],
    github: "https://github.com/devvdpatel/people-analytics-warehouse",
    demo: "https://devvdpatel.github.io/people-analytics-warehouse/",
    featured: true,
  },
  {
    title: "CampaignCanary",
    period: "2026",
    blurb:
      "A pipeline that loads paid-media data from Meta, Google, and TikTok, models it in dbt, and flags problems before they show up in a report.",
    problem:
      "Marketing reports go wrong quietly: platform spend stops matching what finance was billed, or a feed stops updating and nobody notices.",
    impact:
      "Reconciles platform spend against finance billing, flags anomalies with a rolling z-score and stale feeds with a freshness check, runs CI on every push, and uses Claude to write a short explanation of each flagged anomaly.",
    tags: ["dbt", "Python", "SQL", "DuckDB", "GitHub Actions", "Claude API"],
    github: "https://github.com/devvdpatel/campaign-canary",
    demo: null,
    featured: true,
  },
  {
    title: "World Cup Stats MCP",
    period: "2026",
    blurb:
      "Scrapes player and team stats from four World Cups (2010 to 2022) on FBref into DuckDB, then serves them through an MCP server and a command-line assistant.",
    problem:
      "World Cup stats are spread across dozens of FBref pages. I wanted them in one place I could query directly.",
    impact:
      "About 2,490 players modeled into query-ready tables, 7 read-only MCP tools that only allow SELECT queries, and a CLI that answers questions using Claude tool use.",
    tags: ["Python", "DuckDB", "MCP", "ETL", "Claude API"],
    github: "https://github.com/devvdpatel/worldcup-stats-mcp",
    demo: null,
  },
  {
    title: "Traffic Forecasting for San Francisco",
    period: "Dec 2024 - Feb 2025",
    blurb:
      "Time-series forecasts of San Francisco traffic flow from 66,000+ records, comparing four forecasting methods.",
    problem:
      "How well can traffic flow be predicted 24 hours ahead with standard time-series models?",
    impact:
      "Compared ARIMA, ETS, SNaive, and Prophet in R and Python. Reached 90% accuracy over a 24-hour horizon, with RMSE 4.9 and an 18% MAPE reduction.",
    tags: ["R", "fable", "Prophet", "Python", "pandas", "ARIMA/ETS"],
    github: "https://github.com/devvdpatel",
    demo: null,
  },
  {
    title: "Breast Cancer Diagnosis with Supervised and Unsupervised Learning",
    period: "Aug 2024 - Dec 2024",
    blurb:
      "Compared a supervised classifier against unsupervised clustering for tumor diagnosis.",
    problem:
      "Does a supervised model beat unsupervised clustering on this data by enough to matter?",
    impact:
      "An L1-penalized SVM with 5-fold cross-validation reached 93% F1 (94% precision, 92% recall). K-means and spectral clustering reached 88% F1.",
    tags: ["Python", "scikit-learn", "SVM", "Clustering"],
    github: "https://github.com/devvdpatel",
    demo: null,
  },
];
