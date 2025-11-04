"use client";
import { LocationDropdown } from "@/components/common/select";
import { HousePlus, Search } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { MapPin } from "lucide-react";

const HeroSection1 = () => {
  const [tab, setTab] = useState("sale");
  const locations = [
    { value: "", label: "Select a location" },
    { value: "new-york", label: "New York" },
    { value: "los-angeles", label: "Los Angeles" },
    { value: "chicago", label: "Chicago" },
    { value: "houston", label: "Houston" },
    { value: "phoenix", label: "Phoenix" },
    { value: "philadelphia", label: "Philadelphia" },
    { value: "san-antonio", label: "San Antonio" },
    { value: "san-diego", label: "San Diego" },
    { value: "dallas", label: "Dallas" },
  ];
  const buliding = [
    { value: "", label: "Building Type" },
    { value: "new-york", label: "New York" },
    { value: "los-angeles", label: "Los Angeles" },
    { value: "chicago", label: "Chicago" },
    { value: "houston", label: "Houston" },
    { value: "phoenix", label: "Phoenix" },
    { value: "philadelphia", label: "Philadelphia" },
    { value: "san-antonio", label: "San Antonio" },
    { value: "san-diego", label: "San Diego" },
    { value: "dallas", label: "Dallas" },
  ];
  const Category = [
    { value: "", label: "Category" },
    { value: "new-york", label: "New York" },
    { value: "los-angeles", label: "Los Angeles" },
    { value: "chicago", label: "Chicago" },
    { value: "houston", label: "Houston" },
    { value: "phoenix", label: "Phoenix" },
    { value: "philadelphia", label: "Philadelphia" },
    { value: "san-antonio", label: "San Antonio" },
    { value: "san-diego", label: "San Diego" },
    { value: "dallas", label: "Dallas" },
  ];
  const handleSubmit = () => {};
  return (
    <>
      <Image
        src="/hero.png"
        width={1000}
        height={1080}
        alt="hero image"
        className="absolute inset-0 lg:h-[1080px] md:h-[700px] h-full  w-full "
        priority
      />
      <div className="relative w-full lg:h-[1080px] md:h-[850px] h-full">
        <div className="hero-wrapper">
          <div className="max-w-[1320px] mx-auto pt-[120px] z-50 relative">
            <h1 className="text-primary xl:text-[64px] sm:text-[50px] text-[32px] font-raleway xl:leading-[130%] leading-[120%] lg:pt-[50px] 2xl:pt-[120px] font-extrabold sm:text-start text-center">
              Unlock Your Future <br className="sm:block hidden" /> Home with
              Roofstick
            </h1>
            <p className="lg:text-[#717171] md:text-[#05073C] text-[#717171] mt-6 text-base font-roboto xl:w-[491px] lg:w-[380px] sm:w-[400px] sm:text-start text-center lg:font-normal font-medium">
              Simplify buying, renting, and managing properties with Roofstick
              your all in one real estate solution
            </p>

            {/* tab */}
            <div className="md:pt-[186px]  pb-[100px] pt-[50px] flex flex-col items-center">
              <div className="tab p-3.5 flex sm:flex-nowrap flex-wrap gap-6 items-center">
                <button
                  onClick={() => setTab("sale")}
                  className={`flex gap-2 cursor-pointer sm:w-fit w-full justify-center items-center font-roboto font-medium px-6 py-3 rounded-[40px] text-sm transition-all duration-300 ${
                    tab === "sale"
                      ? "bg-[#4CAC40] text-white shadow-md scale-105"
                      : "bg-white text-[#05073C] hover:bg-gray-50"
                  }`}
                >
                  <HousePlus
                    size={16}
                    className={`${
                      tab === "sale" ? "text-white" : "text-[#05073C]"
                    }`}
                  />
                  <span>For Sale</span>
                </button>

                <button
                  onClick={() => setTab("buy")}
                  className={`flex gap-2 cursor-pointer sm:w-fit w-full justify-center items-center font-roboto font-medium px-6 py-3 rounded-[40px] text-sm transition-all duration-300 ${
                    tab === "buy"
                      ? "bg-[#4CAC40] text-white shadow-md scale-105"
                      : "bg-white text-[#05073C] hover:bg-gray-50"
                  }`}
                >
                  <HousePlus
                    size={16}
                    className={`${
                      tab === "buy" ? "text-white" : "text-[#05073C]"
                    }`}
                  />
                  <span>For Buy</span>
                </button>
              </div>
              <form
                onSubmit={handleSubmit}
                className="tab-content lg:flex grid sm:grid-cols-2  items-center gap-6  px-6 py-4 mt-[38px]"
              >
                <LocationDropdown
                  customClass="w-[252px]"
                  Icon={MapPin}
                  isIcon={true}
                  options={locations}
                  name="location"
                  placeholder="Select a Location"
                />
                <LocationDropdown
                  customClass="w-[252px]"
                  options={buliding}
                  name="bulidng_type"
                  placeholder="Building Type"
                />
                <LocationDropdown
                  customClass="w-[252px]"
                  options={Category}
                  name="category"
                  placeholder="Category"
                />
                <button className="px-6 py-4 cursor-pointer flex justify-center gap-2 items-center text-base text-white bg-[#4CAC40] rounded-[10px]">
                  <Search size={16} />
                  <span>Search</span>
                </button>
              </form>
            </div>
          </div>

          <div className="hero-img1">
            <h1 className="hero-img1-text font-roboto font-medium">Buy</h1>

            <Image
              src="/img1.png"
              alt="img1"
              width={777}
              height={360}
              className="hero-img1-img"
            />
          </div>
          <div className="hero-img2">
            <Image
              src="/img2.png"
              alt="img1"
              width={306}
              height={445}
              className="hero-img2-img"
            />

            <h1 className="hero-img2-text font-roboto font-medium">Sale</h1>
          </div>
          <div className="hero-img3">
            <h1 className="hero-img3-text font-roboto font-medium">Rent</h1>

            <Image
              src="/img3.png"
              alt="img1"
              width={653}
              height={365}
              className="hero-img3-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection1;
