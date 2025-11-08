import TeamCard from "@/components/common/card/teamCard";
import React from "react";

const OurTeam = () => {
  return (
    <div className="lg:mt-[120px] mt-[60px] 2xl:px-0 px-3">
      <div className="container">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
