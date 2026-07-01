import { Download, FileText, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";

/**
 * Full-width gradient call-to-action band centered on the résumé download.
 * To update the résumé, replace /public/resume.pdf (see README).
 */
export default function Resume() {
  return (
    <section id="resume" className="scroll-mt-20 py-16">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-12 text-center shadow-lg sm:px-12">
            <div className="bg-grid absolute inset-0 opacity-10" aria-hidden="true" />
            <div className="relative">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
                <FileText className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                Have a role in mind?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-brand-100">
                My résumé has the full detail — experience, projects, and the numbers behind them.
                Grab the PDF or connect with me on LinkedIn.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 shadow-sm transition-all hover:bg-brand-50 hover:shadow-md"
                >
                  <Download className="h-4 w-4" />
                  Download Résumé (PDF)
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
