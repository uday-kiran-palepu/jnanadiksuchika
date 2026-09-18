import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { buildMetadata, organizationJsonLd, websiteJsonLd } from "@/lib/seo/metadata";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: "Big Switch",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const org = organizationJsonLd();
  const web = websiteJsonLd();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=optional"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(web) }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${plusJakarta.variable} font-sans-bs bg-background text-on-surface antialiased`}
      >
        <LanguageProvider>
          <Header />
          <main className="w-full pt-20 min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
