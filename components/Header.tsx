import Link from "next/link";
import type { Dict, Locale } from "@/lib/content";
import LangSwitch from "./LangSwitch";
import Logo from "./Logo";

export default function Header({ lang, t }: { lang: Locale; t: Dict }) {
  const p = (h: string) => `/${lang}${h}`;
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur">
      {/* Utility bar */}
      <div className="hidden bg-onyx text-[13px] text-sand md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-end gap-6 px-6">
          <Link href={p("/investor-awareness")} className="hover:text-ivory">{t.util.awareness}</Link>
          <Link href={p("/investor-awareness#complaints")} className="hover:text-ivory">{t.util.complaints}</Link>
          <Link href={p("/disclosures")} className="hover:text-ivory">{t.util.disclosures}</Link>
          <span className="h-4 w-px bg-charcoal" aria-hidden />
          <LangSwitch to={t.other.code} label={t.other.label} className="font-semibold text-ivory hover:underline" />
          <a href="#" className="text-ivory hover:underline">{t.util.login}</a>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-line">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 md:px-6">
          <Logo lang={lang} t={t} />
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {t.nav.map((n) => (
                <li key={n.href}>
                  <Link href={p(n.href)} className="rounded-md px-3 py-2 text-[15px] font-semibold text-charcoal hover:bg-ivory hover:text-onyx">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <Link href={p("/open-account")} className="rounded-full bg-onyx px-5 py-2.5 text-sm font-semibold text-ivory hover:bg-charcoal">
              {t.openAccount}
            </Link>
            {/* Mobile menu */}
            <details className="relative lg:hidden">
              <summary className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-md border border-line [&::-webkit-details-marker]:hidden" aria-label={t.menu}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M4 7h16M4 12h16M4 17h16" /></svg>
              </summary>
              <div className="absolute end-0 top-13 w-64 rounded-xl border border-line bg-white p-2 shadow-lg">
                {t.nav.map((n) => (
                  <Link key={n.href} href={p(n.href)} className="block rounded-md px-3 py-2.5 font-semibold text-charcoal hover:bg-ivory">{n.label}</Link>
                ))}
                <hr className="my-2 border-line" />
                <Link href={p("/investor-awareness")} className="block rounded-md px-3 py-2 text-sm text-stone hover:bg-ivory">{t.util.awareness}</Link>
                <Link href={p("/investor-awareness#complaints")} className="block rounded-md px-3 py-2 text-sm text-stone hover:bg-ivory">{t.util.complaints}</Link>
                <LangSwitch to={t.other.code} label={t.other.label} className="block rounded-md px-3 py-2 text-sm font-semibold hover:bg-ivory" />
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
