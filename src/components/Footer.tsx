import { ChevronRight, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row max-w-6xl md:mx-auto mx-4 gap-5">
          <div className="flex flex-col gap-3 sm:gap-5 md:w-1/3">
            <div className="flex">
              <h1 className=" text-xl md:text-2xl font-bold">SBN</h1>
              <div className=" w-1 h-1 flex self-end mb-[5px] mx-[5px] rounded-full bg-orange-500 border-orange-500" />
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <p className=" text-xs sm:text-sm font-thin text-gray-400">
                A108 Adam Street
              </p>
              <p className=" text-xs sm:text-sm font-thin text-gray-400">
                New York, NY 535022
              </p>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <p className=" text-sm md:text-base font-bold text-white">
                Phone:
                <span className="text-xs sm:text-sm ms-1 font-thin text-gray-400">
                  +1 5589 55488 55
                </span>
              </p>
              <p className=" text-sm md:text-base font-bold text-white">
                Email:
                <span className="text-xs ms-1 sm:text-sm font-thin text-gray-400">
                  info@example.com
                </span>
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <div className="flex justify-center items-center p-3 bg-slate-800 rounded-lg">
                <FaTwitter className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              </div>
              <div className="flex justify-center items-center p-3 bg-slate-800 rounded-lg">
                <FaFacebook className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              </div>
              <div className="flex justify-center items-center p-3 bg-slate-800 rounded-lg">
                <FaInstagram className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              </div>
              <div className="flex justify-center items-center p-3 bg-slate-800 rounded-lg">
                <FaLinkedinIn className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:w-2/3">
            <div className="flex flex-col gap-3 md:w-1/4">
              <h1 className="font-bold text-base">Useful Links</h1>
              <ul className=" list-none space-y-3">
                <li className="text-xs sm:text-sm font-thin text-gray-400">
                  <ChevronRight className=" w-4 h-4 text-orange-500 inline-block me-1" />
                  Home
                </li>
                <li className="text-xs sm:text-sm font-thin text-gray-400">
                  <ChevronRight className=" w-4 h-4 text-orange-500 inline-block me-1" />
                  About us
                </li>
                <li className="text-xs sm:text-sm font-thin text-gray-400">
                  <ChevronRight className=" w-4 h-4 text-orange-500 inline-block me-1" />
                  Services
                </li>
                <li className="text-xs sm:text-sm font-thin text-gray-400">
                  <ChevronRight className=" w-4 h-4 text-orange-500 inline-block me-1" />
                  Terms of service
                </li>
                <li className="text-xs sm:text-sm font-thin text-gray-400">
                  <ChevronRight className=" w-4 h-4 text-orange-500 inline-block me-1" />
                  Privacy policy
                </li>
              </ul>
            </div>
            <div className="flex  flex-col gap-3 md:w-1/4">
              <h1 className="font-bold text-base">Our Services</h1>
              <ul className=" list-none space-y-3">
                <li className="text-xs sm:text-sm font-thin text-gray-400">
                  <ChevronRight className=" w-4 h-4 text-orange-500 inline-block me-1" />
                  Web Design
                </li>
                <li className="text-xs sm:text-sm font-thin text-gray-400">
                  <ChevronRight className=" w-4 h-4 text-orange-500 inline-block me-1" />
                  Web Development
                </li>
                <li className="text-xs sm:text-sm font-thin text-gray-400">
                  <ChevronRight className=" w-4 h-4 text-orange-500 inline-block me-1" />
                  Product Management
                </li>
                <li className="text-xs sm:text-sm font-thin text-gray-400">
                  <ChevronRight className=" w-4 h-4 text-orange-500 inline-block me-1" />
                  Marketing
                </li>
                <li className="text-xs sm:text-sm font-thin text-gray-400">
                  <ChevronRight className=" w-4 h-4 text-orange-500 inline-block me-1" />
                  Graphic Design
                </li>
              </ul>
            </div>
            <div className="flex md:w-2/4 flex-col gap-4">
              <h1 className="font-bold text-base">Our Newsletter</h1>
              <p className="text-xs sm:text-sm font-thin">
                Subscribe to our newsletter and receive the latest news about
                our products and services!
              </p>
              <div className="flex flex-row w-4/5">
                <Input
                  type="text"
                  className=" border-slate-400 me-0 rounded-none rounded-l-md bg-slate-900 text-slate-200"
                />
                <Button className=" bg-orange-400 text-slate-900 rounded-none rounded-r-md ms-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col gap-3 justify-center items-center text-center">
          <h2 className=" font-semibold text-sm">
            © Copyright GP All Rights Reserved
          </h2>
          <p className="text-xs sm:text-sm font-thin">
            Designed by
            <span className=" font-bold text-orange-400 ms-1">
              SOMTO BERNARD NWALI
            </span>
          </p>
          <div className="flex justify-end items-center">
            <div className="flex justify-center rounded-lg mr-2 md:mr-5 items-center p-2 bg-slate-800">
              <Link href="#">
                <ChevronUp className="w-6 h-6 text-orange-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
