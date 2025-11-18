import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grožio Verslų Svetainės - Elegantiškos Svetainės su Rezervacijų Sistemomis",
  description: "Kuriu elegantiškas svetaines su integruotomis rezervacijų sistemomis specialiai grožio salonams, nagų studijoms ir asmeninėms paslaugoms. Leiskite klientams rezervuoti laiką tiesiogiai iš svetainės.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-[#050b20] to-[#0A183D]`}
      >
        {children}
      </body>
    </html>
  );
}
