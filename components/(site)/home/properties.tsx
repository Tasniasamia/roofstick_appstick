"use client";
import PropertyCard from "@/components/common/card/propertyCard";
import HeaderTitle from "@/components/common/headerTitle";
import React, { useState } from "react";

const Properties = () => {
  const [tab, setTab] = useState("sale");
  return (
    <div className="lg:mt-[120px] mt-[60px] 2xl:px-0 px-3">
      <div className="container">
        <HeaderTitle
          title={"Featured Properties"}
          description={
            "These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories."
          }
          customClass="items-center text-center"
        />
        <div className="flex flex-row justify-center pt-10 pb-6 gap-6 items-center">
          <button
            onClick={() => setTab("sale")}
            className={`flex gap-2 cursor-pointer sm:w-fit w-fit justify-center items-center font-roboto font-medium px-6 py-3 rounded-[10px] text-sm transition-all duration-300 ${
              tab === "sale"
                ? "bg-[#4CAC40] text-white shadow-md scale-105 border border-transparent"
                : "bg-white text-[#4CAC40] hover:bg-gray-50 border border-[#4CAC40]"
            }`}
          >
            <span>For Sale</span>
          </button>

          <button
            onClick={() => setTab("buy")}
            className={`flex gap-2  w-fit cursor-pointer sm:w-fit  justify-center items-center font-roboto font-medium px-6 py-3 rounded-[10px] text-sm transition-all duration-300 ${
              tab === "buy"
                ? "bg-[#4CAC40] text-white shadow-md scale-105 border border-transparent"
                : "bg-white text-[#4CAC40] hover:bg-gray-50 border border-[#4CAC40]"
            }`}
          >
            <span>For Buy</span>
          </button>
        </div>
        <div className="pt-6  grid md:grid-cols-3 sm:grid-cols-2 xl:gap-6 gap-3 sm:place-content-start place-content-center">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
    </div>
  );
};

export default Properties;
