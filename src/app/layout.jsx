<<<<<<< HEAD
=======
'use client';
>>>>>>> a006c7dfdb5dc8d911a809511cc598b7c4401f6a
import localFont from "next/font/local";
import "./globals.css";
import MenuPrincipal from "@/components/menu-principal.jsx";

<<<<<<< HEAD
=======

>>>>>>> a006c7dfdb5dc8d911a809511cc598b7c4401f6a
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
<<<<<<< HEAD
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-screen`}>
          <aside class="shrink-0">
          <MenuPrincipal/>

          </aside>
        <main className="h-full grow">
        {children}
=======
      <body className={`${geistSans.variable} antialiased flex flex-col lg:flex-row w-full h-screen`}>

          <MenuPrincipal />

        <main className=" flex-1 h-full">
          {children}
>>>>>>> a006c7dfdb5dc8d911a809511cc598b7c4401f6a
        </main>
      </body>
    </html>
  );
}
<<<<<<< HEAD
=======

>>>>>>> a006c7dfdb5dc8d911a809511cc598b7c4401f6a
