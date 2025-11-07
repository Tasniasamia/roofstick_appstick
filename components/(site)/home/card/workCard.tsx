import Image from "next/image";
import React from "react";

const WorkCard = () => {
  return (
    <div className="flex flex-col items-center static z-20">
      <Image
        src="/service.png"
        width={200}
        height={200}
        alt="work"
        className="w-[150px] h-[150px] object-center"
      />
      <h3 className="font-raleway-semibold text-primary line-clamp-2 text-2xl font-semibold mt-[23px] text-center">
        Search for you favorite house in your location
      </h3>
      <p className="text-base text-secondary text-center mt-4 line-clamp-3">
        Easily find your dream home right where you are. Use location-based
        filters to explore nearby listings that match your lifestyle and budget.
      </p>
    </div>
  );
};

export default WorkCard;
