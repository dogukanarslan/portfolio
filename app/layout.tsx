import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doğukan Arslan"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-2xl px-5 my-16 mx-auto text-[#484848] bg-[#f6f5ed] font-serif">
        <main>{children}</main>
      </body>
    </html>
  );
}
