import Link from "next/link";
import { NavDropDown } from "./NavDropDown";
import { SheetDemo } from "./SheetDemo";

const Navbar = () => {
  return (
    <div className=" z-50">
      <div className=" bg-black bg-opacity-65 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl md:mx-auto mx-4 flex justify-between items-center py-3 text-slate-300">
          <div className="">
            <Link href="#">
              <h1 className=" font-extrabold text-2xl md:text-4xl text-slate-300">
                SBN{" "}
                <span className=" text-3xl md:text-5xl text-orange-300">
                  {" "}
                  .
                </span>
              </h1>
            </Link>
          </div>
          <div className=" hidden md:flex ">
            <ul className="flex items-center justify-center gap-10 list-none font-semibold">
              <Link href="#">
                <li className=" hover:text-orange-300">Home</li>
              </Link>
              <Link href="#about">
                <li className="hover:text-orange-300">About</li>
              </Link>
              <Link href="#services">
                <li className="hover:text-orange-300">Services</li>
              </Link>
              <Link href="#portfolio">
                <li className="hover:text-orange-300">Portfolio</li>
              </Link>
              <Link href="#team">
                <li className="hover:text-orange-300">Team</li>
              </Link>
              <NavDropDown />
              <Link href="#contact">
                <li className="hover:text-orange-300">Contact</li>
              </Link>
            </ul>
          </div>
          <div className="text-slate-300 flex gap-2 md:gap-3 justify-center items-center px-1">
            <button className=" border-2 border-orange-400 py-2 px-3 md:px-4 font-semibold text-sm md:text-base rounded-lg hover:bg-orange-400 text-white">
              Get Started
            </button>
            <SheetDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
