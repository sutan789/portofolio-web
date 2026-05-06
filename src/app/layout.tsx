import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/ui/Preloader";
import StarsBackground from "@/components/ui/Background/Stars";
import PlanetsDecoration from "@/components/ui/Background/Planets";
import ScrollRocket from "@/components/ui/ScrollRocket";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Sutan Dev | Fullstack Developer Portfolio",
  description: "Senior Fullstack Developer building modern digital solutions with Next.js, TypeScript, and Framer Motion.",
  keywords: ["Fullstack Developer", "Next.js", "TypeScript", "React Portfolio", "Sutan Dev"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-[#020205] text-white`}
      >
        <Preloader />
        <StarsBackground />
        <PlanetsDecoration />
        <ScrollRocket />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
