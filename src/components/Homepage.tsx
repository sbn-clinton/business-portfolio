"use client";

import { DiamondIcon, Laptop2Icon } from "lucide-react";
import { ReactNode } from "react";
import { GiCyberEye } from "react-icons/gi";
import { SiCyberdefenders, SiHackerone } from "react-icons/si";
import { motion } from "framer-motion";

interface Icard {
  title: string;
  icon: ReactNode;
}
const cards: Icard[] = [
  {
    title: "Lorem Ipsum",
    icon: <SiCyberdefenders className=" text-orange-400 w-10 h-10" />,
  },
  {
    title: "Dolor Sitema",
    icon: <Laptop2Icon className=" text-orange-400 w-10 h-10" />,
  },
  {
    title: "Sedare Perspiciatis",
    icon: <GiCyberEye className=" text-orange-400 w-10 h-10" />,
  },
  {
    title: "Magni Dolores",
    icon: <SiHackerone className=" text-orange-400 w-10 h-10" />,
  },
  {
    title: "Nemos Enimade",
    icon: <DiamondIcon className=" text-orange-400 w-10 h-10" />,
  },
];

const Homepage = () => {
  return (
    <section
      id="#"
      className=" bg-[url('/assets/img/hero-bg.jpg')] md:bg-contain bg-center"
    >
      <div className=" flex flex-col justify-center items-center gap-3 md:gap-3  py-10 md:py-24 bg-black bg-opacity-80 h-full w-full">
        <div className=" flex flex-col gap-3 md:gap-7 text-center py-16 md:py-16">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className=" md:hidden text-2xl sm:text-4xl  font-extrabold text-orange-100"
          >
            Powerful Digital Solutions With SBN{" "}
            <span className=" text-3xl md:text-5xl text-orange-400">. </span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className=" hidden md:block text-2xl sm:text-4xl md:text-6xl font-extrabold text-orange-100"
          >
            Powerful Digital <br /> Solutions With SBN{" "}
            <span className="text-6xl text-orange-400">. </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className=" text-sm sm:text-base md:text-lg font-medium text-slate-300"
          >
            We are team of talented digital marketers
          </motion.p>
        </div>

        <CardList />
      </div>
    </section>
  );
};

export default Homepage;

export const CardList: React.FC = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-5 justify-center items-center max-w-4xl md:mx-auto mx-4 gap-3">
      {cards.map((card, index) => (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          key={index}
          className=" flex flex-col justify-center items-center gap-3 border-2 md:border-[1px] border-slate-300 hover:border-orange-400 text-center py-8 md:py-8 rounded-lg px-40  md:px-3"
        >
          {card.icon}
          <h3 className="font-bold text-nowrap text-lg text-slate-400">
            {card.title}
          </h3>
        </motion.div>
      ))}
    </div>
  );
};
