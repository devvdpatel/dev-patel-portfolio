/**
 * EXPERIENCE — internships, analyst roles, leadership.
 * Lead every bullet with an action verb and a number where you can.
 */

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Financial Analyst Intern",
    company: "City of Modesto",
    location: "Modesto, CA",
    period: "May 2024 – Aug 2024",
    bullets: [
      "Analyzed budget reports and financial statements across 10+ city departments using SQL and Excel, surfacing discrepancies that informed annual budget reviews.",
      "Automated record retention and destruction workflows in Python, reducing unnecessary storage expenses by 20%.",
      "Built financial forecasting models in Python to project departmental expenditures, supporting budget-allocation decisions for multi-million-dollar city projects.",
    ],
  },
  {
    role: "Admissions Data Analyst",
    company: "California State University, Stanislaus",
    location: "Turlock, CA",
    period: "Dec 2023 – Aug 2024",
    bullets: [
      "Analyzed close to 1,500 annual applications from students across 60+ countries using SQL and Excel to identify high-yield recruitment segments.",
      "Led data-driven marketing campaigns using predictive analytics and personalized outreach, driving a 10% increase in Spring 2024 enrollment and surpassing targets.",
      "Built interactive Tableau dashboards that delivered recruitment insights and secured a larger budget for international student marketing.",
    ],
  },
];
