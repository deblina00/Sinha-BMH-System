// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sinhabmh.com"), // Replace with your production domain
  title: {
    default: "Sinha BMH Systems India Pvt. Ltd. — Bulk Material Handling",
    template: "%s | Sinha BMH Systems"
  },
  description: "Sinha BMH Systems India Pvt. Ltd. is a leading manufacturer of advanced bulk material handling systems, industrial conveyors, and custom turnkey engineering solutions in India.",
  keywords: [
    "Bulk Material Handling India",
    "Conveyor Manufacturer India",
    "Sinha BMH Systems",
    "Industrial Material Handling Systems",
    "Turnkey Engineering Solutions",
    "Material Handling Equipment"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sinha BMH Systems India Pvt. Ltd. — Bulk Material Handling Systems",
    description: "Engineered bulk material handling solutions and turnkey industrial projects tailored for structural efficiency and performance.",
    url: "https://www.sinhabmh.com",
    siteName: "Sinha BMH Systems",
    images: [
      {
        url: "/og-image.jpg", // Ensure you place an OG image in your public/ directory
        width: 1200,
        height: 630,
        alt: "Sinha BMH Systems Bulk Material Handling",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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