import BlogCard from "@/components/common/card/blogCard";
import HeaderTitle from "@/components/common/headerTitle";
import React from "react";

const OurBlog = () => {
  return (
    <div className="lg:pt-[120px] pt-[60px] 2xl:px-0 px-3">
      <div className="container">
        <HeaderTitle
          title={"Discover our Latest News & Blog"}
          description={
            "Explore expert tips, market trends, and property insights.Stay informed with our latest real estate news and blogs."
          }
          customClass="items-center text-center  "
          widthClass="md:w-[427px] w-[80%]"
        />
        <div className="mt-10 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
