"use client";

import { useState, useEffect, useRef, ReactNode, Children } from "react";
import { motion, useInView, useAnimation, easeInOut } from "framer-motion";

const Reveal = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <div ref={ref} className=" relative overflow-hidden w-fit">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
