import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olaoluwa Oshyioku (pka Erudite) | Frontend Developer",
  description: "Frontend Developer specializing in building exceptional digital experiences with React, Next.js, and TypeScript.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Web Development"],
  authors: [{ name: "Olaoluwa Oshyioku (pka Erudite)" }],
  openGraph: {
    title: "Olaoluwa Oshyioku (pka Erudite) | Frontend Developer",
    description: "Frontend Developer specializing in building exceptional digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-background text-text-primary`}>
        {children}
      </body>
    </html>
  );
}
