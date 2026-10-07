import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehthab N M | Software Engineer • Full-Stack & Python Developer",
  description:
    "Versatile Software Engineer and Full-Stack Developer with hands-on experience building scalable web applications, robust Python backends, and data & AI systems using Python, React, Next.js, and SQL/NoSQL databases.",
  keywords: [
    "Mehthab N M",
    "Software Engineer",
    "Full-Stack Developer",
    "Python Developer",
    "Data Analyst",
    "AI & ML Engineer",
    "React.js",
    "Next.js",
    "Django",
    "FastAPI",
    "Flask",
    "PostgreSQL",
    "Scikit-Learn",
    "ZynkaraShift",
    "CampyTeq",
    "QuickTask",
    "Docker",
    "Kochi Kerala India",
  ],
  authors: [{ name: "Mehthab N M" }],
  openGraph: {
    title: "Mehthab N M | Software Engineer • Full-Stack & Python Developer",
    description:
      "Versatile Software Engineer with hands-on experience building scalable Full-Stack applications, robust Python backends, and Data & AI systems.",
    url: "https://mehthab.dev",
    siteName: "Mehthab N M Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehthab N M | Full-Stack Developer",
    description:
      "Full-Stack Developer shipping web applications end-to-end using Python, React, and SQL/NoSQL databases.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100 min-h-screen selection:bg-indigo-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
