import Image from "next/image";
import React from "react";

const HeroSection1 = () => {
  return (
    <>
      <Image
        src="/hero.png"
        width={1000}
        height={1080}
        alt="hero image"
        className="absolute inset-0 lg:h-[1080px] md:h-[700px] h-full  w-full "
        priority
      />
      <div className="relative w-full lg:h-[1080px] md:h-[700px] h-full">
        <div className="hero-wrapper">
          <div className="max-w-[1320px] mx-auto pt-[120px] z-50 relative">
            <h1 className="text-primary xl:text-[64px] sm:text-[50px] text-[32px] font-raleway xl:leading-[130%] leading-[120%] lg:pt-[50px] 2xl:pt-[120px] font-extrabold sm:text-start text-center">
              Unlock Your Future <br className="sm:block hidden"/> Home with Roofstick
            </h1>
            <p className="lg:text-[#717171] md:text-[#05073C] text-[#717171] mt-6 text-base font-roboto xl:w-[491px] lg:w-[380px] sm:w-[400px] sm:text-start text-center lg:font-normal font-medium">
              Simplify buying, renting, and managing properties with Roofstick
              your all in one real estate solution
            </p>

             {/* tab */}

          </div>

          <div className="hero-img1">
            <h1 className="hero-img1-text font-roboto font-medium">Buy</h1>

            <Image
              src="/img1.png"
              alt="img1"
              width={777}
              height={360}
              className="hero-img1-img"
            />
          </div>
          <div className="hero-img2">
            <Image
              src="/img2.png"
              alt="img1"
              width={306}
              height={445}
              className="hero-img2-img"
            />

            <h1 className="hero-img2-text font-roboto font-medium">Sale</h1>
          </div>
          <div className="hero-img3">
            <h1 className="hero-img3-text font-roboto font-medium">Rent</h1>

            <Image
              src="/img3.png"
              alt="img1"
              width={653}
              height={365}
              className="hero-img3-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection1;
