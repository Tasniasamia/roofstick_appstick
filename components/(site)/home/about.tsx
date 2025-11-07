"use client";
import Button from "@/components/common/button";
import { DollarSign, MoveUpRight, SquareCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="lg:pt-[120px] relative pt-[60px] 2xl:px-0 px-3">
      <Image
        src="/about-svg.png"
        width={500}
        height={500}
        className="absolute bottom-0 right-0 object-center lg:block hidden"
        alt="vector"
      />
      <div className="container flex xl:flex-row flex-col gap-10 items-center">
        <div className="md:w-[688px] relative md:h-[714px]">
          <div className="absolute shrink-0 right-2.5 top-1/2 bg-white rounded-xl sm:right-[165px] sm:top-[229px] py-[29px] ps-6 pe-[55px] flex flex-row gap-6">
            <div className="w-11 h-11 bg-[#053A47] grid place-content-center text-white rounded-full">
              <DollarSign size={24} className="text-[24px] text-white" />
            </div>
            <div>
              <p className="text-base  text-black font-roboto font-normal">
                Properties for Sale
              </p>
              <p className="text-xl font-roboto font-semibold mt-3">10K</p>
            </div>
          </div>
          <div className="md:flex grid sm:grid-cols-2 grid-cols-1 gap-6">
            <Image
              src="/img3.png"
              width={500}
              height={500}
              className="rounded-xl object-center md:w-[456px] w-full h-[270px]"
              alt="about1"
            />
            <Image
              src="/about2.png"
              width={500}
              height={500}
              className="object-center rounded-xl md:w-52 w-full h-[270px]"
              alt="about1"
            />
          </div>
          <div className="md:flex grid sm:grid-cols-2 grid-cols-1 gap-6 mt-6">
            <Image
              src="/about-3.png"
              width={500}
              height={500}
              className="object-center md:w-[364px] w-full rounded-xl md:h-[430px] h-[340px]"
              alt="about1"
            />
            <Image
              src="/about-4.png"
              width={500}
              height={500}
              className=" object-center md:w-[300px] w-full rounded-xl h-[340px]"
              alt="about1"
            />
          </div>
        </div>

        <div className="sm:w-[552px]">
          <h2
            className="text-[#313234] static z-40 mb-6 font-raleway-bold  font-bold leading-none 
text-[24px] sm:text-[32px] md:text-[40px] lg:text-[44px] xl:text-[48px]"
          >
            Planning & Designing Your Dream House
          </h2>
          <p
            className={`text-secondary static z-40 font-roboto md:text-base text-sm font-normal sm:w-[361px] w-[80%] `}
          >
            As the complexity of buildings to increase, the field of
            architecture.
          </p>
          <ul className="list-none flex-col flex gap-4 mt-[18px] mb-10">
            <li className="flex items-center gap-2">
              <SquareCheck className="text-base text-[#00D0DE]" />

              <p className="text-base text-primary font-medium font-roboto">
                Find excellent deals
              </p>
            </li>
            <li className="flex items-center gap-2">
              <SquareCheck className="text-base text-[#00D0DE]" />

              <p className="text-base text-primary font-medium font-roboto">
                Friendly host & Fast support
              </p>
            </li>
            <li className="flex items-center gap-2">
              <SquareCheck className="text-base text-[#00D0DE]" />

              <p className="text-base text-primary font-medium font-roboto">
                List your own property
              </p>
            </li>
          </ul>
          <Button title={"View More"} Icon={MoveUpRight} isIcon={true} />
        </div>
      </div>
    </div>
  );
};

export default About;
