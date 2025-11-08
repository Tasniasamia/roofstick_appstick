import ServiceCard from "@/components/common/card/serviceCard";
import TeamCard from "@/components/common/card/teamCard";
import React from "react";

const OurService2 = () => {
  return (
    <div className="lg:mt-[120px] mt-[60px] 2xl:px-0 px-3">
      <div className="container">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
         <ServiceCard/>
         <ServiceCard/>
         <ServiceCard/>
         <ServiceCard/>
        </div>
      </div>
    </div>
  );
};

export default OurService2;
