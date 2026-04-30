import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-background text-foreground font-serif">
        <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-5 py-16">
          <main className="mt-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
