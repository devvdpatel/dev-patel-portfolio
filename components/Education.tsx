import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading
        eyebrow="Education"
        title="Academic foundation"
        description="A quantitative core — mathematics and data science — built around statistics, optimization, and machine learning."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 80}>
            <div className="card h-full p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                  <GraduationCap className="h-6 w-6" />
                </div>
                {edu.gpa ? (
                  <span className="rounded-full bg-accent-500/10 px-3 py-1 text-sm font-semibold text-accent-600 dark:text-accent-400">
                    GPA {edu.gpa}
                  </span>
                ) : null}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                {edu.degree}
              </h3>
              <p className="mt-0.5 font-medium text-brand-600 dark:text-brand-400">{edu.school}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {edu.location} · {edu.period}
              </p>

              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Relevant coursework
                </p>
                <ul className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <li key={course} className="tag">
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
