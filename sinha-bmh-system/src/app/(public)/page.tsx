// src/app/(public)/page.tsx
import { Metadata } from "next";
import HomeContent from "./home-content";

export const metadata: Metadata = {
  title: "Sinha BMH Systems India — Bulk Material Handling Manufacturers",
  description:
    "Sinha BMH Systems designs, manufactures, and commissions industrial bulk material handling plants, heavy-duty belt conveyors, and turnkey EPC projects across India.",
  alternates: {
    canonical: "https://www.sinhabmh.com",
  },
};
export default function Home() {
  return <HomeContent />;
}