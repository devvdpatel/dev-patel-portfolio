import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

/** Row of icon links (LinkedIn, GitHub, Email) reused in Contact and Footer. */
export default function SocialLinks({ className = "" }: { className?: string }) {
  const links = [
    { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin, external: true },
    { href: profile.github, label: "GitHub", Icon: Github, external: true },
    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail, external: false },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, label, Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-700 dark:hover:bg-slate-800 dark:hover:text-brand-300"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
