import {
  BarChart3,
  ClipboardList,
  Code2,
  Database,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { skills, type SkillCategory } from "@/data/skills";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

// Maps the `icon` key from data/skills.ts to a Lucide component.
const ICONS: Record<SkillCategory["icon"], LucideIcon> = {
  "bar-chart": BarChart3,
  code: Code2,
  "trending-up": TrendingUp,
  wallet: Wallet,
  database: Database,
  clipboard: ClipboardList,
};

export default function Skills() {
  return (
    <Section id="skills" className="bg-slate-50 dark:bg-slate-900/30">
      <SectionHeading
        eyebrow="Skills"
        title="A full analytics toolkit"
        description="From SQL and dashboards to machine learning, forecasting, and the data engineering that ships it to production."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, i) => {
          const Icon = ICONS[category.icon];
          return (
            <Reveal key={category.name} delay={i * 70}>
              <div className="card h-full p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold">{category.name}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
