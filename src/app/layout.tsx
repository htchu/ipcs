import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  title: "國際資訊學士學位學程 IPCS | 靜宜大學 Providence University",
  description:
    "International Program in Computer Science at Providence University, Taichung, Taiwan. 靜宜大學國際資訊學士學位學程。",
  keywords: [
    "IPCS",
    "Providence University",
    "Computer Science",
    "Taiwan",
    "International Program",
    "靜宜大學",
    "國際資訊學士學位學程",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
