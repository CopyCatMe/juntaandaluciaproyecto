'use client';

import localFont from "next/font/local";
import "./globals.css";
import MenuPrincipal from "@/components/menu-principal.jsx";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased flex flex-col lg:flex-row w-full h-screen`}>

          <MenuPrincipal />

        <main className=" flex-1 h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
