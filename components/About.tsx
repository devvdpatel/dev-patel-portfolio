import { BrainCircuit, Lightbulb, MessagesSquare, Target } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const TRAITS = [
  {
    Icon: BrainCircuit,
    title: "Analytical thinking",
    body: "Uses cross-validation, Monte Carlo simulation, and careful experiments before drawing conclusions.",
  },
  {
    Icon: Lightbulb,
    title: "Problem-solving",
    body: "Starts with the business question and chooses a model that fits it, whether that is ARIMA or mixed-integer optimization.",
  },
  {
    Icon: MessagesSquare,
    title: "Communication",
    body: "Explains results in plain English through dashboards and practical AI tools.",
  },
  {
    Icon: Target,
    title: "Business impact",
    body: "Focuses on work that lowers costs, improves forecasts, increases ROI, or helps teams decide faster.",
  },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="Turning data into decisions"
      />

      <div className="grid items-start gap-12 lg:grid-cols-5">
        {/* Narrative */}
        <Reveal className="lg:col-span-3">
          <div className="space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            <p>
              I&apos;m a data analyst with an M.S. in Business Analytics from Cal State East Bay and a B.S. in
              Mathematics from Cal State Stanislaus. I like problems where the data is messy and someone has a
              real decision to make with it.
            </p>
            <p>
              For my master&apos;s capstone, I worked on a team of three to build an inventory planning tool on
              Walmart&apos;s M5 sales data. It forecasts demand with LightGBM, tests reorder policies with Monte
              Carlo simulation, and chooses which items to stock under a budget with an optimization model. My
              part was an assistant built on the Claude API that lets a planner ask questions about the results
              in plain English.
            </p>
            <p>
              Before that, I interned with the City of Modesto&apos;s finance team, where I worked on budget
              analysis and expenditure forecasting. I also worked as a data analyst in admissions at Cal State
              Stanislaus, building Tableau dashboards for the recruitment team.
            </p>
            <p>
              I&apos;m looking for analyst roles in supply chain, operations and finance, where the work ends in a
              decision someone acts on.
            </p>
          </div>
        </Reveal>

        {/* Trait cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
          {TRAITS.map((trait, i) => (
            <Reveal key={trait.title} delay={i * 80}>
              <div className="card h-full p-5">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                  <trait.Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{trait.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {trait.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
