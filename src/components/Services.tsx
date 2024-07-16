"use client";

import { ServicesCard } from "./ServicesCard";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services">
      <div className="flex flex-col gap-2 max-w-6xl md:mx-auto mx-4">
        <div className="flex content-center">
          <p className=" font-thin tracking-widest text-sm md:text-base text-slate-400">
            SERVICES{" "}
          </p>
          <hr className=" w-20 sm:w-28 mx-2 my-1 self-center h-[2px] inline-block bg-orange-400" />
        </div>

        <h1 className="font-[1000] text-2xl sm:text-3xl text-balance text-black ">
          CHECK OUR SERVICES
        </h1>
      </div>
      <ServicesCard />
      <div className=" px-4 py-20 sm:py-24 bg-[url('/assets/img/cta-bg.jpg')] bg-cover ">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 text-white"
        >
          <div className=" text-center flex flex-col gap-3 justify-center items-center max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold">Call To Action</h3>
            <p className=" text-sm font-normal">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className=" flex justify-center items-center">
            <button className="border-[2px] border-gray-500 py-4 px-8 text-gray-500 rounded-lg hover:bg-orange-300 hover:border-orange-300 hover:text-black">
              Call To Action
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
