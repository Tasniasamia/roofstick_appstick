import Image from "next/image";
import React from "react";

const BlogCard = () => {
  return (
    <div className="w-full h-[442px] cursor-pointer relative custom-shadow3 border border-[#00ACC1] rounded-xl overflow-hidden group">
      <Image
        src="/img1.png"
        alt="blog"
        width={500}
        height={500}
        className="rounded-xl h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-[#00ACC1]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

      <div className="absolute bottom-4 left-4 group">
        <div
          className="transition-all duration-700 absolute -bottom-4 group-hover:bottom-[110px] ease-out
    "
        >
          <button className="px-6 py-1 bg-white rounded-xl text-xs font-roboto font-normal">
            June 6, 2025
          </button>
          <h3 className="text-xl text-white font-raleway-semibold mt-2 mb-4 font-semibold line-clamp-2">
            Latest Design Trends You Need to Know
          </h3>
        </div>

        {/* Animated part — appears on hover */}
        <p
          className="line-clamp-5 font-roboto text-base font-normal text-white 
    opacity-0 translate-y-6
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-700 ease-out"
        >
          Discover expert advice and detailed solutions to all your design
          inquiries, whether you're seeking guidance on creative concepts,
          technical challenges, or design.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
