import { profile } from "@/data/profile";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <a href="#home" className="font-display text-lg font-semibold text-slate-900 dark:text-white">
            {profile.name}
          </a>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            © {year} · Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
