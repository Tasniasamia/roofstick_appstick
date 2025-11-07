import Image from "next/image";
import React from "react";

const OurService = () => {
  return (
    <div className="bg-[#EBFFFD] lg:mt-[120px] mt-[60px] p-[54px]">
      <div className="container">
        <div className="md:flex grid sm:grid-cols-2 grid-cols-1 gap-10 xl:flex-nowrap flex-wrap md:flex-row justify-between items-center">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/service-img1.png"
              width={500}
              height={500}
              className="w-auto h-20 object-center mb-5"
              alt="service"
            />
            <h2 className="font-roboto mb-4 text-[40px] font-bold leading-[50px] text-primary ">
              160+
            </h2>
            <p className="text-base text-secondary font-roboto">
              Total Construction
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/service-img2.png"
              width={500}
              height={500}
              className="w-auto h-20 object-center mb-5"
              alt="service"
            />
            <h2 className="font-roboto mb-4 text-[40px] font-bold leading-[50px] text-primary ">
              101+
            </h2>
            <p className="text-base text-secondary font-roboto">
              Apartio Rooms{" "}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/service-img3.png"
              width={500}
              height={500}
              className="w-auto h-20 object-center mb-5"
              alt="service"
            />
            <h2 className="font-roboto mb-4 text-[40px] font-bold leading-[50px] text-primary ">
              100+
            </h2>
            <p className="text-base text-secondary font-roboto">
              Apartments Sold{" "}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/service-img4.png"
              width={500}
              height={500}
              className="w-auto h-20 object-center mb-5"
              alt="service"
            />
            <h2 className="font-roboto mb-4 text-[40px] font-bold leading-[50px] text-primary ">
              500+
            </h2>
            <p className="text-base text-secondary font-roboto">
              Total Area Sq{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
