import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/**
 * Consistent vertical rhythm + scroll anchor for every page section.
 * `scroll-mt-20` keeps headings clear of the sticky navbar when linked to.
 */
export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-24 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}
