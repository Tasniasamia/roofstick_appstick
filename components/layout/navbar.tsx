"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, ListPlus, LogIn, Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const user = true;
  const [isMenu, setIsMenu] = React.useState(true);
  return (
    <div className="bg-white absolute  w-full">
      <div className="container">
        <div className="flex justify-between items-center md:py-8 py-4">
          <Image
            src="/logo.png"
            width={74}
            height={56}
            alt="logo"
            className="object-fill 
             h-10 w-[60px]      
             sm:h-12 sm:w-[68px] 
             md:h-14 md:w-[74px]  static z-20"
          />

          <div className="lg:flex hidden">
            <MenuList />
          </div>

          <div className="lg:bg-white static z-20 shadow-custom bg-transparent flex gap-4 items-center rounded-[10px] lg:px-6 py-2">
            <ListPlus className="text-xl sm:text-2xl md:text-2xl cursor-pointer font-medium" />
            <Globe className="text-xl sm:text-2xl md:text-2xl cursor-pointer text-[#05073C] font-medium" />
            {user ? (
              <HoverDropdown items={["Dashboard", "Logout"]} image="/man.png" />
            ) : (
              <LogIn className="text-xl sm:text-2xl md:text-2xl cursor-pointer text-[#05073C]" />
            )}
            <div className="relative h-6 w-6 lg:hidden block">
              <Menu
                className={`${isMenu ? "opacity-100" : "opacity-0"} 
              text-xl sm:text-2xl duration-300 z-20 transition-all md:text-2xl cursor-pointer text-[#05073C] absolute inset-0`}
                onClick={() => setIsMenu(!isMenu)}
              />

              <X
                className={`${isMenu ? "opacity-0" : "opacity-100"} 
              text-xl sm:text-2xl z-20 md:text-2xl duration-300 transition-all cursor-pointer text-[#05073C] absolute inset-0`}
                onClick={() => setIsMenu(!isMenu)}
              />
            </div>
          </div>
        </div>
      </div>
      {!isMenu && (
        <div className="bg-white z-20 w-full absolute shadow-md pb-10 ps-4 animate-slideDown">
          <MenuList />
        </div>
      )}
    </div>
  );
};

export default Navbar;

function HoverDropdown({
  label,
  items,
  image,
}: {
  label?: string;
  items: string[];
  image?: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative inline-block group"
      >
        <DropdownMenuTrigger asChild>
          {image ? (
            <Image
              src={image}
              width={40}
              height={40}
              className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 object-fill rounded-full cursor-pointer"
              alt="image"
            />
          ) : (
            <div className="relative pb-1  after:absolute after:w-0 after:h-0.5 after:content-[''] after:bg-[#00ACC1] hover:after:w-full after:left-0 after:bottom-0 after:duration-300 text-[#05073C] cursor-pointer hover:text-[#00ACC1] duration-300 transition-all">
              <div className="flex gap-1.5 items-center">
                {label}{" "}
                <FaChevronDown className="group-hover:rotate-180 duration-300" />
              </div>
            </div>
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="DropdownMenuContent w-32 mt-2 shadow-md rounded-md bg-white border border-gray-100"
          align="start"
          sideOffset={5}
        >
          <ul className="list-none text-[18px] leading-7 flex flex-col">
            {items.map((item) => (
              <li
                key={item}
                className="p-2 cursor-pointer hover:bg-[#00ACC1] hover:text-white duration-300 transition-all"
              >
                {item}
              </li>
            ))}
          </ul>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
}

export const MenuList = () => {
  return (
    <ul className="static z-20 list-none flex lg:flex-row flex-col gap-10 items-center text-[20px] font-medium font-roboto leading-7">
      <HoverDropdown label="Home" items={["Home 1", "Home 2"]} />
      <li className="relative pb-1 after:absolute after:w-0 after:h-0.5 after:content-[''] after:bg-[#00ACC1] hover:after:w-full after:left-0 after:bottom-0 after:duration-300 text-[#05073C] cursor-pointer hover:text-[#00ACC1] duration-300 transition-all">
        About
      </li>
      <li className="relative pb-1 after:absolute after:w-0 after:h-0.5 after:content-[''] after:bg-[#00ACC1] hover:after:w-full after:left-0 after:bottom-0 after:duration-300 text-[#05073C] cursor-pointer hover:text-[#00ACC1] duration-300 transition-all">
        Property
      </li>
      <li className="relative pb-1 after:absolute after:w-0 after:h-0.5 after:content-[''] after:bg-[#00ACC1] hover:after:w-full after:left-0 after:bottom-0 after:duration-300 text-[#05073C] cursor-pointer hover:text-[#00ACC1] duration-300 transition-all">
        Projects
      </li>
      <HoverDropdown label="More" items={["Blog", "FAQ", "Contact"]} />
    </ul>
  );
};
