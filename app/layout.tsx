import type { Metadata } from "next";
import "./globals.css";
import { Whyte } from "./fonts/font";
import NavBar from "@/app/components/navbar";


export const metadata: Metadata = {
  title: "Figma Shop",
  description: "A simple Figma shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Whyte.className} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}