import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const SITE_URL = "https://tacofficial.vercel.app";
const SITE_DESCRIPTION =
  "Africa's accreditation infrastructure partner \u2014 standards, systems, and surveyors for the regulators and institutions shaping healthcare quality.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "The Arete Connoisseurs | TAC",
  description: SITE_DESCRIPTION,
  keywords: [
    "healthcare accreditation Africa",
    "accreditation standards development",
    "electronic accreditation management system",
    "eAMS",
    "assessor training",
    "patient safety",
    "healthcare quality",
    "ISO 7101",
    "ISQua",
    "JCI preparedness",
    "Nigeria",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    siteName: "The Arete Connoisseurs",
    title: "The Arete Connoisseurs | TAC",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Arete Connoisseurs | TAC",
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-neutral-light text-neutral-dark">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
