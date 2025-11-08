import Image from "next/image";
import React from "react";
import { MdDesignServices } from "react-icons/md";

const ServiceCard = () => {
  return (
    <div className="w-full h-[409px] rounded-xl relative">
      <Image
        src="/img1.png"
        alt="service"
        width={500}
        height={500}
        className="h-full absolute w-full rounded-xl"
      />
      <div className="h-14 w-14 bg-white grid place-items-center absolute rounded-sm top-4 left-4">
     <MdDesignServices className="text-[32px] text-[#717171]"/>
      </div>
      <div className="absolute bottom-4 ">
        <h4 className="text-2xl text-primary font-semibold border-white border mx-auto w-[70%] service-title rounded-t-2xl text-center  line-clamp-1 bg-white pt-2.5">Master Planning </h4>
        <p className="text-base border-white border text-secondary line-clamp-3 rounded-xl font-roboto font-normal px-4 pb-4 pt-[11px] bg-white">
          Recognized with Morph for creative Innovative, smart concept and
          sustainable architecture.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
