import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SITE_CONFIGS } from "@/constants";
import SiteNav from "@/app/components/SiteNav";
import Footer from "@/app/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: SITE_CONFIGS.title,
  description: SITE_CONFIGS.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased mx-auto max-w-2xl px-5 py-12`}
      >
        <header className="mb-14 flex flex-row place-content-between">
          <SiteNav />
        </header>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};
