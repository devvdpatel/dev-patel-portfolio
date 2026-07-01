import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile, stats } from "@/data/profile";
import RotatingText from "./RotatingText";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background: dotted grid + soft brand glow */}
      <div className="bg-grid absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-[-10%] -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-600/20"
        aria-hidden="true"
      />

      <div className="container-page flex min-h-[88vh] flex-col items-center justify-center py-28 text-center">
        {/* Availability badge */}
        <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-500" />
          </span>
          Open to full-time opportunities
        </div>

        <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-6xl">
          Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
        </h1>

        <p className="animate-fade-up mt-4 font-display text-2xl font-semibold text-slate-800 sm:text-3xl dark:text-slate-100">
          <RotatingText items={profile.roles} />
        </p>

        <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {profile.tagline}
        </p>

        {/* CTAs */}
        <div className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a href="#projects" className="btn-secondary">
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <div className="flex items-center gap-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-slate-600 transition-colors hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-700 dark:hover:text-brand-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-slate-600 transition-colors hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-700 dark:hover:text-brand-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-slate-600 transition-colors hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-700 dark:hover:text-brand-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Location */}
        <p className="animate-fade-up mt-6 inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
          <MapPin className="h-4 w-4" />
          {profile.location}
        </p>

        {/* Stat cards */}
        <dl className="animate-fade-up mt-14 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card px-4 py-5 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-gradient font-display text-3xl font-bold">{stat.value}</dd>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
