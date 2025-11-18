import HeaderTitle from "@/components/common/headerTitle";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Blogdetails = () => {
  return (
    <div className="container">
      <div className="lg:mt-[120px] mt-[60px] 2xl:px-0 px-3">
        <HeaderTitle
          title={"Latest Design Trends You Need to Know"}
          description={
            "As the real estate and interior design industries evolve, staying current with design trends is essential for both property owners and buyers. The homes of today are no longer just about aesthetics—they’re about function, flexibility, and personal comfort. Let’s explore what’s making an impact in 2025."
          }
          customClass3="w-full"
          customClass="items-start text-start"
        />
        <div>
          {/* Image Part */}
          <div className="grid xl:grid-cols-4 sm:grid-cols-3 gap-6 mt-10">
            <Image
              src="/img1.png"
              width={984}
              height={553}
              className="w-full lg:h-[553px] md:h-[453px] sm:h-[353px] h-[265px] xl:col-span-3 sm:col-span-2 rounded-xl object-center"
              alt="blog1"
            />
            <div className="flex flex-col gap-6">
              <Image
                src="/img2.png"
                width={312}
                height={265}
                className="w-full lg:h-[265px] md:h-[214px] sm:h-[165px] h-[265px] col-span-3 rounded-xl object-center"
                alt="blog2"
              />
              <Image
                src="/img3.png"
                width={312}
                height={265}
                className="w-full lg:h-[265px] md:h-[214px] sm:h-[165px] h-[265px]  col-span-3 rounded-xl object-center"
                alt="blog3"
              />
            </div>
          </div>
          {/* content part */}
          <div className="mt-10 grid xl:grid-cols-4 sm:grid-cols-3 gap-6">
            <div className="xl:col-span-3 sm:col-span-2 ">
              <p className="text-base text-secondary font-roboto font-normal">
                One of the strongest design movements is the return to natural
                and earthy materials. Wood, stone, clay, and organic fabrics are
                making homes feel warmer and more grounded. From timber beams to
                jute rugs, these elements create an inviting and eco-conscious
                space that appeals to environmentally aware buyers. Technology
                is also transforming the modern home. Smart home features—like
                integrated lighting, voice assistants, remote-controlled
                security systems, and energy-efficient appliances—are no longer
                luxuries, but expectations. These upgrades improve both
                convenience and value, making properties more attractive to
                tech-savvy clients.
              </p>
            </div>
            <div className="flex flex-col items-end">
              <div
                className="p-6 flex flex-col   gap-8 items-center rounded-xl border w-fit border-[#E8EAE8] bg-white"
                style={{ boxShadow: " 0 72px 132px 0 rgba(15, 28, 51, 0.06)" }}
              >
                <p className="text-base font-roboto font-semibold">
                  SHARE THIS ON
                </p>
                <FaFacebook className="text-[22px] text-black" />
                <FaTwitter className="text-[22px] text-black" />
                <FaInstagram className="text-[22px] text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogdetails;
