import Image from "next/image";
import React from "react";

const BlogCard = () => {
  return (
    <div className="sm:w-full w-[290px] xl:h-[442px] h-[342px] cursor-pointer relative custom-shadow3 border border-[#00ACC1] rounded-xl overflow-hidden group">
      <Image
        src="/img1.png"
        alt="blog"
        width={500}
        height={500}
        className="rounded-xl h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-[#00ACC1]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

      <div className="absolute xl:bottom-[-130px] lg:bottom-[-130px] md:bottom-[-130px] bottom-[-120px] group-hover:bottom-4 transition-all duration-700 left-4 group">
        <button className="px-6 py-1 bg-white rounded-xl text-xs font-roboto font-normal">
          June 6, 2025
        </button>
        <h3 className="text-xl text-white font-raleway-semibold mt-2 xl:mb-4 mb-6 font-semibold line-clamp-2">
          Latest Design Trends You Need to Know
        </h3>

        {/* Animated part — appears on hover */}
        <p className="line-clamp-5 font-roboto text-base font-normal text-white">
          Discover expert advice and detailed solutions to all your design
          inquiries, whether you're seeking guidance on creative concepts,
          technical challenges, or design.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
