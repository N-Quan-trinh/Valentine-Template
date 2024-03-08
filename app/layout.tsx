import type { Metadata } from "next";
import { noto_serif } from "../lib/fonts";
import "./globals.css";
import ico from './favicon.ico'
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
      <head><link rel="icon" href="favicon.ico" type="image/x-icon" /></head>
      <body className={noto_serif.className}>{children}</body>
      <Analytics />
    </html>
  );
}
