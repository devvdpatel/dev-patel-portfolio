/**
 * PROJECTS — each object renders one <ProjectCard>.
 * `featured: true` cards get a highlighted border and sit first.
 * Set `github` / `demo` to null to hide that button.
 *
 * NOTE: the three projects without a dedicated repo link to your GitHub
 * profile. When you publish those repos, paste their URLs into `github`.
 */

export interface Project {
  title: string;
  period: string;
  /** One-line hook shown under the title. */
  blurb: string;
  /** The business problem this project set out to solve. */
  problem: string;
  /** Outcome / impact — lead with numbers where you can. */
  impact: string;
  /** Tools & technologies, shown as tags. */
  tags: string[];
  github: string | null;
  demo: string | null;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Agentic AI for Inventory Optimization",
    period: "Jan 2026 – May 2026",
    blurb:
      "End-to-end demand-forecasting and inventory-optimization system on 50M+ rows of Walmart M5 retail data, with a Claude-powered assistant for plain-English what-if analysis.",
    problem:
      "Retailers lose margin to both stockouts and overstock. The goal was to forecast demand at scale and recommend cost-optimal reorder policies under real budget and service-level constraints.",
    impact:
      "LightGBM forecaster reached a 1.79 holdout RMSE (R² 0.65); a Monte Carlo + Mixed-Integer Linear Programming optimizer set (s, Q) policies that cut simulated stockouts 68%, lifted ROI 156%, and reduced portfolio operating cost 25%.",
    tags: ["Python", "LightGBM", "Pyomo / HiGHS", "Monte Carlo", "Streamlit", "Claude API"],
    github: "https://github.com/devvdpatel",
    demo: null,
    featured: true,
  },
  {
    title: "People Analytics Warehouse (dbt + CI/CD)",
    period: "2026",
    blurb:
      "Analytics-engineering project that models HR attrition data with dbt on DuckDB, guarded by 74 automated data-quality tests and GitHub Actions CI.",
    problem:
      "HR teams need trustworthy, well-documented metrics. The goal was a reproducible warehouse where every change is automatically tested before it can ship.",
    impact:
      "Layered dbt star schema (staging → marts) with 74 tests; CI blocks merges on a failing test; auto-published data docs with full column-level lineage.",
    tags: ["dbt", "DuckDB", "SQL", "GitHub Actions", "CI/CD", "Python"],
    github: "https://github.com/devvdpatel/people-analytics-warehouse",
    demo: "https://devvdpatel.github.io/people-analytics-warehouse/",
    featured: true,
  },
  {
    title: "CampaignCanary — Marketing Data Ops Pipeline",
    period: "2026",
    blurb:
      "Production-shaped marketing data-ops pipeline that ingests multi-platform paid-media data (Meta / Google / TikTok), conforms it in dbt, and catches anomalies before they reach reporting.",
    problem:
      "Marketing reporting breaks silently when a spend feed disagrees with finance or a data source goes stale. The goal was to detect bad campaign data early — like a canary in a coal mine.",
    impact:
      "Cross-source reconciliation (platform spend vs. finance billing), a rolling z-score anomaly + freshness monitor, CI on every push, and a Claude assistant that explains anomalies in plain English.",
    tags: ["dbt", "Python", "SQL", "DuckDB", "CI/CD", "Claude API"],
    github: "https://github.com/devvdpatel/campaign-canary",
    demo: null,
    featured: true,
  },
  {
    title: "World Cup Stats MCP",
    period: "2026",
    blurb:
      "Automated ETL pipeline that scrapes four World Cups of player and team stats from FBref into DuckDB, then serves it through an MCP server and a Claude-powered natural-language CLI.",
    problem:
      "Sports stats are scattered across pages and awkward to query. The goal was a clean warehouse you can ask questions of in plain English.",
    impact:
      "~2,490 players across 2010–2022 modeled into query-ready marts; 7 read-only MCP tools (SELECT-only guard); a conversational assistant built on Claude tool-use.",
    tags: ["Python", "DuckDB", "MCP", "ETL", "Claude API"],
    github: "https://github.com/devvdpatel/worldcup-stats-mcp",
    demo: null,
  },
  {
    title: "Traffic Forecasting for the City of San Francisco",
    period: "Dec 2024 – Feb 2025",
    blurb:
      "Time-series forecasting system for San Francisco road traffic across 66,000+ records, benchmarking classical and modern models.",
    problem:
      "City traffic management needs reliable short-horizon forecasts. The goal was accurate 24-hour-ahead predictions to support real-time management.",
    impact:
      "Benchmarked ARIMA, ETS, SNaive, and Prophet to reach 90% accuracy over a 24-hour horizon (RMSE 4.9), cutting MAPE by 18%.",
    tags: ["R", "Python", "Prophet", "ARIMA", "fable", "Time-series"],
    github: "https://github.com/devvdpatel",
    demo: null,
  },
  {
    title: "Breast Cancer Diagnosis — Supervised & Unsupervised ML",
    period: "Aug 2024 – Dec 2024",
    blurb:
      "Supervised and unsupervised ML pipeline for tumor classification, validated with cross-validation and Monte Carlo stability testing.",
    problem:
      "Diagnostic models must be both accurate and stable. The goal was to classify tumors reliably and verify the result isn't an artifact of one data split.",
    impact:
      "L1-penalized SVM with 5-fold CV reached a 93% F1 (94% precision); spectral clustering + K-means with majority voting hit 88% F1, with stability confirmed via Monte Carlo simulation.",
    tags: ["Python", "scikit-learn", "TensorFlow", "SVM", "Clustering"],
    github: "https://github.com/devvdpatel",
    demo: null,
  },
];
