import { BrainCircuit, Lightbulb, MessagesSquare, Target } from "lucide-react";
import { profile } from "@/data/profile";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const TRAITS = [
  {
    Icon: BrainCircuit,
    title: "Analytical thinking",
    body: "Statistical rigor by default — cross-validation, Monte Carlo, and clean experiment design before any conclusion.",
  },
  {
    Icon: Lightbulb,
    title: "Problem-solving",
    body: "Frames the business question first, then reaches for the right model — from ARIMA to mixed-integer optimization.",
  },
  {
    Icon: MessagesSquare,
    title: "Communication",
    body: "Translates models into plain-English decisions with dashboards and AI assistants non-technical teams actually use.",
  },
  {
    Icon: Target,
    title: "Business impact",
    body: "Optimizes for outcomes that move metrics: lower cost, higher ROI, better forecasts, faster decisions.",
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
            <p>{profile.summary}</p>
            <p>
              I&apos;m drawn to work that sits at the intersection of{" "}
              <span className="font-semibold text-slate-900 dark:text-white">data analytics</span>,{" "}
              <span className="font-semibold text-slate-900 dark:text-white">finance</span>,{" "}
              <span className="font-semibold text-slate-900 dark:text-white">business intelligence</span>,{" "}
              <span className="font-semibold text-slate-900 dark:text-white">project delivery</span>, and{" "}
              <span className="font-semibold text-slate-900 dark:text-white">data science</span> — wherever a
              sharp question and a messy dataset meet a real decision.
            </p>
            <p>
              Most recently that&apos;s meant building forecasting and optimization systems on tens of millions
              of rows, shipping tested analytics pipelines with CI/CD, and pairing them with assistants built on
              the Claude API so the insight reaches the people who act on it.
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
