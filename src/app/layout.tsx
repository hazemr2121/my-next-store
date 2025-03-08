import "./globals.css";
import Link from "next/link";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <nav className="bg-blue-600 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-xl font-bold">
                MyStore
              </Link>
              <div className="space-x-4">
                <Link href="/" className="hover:text-blue-200">
                  Home
                </Link>
                <Link href="/Product" className="hover:text-blue-200">
                  Products
                </Link>
                <Link href="/about" className="hover:text-blue-200">
                  About
                </Link>
              </div>
            </div>
          </nav>
          <main className="flex-grow container mx-auto p-4">{children}</main>
        </div>
        <footer className="bg-blue-600 p-4 text-white text-center">
          <p>&copy; 2023 MyStore. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
