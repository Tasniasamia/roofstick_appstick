import Image from "next/image";
import React from "react";

const OurClients = () => {
  return (
    <div className="lg:mt-[120px] mt-[60px]">
      <div className="container">
        <h2
          className="text-primary static z-40 text-center  font-raleway-bold  font-bold leading-none 
text-[24px] sm:text-[32px] md:text-[40px] lg:text-[44px] xl:text-[48px]"
        >
          Trusted by the world’s best
        </h2>
        <div className="flex  lg:flex-nowrap flex-wrap flex-row mt-10 justify-center lg:justify-between items-center">
    
          <div className="w-[244.8px] h-20 flex flex-row justify-center items-center">
            <Image
              src="/logo1.png"
              width={500}
              height={500}
              alt="client"
              className="w-auto h-6 object-center"
            />
          </div>
          <div className="w-[244.8px] h-20 flex flex-row justify-center items-center">
            <Image
              src="/logo2.png"
              width={500}
              height={500}
              alt="client"
              className="w-auto h-6 object-center"
            />
          </div>
          <div className="w-[244.8px] h-20 flex flex-row justify-center items-center">
            <Image
              src="/logo3.png"
              width={500}
              height={500}
              alt="client"
              className="w-auto h-6 object-center"
            />
          </div>
          <div className="w-[244.8px] h-20 flex flex-row justify-center items-center">
            <Image
              src="/logo4.png"
              width={500}
              height={500}
              alt="client"
              className="w-auto h-6 object-center"
            />
          </div>
          <div className="w-[244.8px] h-20 flex flex-row justify-center items-center">
            <Image
              src="/logo5.png"
              width={500}
              height={500}
              alt="client"
              className="w-auto h-6 object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
