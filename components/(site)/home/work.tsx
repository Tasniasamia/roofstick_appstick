import WorkCard from "@/components/(site)/home/card/workCard";
import HeaderTitle from "@/components/common/headerTitle";
import Image from "next/image";
import React from "react";

const Work = ({isHome1}:{isHome1:boolean}) => {
  return (
    <div className="lg:pt-[120px] pt-[60px] relative">
        <Image src="/vection2.png" alt="image" width={500} height={500} className={`h-[765px] object-cover z-10 w-[648px] lg:block hidden absolute top-0 right-0 `}/>
        <Image src="/round-bg.png" alt="image" width={500} height={500} className={`h-auto w-auto absolute  lg:block hidden  left-[142px] top-[194px]`}/>
      <div className="container ">
        <HeaderTitle
          title={"How It Works"}
          description={
            "A great platform to buy, sell and rent your properties without any agent or commissions."
          }
          customClass="items-center text-center  "
          customClass3="sm:w-[500px] w-[80%]"
        />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 items-center mt-10">
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </div>
      </div>
    </div>
  );
};

export default Work;
