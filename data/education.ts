/**
 * EDUCATION: degrees, GPA, and relevant coursework.
 */

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa?: string;
  coursework: string[];
}

export const education: EducationItem[] = [
  {
    degree: "M.S. Business Analytics",
    school: "California State University, East Bay",
    location: "Hayward, CA",
    period: "Aug 2024 - May 2026",
    gpa: "3.8 / 4.0",
    coursework: [
      "Quantitative Statistics",
      "Optimization",
      "Time-Series Analysis",
      "Big Data Technologies",
      "Database Management",
      "Machine Learning",
    ],
  },
  {
    degree: "B.S. Mathematics",
    school: "California State University, Stanislaus",
    location: "Turlock, CA",
    period: "Aug 2019 - May 2024",
    gpa: "3.6 / 4.0",
    coursework: [
      "Probability & Statistics",
      "Linear Algebra",
      "Calculus & Analysis",
      "Numerical Methods",
      "Discrete Mathematics",
    ],
  },
];
