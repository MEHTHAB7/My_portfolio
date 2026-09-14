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
  title: "Mehthab N M | Full-Stack Developer",
  description:
    "Full-Stack Developer with hands-on experience shipping web applications end-to-end using Python, React, Next.js, and SQL/NoSQL databases. Proven record leading engineering teams, building cloud/PaaS solutions, and specializing in applied AI and data-driven systems.",
  keywords: [
    "Mehthab N M",
    "Full-Stack Developer",
    "Python Developer",
    "React.js",
    "Next.js",
    "Django",
    "Flask",
    "Node.js",
    "ZynkaraShift",
    "Docker",
    "Data Science",
    "Machine Learning",
    "Kochi Kerala India",
    "Software Engineer",
  ],
  authors: [{ name: "Mehthab N M" }],
  openGraph: {
    title: "Mehthab N M | Full-Stack Developer",
    description:
      "Full-Stack Developer with hands-on experience shipping web applications end-to-end using Python, React, and SQL/NoSQL databases with specialization in applied AI and data-driven systems.",
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
