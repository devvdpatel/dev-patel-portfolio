/**
 * EXPERIENCE: keep these bullets in sync with the resume.
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
    period: "May 2024 - Aug 2024",
    bullets: [
      "Analyzed monthly budget-to-actual performance for 10 departments within a $228.6M General Fund using SQL and Excel, identifying $1.3M in unfavorable spending variances and preparing corrective-action summaries for managers.",
      "Reconciled 300+ accounts, catching $420K in misclassified or duplicate transactions before month-end close.",
      "Built an Excel variance dashboard for 5 departments, saving 12 hours of monthly reporting and 2 days of review.",
      "Built linear regression and ARIMA models in Python to forecast city expenditures for budget planning.",
    ],
  },
  {
    role: "Admissions Data Analyst",
    company: "California State University, Stanislaus",
    location: "Turlock, CA",
    period: "Dec 2023 - Aug 2024",
    bullets: [
      "Analyzed application data from student populations worldwide using SQL and Excel.",
      "Led outreach campaigns using predictive analytics, driving a 10% Spring 2024 enrollment increase above target.",
      "Built interactive Tableau dashboards for the recruitment team; the findings supported an increased budget for international student marketing.",
    ],
  },
];
