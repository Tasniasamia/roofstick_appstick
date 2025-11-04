"use client";
import { ChevronDown } from "lucide-react";


interface LocationDropdownProps {
  name:string,
  placeholder:string,
  options:{value:string,label:string}[]
  isIcon?: boolean;
  customClass?: string;
  Icon?: React.ElementType; // icon prop টাইপ হিসেবে component পাঠাবে
}
export function LocationDropdown({
  options,
  customClass = "",
  Icon,
  isIcon,
  name,
  placeholder
}: LocationDropdownProps) {
  return (
    <div className="relative">
      <div className="relative">
        {isIcon && Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#05073C] pointer-events-none" />
        )}

        <select
        name={name}
          className={` ${customClass} ${
            isIcon ? "ps-10" : ""
          } p-4 focus:outline-none appearance-none bg-white tab-content-grid text-[#05073C] font-medium  focus:border-transparent transition-all cursor-pointer`}
        >
          
          {options?.map((location:{value:string,label:string}) => (
            <option key={location.value} value={location.value}>
              {location.label}
            </option>
          ))}
        </select>

        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#05073C] pointer-events-none" />
      </div>
    </div>
  );
}
