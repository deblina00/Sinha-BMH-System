import conveyor from "@/assets/product-conveyor.jpg";
import elevator from "@/assets/product-elevator.jpg";
import screen from "@/assets/product-screen.jpg";
import { StaticImageData } from "next/image";

export interface ProductVariety {
  name: string;
  specs: string;
}

export interface Product {
  slug: string;
  title: string;
  desc: string;
  image: StaticImageData;
  longDesc: string;
  varieties: ProductVariety[];
}

export const PRODUCTS: Product[] = [
  {
    slug: "belt-conveyors",
    title: "Belt Conveyors",
    desc: "Heavy-duty troughed belt conveyors for long-distance bulk transport.",
    image: conveyor,
    longDesc: "Engineered for continuous handling of heavy materials like iron ore, coal, limestone, and clinker. Our conveyors offer optimal troughing angles, impact beds at feed points, and high-tensile belts to ensure minimal spillage and maximum runtime.",
    varieties: [
      { name: "Troughed Belt Conveyors", specs: "Up to 45° troughing angles for high-capacity bulk cargo." },
      { name: "Overland Conveyors", specs: "Designed for long-distance terrain tracking with energy-efficient drives." },
      { name: "Pipe Conveyors", specs: "Enclosed structural layout for zero dust and eco-sensitive zones." }
    ]
  },
  {
    slug: "stacker-reclaimers",
    title: "Stacker Reclaimers",
    desc: "Yard machinery for stockpile management at ports & power plants.",
    image: screen,
    longDesc: "Robust stacker reclaimer systems optimized for raw material yard management. Features heavy-duty slewing bearings, advanced bucket wheel mechanics, and automated layering and reclaiming program features.",
    varieties: [
      { name: "Bucket Wheel Stacker Reclaimer", specs: "High capacity blending and reclaiming for coal & ore yards." },
      { name: "Linear Stacker Systems", specs: "Ideal for longitudinal stockpiles with simple track arrangements." }
    ]
  },
  {
    slug: "bucket-screw-elevators",
    title: "Bucket & Screw Elevators",
    desc: "Vertical handling for cement, fly-ash and granular materials.",
    image: elevator,
    longDesc: "High-efficiency configurations built to elevate powdery or granulated materials vertically into silos, hoppers, or mixers without degrade or product loss.",
    varieties: [
      { name: "Centrifugal Chain Elevators", specs: "Heavy-duty link chains built for deep cement clinker applications." },
      { name: "Continuous Belt Elevators", specs: "Gentle handling for grains and fine chemical aggregates." },
      { name: "Shaftless Screw Elevators", specs: "Viscous or highly sticky material tracking without clogging." }
    ]
  },
  {
    slug: "idler-frames",
    title: "Idler Frames",
    desc: "Heavy-duty structural supports tracking structural alignment.",
    image: conveyor,
    longDesc: "Precision-aligned, heavy-gauge steel idler frames built to survive impact forces at transfer points and ensure clean belt running across long lifespans.",
    varieties: [
      { name: "Carry Trough Idlers", specs: "Standard 3-roller set configurations for bulk volume paths." },
      { name: "Impact Idler Frames", specs: "Reinforced configurations with rubber rings for high drop points." },
      { name: "Self-Aligning Trainer Idlers", specs: "Automatically corrects belt drift dynamically." }
    ]
  },
  {
    slug: "pulleys",
    title: "Pulleys",
    desc: "Engineered drive, tail, and take-up assemblies.",
    image: screen,
    longDesc: "Heavy-duty welded steel pulleys designed to withstand high belt tensions. Available with standard or diamond grooved rubber/ceramic lagging to eliminate slippage.",
    varieties: [
      { name: "Drive Pulleys", specs: "Engineered with heavy-duty shafts and premium lagging for power transmission." },
      { name: "Snub & Take-Up Pulleys", specs: "Designed to optimize wrap angles and maintain accurate counter-weight tension." }
    ]
  },
  {
    slug: "scrappers",
    title: "Scrappers",
    desc: "High-efficiency belt and chain cleaners for heavy material removal.",
    image: elevator,
    longDesc: "Primary and secondary scraper systems that eradicate material carryback, protecting return rollers, pulleys, and the belt structure from abrasive wear.",
    varieties: [
      { name: "Primary Polyurethane Cleaners", specs: "Mounted at the head pulley for aggressive bulk bulk removal." },
      { name: "Tungsten Carbide Secondary Scrapers", specs: "Fine-tune skimming to handle persistent sticky fines." }
    ]
  },
  {
    slug: "hot-charging-roller-conveyor",
    title: "Hot Charging Roller Conveyor",
    desc: "Thermal-resilient roller beds for hot metal and billet handling.",
    image: elevator,
    longDesc: "Specialized heat-insulated conveyor beds for directly feeding hot billets, slabs, or DRI (Direct Reduced Iron) into mills safely at intense temperatures.",
    varieties: [
      { name: "Water-Cooled Roller Conveyors", specs: "Internal circulation cooling for continuous hot billet paths." },
      { name: "Heavy-Duty Melt Shop Runout Tables", specs: "Impact resistant direct drop-zones built for steel foundries." }
    ]
  }
];