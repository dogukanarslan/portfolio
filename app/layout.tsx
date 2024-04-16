import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Doğukan Arslan'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-night mx-auto text-sm`}>
        <main className="text-dawn h-screen">{children}</main>
      </body>
    </html>
  );
}
