import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dogukan Arslan'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111010] text-white max-w-2xl mx-auto mt-14`}
      >
        <Navbar />
        <main className="mt-20">{children}</main>
      </body>
    </html>
  );
}
