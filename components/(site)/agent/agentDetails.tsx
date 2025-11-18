import Image from "next/image";
import React from "react";
import { CiInstagram, CiLinkedin, CiLocationArrow1, CiTwitter } from "react-icons/ci";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";

const AgentDetails = () => {
  return (
    <div className="lg:mt-[120px] mt-[60px] 2xl:px-0 px-3 overflow-hidden">
      <div className="container grid lg:grid-cols-2 grid-cols-1 gap-16 ">
        <div className="relative sm:h-[670px] h-[500px] lg:w-full sm:w-[530px] w-full rounded-xl lg:mx-0 mx-auto">
          <div className="bg-[#FAFAFB] border-[#E8EAE8] absolute sm:top-[100px] top-0 sm:-right-6 right-0 p-6 border rounded-[10px] flex gap-2 items-center">
            <FaPhone className="text-2xl text-[#0B0A0A]" />
            <span className="text-base text-[#0B0A0A] font-roboto">
              (704) 555-0127
            </span>
          </div>
          <div className="bg-[#FAFAFB] border-[#E8EAE8] absolute sm:bottom-[120px] bottom-[40%] sm:-left-6 left-0  p-6 border rounded-[10px] flex gap-2 items-center">
            <FaLocationDot className="text-2xl text-[#0B0A0A]" />
            <span className="text-base text-[#0B0A0A] font-roboto">
              43 wallaby way, sydney
            </span>
          </div>
          <div className="bg-[#FAFAFB] border-[#E8EAE8] absolute sm:bottom-6 bottom-0 sm:-right-6 right-0 p-6 border rounded-[10px] flex gap-2 items-center">
            <MdEmail className="text-2xl text-[#0B0A0A]" />
            <span className="text-base text-[#0B0A0A] font-roboto">
              example@email.com
            </span>
          </div>
          <Image
            src="/agent.png"
            alt="agent"
            width={530}
            height={670}
            className="h-full object-center w-full rounded-xl"
          />
        </div>
        <div>
          <h2
            className={`text-primary static z-40  font-roboto  font-bold leading-none 
text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl `}
          >
            Clinton H Barnes
          </h2>
          <p className="text-secondary text-base font-roboto font-normal mt-4">
            Real State Agent
          </p>
          <div className="mt-10 flex justify-start items-center gap-4">
            <div className="h-9 w-9 cursor-pointer bg-[#717171] text-white rounded-full grid place-items-center">
              <CiTwitter size={18} className="text-[18px]" />
            </div>
            <div className="h-9 w-9 cursor-pointer bg-[#717171] text-white rounded-full grid place-items-center">
              <TiSocialFacebook size={18} className="text-[18px]" />
            </div>
            <div className="h-9 w-9 cursor-pointer bg-[#717171] text-white rounded-full grid place-items-center">
              <CiInstagram size={18} className="text-[18px]" />
            </div>
            <div className="h-9 w-9 cursor-pointer bg-[#717171] text-white rounded-full grid place-items-center">
              <CiLinkedin size={18} className="text-[18px]" />
            </div>
          </div>
          <button className="mt-10 border border-[#00ACC1] sm:w-[350px] w-full h-14 cursor-pointer flex gap-2 items-center justify-center rounded-[10px]">
             <span className="text-primary text-base font-medium font-roboto">Send Message</span>
             <CiLocationArrow1 className="text-[20px] text-[#05073C]"/>
          </button>
          <h5 className="text-primary font-roboto text-2xl font-semibold mt-10">
            About Me
          </h5>
          <p className="text-secondary text-base font-roboto font-normal mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem...
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgentDetails;
