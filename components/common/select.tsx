"use client";

import { ChevronDown } from "lucide-react";

interface LocationDropdownProps {
  name: string;
  label?: React.ReactNode;
  placeholder: string;
  options: { value: string; label: string }[];
  isIcon?: boolean;
  customClass?: string;
  Icon?: React.ElementType;
  strokeColor?:string;
}

export function LocationDropdown({
  strokeColor,
  options,
  customClass = "",
  Icon,
  isIcon,
  label,
  name,
  placeholder,
}: LocationDropdownProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && <div>{label}</div>}
      <div className="relative">
        {isIcon && Icon && (
          <Icon className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5  ${strokeColor?strokeColor:'text-[#05073C]'}  pointer-events-none`} />
        )}

        <select
          name={name}
          className={`
            ${customClass} 
            ${isIcon ? "ps-10" : ""}
            p-4 rounded-lg border border-gray-200 
            focus:outline-none appearance-none bg-white
            text-[#05073C] font-medium 
            focus:ring-2 focus:ring-[#05073C]/40 
            transition-all cursor-pointer
          `}
          defaultValue="" 
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>

          {options.map((location) => (
            <option key={location.value} value={location.value}>
              {location.label}
            </option>
          ))}
        </select>

        <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 ${strokeColor?strokeColor:'text-[#05073C]'} pointer-events-none`} />
      </div>
    </div>
  );
}
