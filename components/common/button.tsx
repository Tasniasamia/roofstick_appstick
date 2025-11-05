"use client"
import React from "react";

const Button = ({
  title,
  Icon,
  isIcon,
  customClass,
  href,
}: {
  title?: string;
  Icon?: React.ElementType;
  isIcon?: boolean;
  customClass?:string;
  href?:string
}) => {
  return (
    <div className={`font-roboto text-base bg-primary w-fit px-6 py-4 rounded-[10px] flex gap-2 items-center justify-center ${customClass}`} onClick={()=>{
    if(href){
        window.location.href=href;
    }
    else{
        window.location.href="/"
    }
    }}>
      <span>{title}</span>
      {isIcon && Icon && <Icon size={10} />}
    </div>
  );
};

export default Button;
