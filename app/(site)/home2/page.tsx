import About from "@/components/(site)/home/about";
import AgentService from "@/components/(site)/home/agentService";
import CardStackSlider from "@/components/(site)/home/cardStackSlider";
import ContactUs2 from "@/components/(site)/home/contactUs2";
import ExploreCities from "@/components/(site)/home/exploreCities";
import HeroSection2 from "@/components/(site)/home/hero2";
import OurBlog from "@/components/(site)/home/ourBlog";
import OurClients from "@/components/(site)/home/ourClients";
import OurService from "@/components/(site)/home/ourService";
import Properties from "@/components/(site)/home/properties";
import Work from "@/components/(site)/home/work";
import Categories from "@/components/common/categories";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection2 />
      <Categories customControl={false} />
      <ExploreCities />
      <Properties />
      <Work isHome1={true} />
      <OurService/>
      <About />
      <AgentService />
      <CardStackSlider />
      <OurClients />
      <OurBlog />
      <ContactUs2 />
    </div>
  );
};

export default page;
