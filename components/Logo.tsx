import Link from "next/link";
import type { Dict, Locale } from "@/lib/content";

export default function Logo({ lang, t, light = false }: { lang: Locale; t: Dict; light?: boolean }) {
  return (
    <Link href={`/${lang}`} className="flex items-center gap-3" aria-label={t.brand.name}>
      <span
        className={`grid h-10 w-10 place-items-center rounded-md font-display text-sm font-bold tracking-wider ${
          light ? "bg-ivory text-onyx" : "bg-onyx text-ivory"
        }`}
        aria-hidden
      >
        BMK
      </span>
      <span className={`hidden font-display text-[15px] font-semibold leading-tight sm:block ${light ? "text-ivory" : "text-onyx"}`}>
        {t.brand.name}
      </span>
    </Link>
  );
}
