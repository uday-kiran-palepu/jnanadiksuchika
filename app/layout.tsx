import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jnana Diksuchika",
  description:
    "Knowledge that gives you direction. Real engineering depth, distributed systems, and career trajectory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakarta.variable} bg-background font-body-md text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed`}
      >
        <Header />
        <main className="w-full pt-28 xl:pt-20 bg-background min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
