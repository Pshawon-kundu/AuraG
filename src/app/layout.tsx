import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "AuraG | Next-generation skill-based Web3 gaming platform",
  description:
    "AuraG is a next-generation skill-based Web3 gaming platform focused on competitive play, progression, and utility-driven rewards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} bg-background font-body text-text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
