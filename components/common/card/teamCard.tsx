import Image from "next/image";
import React from "react";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";

const TeamCard = () => {
  return (
    <div className="p-[27.5px]  border border-[#E8EAE8] rounded-xl flex flex-col items-center">
      <Image
        src="/man.png"
        alt="team"
        className="h-[214px] w-[214px] mask-[url(/mask.png)] object-center"
        width={500}
        height={500}
      />
      <h4 className="text-2xl font-roboto font-semibold text-primary text-center pt-4 cursor-pointer">
        Scott Beer
      </h4>
      <p className="text-base font-roboto text-secondary text-center mt-1 mb-2">
        Insert your title here
      </p>
      <p className="text-[#A2A8AF] font-roboto text-sm text-center">
        There are many variations of passages of Lorem Ipsum available
      </p>
      <div className="mt-6 flex justify-center items-center gap-4">
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
    </div>
  );
};

export default TeamCard;
