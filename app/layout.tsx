import { Header } from '@/components/header';
import { ActiveSectionContextProvider } from "@/context/active-section-context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { ThemeSwitch } from '@/components/theme-switch';
import { ThemeContextProvider } from '@/context/theme-context';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'Eric Kim | Personal Portfolio',
    description: 'Software developer with interests in distributed systems',
    openGraph: {
        title: 'Eric Kim | Personal Portfolio',
        description: 'Software developer with interests in distributed systems',
        url: 'ericdwkim.io',
        images: {
            url: 'https://avatars.githubusercontent.com/u/90213701?s=400&u=4ed7055ace2c909ef3c01d6598a5a0c4f0088605&v=4',
            alt: 'Eric Kim avatar',
        },
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
          className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

      <ThemeContextProvider>
          <ActiveSectionContextProvider>
              <Header/>
              {children}
              {/*<ThemeSwitch/>*/}
          </ActiveSectionContextProvider>
      </ThemeContextProvider>
      </body>
    </html>
  );
}
