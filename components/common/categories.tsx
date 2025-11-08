"use client";
import { Bookmark, LayoutDashboard } from "lucide-react";
import React from "react";

const categoires: { name: string; count: string }[] = [
  {
    name: "Houses",
    count: "4k",
  },
  {
    name: "Apartments",
    count: "8k",
  },
  {
    name: "Commercial",
    count: "4k",
  },
  {
    name: "Daily Rentral",
    count: "4k",
  },
  {
    name: "New Buildings",
    count: "3k",
  },
];

const Categories = () => {
  return (
    <div className="container relative z-40 w-full flex flex-col items-center">
      <div className="flex 2xl:-mt-7 w-fit  lg:mt-[-120px] mt-[-50px] flex-row 2xl:flex-nowrap 2xl:justify-start justify-center  flex-wrap gap-[44.8px] items-center p-8 bg-white rounded-lg 2xl:border border-[#E0E5EB]">
        {categoires?.map((i, index) => {
          return (
            <React.Fragment key={index}>
              <div className="flex flex-col p-3  items-center gap-2">
                <h5 className="text-[#111827] text-xl font-roboto font-semibold text-center">
                  {i?.name}
                </h5>
                <div className="font-roboto flex flex-row text-sm justify-center gap-1 items-center font-normal text-[#4E5562]">
                  <Bookmark size={14} />
                  <span>{i?.count} Offers</span>
                </div>
              </div>

              <div className="h-[72px] w-px border-tl-1 bg-[#E8EAE8] 2xl:block hidden" />
            </React.Fragment>
          );
        })}
        <div className="flex flex-col p-3 items-center gap-2">
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
