"use client";
import Link from "next/link";
import { useId, useState } from "react";
import type { Fund, Locale } from "@/lib/content";
import type { HomeDict } from "@/lib/home";
import { ArrowDown, ArrowRight, ArrowUp, Board, Chart, Check, Doc, Megaphone, Shield } from "../Icons";
import { GlowMark } from "./Art";

/** Pill tabs shared by every tabbed section. */
function Chips({ items, active, onPick, label, vertical = false }: {
  items: { key: string; label: string }[]; active: number; onPick: (i: number) => void; label: string; vertical?: boolean;
}) {
  const id = useId();
  return (
    <div role="tablist" aria-label={label} aria-orientation={vertical ? "vertical" : "horizontal"}
      className={vertical ? "flex flex-row flex-wrap gap-3 md:flex-col md:items-start" : "flex flex-wrap justify-center gap-3"}>
      {items.map((it, i) => (
        <button key={it.key} id={`${id}-${i}`} role="tab" aria-selected={i === active} tabIndex={i === active ? 0 : -1}
          onClick={() => onPick(i)}
          onKeyDown={(e) => {
            const next = ["ArrowRight", "ArrowDown"].includes(e.key) ? 1 : ["ArrowLeft", "ArrowUp"].includes(e.key) ? -1 : 0;
            if (!next) return;
            e.preventDefault();
            const n = (active + next + items.length) % items.length;
            onPick(n);
            document.getElementById(`${id}-${n}`)?.focus();
          }}
          className="chip">
          {it.label}
        </button>
      ))}
    </div>
  );
}

/* 1 — Investment solutions (mirrors Jazira's "Affluent Program" panel) */
export function Solutions({ lang, t }: { lang: Locale; t: HomeDict["solutions"] }) {
  const [i, setI] = useState(0);
  const tab = t.tabs[i];
  return (
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[28px] bg-panel/60 px-6 py-16 text-center md:px-12">
        <h2 className="text-3xl font-bold md:text-[40px]">{t.title}</h2>
        <div key={tab.key} className="rise">
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">{tab.sub}</p>
          <Link href={`/${lang}${tab.href}`} className="btn mt-8">{tab.cta}</Link>
          <GlowMark className="mx-auto mt-10 aspect-[4/3] w-full max-w-[400px] rounded-2xl" />
        </div>
        <div className="mt-10"><Chips items={t.tabs} active={i} onPick={setI} label={t.title} /></div>
      </div>
    </section>
  );
}

/* 2 — Fund picker (mirrors Jazira's "Choose your Credit Card") */
export function FundPicker({ lang, t, funds, types }: { lang: Locale; t: HomeDict["funds"]; funds: Fund[]; types: Record<Fund["type"], string> }) {
  const [i, setI] = useState(0);
  const f = funds[i];
  const go = (d: number) => setI((i + d + funds.length) % funds.length);
  return (
    <section id="nav" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-[1200px] rounded-[28px] bg-panel p-6 md:p-12">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-bold leading-tight md:text-[44px]">{t.title}</h2>
            <p className="mt-3 text-muted">{t.sub}</p>
            <div className="mt-8">
              <Chips vertical items={funds.map((x) => ({ key: x.slug, label: x.name[lang] }))} active={i} onPick={setI} label={t.title} />
            </div>
          </div>

          {/* Fund "card" */}
          <div key={f.slug} className="rise" role="tabpanel" aria-live="polite">
            <div className="relative min-h-64 overflow-hidden md:aspect-[1.6/1] rounded-[22px] border border-edge bg-[linear-gradient(135deg,#2f2b28,#1b1a19_60%)] p-6 shadow-[0_30px_60px_rgba(0,0,0,.35)] md:p-8">
              <div className="pointer-events-none absolute inset-0 opacity-30 [background:repeating-linear-gradient(115deg,transparent_0_14px,rgba(189,171,162,.12)_14px_15px)]" aria-hidden />
              <div className="relative flex h-full flex-col justify-between gap-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-xl font-bold tracking-wider">BMK</span>
                  <span className="rounded-full border border-sand/50 px-3 py-1 text-xs text-sand">{t.shariah}</span>
                </div>
                <div>
                  <p className="text-sm text-muted">{t.labels.price} · {f.currency}</p>
                  <p className="num font-display text-4xl font-bold md:text-5xl">{f.nav}</p>
                </div>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <dl className="grid grid-cols-3 gap-4 text-sm md:gap-8">
                    <div><dt className="text-muted">{t.labels.change}</dt><dd className="num font-semibold">{f.change}</dd></div>
                    <div><dt className="text-muted">{t.labels.type}</dt><dd className="font-semibold">{types[f.type]}</dd></div>
                    <div><dt className="text-muted">{t.labels.date}</dt><dd className="num font-semibold">{f.asOf}</dd></div>
                  </dl>
                  <Link href={`/${lang}/funds/${f.slug}`} className="btn shrink-0 self-start sm:self-auto">{t.learn}</Link>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-muted">{f.name[lang]}</p>
          </div>

          <div className="hidden justify-center gap-3 md:flex md:flex-col">
            <button onClick={() => go(-1)} aria-label={t.prev} className="grid h-11 w-11 place-items-center rounded-full hover:bg-raise"><ArrowUp /></button>
            <button onClick={() => go(1)} aria-label={t.next} className="grid h-11 w-11 place-items-center rounded-full hover:bg-raise"><ArrowDown /></button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center"><Link href={`/${lang}/funds`} className="btn">{t.all}</Link></div>
    </section>
  );
}

/* 3 — Disclosures (mirrors Jazira's "Earn. Redeem. Enjoy." icon-chip panel) */
const DISC_ICONS = [Doc, Chart, Board, Shield, Megaphone];
export function Disclosures({ lang, t }: { lang: Locale; t: HomeDict["disclosures"] }) {
  const [i, setI] = useState(0);
  const d = t.items[i];
  const id = useId();
  return (
    <section className="px-4 py-20 md:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold md:text-[44px]">{t.title}</h2>
        <p className="mt-5 text-muted">{t.sub}</p>
      </div>
      <div className="relative mx-auto mt-12 max-w-[1200px] overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_50%_30%,#4a3d33,#2a2624_55%,#1d1c1b)] px-4 pb-10 pt-16 md:px-10">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background:repeating-linear-gradient(160deg,transparent_0_38px,rgba(246,241,240,.05)_38px_39px)]" aria-hidden />
        <div key={d.key} id={`${id}-panel`} role="tabpanel" className="rise relative mx-auto max-w-xl rounded-[28px] bg-panel/70 px-8 py-12 text-center backdrop-blur-md">
          <h3 className="text-3xl font-bold">{d.label}</h3>
          <p className="mt-6 leading-relaxed text-muted">{d.body}</p>
          <p className="mt-4 text-sm text-sand">{d.meta}</p>
          <Link href={`/${lang}/disclosures#${d.key}`} className="btn mt-8">{t.cta}</Link>
        </div>
        <div role="tablist" aria-label={t.title} className="relative mt-12 flex flex-wrap justify-center gap-3">
          {t.items.map((it, n) => {
            const Icon = DISC_ICONS[n];
            return (
              <button key={it.key} role="tab" aria-selected={n === i} aria-controls={`${id}-panel`} onClick={() => setI(n)}
                className="chip grid h-11 w-[74px] place-items-center !p-0" title={it.label}>
                <Icon size={20} /><span className="sr-only">{it.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* 4 — Open an account (mirrors Jazira's "Finance your needs") */
export function Account({ lang, t }: { lang: Locale; t: HomeDict["account"] }) {
  const [i, setI] = useState(0);
  const tab = t.tabs[i];
  return (
    <section className="px-4 py-20 md:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold md:text-[44px]">{t.title}</h2>
        <div className="mt-10"><Chips items={t.tabs} active={i} onPick={setI} label={t.title} /></div>
      </div>
      <ul key={tab.key} className="rise mx-auto mt-10 grid max-w-[900px] gap-4 md:grid-cols-3">
        {tab.cards.map((c) => (
          <li key={c} className="flex min-h-36 flex-col gap-4 rounded-[22px] bg-panel p-8">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-raise text-sand"><Check size={16} /></span>
            <span className="font-semibold leading-snug">{c}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-center gap-2">
        <Link href={`/${lang}/open-account`} className="btn">{t.learn}</Link>
        <Link href={`/${lang}${i === 0 ? "/open-account" : "/contact"}`} className="btn btn-accent">{tab.primary} <ArrowRight /></Link>
      </div>
    </section>
  );
}

/* Footer customer-service card */
export function ServiceCard({ t }: { t: { service: string; serviceTabs: string[]; serviceValues: string[] } }) {
  const [i, setI] = useState(0);
  return (
    <div className="rounded-[22px] border border-edge p-6">
      <h2 className="text-xl font-bold">{t.service}</h2>
      <div role="tablist" aria-label={t.service} className="mt-4 flex flex-wrap gap-2">
        {t.serviceTabs.map((s, n) => (
          <button key={s} role="tab" aria-selected={n === i} onClick={() => setI(n)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-bold ${n === i ? "bg-sand text-onyx" : "bg-raise text-ivory hover:bg-charcoal"}`}>{s}</button>
        ))}
      </div>
      <p key={i} role="tabpanel" className="rise num mt-6 font-display text-xl font-bold text-muted">{t.serviceValues[i]}</p>
    </div>
  );
}
