import { Briefcase, CheckCircle2 } from "lucide-react";
import { experience } from "@/data/experience";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Section id="experience" className="bg-slate-50 dark:bg-slate-900/30">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've made an impact"
        description="Analyst roles where I turned data into budget decisions, recruitment strategy, and measurable results."
      />

      <div className="relative">
        {/* Vertical timeline rail */}
        <div
          className="absolute left-[15px] top-2 hidden h-full w-px bg-slate-200 sm:block dark:bg-slate-800"
          aria-hidden="true"
        />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.role}`} delay={i * 80}>
              <div className="relative sm:pl-12">
                {/* Timeline node */}
                <span
                  className="absolute left-0 top-1 hidden h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-600 shadow-sm sm:flex dark:border-slate-700 dark:bg-slate-900 dark:text-brand-400"
                  aria-hidden="true"
                >
                  <Briefcase className="h-4 w-4" />
                </span>

                <div className="card p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {job.role}
                    </h3>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-0.5 font-medium text-brand-600 dark:text-brand-400">
                    {job.company}
                    <span className="text-slate-400 dark:text-slate-500"> · {job.location}</span>
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {job.bullets.map((bullet, b) => (
                      <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
