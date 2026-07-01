import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/** Standard heading block: small label, bold title, optional subtitle. */
export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
          <span className="h-px w-8 bg-brand-500" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{description}</p>
        ) : null}
      </div>
    </Reveal>
  );
}
