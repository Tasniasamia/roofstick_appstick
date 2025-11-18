"use client";
import { LocationDropdown } from '@/components/common/select';
import React, { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { TbBuildingCommunity } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";
import { HousePlus } from 'lucide-react';
import Properties from '../home/properties';

const OurProperty = () => {
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
        <div className='lg:mt-[120px] mt-[60px] 2xl:px-0 px-3'>
            <div className='container'>
            <form
                onSubmit={handleSubmit}
                className=" flex  gap-5   "
              >
                <LocationDropdown
                  customClass="w-[252px] h-[56px]"
                  onChange={(e)=>{e.currentTarget.value}}
                  Icon={FaLocationDot}
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
                  Icon={TbBuildingCommunity}
                  options={buliding}
                  name="building_type"
                  placeholder="Building Type"
                  onChange={(e)=>{e.currentTarget.value}}

                  label={
                    <span className="text-white font-roboto text-base font-medium">
                      Building Type
                    </span>
                  }
                />
                <LocationDropdown
                  customClass="w-[252px]"
                  options={Category}
                  onChange={(e)=>{e.currentTarget.value}}
                  Icon={BiCategory}
                  name="category"
                  placeholder="Category"
                  label={
                    <span className="text-white font-roboto text-base font-medium">
                      Category
                    </span>
                  }
                />
              
              </form>
              <div className="pt-10 pb-6 flex flex-col items-center">
              <div className=" flex sm:flex-nowrap flex-wrap gap-6 items-center">
                <button
                  onClick={() => setTab("sale")}
                  className={`flex bg-transparent gap-2 cursor-pointer rounded-sm border sm:w-fit w-full justify-center items-center font-roboto font-medium px-6 py-3 text-sm transition-all duration-300 ${
                    tab === "sale"
                      ? "  border-[#00ACC1] scale-105"
                      : " border-[#E8EAE8] "
                  }`}
                >
                  
                  <span>For Sale</span>
                </button>

                <button
                       onClick={() => setTab("buy")}
                       className={`flex  bg-transparent gap-2 cursor-pointer rounded-sm border sm:w-fit w-full justify-center items-center font-roboto font-medium px-6 py-3 text-sm transition-all duration-300 ${
                         tab === "buy"
                           ? "  border-[#00ACC1] scale-105"
                           : " border-[#E8EAE8] "
                       }`}
                >
             
                  <span>For Buy</span>
                </button>
              </div>
         
              </div>
            </div>
        </div>
    );
};

export default OurProperty;