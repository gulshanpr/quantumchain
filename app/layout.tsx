import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";

const syne = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Starknet Ecosystem",
  description: "Job Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.className} bg-[#121232]`}>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <div className="lg:w-[80%] mx-auto">
            <Header />
            <div className="px-4 py-16">
              <section className="relative">
                <h1 className="text-white">
                  <div className="relative inline">
                    <span className="text-[2.875rem] sm:text-[4.25rem] font-bold z-10 relative">
                      Jobs
                    </span>
                    <span className="absolute inline h-[80%] w-[110%] max-w-[110%] left-[-0.3125rem] bottom-0 underline-main z-0"></span>
                  </div>
                </h1>
                <p className="text-[#ffffff7a] pt-2 text-base md:text-xl">
                  You may be one click away from your dream job.
                </p>
              </section>
            </div>
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
