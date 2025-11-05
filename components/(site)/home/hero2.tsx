"use client";
import React, { useState } from "react";
import CardAnimation from "./cardStack";
import Button from "@/components/common/button";
import { HousePlus, MapPin, MoveRight, Search } from "lucide-react";
import { LocationDropdown } from "@/components/common/select";

const HeroSection2 = () => {
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    console.log(
      form.location.value,
      form.category.value,
      form.building_type.value
    );
  };

  return (
    <div className="relative pt-[120px]">
      <div className="relative bg-[url(/hero2.png)] bg-cover  bg-center min-h-dvh w-full rounded-[40px] overflow-hidden">
        <div className="absolute inset-0 bg-[#0D0D23]/40 "></div>
        <div className="container relative z-10 2xl:px-0 px-6">
          <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 justify-between lg:pt-[206px] pt-[106px] lg:pb-0 pb-[100px]">
            <div className="lg:pb-[109px] flex flex-col lg:items-start items-center ">
              <p className="text-xl font-medium sm:text-start text-center text-white font-raleway-normal ">
                Browse top properties and find your perfect match.
              </p>
              <h1 className="text-white xl:text-[64px] sm:text-[50px] text-[32px] font-raleway xl:leading-[130%] leading-[120%] pt-6 font-extrabold sm:text-start text-center">
                Unlock Your Future <br className="sm:block hidden" /> Home with
                Roofstick
              </h1>
              <p className="text-white mt-6 text-base font-roboto xl:w-[491px] lg:w-[380px] sm:w-[400px] sm:text-start text-center lg:font-normal font-medium">
                Simplify buying, renting, and managing properties with Roofstick
                your all in one real estate solution
              </p>
              <Button
                title="View details"
                isIcon={true}
                Icon={MoveRight}
                customClass={"mt-6 mb-10"}
                href="/"
              />
              <CardAnimation />
            </div>

            <div className=" flex flex-col items-center">
              <div className="tab p-3.5 flex sm:flex-nowrap flex-wrap gap-6 items-center">
                <button
                  onClick={() => setTab("sale")}
                  className={`flex gap-2 cursor-pointer sm:w-fit w-full justify-center items-center font-roboto font-medium px-6 py-3 rounded-[40px] text-sm transition-all duration-300 ${
                    tab === "sale"
                      ? "bg-white text-[#05073C] hover:bg-gray-50"
                      : "  text-white  scale-105"
                  }`}
                >
                  <HousePlus
                    size={16}
                    className={`${
                      tab === "sale" ? "text-[#05073C]" : "text-white"
                    }`}
                  />
                  <span>For Sale</span>
                </button>

                <button
                  onClick={() => setTab("buy")}
                  className={`flex gap-2 cursor-pointer sm:w-fit w-full justify-center items-center font-roboto font-medium px-6 py-3 rounded-[40px] text-sm transition-all duration-300 ${
                    tab === "buy"
                      ? "bg-white text-[#05073C] hover:bg-gray-50"
                      : "  text-white  scale-105"
                  }`}
                >
                  <HousePlus
                    size={16}
                    className={`${
                      tab === "buy" ? "text-[#05073C]" : "text-white"
                    }`}
                  />
                  <span>For Buy</span>
                </button>
              </div>
              <form
                onSubmit={handleSubmit}
                className="tab-content flex flex-col gap-5   p-6  mt-6"
              >
                <LocationDropdown
                  customClass="w-[252px] h-[56px]"
                  Icon={MapPin}
                  label={
                    <span className="text-white font-roboto text-base font-medium">
                      Location
                    </span>
                  }
                  isIcon={true}
                  options={locations}
                  name="location"
                  placeholder="Select a Location"
                  strokeColor="text-[#A2A8AF]"
                />
                <LocationDropdown
                  customClass="w-[252px]"
                  options={buliding}
                  name="building_type"
                  placeholder="Building Type"
                  label={
                    <span className="text-white font-roboto text-base font-medium">
                      Building Type
                    </span>
                  }
                />
                <LocationDropdown
                  customClass="w-[252px]"
                  options={Category}
                  name="category"
                  placeholder="Category"
                  label={
                    <span className="text-white font-roboto text-base font-medium">
                      Category
                    </span>
                  }
                />
                <button className="px-6 py-4 cursor-pointer flex justify-center gap-2 items-center text-base text-white bg-[#4CAC40] rounded-[10px]">
                  <Search size={16} />
                  <span>Search</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
