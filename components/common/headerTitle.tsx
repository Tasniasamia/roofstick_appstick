import React from "react";

const HeaderTitle = ({
  title,
  description,
  customClass,
}: {
  title: string;
  description: string;
  customClass: string;
}) => {
  return (
    <div className={`flex flex-col md:gap-6 gap-4 ${customClass}`}>
      <h2
        className="text-primary  font-raleway-bold  font-bold leading-none 
text-[24px] sm:text-[32px] md:text-[40px] lg:text-[44px] xl:text-[48px]"
      >
        {title}
      </h2>
      <p className="text-secondary font-roboto md:text-base text-sm font-normal lg:w-[739px] w-[80%] ">
        {description}
      </p>
    </div>
  );
};

export default HeaderTitle;
