"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/content";

export default function LangSwitch({ to, label, className, icon }: { to: Locale; label: string; className?: string; icon?: React.ReactNode }) {
  const path = usePathname() || "/en";
  const href = path.replace(/^\/(en|ar)(?=\/|$)/, `/${to}`);
  return (
    <Link href={href} hrefLang={to} lang={to} className={className}>
      {icon}
      {label}
    </Link>
  );
}
