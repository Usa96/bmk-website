import Link from "next/link";
import { notFound } from "next/navigation";
import { dicts, funds, isLocale } from "@/lib/content";

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rtl:rotate-180" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const Section = ({ id, title, sub, action, children, tone = "white" }: {
  id?: string; title: string; sub?: string; action?: React.ReactNode; children: React.ReactNode; tone?: "white" | "ivory";
}) => (
  <section id={id} className={tone === "ivory" ? "bg-ivory" : "bg-white"}>
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
          {sub && <p className="mt-2 max-w-2xl text-stone">{sub}</p>}
        </div>
        {action}
      </div>
      {children}
    </div>
  </section>
);

const TextLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="inline-flex items-center gap-2 font-semibold text-charcoal hover:text-onyx hover:underline">
    {children} <Arrow />
  </Link>
);

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = dicts[lang];
  const p = (h: string) => `/${lang}${h}`;

  return (
    <>
      {/* Hero — single banner, no carousel */}
      <section className="bg-white px-4 pt-4 md:px-6 md:pt-6">
        <div className="hero-pattern relative mx-auto max-w-7xl overflow-hidden rounded-3xl text-ivory">
          <div className="grid gap-10 px-6 pb-36 pt-16 md:grid-cols-[1.2fr_1fr] md:px-14 md:pb-40 md:pt-24">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-charcoal px-3 py-1 text-[13px] text-sand">
                <span className="h-1.5 w-1.5 rounded-full bg-sand" aria-hidden />
                {t.hero.eyebrow}
              </p>
              <h1 className="text-4xl font-bold leading-[1.1] md:text-[56px]">{t.hero.title}</h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-sand">{t.hero.body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={p("/funds")} className="inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3 font-semibold text-onyx hover:bg-white">
                  {t.hero.primary} <Arrow />
                </Link>
                <Link href={p("/open-account")} className="rounded-full border border-sand px-6 py-3 font-semibold text-ivory hover:bg-charcoal">
                  {t.hero.secondary}
                </Link>
              </div>
            </div>
            {/* Image slot: replace with approved photography */}
            <div className="hidden items-end justify-end md:flex" aria-hidden>
              <div className="grid h-64 w-64 place-items-center rounded-full border border-charcoal">
                <div className="grid h-44 w-44 place-items-center rounded-full border border-stone">
                  <span className="font-display text-5xl font-bold tracking-widest text-stone">BMK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick-access tiles overlapping the hero */}
        <nav aria-label="Quick links" className="relative z-10 mx-auto -mt-24 max-w-6xl px-2 md:px-8">
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {t.quick.map((q, i) => (
              <li key={q.href} className={i === 4 ? "col-span-2 md:col-span-1" : ""}>
                <Link href={p(q.href)} className="group flex h-full flex-col justify-between gap-6 rounded-2xl border border-line bg-white p-5 shadow-[0_8px_24px_rgba(33,32,31,.08)] hover:border-sand">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ivory text-charcoal group-hover:bg-onyx group-hover:text-ivory"><Arrow /></span>
                  <span>
                    <span className="block font-display font-semibold">{q.title}</span>
                    <span className="mt-1 block text-sm text-stone">{q.sub}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* Stats */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-xl font-bold">{t.stats.title}</h2>
            <p className="text-sm text-stone">{t.stats.asOf}</p>
          </div>
          <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {t.stats.items.map((s) => (
              <div key={s.label} className="bg-white p-6">
                <dt className="text-sm text-stone">{s.label}</dt>
                <dd className="num mt-2 font-display text-3xl font-bold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Latest NAVs */}
      <Section id="nav" tone="ivory" title={t.navTable.title} sub={t.navTable.sub} action={<TextLink href={p("/funds")}>{t.navTable.all}</TextLink>}>
        <div className="overflow-x-auto rounded-2xl border border-line bg-white">
          <table className="w-full min-w-[640px] text-start text-[15px]">
            <thead className="bg-white text-[13px] text-stone">
              <tr className="border-b border-line">
                <th scope="col" className="px-5 py-3 text-start font-semibold">{t.navTable.cols.fund}</th>
                <th scope="col" className="px-5 py-3 text-start font-semibold">{t.navTable.cols.type}</th>
                <th scope="col" className="px-5 py-3 text-end font-semibold">{t.navTable.cols.price}</th>
                <th scope="col" className="px-5 py-3 text-end font-semibold">{t.navTable.cols.change}</th>
                <th scope="col" className="px-5 py-3 text-end font-semibold">{t.navTable.cols.date}</th>
              </tr>
            </thead>
            <tbody>
              {funds.map((f) => (
                <tr key={f.slug} className="border-b border-line last:border-0 hover:bg-ivory/60">
                  <td className="px-5 py-4">
                    <Link href={p(`/funds/${f.slug}`)} className="font-semibold hover:underline">{f.name[lang]}</Link>
                    {f.shariah && <span className="ms-2 rounded-full bg-ivory px-2 py-0.5 text-[11px] font-semibold text-charcoal">{t.navTable.shariah}</span>}
                  </td>
                  <td className="px-5 py-4 text-stone">{t.navTable.types[f.type]}</td>
                  <td className="num px-5 py-4 text-end font-semibold">{f.nav}</td>
                  <td className="num px-5 py-4 text-end">{f.change}</td>
                  <td className="num px-5 py-4 text-end text-stone">{f.asOf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Ways to invest */}
      <Section title={t.categories.title}>
        <ul className="grid gap-5 md:grid-cols-3">
          {t.categories.items.map((c, i) => (
            <li key={c.title}>
              <Link href={p(c.href)} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line hover:border-sand">
                {/* Image slot */}
                <div className={`h-40 ${["bg-charcoal", "bg-stone", "bg-sand"][i]}`} aria-hidden />
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="flex-1 text-stone">{c.body}</p>
                  <span className="inline-flex items-center gap-2 font-semibold text-charcoal group-hover:underline">{t.categories.cta} <Arrow /></span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Disclosures */}
      <Section tone="ivory" title={t.disclosures.title} sub={t.disclosures.sub} action={<TextLink href={p("/disclosures")}>{t.disclosures.all}</TextLink>}>
        <ul className="grid gap-4 md:grid-cols-3">
          {t.disclosures.items.map((d) => (
            <li key={d.title}>
              <Link href={p("/disclosures")} className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 hover:border-sand">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-onyx text-[11px] font-bold text-ivory" aria-hidden>PDF</span>
                <span>
                  <span className="block font-semibold">{d.title}</span>
                  <span className="text-sm text-stone">{d.meta}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* News */}
      <Section title={t.news.title} action={<TextLink href={p("/media")}>{t.news.all}</TextLink>}>
        <ul className="grid gap-5 md:grid-cols-3">
          {t.news.items.map((n, i) => (
            <li key={i}>
              <Link href={p("/media")} className="block h-full rounded-2xl border border-line p-6 hover:border-sand">
                <div className="flex items-center gap-3 text-[13px]">
                  <span className="rounded-full bg-ivory px-2.5 py-0.5 font-semibold text-charcoal">{n.type}</span>
                  <span className="text-stone">{n.date}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{n.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Open-account band */}
      <section className="bg-white px-4 pb-16 md:px-6 md:pb-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-sand p-8 md:flex-row md:items-center md:p-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold md:text-3xl">{t.band.title}</h2>
            <p className="mt-3 text-charcoal">{t.band.body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={p("/open-account")} className="rounded-full bg-onyx px-6 py-3 font-semibold text-ivory hover:bg-charcoal">{t.band.primary}</Link>
            <Link href={p("/contact")} className="rounded-full border border-onyx px-6 py-3 font-semibold hover:bg-ivory">{t.band.secondary}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
