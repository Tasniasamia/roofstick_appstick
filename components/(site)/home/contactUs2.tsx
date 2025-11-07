"use client";
import React from "react";
import { FaRegUser, FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const ContactUs2 = () => {
  return (
    <div className="lg:mt-[120px] mt-[60px]">
      <div className="container">
        <div className="px-[120px] py-[50px] bg-white">
          <div className="flex flex-col gap-2">
            <div
              className="relative "
              style={{ boxShadow: "0 80px 200px -12px rgba(15, 28, 51, 0.12)" }}
            >
              <FaRegUser
                size={16}
                className={`text-[#A2A8AF] absolute left-3 top-1/2 -translate-y-1/2 text-[16px] pointer-events-none`}
              />

              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className={`
            ps-10 w-[318px]
            p-4 rounded-lg border text-base font-normal border-[#E8EAE8] 
            focus:outline-none appearance-none bg-white
            text-[#A2A8AF]  
            focus:ring-2 focus:ring-[#05073C]/40 
            transition-all cursor-pointer
          `}
                defaultValue=""
              />
            </div>

            <div
              className="relative"
              style={{ boxShadow: "0 80px 200px -12px rgba(15, 28, 51, 0.12)" }}
            >
              <MdOutlineEmail
                size={16}
                className={`text-[#A2A8AF] absolute left-3 top-1/2 -translate-y-1/2 text-[16px] pointer-events-none`}
              />
              <input
                name="email"
                type="email"
                placeholder="Type your email address"
                className={`
            ps-10 w-[318px]
            p-4 rounded-lg border text-base font-normal border-[#E8EAE8] 
            focus:outline-none appearance-none bg-white
            text-[#A2A8AF]  
            focus:ring-2 focus:ring-[#05073C]/40 
            transition-all cursor-pointer
          `}
                defaultValue=""
              />
            </div>

            <div
              className="relative"
              style={{ boxShadow: "0 80px 200px -12px rgba(15, 28, 51, 0.12)" }}
            >
              <input
                name="title"
                type="text"
                placeholder="Title"
                className={`
            p-4 rounded-lg border text-base font-normal border-[#E8EAE8] 
            focus:outline-none appearance-none bg-white
            text-[#A2A8AF] w-[318px]   
            focus:ring-2 focus:ring-[#05073C]/40 
            transition-all cursor-pointer
          `}
                defaultValue=""
              />
            </div>

            <textarea style={{background:"white"}}
              name={"message"}
              id="message"
              className="h-[88px] bg-white w-[318px] resize-none  border rounded-lg border-[#E8EAE8] p-4  "
              placeholder="Message"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs2;
