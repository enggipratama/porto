import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Caveat,Varela } from 'next/font/google'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: ['400', '700'],
})

const varela = Varela({
  variable: "--font-varela",
  subsets: ["latin"],
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "MEGP",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${varela.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
