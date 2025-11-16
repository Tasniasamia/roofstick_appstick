import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineSlash } from "react-icons/hi2";

const Banner = ({ routeName }: { routeName: string }) => {
  return (
    <div
      className="sm:h-[380px] h-[280px] w-full relative overflow-hidden"
      style={{ boxShadow: "0 72px 132px 0 rgba(15, 28, 51, 0.06)" }}
    >
      <Image
        src="/banner-svg1.png"
        width={219}
        height={258}
        className="absolute left-0 sm:block hidden bottom-0"
        alt="banner-svg1"
      />
      <Image
        src="/banner-svg2.png"
        width={100}
        height={100}
        className="absolute xl:block hidden left-[35%] bottom-0  "
        alt="banner-svg3"
      />
      <Image
        src="/banner-svg3.png"
        width={118}
        height={66}
        className="absolute xl:block hidden  left-[55%] top-[137px]  "
        alt="banner-svg3"
      />
      <Image
        src="/banner-svg5.png"
        width={219}
        height={258}
        className="absolute xl:block hidden  left-1/2 bottom-0 -translate-x-1/2 "
        alt="banner-svg3"
      />
      <Image
        src="/banner-svg4.png"
        width={458}
        height={258}
        className="absolute sm:block hidden right-[30.33px] bottom-0"
        alt="banner-svg4"
      />

      <div className="container ">
        <div className="h-full sm:pt-[195px] pt-[140px] relative z-10 xl:ps-0 ps-6">
          <h1 className="font-roboto font-semibold md:text-5xl text-4xl text-black">
            {routeName}
          </h1>
          <div className="flex text-[#717171] gap-1 items-center md:text-2xl text-xl  font-semibold font-roboto mt-6">
            <Link href="/home">Home</Link>
            <HiOutlineSlash />
            <span>{routeName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
