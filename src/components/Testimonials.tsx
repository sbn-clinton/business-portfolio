"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RxQuote, RxStarFilled } from "react-icons/rx";
import { motion } from "framer-motion";
import { QuoteIcon, TextQuoteIcon } from "lucide-react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface CarouselItem {
  image: string;
  title: string;
  rank: string;
  quote: string;
}

const items: CarouselItem[] = [
  {
    image: "/assets/img/testimonials/testimonials-1.jpg",
    title: "Matt Brandon",
    rank: "Freelancer",
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas at optio aut quos voluptates odio consectetur, aliquam fuga, laudantium, non nulla! Totam alias deserunt suscipit quae sed? Inventore, soluta minus?",
  },
  {
    image: "/assets/img/testimonials/testimonials-2.jpg",
    title: "Sara Wilson",
    rank: "Entrepreneur",
    quote:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora ad delectus a, laborum ipsum tenetur ipsa.",
  },
  {
    image: "/assets/img/testimonials/testimonials-3.jpg",
    title: "Jena Kalis",
    rank: "Store Owner",
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, facilis.",
  },
  {
    image: "/assets/img/testimonials/testimonials-4.jpg",
    title: "John Larson",
    rank: "Designer",
    quote:
      "Lorem ipsum dolor sit amet consectetur  adipisicing elit. Quisquam nesciunt id velit totam nulla cupiditate.",
  },
  {
    image: "/assets/img/testimonials/testimonials-5.jpg",
    title: "Saul Goodman",
    rank: "Ceo & Founder",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nesciunt id velit totam nulla cupiditate.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonial"
      className=" my-16 sm:my-20  bg-[url('/assets/img/testimonials-bg.jpg')] bg-cover "
    >
      <div className=" py-20 sm:py-28 bg-black opacity-75 ">
        <div className="relative w-full max-w-6xl md:mx-auto h-72 ">
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
                className="flex flex-col items-center bg-transparent  shadow-lg mx-6 max-w-6xl md:mx-auto "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div className="p-4 flex flex-col gap-4 md:gap-6  text-center">
                  <div className="">
                    <h2 className="text-2xl font-bold text-white">
                      {item.title}
                    </h2>
                    <p className="text-xs md:text-sm text-gray-300">
                      {item.rank}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <RxStarFilled className="text-yellow-500 md:w-6 md:h-6 sm:w-4 sm:h-4 w-3 h-3 inline-block" />
                    <RxStarFilled className="text-yellow-500 md:w-6 md:h-6 sm:w-4 sm:h-4 w-3 h-3 inline-block" />
                    <RxStarFilled className="text-yellow-500 md:w-6 md:h-6  sm:w-4 sm:h-4 w-3 h-3 inline-block" />
                    <RxStarFilled className="text-yellow-500 md:w-6 md:h-6 sm:w-4 sm:h-4 w-3 h-3 inline-block" />
                    <RxStarFilled className="text-yellow-500 md:w-6 md:h-6  sm:w-4 sm:h-4 w-3 h-3 inline-block" />
                  </div>
                  <div className="text-xs sm:text-sm md:text-base mt-2 text-slate-300">
                    <FaQuoteLeft />
                    <p className=" text-xs sm:text-sm md:text-base mt-2 text-slate-300">
                      {item.quote}
                    </p>
                    <span className=" text-6xl"> &#8221;</span>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
