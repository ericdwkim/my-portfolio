import { Header } from '@/components/header';
import { ActiveSectionContextProvider } from "@/context/active-section-context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eric Kim | Personal Portfolio",
  description: "Software developer with interests in distributed systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
      <ActiveSectionContextProvider>
          <Header/>
          {children}
      </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
