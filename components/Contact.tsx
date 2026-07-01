import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import Section from "./Section";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            <span className="h-px w-8 bg-brand-500" aria-hidden="true" />
            Contact
            <span className="h-px w-8 bg-brand-500" aria-hidden="true" />
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s talk</h2>
          <p className="mx-auto mt-4 text-lg text-slate-600 dark:text-slate-400">
            I&apos;m actively looking for full-time Data Analyst, Data Scientist, and Business/Finance
            Analyst roles. If you think there&apos;s a fit, I&apos;d love to hear from you.
          </p>

          <div className="mt-8 flex flex-col items-center gap-5">
            <a href={`mailto:${profile.email}`} className="btn-primary px-6 py-3 text-base">
              <Mail className="h-5 w-5" />
              {profile.email}
            </a>
            <SocialLinks className="justify-center" />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
