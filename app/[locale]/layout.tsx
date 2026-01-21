import { Locale, locales } from "../i18n/config";
import "../globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GeistSans } from "geist/font/sans";
import { getDictionary } from "../i18n/getDictionary";
const geist = GeistSans;

export const metadata: Metadata = {
  title: "Leandro Cotti | Full-Stack Engineer · UX/UI Designer",
  description:
    "Trabajo en la intersección entre diseño y desarrollo, construyendo experiencias claras, escalables y agradables de usar, desde la idea hasta producción.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const awaitedParams = await params;
  const dict = await getDictionary(awaitedParams.locale as Locale);

  return (
    <html lang={awaitedParams.locale} className={geist.className}>
      <body>
        <Header dict={dict} />
        <main className="min-h-screen">{children}</main>
        <Footer dict={dict} />
      </body>
    </html>
  );
}
