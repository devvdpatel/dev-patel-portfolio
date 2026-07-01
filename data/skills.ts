/**
 * SKILLS — grouped into categories shown as a responsive grid.
 * `icon` is a key mapped to a Lucide icon in components/Skills.tsx
 * (allowed: bar-chart, code, trending-up, wallet, database, clipboard).
 * Add, remove, or reorder categories and items freely.
 */

export interface SkillCategory {
  name: string;
  icon: "bar-chart" | "code" | "trending-up" | "wallet" | "database" | "clipboard";
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    name: "Data Analytics & BI",
    icon: "bar-chart",
    items: ["SQL", "Excel", "Tableau", "Power BI", "Plotly", "Google Sheets"],
  },
  {
    name: "Programming & Machine Learning",
    icon: "code",
    items: [
      "Python",
      "R",
      "pandas",
      "NumPy",
      "scikit-learn",
      "LightGBM",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    name: "Forecasting & Statistics",
    icon: "trending-up",
    items: [
      "Time-series (ARIMA / ETS / Prophet)",
      "Monte Carlo simulation",
      "Optimization (Pyomo / HiGHS)",
      "Statistical modeling",
      "A/B testing",
    ],
  },
  {
    name: "Business & Finance",
    icon: "wallet",
    items: [
      "Financial forecasting",
      "Budget & variance analysis",
      "KPI tracking & reporting",
      "Data-driven decision support",
    ],
  },
  {
    name: "Data Engineering & Tools",
    icon: "database",
    items: [
      "dbt",
      "DuckDB",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Azure Data Factory",
      "Git & GitHub",
      "CI/CD",
      "Streamlit",
      "Jupyter",
    ],
  },
  {
    name: "Project & Delivery",
    icon: "clipboard",
    items: [
      "Stakeholder communication",
      "Technical documentation",
      "Roadmapping & planning",
      "Agile workflows",
      "Cross-functional collaboration",
    ],
  },
];
