/**
 * SKILLS: grouped into categories shown as a responsive grid.
 * `icon` is a key mapped to a Lucide icon in components/Skills.tsx
 * (allowed: bar-chart, code, trending-up, wallet, database, clipboard).
 */

export interface SkillCategory {
  name: string;
  icon: "bar-chart" | "code" | "trending-up" | "wallet" | "database" | "clipboard";
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    name: "Languages & Tools",
    icon: "code",
    items: ["Python", "SQL", "R", "MATLAB", "Mathematica", "Java", "JavaScript", "Git", "Jupyter"],
  },
  {
    name: "Machine Learning & Forecasting",
    icon: "trending-up",
    items: [
      "scikit-learn",
      "LightGBM",
      "TensorFlow",
      "PyTorch",
      "Linear regression",
      "ARIMA",
      "Prophet",
    ],
  },
  {
    name: "Optimization & AI",
    icon: "clipboard",
    items: ["Pyomo", "SciPy", "MILP", "Monte Carlo simulation", "Anthropic Claude API"],
  },
  {
    name: "Analysis & Visualization",
    icon: "bar-chart",
    items: [
      "pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Streamlit",
      "Tableau",
      "Power BI",
      "Excel",
    ],
  },
  {
    name: "Databases & Data Engineering",
    icon: "database",
    items: [
      "Microsoft SQL Server",
      "MySQL",
      "PostgreSQL",
      "Azure Data Factory",
      "dbt",
      "DuckDB",
      "GitHub Actions",
    ],
  },
  {
    name: "Finance",
    icon: "wallet",
    items: [
      "Budget-to-actual analysis",
      "Variance reporting",
      "Account reconciliation",
      "Expenditure forecasting",
    ],
  },
];
