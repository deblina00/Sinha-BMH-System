//src/data/industries.ts

import { StaticImageData } from "next/image";
import indSteel from "@/assets/industry-steel.jpeg";
import indCement from "@/assets/industry-cement.jpg";
import indMining from "@/assets/industry-mining.jpg";
import indPower from "@/assets/industry-power.jpg";
import indPort from "@/assets/industry-ports.jpg";
import indFertilizer from "@/assets/industry-fertilizer.jpeg";

export interface IndustryApplication {
  title: string;
  description: string;
}

export interface Industry {
  slug: string;
  title: string;
  image: StaticImageData;
  shortDesc: string;
  longDesc: string;
  applications: IndustryApplication[];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "steel",
    title: "Integrated Steel & DRI Plants",
    image: indSteel,

    shortDesc:
      "Heavy-duty conveyor systems engineered for iron ore, pellets and sponge iron handling.",

    longDesc:
      "Steel plants require continuous movement of iron ore, pellets, coal, coke, limestone and finished products under harsh operating conditions. Sinha BMH designs and manufactures heavy-duty conveyor systems, pulleys, idlers and structural equipment engineered for high temperatures, abrasive materials and continuous production.",

    applications: [
      {
        title: "Raw Material Handling",
        description:
          "Iron ore, limestone, coke and pellet conveying systems."
      },
      {
        title: "Blast Furnace Feeding",
        description:
          "Reliable belt conveyors for continuous furnace charging."
      },
      {
        title: "Stockyards",
        description:
          "Stacking, reclaiming and long-distance conveying."
      }
    ]
  },

  {
    slug: "cement",

    title: "Cement",

    image: indCement,

    shortDesc:
      "Wear-resistant conveying solutions for limestone, clinker and cement.",

    longDesc:
      "Cement manufacturing demands equipment capable of handling abrasive material, elevated temperatures and dusty environments. Our systems maximize uptime while minimizing maintenance.",

    applications: [
      {
        title: "Limestone Handling",
        description: "Crusher to storage conveyors."
      },
      {
        title: "Clinker Transport",
        description: "Heat-resistant conveyor systems."
      },
      {
        title: "Packing Plant",
        description: "Finished cement handling."
      }
    ]
  },

  {
    slug: "mining",
    title: "Mining & Minerals",
    image: indMining,

    shortDesc:
      "Extreme-duty material handling equipment for mines.",

    longDesc:
      "Designed for impact loading, abrasive ore and long-distance conveying in mining operations.",

    applications: [
      {
        title: "ROM Ore",
        description: "Primary crusher feeding."
      },
      {
        title: "Overland Conveyors",
        description: "Long-distance bulk transport."
      },
      {
        title: "Transfer Stations",
        description: "Heavy-duty structural solutions."
      }
    ]
  },

  {
    slug: "power",
    title: "Thermal Power",

    image: indPower,

    shortDesc:
      "Coal Handling Plant (CHP) solutions.",

    longDesc:
      "Reliable coal handling systems from wagon tipplers to bunker feeding for uninterrupted power generation.",

    applications: [
      {
        title: "Coal Yard",
        description: "Coal stacking & reclaiming."
      },
      {
        title: "CHP",
        description: "Crusher and transfer conveyors."
      },
      {
        title: "Boiler Feeding",
        description: "Continuous bunker feeding."
      }
    ]
  },

  {
    slug: "ports",
    title: "Ports & Terminals",

    image: indPort,

    shortDesc:
      "Marine-grade conveyor systems for bulk cargo.",

    longDesc:
      "Designed for continuous ship loading, unloading and stockyard operations in coastal environments.",

    applications: [
      {
        title: "Ship Loading",
        description: "Bulk cargo conveyor systems."
      },
      {
        title: "Stockyards",
        description: "Stackers & reclaimers."
      },
      {
        title: "Coal & Ore",
        description: "Continuous material transfer."
      }
    ]
  },

  {
    slug: "fertilizers",

    title: "Fertilizers",

    image: indFertilizer,

    shortDesc:
      "Corrosion-resistant handling systems.",

    longDesc:
      "Engineered for handling urea, DAP, NPK and other hygroscopic fertilizers while minimizing degradation.",

    applications: [
      {
        title: "Raw Material",
        description: "Bulk storage conveyors."
      },
      {
        title: "Production",
        description: "Plant material handling."
      },
      {
        title: "Bagging",
        description: "Finished product movement."
      }
    ]
  }
];