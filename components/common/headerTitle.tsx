import React from "react";

const HeaderTitle = ({
  title,
  description,
  customClass,
  widthClass,
}: {
  title: string;
  description: string;
  customClass: string;
  widthClass?: string
}) => {
  return (
    <div className={`flex flex-col md:gap-6 static z-40 gap-4 ${customClass}`}>
      <h2
        className="text-primary static z-40  font-raleway-bold  font-bold leading-none 
text-[24px] sm:text-[32px] md:text-[40px] lg:text-[44px] xl:text-[48px]"
      >
        {title}
      </h2>
      <p className={`text-secondary static z-40 font-roboto md:text-base text-sm font-normal ${widthClass} `}>
        {description}
      </p>
    </div>
  );
};

export default HeaderTitle;
