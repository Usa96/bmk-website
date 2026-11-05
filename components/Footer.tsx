import Link from "next/link";
import type { Dict, Locale } from "@/lib/content";
import Logo from "./Logo";

export default function Footer({ lang, t }: { lang: Locale; t: Dict }) {
  return (
    <footer className="bg-onyx text-sand">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="space-y-4">
            <Logo lang={lang} t={t} light />
            <p className="max-w-xs text-sm leading-relaxed">{t.hero.body}</p>
          </div>
          {t.footer.cols.map((c) => (
            <div key={c.title}>
              <h2 className="mb-3 text-sm font-semibold text-ivory">{c.title}</h2>
              <ul className="space-y-2 text-sm">
                {c.links.map(([label, href]) => (
                  <li key={href}><Link href={`/${lang}${href}`} className="hover:text-ivory">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 space-y-3 border-t border-charcoal pt-6 text-[13px] leading-relaxed">
          <p className="text-ivory">{t.footer.licence}</p>
          <p className="max-w-4xl">{t.footer.risk}</p>
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
