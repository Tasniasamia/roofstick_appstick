import HeaderTitle from "@/components/common/headerTitle";
import { ArrowBigRight, ArrowRight, ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const ExploreCities = () => {
  return (
    <div className="2xl:px-0 px-3 lg:mt-[120px] mt-[60px]">
      <div className="container ">
        <div className="flex lg:flex-row flex-col justify-between items-end mb-[37px]">
          <HeaderTitle
            title={"Explore Cities"}
            description={
              "These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories."
            }
            customClass="items-start text-start"
          />
          <div className="flex flex-row items-center font-roboto font-medium gap-2 text-base text-primary cursor-pointer">
            <span>View all city</span>
            <ArrowRight size={20} className="text-xl" />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-6 gap-6">
          <div className="lg:col-span-2 col-span-1 xl:h-[319px] h-[280px] w-full rounded-xl relative">
            <div className="img-small-overlay absolute lg:left-6 lg:top-6 left-3 top-3 rounded-lg text-white gap-2 flex flex-col px-5 py-[15px] lg:w-[200px] w-[90%] h-[77px]">
              <span className="font-roboto text-xs font-normal ">
                8 Properties
              </span>
              <p className="font-medium text-xl font-roboto">New York</p>
            </div>
            <Image
              src="/img1.png"
              width={500}
              height={500}
              alt="img"
              className="w-full h-full object-center rounded-xl"
            />
          </div>
          <div className="col-span-1 xl:h-[319px] h-[280px] w-full rounded-xl relative ">
            <div className="img-small-overlay absolute left-3 top-3 xl:left-6 xl:top-6 rounded-lg text-white gap-2 flex flex-col px-5 py-[15px] w-[90%] xl:w-[200px] h-[77px]">
              <span className="font-roboto text-xs font-normal ">
                8 Properties
              </span>
              <p className="font-medium text-xl font-roboto">New York</p>
            </div>
            <Image
              src="/img1.png"
              width={500}
              height={500}
              alt="img"
              className="w-full h-full object-center rounded-xl"
            />
          </div>
          <div className="col-span-1 xl:h-[319px] h-[280px] w-full rounded-xl relative ">
            <div className="img-small-overlay absolute left-3 top-3 xl:left-6 xl:top-6 rounded-lg text-white gap-2 flex flex-col px-5 py-[15px] w-[90%] xl:w-[200px] h-[77px]">
              <span className="font-roboto text-xs font-normal ">
                8 Properties
              </span>
              <p className="font-medium text-xl font-roboto">New York</p>
            </div>
            <Image
              src="/img1.png"
              width={500}
              height={500}
              alt="img"
              className="w-full h-full object-center rounded-xl"
            />
          </div>
          <div className="col-span-1 xl:h-[319px] h-[280px] w-full rounded-xl relative ">
            <div className="img-small-overlay absolute left-3 top-3 xl:left-6 xl:top-6 rounded-lg text-white gap-2 flex flex-col px-5 py-[15px] w-[90%] xl:w-[200px] h-[77px]">
              <span className="font-roboto text-xs font-normal ">
                8 Properties
              </span>
              <p className="font-medium text-xl font-roboto">New York</p>
            </div>
            <Image
              src="/img1.png"
              width={500}
              height={500}
              alt="img"
              className="w-full h-full object-center rounded-xl"
            />
          </div>
          <div className="col-span-1 xl:h-[319px] h-[280px] w-full rounded-xl relative ">
            <div className="img-small-overlay absolute left-3 top-3 xl:left-6 xl:top-6 rounded-lg text-white gap-2 flex flex-col px-5 py-[15px] w-[90%] xl:w-[200px] h-[77px]">
              <span className="font-roboto text-xs font-normal ">
                8 Properties
              </span>
              <p className="font-medium text-xl font-roboto">New York</p>
            </div>
            <Image
              src="/img1.png"
              width={500}
              height={500}
              alt="img"
              className="w-full h-full object-center rounded-xl"
            />
          </div>
          <div className="lg:col-span-2 col-span-1 xl:h-[319px] h-[280px] w-full rounded-xl relative">
            <div className="img-small-overlay absolute lg:left-6 lg:top-6 left-3 top-3 rounded-lg text-white gap-2 flex flex-col px-5 py-[15px] lg:w-[200px] w-[90%] h-[77px]">
              <span className="font-roboto text-xs font-normal ">
                8 Properties
              </span>
              <p className="font-medium text-xl font-roboto">New York</p>
            </div>
            <Image
              src="/img1.png"
              width={500}
              height={500}
              alt="img"
              className="w-full h-full object-center rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCities;
