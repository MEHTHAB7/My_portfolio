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
  title: "Mehthab N M | Full-Stack Developer & AI Systems Engineer",
  description:
    "BCA graduate & MCA candidate experienced in building production web applications, automated deployment platforms (Zynkarashift), and AI-driven workflows. Proven track record leading developer teams.",
  keywords: [
    "Mehthab N M",
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "Zynkarashift",
    "Python",
    "Data Science",
    "Kochi Kerala",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Mehthab N M" }],
  openGraph: {
    title: "Mehthab N M | Full-Stack Developer",
    description:
      "Full-Stack Developer & MCA candidate building production web apps, automated PaaS platforms, and AI workflows.",
    url: "https://mehthab.dev",
    siteName: "Mehthab N M Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehthab N M | Full-Stack Developer",
    description:
      "Full-Stack Developer & MCA candidate building production web apps, automated PaaS platforms, and AI workflows.",
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
