import HeaderTitle from "@/components/common/headerTitle";
import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhatSetsMeApart = () => {
  return (
    <div className="lg:mt-[120px] mt-[60px] 2xl:px-0 px-3">
      <div className="container grid xl:gap-14 gap-8 lg:grid-cols-2 ">
        <div>
          <h5 className="uppercase text-2xl font-roboto text-black 2xl:mb-[35px] mb-6">
            WHAT SETS ME APART
          </h5>
          <HeaderTitle
            title={"Experience, Integrity, and Dedication "}
            description={
              "Nunc orci facilisis et viverra aliquam amet lectus viverra. At turpis tortor ullamcorper ornare mauris tortor risus."
            }
            customClass3="w-full"
            customClass="items-start text-start"
          />
          <ul className="list-none flex flex-col gap-[25px] mt-10">
            <li>
              <div className="flex gap-3.5 items-center">
                <FaCheckCircle className="text-[32px] text-black" />
                <h5 className="capitalize text-2xl font-medium font-roboto text-black ">
                  Proven Experience
                </h5>
              </div>
              <p className="text-secondary text-base pt-4 ps-[46px] font-normal font-roboto">
                Semper ultrices maecenas dul laculis in. Proin ipsum enim amet
                enim maecenas lectus. Semper fermentum nisi iorem.
              </p>
            </li>
            <li>
              <div className="flex gap-3.5 items-center">
                <FaCheckCircle className="text-[32px] text-black" />
                <h5 className="capitalize text-2xl font-medium font-roboto text-black ">
                  Transparent Process
                </h5>
              </div>
              <p className="text-secondary text-base pt-4 ps-[46px] font-normal font-roboto">
                Semper ultrices maecenas dul laculis in. Proin ipsum enim amet
                enim maecenas lectus. Semper fermentum nisi iorem.
              </p>
            </li>
            <li>
              <div className="flex gap-3.5 items-center">
                <FaCheckCircle className="text-[32px] text-black" />
                <h5 className="capitalize text-2xl font-medium font-roboto text-black ">
                  Client Focused
                </h5>
              </div>
              <p className="text-secondary text-base pt-4 ps-[46px] font-normal font-roboto">
                Semper ultrices maecenas dul laculis in. Proin ipsum enim amet
                enim maecenas lectus. Semper fermentum nisi iorem.
              </p>
            </li>
          </ul>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 h-fit">
          <div className="relative w-full h-[280px] rounded-xl ">
            <div className="h-full w-full bg-black/20 absolute rounded-xl flex flex-col items-center justify-center">
              <h1 className="text-white font-roboto font-bold text-center text-5xl">
                500+
              </h1>
              <p className="text-white font-roboto text-center  font-medium text-base">
                Home Sold
              </p>
            </div>
            <Image
              src="/apar1.png"
              width={280}
              height={280}
              alt="apart"
              className="rounded-xl object-center h-full w-full"
            />
          </div>
          <div className="relative w-full h-[280px] rounded-xl ">
          <div className="h-full w-full bg-black/20 absolute rounded-xl flex flex-col items-center justify-center">
              <h1 className="text-white font-roboto font-bold text-center text-5xl">
                250+
              </h1>
              <p className="text-white font-roboto text-center  font-medium text-base">
                Apartment Rent
              </p>
            </div>           
             <Image
              src="/apart2.png"
              width={280}
              height={280}
              alt="apart"
              className=" rounded-xl object-center h-full w-full"
            />
          </div>
          <div className="relative w-full h-[280px] sm:col-span-2 rounded-xl ">
          <div className="h-full w-full bg-black/20 absolute rounded-xl flex flex-col items-center justify-center">
              <h1 className="text-white font-roboto font-bold text-center text-5xl">
                5 Star
              </h1>
              <p className="text-white font-roboto text-center  font-medium text-base">
                Google Review
              </p>
            </div>              <Image
              src="/apart3.png"
              width={584}
              height={280}
              alt="apart"
              className=" rounded-xl object-center h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatSetsMeApart;
