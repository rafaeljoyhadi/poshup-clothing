// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'; // <-- IMPORT LINK

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poshup Clothing",
  description: "High-quality garments and clothing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* START OF OUR NEW HEADER */}
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Poshup Clothing
            </Link>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
              <Link href="/portfolio" className="text-gray-600 hover:text-gray-800">Portfolio</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-800">About Us</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
            </div>
          </nav>
        </header>
        {/* END OF OUR NEW HEADER */}

        <main>{children}</main>
        
        {/* You can add a footer here later */}
      </body>
    </html>
  );
}