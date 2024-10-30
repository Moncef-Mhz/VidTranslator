import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Global/NavBar";
import Footer from "@/components/Global/Footer";

const poppins = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VidTranslator - Home",
  description: "VidTranslator - Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
