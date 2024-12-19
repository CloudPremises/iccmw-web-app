import type { Metadata } from "next";

import "./globals.css";
// Components
// import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BottomBar from "@/components/layout/BottomBar";



export const metadata: Metadata = {
  title: "ICCMW - Islamic Community Center of Mid-Westchester",
  description: "Islamic Community Center of Mid-Westchester",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background">
        {/* <TopBar /> */}
        <Header />
        <main className=" mx-auto ">
          {children}
        </main>
        <Footer />
        <BottomBar />
      </body>
    </html>
  );
}