"use client";
import OurBlog from "@/components/(site)/home/ourBlog";
import OurClients from "@/components/(site)/home/ourClients";
import Banner from "@/components/common/banner";
import SearchInput from "@/components/common/search";
import React from "react";

const page = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    console.log(form.email.value);
  };
  return (
    <div>
      <Banner routeName="Blog" />
      <div className="container grid place-items-center">
        <div className="lg:w-[720px] sm:w-[600px] w-full lg:mt-[115px] mt-[60px]"style={{boxShadow:"0 72px 132px 0 rgba(15, 28, 51, 0.06)"}}>
          <SearchInput
            onClick={handleSubmit}
            customClass="w-full h-20 "
            placeholder="Search blog, news or house..."
          />
        </div>
      </div>
      <OurBlog/>
      <OurClients/>
    </div>
  );
};

export default page;
