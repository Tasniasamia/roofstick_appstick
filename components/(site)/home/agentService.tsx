import HeaderTitle from "@/components/common/headerTitle";
import React from "react";
import AgentServiceCard from "./card/serviceCard";

const AgentService = () => {
  return (
    <div className="lg:pt-[120px] pt-[60px]">
    <div className="container">
      <HeaderTitle
        title={"See how Agent Provide service to help"}
        description={
          "A great platform to buy, sell and rent your properties without any agent or commissions."
        }
        customClass="items-center text-center  "
        customClass3="lg:w-[891px] md:w-[500px] w-[80%]"
      />
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 items-center mt-6">
        <AgentServiceCard />
        <AgentServiceCard />
        <AgentServiceCard />
     </div>
    </div>
    </div>
  );
};

export default AgentService;
