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
      <div className="relative w-full lg:h-[1080px] md:h-[700px] h-full  bg-red-300">
     
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
          <div className="hero-img2">
            <Image
              src="/img2.png"
              alt="img1"
              width={306}
              height={445}
              className="hero-img2-img"
            />

            <h1
              className="hero-img2-text"
            >
              Sale
            </h1>
          </div>
          <div className="hero-img3">
            <h1 className="hero-img3-text">
              Rent
            </h1>

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
