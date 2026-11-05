import Link from "next/link";
import type { Dict, Locale } from "@/lib/content";
import LangSwitch from "./LangSwitch";
import { Globe, Mark, Menu, Search } from "./Icons";

export default function Header({ lang, t }: { lang: Locale; t: Dict }) {
  const p = (h: string) => `/${lang}${h}`;
  const nav = t.nav.filter((n) => n.href !== "/contact");
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between gap-6 px-4 md:px-8">
        <div className="flex items-center gap-10">
          <Link href={p("")} aria-label={t.brand.name} className="flex items-center gap-3">
            <Mark />
            <span className="hidden font-display text-sm font-semibold leading-tight xl:block">{t.brand.name}</span>
          </Link>
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-8 text-[15px]">
              {nav.map((n) => (
                <li key={n.href}><Link href={p(n.href)} className="text-ivory/85 hover:text-ivory">{n.label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-1 md:gap-3">
          <Link href={p("/search")} aria-label="Search" className="grid h-11 w-11 place-items-center rounded-full hover:bg-raise/70"><Search /></Link>
          <LangSwitch to={t.other.code} label={t.other.code.toUpperCase()}
            className="hidden h-11 items-center gap-2 rounded-full px-3 text-sm font-bold hover:bg-raise/70 sm:flex" icon={<Globe />} />
          <a href="#" className="btn hidden sm:inline-flex">{t.util.login}</a>
          <Link href={p("/open-account")} className="btn btn-accent hidden md:inline-flex">{t.openAccount}</Link>

          <details className="relative lg:hidden">
            <summary aria-label={t.menu} className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-full hover:bg-raise/70 [&::-webkit-details-marker]:hidden"><Menu /></summary>
            <div className="absolute end-0 top-13 w-64 rounded-2xl border border-edge bg-panel p-2 shadow-2xl">
              {t.nav.map((n) => (
                <Link key={n.href} href={p(n.href)} className="block rounded-xl px-3 py-2.5 hover:bg-raise">{n.label}</Link>
              ))}
              <hr className="my-2 border-edge" />
              <Link href={p("/open-account")} className="block rounded-xl px-3 py-2.5 font-bold text-sand hover:bg-raise">{t.openAccount}</Link>
              <a href="#" className="block rounded-xl px-3 py-2.5 hover:bg-raise">{t.util.login}</a>
              <LangSwitch to={t.other.code} label={t.other.label} className="block rounded-xl px-3 py-2.5 hover:bg-raise" />
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
