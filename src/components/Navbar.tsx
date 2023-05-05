"use client";
import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

type Navitem = {
  label: string;
  page: string;
};

const Navitems: Navitem[] = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 dark:bg-black dark:border-gray-500 border-opacity-50 dark:border-b-[0.5px] dark:border-solid">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between">
            <div className="md:py-5 md:block">
              <h2 className=" text-2xl font-bold ">Kimi Andersson</h2>
            </div>
            <div className="md:hidden">
              <button className="mt-2" onClick={() => setNavbar(prev => !prev)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="md:flex md:space-x-6 space-y-8 items-center justify-center md:space-y-0">
              {Navitems.map((item, index) => {
                return (
                  <Link
                  key={index}
                  to={item.page}
                  className="block lg:inline-block text-white hover:text-sky-300 transition-all duration-150 cursor-pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setNavbar(prev => !prev)}
                  >{item.label}</Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
