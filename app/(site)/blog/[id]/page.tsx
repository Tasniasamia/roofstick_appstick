import Blogdetails from "@/components/(site)/blog/blogDetails";
import Banner from "@/components/common/banner";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner routeName="Blog Details" />
      <Blogdetails />
    </div>
  );
};

export default page;
