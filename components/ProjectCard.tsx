import { ArrowUpRight, Github, Target, TrendingUp } from "lucide-react";
import type { Project } from "@/data/projects";

/** A single, reusable project card. */
export default function ProjectCard({ project }: { project: Project }) {
  const { title, period, blurb, problem, impact, tags, github, demo, featured } = project;

  return (
    <article
      className={`card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        featured ? "ring-1 ring-brand-200 dark:ring-brand-900" : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold leading-snug text-slate-900 dark:text-white">
          {title}
        </h3>
        {featured ? (
          <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-950 dark:text-brand-300">
            Featured
          </span>
        ) : null}
      </div>
      <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">{period}</p>

      {/* Hook */}
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{blurb}</p>

      {/* Problem / Impact */}
      <dl className="mt-4 space-y-3 text-sm">
        <div className="flex gap-2.5">
          <dt className="mt-0.5 shrink-0 text-slate-400" title="Business problem">
            <Target className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Problem:</span>
          </dt>
          <dd className="text-slate-600 dark:text-slate-400">{problem}</dd>
        </div>
        <div className="flex gap-2.5">
          <dt className="mt-0.5 shrink-0 text-accent-600 dark:text-accent-400" title="Impact">
            <TrendingUp className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Impact:</span>
          </dt>
          <dd className="font-medium text-slate-700 dark:text-slate-300">{impact}</dd>
        </div>
      </dl>

      {/* Tags */}
      <ul className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          >
            {tag}
          </li>
        ))}
      </ul>

      {/* Links (pinned to bottom) */}
      <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-4 dark:border-slate-800">
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
        ) : null}
        {demo ? (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
          >
            <ArrowUpRight className="h-4 w-4" />
            Live demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
