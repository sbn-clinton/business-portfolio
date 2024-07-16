import { CheckCheckIcon, Laptop, ShoppingBasketIcon } from "lucide-react";
import Image from "next/image";
import { AboutCarousel } from "./AboutCarousel";
import { RiHotspotFill } from "react-icons/ri";
import { MdVideocam } from "react-icons/md";
import Reveal from "./Reveal";

const items = [
  {
    title: "Est labore ad",
    icon: <Laptop className=" w-14 h-14 text-orange-300" />,
    desc: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
  },
  {
    title: "Harum esse qui",
    icon: <ShoppingBasketIcon className=" w-14 h-14 text-orange-300" />,
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
  },
  {
    title: "Aut occaecati",
    icon: <RiHotspotFill className=" w-14 h-14 text-orange-300" />,
    desc: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
  },
  {
    title: "Beatae veritatis",
    icon: <MdVideocam className=" w-14 h-14 text-orange-300" />,
    desc: "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta",
  },
];

const About = () => {
  return (
    <section id="about" className="flex flex-col gap-7">
      <div className="flex flex-col-reverse md:flex-row gap-4 max-w-6xl md:mx-auto mx-4 pt-14 pb-4">
        <div className=" flex flex-col justify-start items-center font-light text-slate-700 md:w-1/2 gap-4 md:gap-6">
          <div className=" flex flex-col gap-2 md:gp-3 text-start">
            <h2 className=" text-2xl sm:text-3xl font-semibold text-black ">
              Voluptatem dignissimos provident
            </h2>
            <p className=" text-sm sm:text-base italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <ul className="flex flex-col list-none gap-2 text-start text-xs sm:text-sm md:text-base ">
            <li className="">
              <CheckCheckIcon className=" inline-block me-1 text-orange-300 w-4 h-4 md:w-5 md:h-5" />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </li>
            <li className="">
              <CheckCheckIcon className=" inline-block me-1 text-orange-300 w-4 h-4 md:w-5 md:h-5" />
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </li>
            <li className="">
              <CheckCheckIcon className=" inline-block me-1 text-orange-300 w-4 h-4 md:w-5 md:h-5" />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </li>
          </ul>
          <div className="">
            <p className="text-sm sm:text-base">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </p>
          </div>
        </div>
        <div className=" md:w-1/2">
          <Image
            src="/assets/img/about.jpg"
            alt="about"
            width={500}
            height={500}
            className="rounded-md"
          />
        </div>
      </div>
      <AboutCarousel />
      <div className="flex flex-col md:flex-row gap-4 max-w-6xl md:mx-auto py-4 mx-4">
        <div className="">
          <Reveal>
            <Image
              src="/assets/img/features-bg.jpg"
              alt="features"
              width={500}
              height={500}
            />
          </Reveal>
        </div>
        <div className=" flex flex-col gap-3 sm:gap-6">
          {items.map((item, id) => (
            <Reveal key={id}>
              <div className="flex gap-2 sm:gap-4">
                <div className="flex justify-center items-center p-3">
                  {item.icon}
                </div>
                <div className=" flex flex-col text-start">
                  <h1 className=" font-bold text-xl text-black">
                    {item.title}
                  </h1>
                  <p className=" text-xs sm:text-sm font-extralight text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
