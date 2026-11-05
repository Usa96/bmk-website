import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { dicts, isLocale, locales } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const generateStaticParams = () => locales.map((lang) => ({ lang }));

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = dicts[lang];
  return {
    title: { default: `${t.brand.name} | ${t.brand.short}`, template: `%s | ${t.brand.short}` },
    description: t.hero.body,
    alternates: { languages: { en: "/en", ar: "/ar" } },
  };
}

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = dicts[lang];
  return (
    <html lang={lang} dir={t.dir}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Lato:wght@400;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <Header lang={lang} t={t} />
        <main id="main">{children}</main>
        <Footer lang={lang} t={t} />
      </body>
    </html>
  );
}
