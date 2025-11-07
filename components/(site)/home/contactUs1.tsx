"use client";
import Button from "@/components/common/button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { CiPhone } from "react-icons/ci";

const ContactUs1 = () => {
  return (
    <div className="md:mt-60  mt-[60px]">
    <div className="container">
      <div className="lg:py-[122px]  py-[60px] bg-[#EBFFFD] relative sm:px-10 px-6 flex xl:flex-row flex-col xl:gap-0 gap-6 justify-between xl:items-center md:items-end sm:items-center items-start">
        <Image src="/man2.png"alt="man"width={500} height={500} className="w-[343px] h-[448px] object-center md:block hidden absolute lg:left-[20%] md:left-0 xl:left-1/2 xl:-translate-x-1/2 bottom-0"/>
        <div className="text-start">
          <h5 className="text-black text-2xl font-roboto font-bold">
            Need Help ? Talk To Our Expert.
          </h5>
          <p className="mt-6 font-roboto text-secondary text-base text-[#181A20]">
            Talk to our experts or Browse through more properties.
          </p>
        </div>
        <div className="flex xl:gap-1 gap-4 sm:flex-row flex-col xl:items-center items-start">
          <Button title="Contact Us" Icon={MoveUpRight} isIcon={true} />
          <button
            className={`font-roboto border-[#4cac40] border text-primary  group text-base w-fit px-6 py-4 rounded-[10px] flex gap-2 items-center justify-center `}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <CiPhone size={20} className=" text-[16px] text-primary" />
            <span>+38864506541</span>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs1;
