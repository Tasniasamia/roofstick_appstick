import React from "react";

type SearchInputProps = {
  onClick: (e: React.FormEvent<HTMLFormElement>) => void;
  placeholder: string;
  customClass: string;
};

const SearchInput = ({
  onClick,
  customClass,
  placeholder,
}: SearchInputProps) => {
  return (
    <form onSubmit={onClick} className="w-full bg-white">
      <div
        className={`relative border flex items-center ${customClass}  border-[#E8EAE8] rounded-lg bg-white shadow-[0_80px_200px_-12px_rgba(15,28,51,0.12)]`}
      >
        <input
          name="search"
          type="text"
          placeholder={placeholder}
          className="ps-10 p-4 rounded-lg w-full placeholder:font-medium placeholder:text-base placeholder:text-[#717171]"
        />
        <span className="px-6 cursor-pointer w-40 flex flex-col items-center py-4 rounded-[10px] absolute top-1/2 -translate-y-1/2 right-[13px]  bg-[#088396] text-base text-white">
          Search
        </span>
      </div>
    </form>
  );
};

export default SearchInput;
