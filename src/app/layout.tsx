import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import Loader from "@/components/layout/Loader";
import CardNav from "@/components/layout/CardNav";
import { site } from "@/data/site";

import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FC Strikers Football Academy",
  description: "Modern football academy for young players across the UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${bebas.variable} ${inter.variable} antialiased`}
      >
        <Loader />

        <CardNav
          logo="/logos/logo.png"
          logoAlt="FC Strikers Football Academy"
          items={site.cardNavItems}
          baseColor="rgba(5,5,5,0.72)"
          menuColor="#FFFFFF"
          buttonBgColor="#67f55b"
          buttonTextColor="#ffffff"
        />

        {children}

        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}