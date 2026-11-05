import Link from "next/link";
import { notFound } from "next/navigation";
import { dicts, funds, isLocale } from "@/lib/content";
import { homeDicts } from "@/lib/home";
import { HeroArt, GlowMark } from "@/components/home/Art";
import { Account, Disclosures, FundPicker, Solutions } from "@/components/home/Interactive";
import { ArrowRight } from "@/components/Icons";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = dicts[lang];
  const h = homeDicts[lang];
  const p = (x: string) => `/${lang}${x}`;

  return (
    <>
      {/* Hero — full-bleed, text anchored bottom-start */}
      <section className="relative flex min-h-[760px] items-end overflow-hidden md:min-h-[900px]">
        <HeroArt />
        <div className="relative mx-auto w-full max-w-[1280px] px-4 pb-16 md:px-[120px] md:pb-24">
          <p className="font-bold text-ivory/90">{h.hero.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-[44px] font-bold leading-[1.05] md:text-[72px]">{h.hero.title}</h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{h.hero.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={p("/funds")} className="btn btn-accent">{h.hero.primary} <ArrowRight /></Link>
            <Link href={p("/open-account")} className="btn">{h.hero.secondary}</Link>
          </div>
          {/* Stats band */}
          <dl className="mt-14 grid max-w-3xl grid-cols-3 gap-6 border-t border-edge pt-6">
            {h.stats.map((s) => (
              <div key={s.label}>
                <dd className="num font-display text-2xl font-bold md:text-3xl">{s.value}</dd>
                <dt className="mt-1 text-sm text-muted">{s.label}</dt>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-muted">{h.statsAsOf}</p>
        </div>
      </section>

      <Solutions lang={lang} t={h.solutions} />
      <FundPicker lang={lang} t={h.funds} funds={funds} types={t.navTable.types} />
      <Disclosures lang={lang} t={h.disclosures} />
      <Account lang={lang} t={h.account} />

      {/* News */}
      <section className="px-4 py-20 md:px-6">
        <h2 className="text-center text-3xl font-bold md:text-[44px]">{h.news.title}</h2>
        <ul className="mx-auto mt-12 grid max-w-[1200px] gap-4 md:grid-cols-3">
          {h.news.items.map((n, i) => (
            <li key={i}>
              <Link href={p("/media")} className="group flex h-full flex-col rounded-[22px] bg-panel p-6 hover:bg-raise/70">
                <GlowMark className="aspect-[4/3] w-full rounded-2xl" />
                <p className="mt-8 text-xs uppercase tracking-wide text-muted">{n.date}</p>
                <h3 className="mt-1 text-xl font-bold leading-snug group-hover:underline">{n.title}</h3>
                <p className="mt-3 line-clamp-2 text-muted">{n.body}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center gap-2">
          <Link href={p("/media")} className="btn">{h.news.all}</Link>
          <Link href={p("/disclosures")} className="btn">{h.news.disclosures}</Link>
        </div>
      </section>

      {/* Reach out — split panel */}
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-[28px] border border-edge md:grid-cols-2">
          <div className="bg-panel/60 p-8 md:p-12">
            <h2 className="text-3xl font-bold md:text-4xl">{h.contact.title}</h2>
            <h3 className="mt-10 text-xl font-bold">{h.contact.complaintsTitle}</h3>
            <p className="mt-4 leading-relaxed text-muted">{h.contact.complaintsBody}</p>
            <p className="mt-2 text-sand">{h.contact.complaintsEmail}</p>
            <p className="mt-4 leading-relaxed text-muted">{h.contact.cmaBody}{" "}
              <a href="https://cma.gov.sa" className="text-sand underline-offset-4 hover:underline" rel="noopener">{h.contact.cmaLink}</a>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={p("/investor-awareness#complaints")} className="btn">{h.contact.submitComplaint}</Link>
              <Link href={p("/investor-awareness")} className="chip">{h.contact.awareness}</Link>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold">{h.contact.callTitle}</h3>
                <p className="num mt-3 font-display text-2xl font-bold">{h.contact.phone}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-sand">{h.contact.hoursTitle}</h3>
                <p className="mt-3 font-display text-xl font-bold">{h.contact.hours}</p>
                <p className="num font-display text-xl font-bold">{h.contact.hoursTime}</p>
              </div>
            </div>
          </div>

          {/* TODO: wire to a form handler / CRM before launch */}
          <form className="grid content-start gap-5 bg-onyx p-8 md:p-12" action="#" method="post">
            <label className="grid gap-2 text-sm text-muted">{h.contact.form.interest}
              <select name="interest" className="field">
                {h.contact.form.interests.map((o) => <option key={o} className="bg-panel">{o}</option>)}
              </select>
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-muted">{h.contact.form.first}<input name="first" required autoComplete="given-name" className="field" /></label>
              <label className="grid gap-2 text-sm text-muted">{h.contact.form.last}<input name="last" required autoComplete="family-name" className="field" /></label>
            </div>
            <label className="grid gap-2 text-sm text-muted">{h.contact.form.email}<input name="email" type="email" required autoComplete="email" className="field" /></label>
            <label className="grid gap-2 text-sm text-muted">{h.contact.form.phone}<input name="phone" type="tel" required autoComplete="tel" dir="ltr" className="field" /></label>
            <label className="grid gap-2 text-sm text-muted">{h.contact.form.message}<textarea name="message" rows={5} className="field resize-y" /></label>
            <label className="flex items-start gap-3 text-sm text-muted">
              <input type="checkbox" required className="mt-1 h-4 w-4 accent-[#bdaba2]" />{h.contact.form.consent}
            </label>
            <div className="flex justify-end"><button type="submit" className="btn btn-accent">{h.contact.form.submit}</button></div>
          </form>
        </div>
      </section>
    </>
  );
}
