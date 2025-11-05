"use client";
import { Bookmark, LayoutDashboard } from "lucide-react";
import React from "react";

const Categories = () => {
  return (
    <div className="container relative z-40 w-full">
      <div className="flex 2xl:-mt-7 w-fit lg:mt-[-120px] mt-[-50px] flex-row 2xl:flex-nowrap 2xl:justify-start justify-center  flex-wrap gap-[44.8px] items-center p-8 bg-white rounded-lg">
        <div className="flex flex-col p-4  items-center gap-2">
          <h5 className="text-[#111827] text-xl font-roboto font-semibold text-center">
            Houses
          </h5>
          <div className="font-roboto flex flex-row text-sm justify-center gap-1 items-center font-normal text-[#4E5562]">
            <Bookmark size={14} />
            <span>4K Offers</span>
          </div>
        </div>

        <div className="h-[72px] w-px border-tl-1 bg-[#E8EAE8] 2xl:block hidden" />

        <div className="flex flex-col p-4  items-center gap-2">
          <h5 className="text-[#111827] text-xl font-roboto font-semibold text-center">
            Apartments
          </h5>
          <div className="font-roboto flex flex-row text-sm justify-center gap-1 items-center font-normal text-[#4E5562]">
            <Bookmark size={14} />
            <span>4K Offers</span>
          </div>
        </div>

        <div className="h-[72px] w-px border-tl-1 bg-[#E8EAE8] 2xl:block hidden" />

        <div className="flex flex-col p-4  items-center gap-2">
          <h5 className="text-[#111827] text-xl font-roboto font-semibold text-center">
            Commercial
          </h5>
          <div className="font-roboto flex flex-row text-sm justify-center gap-1 items-center font-normal text-[#4E5562]">
            <Bookmark size={14} />
            <span>4K Offers</span>
          </div>
        </div>

        <div className="h-[72px] w-px border-tl-1 bg-[#E8EAE8] 2xl:block hidden" />

        <div className="flex flex-col p-4  items-center gap-2">
          <h5 className="text-[#111827] text-xl font-roboto font-semibold text-center">
            Daily Rentral
          </h5>
          <div className="font-roboto flex flex-row text-sm justify-center gap-1 items-center font-normal text-[#4E5562]">
            <Bookmark size={14} />
            <span>4K Offers</span>
          </div>
        </div>

        <div className="h-[72px] w-px border-tl-1 bg-[#E8EAE8] 2xl:block hidden" />

        <div className="flex flex-col p-4 items-center gap-2">
          <h5 className="text-[#111827] text-xl font-roboto font-semibold text-center">
            New Buildings
          </h5>
          <div className="font-roboto flex flex-row text-sm justify-center gap-1 items-center font-normal text-[#4E5562]">
            <Bookmark size={14} />
            <span>4K Offers</span>
          </div>
        </div>

        <div className="h-[72px] w-px border-tl-1 bg-[#E8EAE8] 2xl:block hidden" />

        <div className="flex flex-col p-4 items-center gap-2">
          <h5 className="text-[#111827] text-xl font-roboto font-semibold text-center">
            More
          </h5>
          <LayoutDashboard size={14} className="text-[#4E5562]" />
        </div>
      </div>
    </div>
  );
};

export default Categories;


