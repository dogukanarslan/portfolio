import type { Metadata } from "next";
import { Gelasio } from "next/font/google";
import "./globals.css";
import data from "./data.json";

const gelasio = Gelasio({ subsets: ["latin"], variable: "--font-gelasio", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: data.name
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gelasio.variable}`}>
      <body className="bg-background text-foreground">
        <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-5 py-16">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
