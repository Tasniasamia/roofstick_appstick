import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const PropertyCard = () => {
  return (
    <div className="p-2.5 w-fit h-fit custom-shadow2 border border-[#E8EAE8] rounded-xl">
      <div
        className="xl:w-[404px] xl:h-[404px] lg:w-[300px] lg:h-[300px]  h-[300px]  w-full relative rounded-xl"
      >
        <Image
          src="/img1.png"
          width={500}
          height={500}
          alt="property"
          className="h-full w-full object-center rounded-xl"
        />
        <button className="text-xs absolute left-3.5 top-3.5 font-roboto font-medium text-white px-4 py-1 bg-[#088396] rounded-[20px] text-center">
          For Sale
        </button>

        <div className="absolute inset-x-0 bottom-[11px] flex flex-row justify-between items-center  w-full">
          <button className="read-more lg:ms-3.5 me-1 flex items-center gap-2 p-1 lg:gap-6 lg:p-1.5 lg:ps-3">
            <span className="font-roboto lg:text-base text-sm font-normal text-white">
              Read More
            </span>
            <span className="lg:h-8 lg:w-8 rounded-full flex items-center justify-center bg-white">
              <ArrowRight className="lg:text-[20px] text-[10px] lg:block md:hidden block"  />
              <ChevronRight className="lg:text-[20px] text-[10px] lg:hidden md:block hidden"  />

            </span>
          </button>
          <span className="font-roboto lg:text-xl text-base font-semibold text-white lg:me-3.5 me-1">
            $255000.00{" "}
          </span>
        </div>
      </div>
      <div className="bg-[#EBFFFD] mt-2.5 rounded-xl p-3.5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        
      </div>
    </div>
  );
};

export default PropertyCard;
