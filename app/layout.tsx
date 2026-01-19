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
  title: "Verslo Rezervacijų Svetainės - Profesionalios Svetainės su Integruotomis Rezervacijų Sistemomis",
  description: "Kuriu svetaines su integruotomis internetinėmis rezervacijų sistemomis paslaugų verslams. Transformuokite savo verslą su sklandžia rezervacijų patirtimi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
