import React from "react";

const HeaderTitle = ({
  title,
  description,
  customClass,
  customClass2,
  customClass3
}: {
  title: string;
  description: string;
  customClass: string;
  customClass2?: string;
  customClass3?:string
}) => {
  return (
    <div className={`flex flex-col md:gap-6 static z-40 gap-4 ${customClass}`}>
      <h2
        className={`text-primary static z-40  font-raleway-bold  font-bold leading-none 
text-[24px] sm:text-[32px] md:text-[40px] lg:text-[44px] xl:text-[48px] ${customClass2}`}
      >
        {title}
      </h2>
      <p className={`text-secondary static z-40 font-roboto md:text-base text-sm font-normal ${customClass3} `}>
        {description}
      </p>
    </div>
  );
};

export default HeaderTitle;
