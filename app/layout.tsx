import type { Metadata } from "next";
import { noto_serif } from "../lib/fonts";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';



export const metadata: Metadata = {
  title: "For Béo NC",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={noto_serif.className} >
      <body className={noto_serif.className}>{children}</body>
      <Analytics />
    </html>
  );
}
