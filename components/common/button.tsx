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
    <div className={`font-roboto group text-base bg-primary w-fit px-6 py-4 rounded-[10px] flex gap-2 items-center justify-center ${customClass}`} onClick={()=>{
    if(href){
        window.location.href=href;
    }
    else{
        window.location.href="/"
    }
    }}>
      <span>{title}</span>
      {isIcon && Icon && <Icon size={20} className="text-white group-hover:text-[#4cac40] duration-300 transition-all"/>}
    </div>
  );
};

export default Button;
