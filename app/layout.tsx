import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./theme-provider";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RoadmapX — Interactive Visual Career Roadmaps",
    template: "%s | RoadmapX",
  },
  description:
    "Browse interactive, hand-authored career roadmaps for 59 tech and non-tech roles. Tools, frameworks, and skills — in the order you actually need them.",
  keywords: ["roadmap", "career", "learning", "tech", "web development", "AI", "cloud", "cybersecurity", "free"],
  openGraph: {
    title: "RoadmapX — Interactive Visual Career Roadmaps",
    description: "Concise roadmaps for 59 roles. Tools, frameworks, and skills — in the order you actually need them.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
