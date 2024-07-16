"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { NavAccordion } from "./NavAccordion";

export function SheetDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <GiHamburgerMenu
          className="md:hidden w-7 h-7"
          onClick={() => setIsOpen(true)}
        />
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className=" bg-slate-800 text-slate-300 h-[90%] rounded-lg my-12 mx-7 overflow-y-auto"
      >
        <div className=" flex flex-col gap-5">
          <ul className="flex flex-col items-start justify-start gap-8 list-none font-semibold">
            <Link href="#" onClick={closeSheet}>
              <li className="hover:text-orange-400">Home</li>
            </Link>
            <Link href="#about" onClick={closeSheet}>
              <li className="hover:text-orange-400">About</li>
            </Link>
            <Link href="#services" onClick={closeSheet}>
              <li className="hover:text-orange-400">Services</li>
            </Link>
            <Link href="#portfolio" onClick={closeSheet}>
              <li className="hover:text-orange-400">Portfolio</li>
            </Link>
            <Link href="#team" onClick={closeSheet}>
              <li className="hover:text-orange-400">Team</li>
            </Link>
            <NavAccordion />
            <Link href="#contact" onClick={closeSheet}>
              <li className="hover:text-orange-400">Contact</li>
            </Link>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
