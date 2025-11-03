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
        className="absolute inset-0 h-[1080px] w-full "
        priority
      />
      <div className="relative w-full h-[1080px]">
     
        <div className="hero-wrapper">
          <div className="hero-img1">
            <h1 className="hero-img1-text">
              Buy
            </h1>

            <Image
              src="/img1.png"
              alt="img1"
              width={777}
              height={360}
              className="hero-img1-img"
            />
          </div>
          {/* <div className="w-[306px] h-[445px] absolute top-[120px] left-[calc(50%+52px)] -translate-x-1/2">
            <Image
              src="/img2.png"
              alt="img1"
              width={306}
              height={445}
              className="w-full h-full z-20 absolute object-cover"
            />

            <h1
              className="absolute top-1/2 right-[-82px] -translate-y-1/2 
                  -rotate-90  text-white font-roboto font-medium text-[128px] leading-[95px] tracking-[0] not-italic z-30 text-center m-0 p-0"
            >
              Sale
            </h1>
          </div>
          <div className="w-[653px] h-[365px] absolute bottom-[354px] right-0">
            <h1 className="text-[128px]  font-medium w-fit h-fit text-white m-0 p-0 leading-[95px] font-roboto absolute text-center right-1/2 translate-x-1/2 top-0 z-30">
              Rent
            </h1>

            <Image
              src="/img3.png"
              alt="img1"
              width={653}
              height={365}
              className="w-full h-full z-20 absolute object-cover"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HeroSection1;
