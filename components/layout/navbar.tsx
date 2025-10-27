"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="flex justify-between items-center py-8">
          <Image
            src="/logo.png"
            width={74}
            height={56}
            className="h-14 w-[74px] object-cover"
            alt="logo"
          />
          <ul className="list-none flex gap-10 items-center text-[20px] font-medium font-roboto leading-7">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/* ✅ Hover Dropdown Component (with your custom class) */
function HoverDropdown({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative inline-block"
      >
        <DropdownMenuTrigger asChild>
          <div className="relative pb-1 after:absolute after:w-0 after:h-0.5 after:content-[''] after:bg-[#00ACC1] hover:after:w-full after:left-0 after:bottom-0 after:duration-300 text-[#05073C] cursor-pointer hover:text-[#00ACC1] duration-300 transition-all">
            {label}
          </div>
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
