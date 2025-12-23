import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// import { Inter, DM_Sans } from "next/font/google";
import { GeistSans } from "geist/font/sans";
const geist = GeistSans;

export const metadata: Metadata = {
  title: "Leandro Cotti | Front-End Developer",
  description:
    "Front-End Developer specialized in React, Next.js and UX-driven development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
