// //src/app/(public)/layout.tsx
// import type { Metadata } from "next";
// import { Inter, Space_Grotesk, Geist } from "next/font/google";
// import "../globals.css";
// import { Providers } from "@/components/providers";
// import Footer from "@/components/site/Footer";
// import Navbar from "@/components/site/Navbar";
// import { Toaster } from "@/components/ui/sonner";
// import { cn } from "@/lib/utils";

// const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// const spaceGrotesk = Space_Grotesk({
//   subsets: ["latin"],
//   variable: "--font-space-grotesk",
// });

// export const metadata: Metadata = {
//   title:
//     "Sinha BMH Systems India Pvt. Ltd. — Bulk Material Handling Engineered for Industry",

//   description:
//     "Sinha BMH Systems designs and builds turnkey bulk material handling plants — conveyors, stackers, reclaimers and feeders — for steel, cement, power and mining.",

//   authors: [
//     {
//       name: "Sinha BMH Systems India Pvt. Ltd.",
//     },
//   ],

//   openGraph: {
//     title: "Sinha BMH Systems India Pvt. Ltd.",
//     description:
//       "Turnkey bulk material handling systems engineered for steel, cement, power and mining.",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={cn("font-sans", geist.variable)}>
//       <body
//         className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-background text-foreground`}
//       >
//         <Providers>
//           <Navbar />
//           <main>{children}</main>
//           <Toaster richColors position="top-right" />
//           <Footer />
//         </Providers>
//       </body>
//     </html>
//   );
// }

// src/app/(public)/layout.tsx
import { Providers } from "@/components/providers";
import Footer from "@/components/site/Footer";
import Navbar from "@/components/site/Navbar";
import { Toaster } from "@/components/ui/sonner";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Navbar />
      <main>{children}</main>
      <Toaster richColors position="top-right" />
      <Footer />
    </Providers>
  );
}