"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function AboutCarousel() {
  return (
    <div className="h-24 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards images={images} direction="right" speed="slow" />
    </div>
  );
}

const images = [
  "/assets/img/clients/client-1.png",
  "/assets/img/clients/client-2.png",
  "/assets/img/clients/client-3.png",
  "/assets/img/clients/client-4.png",
  "/assets/img/clients/client-5.png",
  "/assets/img/clients/client-6.png",
  "/assets/img/clients/client-7.png",
  "/assets/img/clients/client-8.png",
];
