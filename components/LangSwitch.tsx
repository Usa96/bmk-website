"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/content";

export default function LangSwitch({ to, label, className }: { to: Locale; label: string; className?: string }) {
  const path = usePathname() || "/en";
  const href = path.replace(/^\/(en|ar)(?=\/|$)/, `/${to}`);
  return (
    <Link href={href} hrefLang={to} lang={to} className={className}>
      {label}
    </Link>
  );
}
