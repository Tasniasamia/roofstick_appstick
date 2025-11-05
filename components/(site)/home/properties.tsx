import PropertyCard from "@/components/common/card/propertyCard";
import HeaderTitle from "@/components/common/headerTitle";
import React from "react";

const Properties = () => {
  return (
    <div className="lg:mt-[120px] mt-[60px]">
      <div className="container">
        <HeaderTitle
          title={"Featured Properties"}
          description={
            "These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories."
          }
          customClass="items-center text-center"
        />
        <div className="pt-6 grid md:grid-cols-3 sm:grid-cols-2 xl:gap-6 gap-3 sm:place-content-start place-content-center">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />

        </div>
      </div>
    </div>
  );
};

export default Properties;
