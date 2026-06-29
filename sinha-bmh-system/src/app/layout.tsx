// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Sinha BMH Systems India Pvt. Ltd. — Bulk Material Handling",
  description: "Bulk material handling systems engineered for industry.",
};

export default function GlobalRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}