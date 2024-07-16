"use client";

import { SiNetflix, SiStripe } from "react-icons/si";
import { HoverEffect } from "./ui/card-hover-effect";
import {
  RiAmazonFill,
  RiGoogleFill,
  RiMetaFill,
  RiMicrosoftFill,
} from "react-icons/ri";

export function ServicesCard() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: <SiStripe className=" w-14 h-14 text-orange-400" />,
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
  },
  {
    icon: <SiNetflix className=" w-14 h-14 text-orange-400" />,
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    icon: <RiGoogleFill className=" w-14 h-14 text-orange-400" />,
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
  },
  {
    icon: <RiMetaFill className=" w-14 h-14 text-orange-400" />,
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
  },
  {
    icon: <RiAmazonFill className=" w-14 h-14 text-orange-400" />,
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
  },
  {
    icon: <RiMicrosoftFill className=" w-14 h-14 text-orange-400" />,
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  },
];
