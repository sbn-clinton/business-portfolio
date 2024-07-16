"use client";

import Image from "next/image";
import { useEffect, useState, ReactNode } from "react";
import {
  BookImageIcon,
  GroupIcon,
  HeadphonesIcon,
  SmileIcon,
  PlusCircleIcon,
} from "lucide-react";
import { GiHook } from "react-icons/gi";
import Reveal from "./Reveal";

interface StatProps {
  value: number;
  label: string;
  desc: string;
  icon: ReactNode;
}

interface PortfolioProps {
  tabs: {
    id: number;
    label: string;
    images: { src: string; title: string; description: string }[];
  }[];
}

const Stat: React.FC<StatProps> = ({ value, label, desc, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // Duration of the count-up in milliseconds
    const incrementTime = 30; // Time interval between increments in milliseconds
    const step = (end - start) / (duration / incrementTime);

    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(counter);
        start = end;
      }
      setCount(Math.ceil(start));
    }, incrementTime);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="flex flex-row gap-3 md:gap-4 p-2">
      <div className="flex items-start justify-center">{icon}</div>
      <div className="flex flex-col gap-2 md:gap-3 text-start">
        <h1 className="font-extrabold text-2xl sm:text-3xl">{count}</h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-500 font-bold">
          {label} <span className="font-thin">{desc}</span>
        </p>
      </div>
    </div>
  );
};

const Portfolio: React.FC<PortfolioProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const stats = [
    {
      icon: <SmileIcon className="w-12 h-12 text-orange-300" />,
      value: 232,
      label: "Happy Clients",
      desc: "consequuntur quae",
    },
    {
      icon: <BookImageIcon className="w-12 h-12 text-orange-300" />,
      value: 521,
      label: "Projects",
      desc: "adipisci atque cum quia aut",
    },
    {
      icon: <HeadphonesIcon className="w-12 h-12 text-orange-300" />,
      value: 1453,
      label: "Hours Of Support",
      desc: "aut commodi quaerat",
    },
    {
      icon: <GroupIcon className="w-12 h-12 text-orange-300" />,
      value: 32,
      label: "Hard Workers",
      desc: "rerum asperiores dolo",
    },
  ];

  return (
    <section id="portfolio" className=" my-10 space-y-8">
      <div className="flex flex-col gap-2 max-w-6xl md:mx-auto mx-4">
        <div className="flex content-center">
          <p className=" font-thin tracking-widest text-sm md:text-base text-slate-400">
            PORTFOLIO{" "}
          </p>
          <hr className=" w-20 sm:w-28 mx-2 my-1 self-center h-[2px] inline-block bg-orange-400" />
        </div>

        <h1 className="font-[1000] text-2xl sm:text-3xl text-balance text-black ">
          CHECK OUR PORTFOLIO
        </h1>
      </div>

      <div className="mt-5 mb-3 max-w-6xl md:mx-auto mx-4">
        <div className="flex space-x-4 justify-center items-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-1 px-3 font-extralight text-sm text-slate-700 rounded-xl border-2 hover:border-orange-400 ${
                activeTab === tab.id ? "bg-orange-400" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl md:mx-auto mx-4">
          {tabs[activeTab].images.map((image, index) => (
            <div key={index} className="relative group">
              <Image
                src={image.src}
                alt={image.title}
                width={500}
                height={500}
                className="rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all rounded-b-lg">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <h3 className="text-white text-sm md:text-base">
                      {image.title}
                    </h3>
                    <p className="text-white text-sm md:text-base">
                      {image.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <PlusCircleIcon className="text-white w-5 h-5 hover:text-orange-400" />
                    <GiHook className="text-white w-5 h-5 hover:text-orange-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 max-w-6xl md:mx-auto mx-4">
        <div className="md:w-1/2">
          <Reveal>
            <Image
              src="/assets/img/stats-img.jpg"
              alt="stats"
              width={500}
              height={500}
            />
          </Reveal>
        </div>
        <div className="flex flex-col gap-3 md:gap-4 md:w-1/2">
          <div className="flex flex-col gap-2 text-start">
            <Reveal>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Voluptatem dignissimos provident quasi
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-gray-500 text-sm sm:text-base font-extralight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Stat
                key={index}
                value={stat.value}
                icon={stat.icon}
                label={stat.label}
                desc={stat.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CountUpStats: React.FC = () => {
  return (
    <Portfolio
      tabs={[
        {
          id: 0,
          label: "All",
          images: [
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
              title: "Image 1",
              description: "Description 1",
            },
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-2.jpg",
              title: "Image 2",
              description: "Description 2",
            },
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-3.jpg",
              title: "Image 3",
              description: "Description 3",
            },
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-4.jpg",
              title: "Image 4",
              description: "Description 4",
            },
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-5.jpg",
              title: "Image 5",
              description: "Description 5",
            },
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-6.jpg",
              title: "Image 6",
              description: "Description 6",
            },
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-7.jpg",
              title: "Image 7",
              description: "Description 7",
            },
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-8.jpg",
              title: "Image 8",
              description: "Description 8",
            },
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-9.jpg",
              title: "Image 9",
              description: "Description 9",
            },
          ],
        },
        {
          id: 1,
          label: "App",
          images: [
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-6.jpg",
              title: "Image 6",
              description: "Description 6",
            },
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-7.jpg",
              title: "Image 7",
              description: "Description 7",
            },
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-8.jpg",
              title: "Image 8",
              description: "Description 8",
            },
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-9.jpg",
              title: "Image 9",
              description: "Description 9",
            },
          ],
        },
        {
          id: 2,
          label: "Card",
          images: [
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
              title: "Image 1",
              description: "Description 1",
            },
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-2.jpg",
              title: "Image 2",
              description: "Description 2",
            },
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-3.jpg",
              title: "Image 3",
              description: "Description 3",
            },
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-4.jpg",
              title: "Image 4",
              description: "Description 4",
            },
          ],
        },
        {
          id: 3,
          label: "Web",
          images: [
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-3.jpg",
              title: "Image 3",
              description: "Description 3",
            },
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-4.jpg",
              title: "Image 4",
              description: "Description 4",
            },
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-5.jpg",
              title: "Image 5",
              description: "Description 5",
            },
            {
              src: "/assets/img/masonry-portfolio/masonry-portfolio-6.jpg",
              title: "Image 6",
              description: "Description 6",
            },
          ],
        },
      ]}
    />
  );
};

export default CountUpStats;
