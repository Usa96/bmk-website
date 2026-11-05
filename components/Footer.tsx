import Link from "next/link";
import type { Dict, Locale } from "@/lib/content";
import { homeDicts } from "@/lib/home";
import { Mark } from "./Icons";
import { ServiceCard } from "./home/Interactive";

export default function Footer({ lang, t }: { lang: Locale; t: Dict }) {
  const f = homeDicts[lang].footer;
  return (
    <footer className="px-4 pb-8 md:px-6">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[28px] bg-panel/70">
        <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <Link href={`/${lang}`} className="inline-flex items-center gap-3" aria-label={t.brand.name}>
              <Mark /><span className="font-display text-sm font-semibold">{t.brand.name}</span>
            </Link>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {f.cols.map((c) => (
                <div key={c.title}>
                  <h2 className="font-bold">{c.title}</h2>
                  <ul className="mt-2 space-y-1.5 text-muted">
                    {c.links.map(([label, href]) => (
                      <li key={href}><Link href={`/${lang}${href}`} className="hover:text-ivory">{label}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-12 max-w-2xl text-[13px] leading-relaxed text-muted">{f.legal}</p>
            <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-muted">{f.risk}</p>
          </div>
          <div className="space-y-6">
            <ServiceCard t={f} />
            <div className="rounded-[22px] border border-edge p-6 text-center">
              <p className="text-xs font-bold text-sand">{lang === "ar" ? "ابدأ الآن" : "Get started"}</p>
              <p className="mt-1 font-bold">{lang === "ar" ? "افتح حسابك الاستثماري عبر نفاذ" : "Open your investment account with Nafath"}</p>
              <Link href={`/${lang}/open-account`} className="btn btn-accent mt-5">{t.openAccount}</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-edge px-8 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-12">
          <p>{f.rights}</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {f.bottom.map(([label, href], n) => (
              <li key={href} className="flex items-center gap-4">
                {n > 0 && <span className="h-3 w-px bg-edge" aria-hidden />}
                <Link href={`/${lang}${href}`} className="hover:text-ivory">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
