"use client";
import Button from "@/components/common/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const AgentServiceCard = () => {
  return (
    <div className="flex flex-col items-center static z-20 p-6">
      <Image
        src="/serviceimg.png"
        width={500}
        height={500}
        alt="work"
        className="w-[330px] h-[170px] object-center"
      />
      <h3 className="font-raleway-semibold text-primary line-clamp-2 text-2xl font-semibold mt-[23px] text-center">
        Search for you favorite house in your location
      </h3>
      <p className="text-base text-secondary text-center mt-4 mb-6 line-clamp-3">
        Easily find your dream home right where you are. Use location-based
        filters to explore nearby listings that match your lifestyle and budget.
      </p>
      <Button title={"Place an Ad"} Icon={ArrowRightIcon} isIcon={true}/>


    </div>
  );
};

export default AgentServiceCard;
