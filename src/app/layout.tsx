import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className=" ">
          <div className="container flex justify-between py-4 px-6 nx-auto ">
          <Link href={"/"} className="font-bold">Zed Jobs</Link>
          <nav className="flex gap-2 *:py-2 *:px-4 *:rounded-nd">
           <Link className="bg-gray-200" href={'/login'}>Login</Link>
           <Link className="bg-blue-600 text-white" href={'/new-listing'}>Post a Job</Link>
        </nav>
          </div>
          
        </header>
        
        {children}
        </body>
    </html>
  );
}
