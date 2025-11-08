"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsSend } from "react-icons/bs";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import {
  FaApple,
  FaGooglePlay,
  FaSquareFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";

const Footer = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    console.log(form.email.value);
  };
  return (
    <div className="bg-[#125767] relative  lg:mt-[120px] mt-[60px]">
      <Image
        src="/footer-bg.png"
        className="absolute z-10 h-full lg:block hidden left-0 w-full bottom-0 object-center"
        width={1000}
        height={500}
        alt="footer"
      />
      <div className="container relative z-30 2xl:px-0 px-3">
        <div className="flex md:flex-row flex-col justify-between md:items-center items-start md:gap-0 gap-6 py-10  border-b border-b-white">
          <Image
            src="/footer-logo.png"
            alt="footer logo"
            width={500}
            height={500}
            className="w-auto object-center h-[55px]"
          />
          <div className="flex gap-2 items-center ">
            <h4 className="font-roboto text-white font-medium text-2xl">
              Follow Us
            </h4>
            <div className=" flex justify-center items-center gap-2.5">
              <div className="h-9 w-9 cursor-pointer bg-[#4CAC40] text-white rounded-full grid place-items-center">
                <FaSquareFacebook size={18} className="text-[18px]" />
              </div>
              <div className="h-9 w-9 cursor-pointer bg-[#4CAC40] text-white rounded-full grid place-items-center">
                <FaYoutube size={18} className="text-[18px]" />
              </div>
              <div className="h-9 w-9 cursor-pointer bg-[#4CAC40] text-white rounded-full grid place-items-center">
                <FaTwitter size={18} className="text-[18px]" />
              </div>
              <div className="h-9 w-9 cursor-pointer bg-[#4CAC40] text-white rounded-full grid place-items-center">
                <RiInstagramFill size={18} className="text-[18px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex grid sm:grid-cols-2 xl:gap-0 gap-10 flex-row xl:flex-nowrap flex-wrap justify-between  pt-10 pb-[66px] border-b border-b-white">
          <div>
            <h4 className="font-roboto text-white text-2xl font-medium mb-6">
              Subscribe
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="relative border sm:w-[318px] w-[90%] border-[#E8EAE8] rounded-lg bg-white shadow-[0_80px_200px_-12px_rgba(15,28,51,0.12)]">
                <MdOutlineEmail
                  size={16}
                  className="text-[#A2A8AF] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Example@gmail.com"
                  className="ps-10 p-4 rounded-lg w-full bg-white h-14 text-base font-normal text-[#A2A8AF] focus:outline-none focus:ring-2 focus:ring-[#05073C]/40 transition-all"
                />
                <button className="h-8 w-8 absolute top-1/2 -translate-y-1/2 right-[13px] rounded-full bg-[#125767] text-white grid place-content-center">
                  <BsSend />
                </button>
              </div>
            </form>
            <p className="text-base font-roboto text-white mt-6 w-[326px]">
              Subscribe to our newsletter to receive our weekly feed.
            </p>
          </div>

          <div>
            <h4 className="font-roboto text-white text-2xl font-medium mb-6">
              Quick Links
            </h4>
            <ul className="list-none flex flex-col gap-4">
              <li className="text-base text-white font-normal font-roboto">
                <Link href="/about">About</Link>
              </li>
              <li className="text-base text-white font-normal font-roboto">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="text-base text-white font-normal font-roboto">
                <Link href="/faq">FAQ'S</Link>
              </li>
              <li className="text-base text-white font-normal font-roboto">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="text-base text-white font-normal font-roboto">
                <Link href="/pricing">Pricing Plan</Link>
              </li>
              <li className="text-base text-white font-normal font-roboto">
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li className="text-base text-white font-normal font-roboto">
                <Link href="/terms">Terms and Conditons</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-roboto text-white text-2xl font-medium mb-6">
              Contact Us
            </h4>
            <p className="text-base text-white font-normal font-roboto w-[130px]">
              hi@justhome.com (123) 456-7890
            </p>
          </div>

          <div>
            <h4 className="font-roboto text-white text-2xl font-medium mb-6">
              Our Address
            </h4>
            <p className="text-base text-white font-normal font-roboto w-[170px]">
              Khulna, joybanglga road left blue building
            </p>
          </div>

          <div>
            <h4 className="font-roboto text-white text-2xl font-medium mb-6">
              Get The App
            </h4>
            <div className="flex flex-col gap-4">
              <div className="rounded-[10px] bg-[#4CAC40] flex flex-row items-center py-3 w-[212px]">
                <div className="ps-[30px] pe-4 py-2 border-e border-white">
                  <FaApple className="text-white text-[24px]" />
                </div>
                <div className="flex-col flex gap-1.5 ps-5">
                  <p className="text-xs font-roboto font-normal text-white">
                    Download on the
                  </p>
                  <p className="text-base font-roboto font-normal text-white">
                    Apple Store
                  </p>
                </div>
              </div>

              <div className="rounded-[10px] bg-[#4CAC40] flex flex-row items-center py-3 w-[212px]">
                <div className="ps-[30px] pe-4 py-2 border-e border-white">
                  <FaGooglePlay className="text-white text-[24px]" />
                </div>
                <div className="flex-col flex gap-1.5 ps-5">
                  <p className="text-xs font-roboto font-normal text-white">
                    Get it on
                  </p>
                  <p className="text-base font-roboto font-normal text-white">
                    Google Play
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      <p className="text-sm text-white font-normal font-roboto text-center py-7 " >
          ©2025 Appstick, All right reserved
        </p>
    </div>
  );
};

export default Footer;
