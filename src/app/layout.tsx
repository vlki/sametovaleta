import type { Metadata } from "next";
import { Rubik, Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sametová léta",
  description:
    "Obsahový larp o životě na přelomu 80. a 90. let ve třech dovolenkových obrazech",
  appleWebApp: {
    title: "Samet",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${urbanist.variable} ${rubik.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
