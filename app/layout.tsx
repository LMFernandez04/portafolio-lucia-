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
  title: "Lucía Fernández | Portafolio Frontend",
  description: "Portafolio profesional de Lucía Fernández, desarrolladora web junior especializada en React, Next.js y TypeScript.",
  metadataBase: new URL("https://tusitio.com"),
  openGraph: {
    title: "Lucía Fernández | Portafolio Frontend",
    description: "Portafolio profesional de Lucía Fernández, desarrolladora web junior especializada en React, Next.js y TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">{children}</body>
    </html>
  );
}
