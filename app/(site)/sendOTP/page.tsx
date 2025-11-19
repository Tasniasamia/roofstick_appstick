"use client";
import Banner from "@/components/common/banner";
import Button from "@/components/common/button";
import HeaderTitle from "@/components/common/headerTitle";
import React from "react";

const page = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    console.log(form.name, form.email.value, form.title, form.message.value);
  };
  return (
    <div>
      <Banner routeName="Send OTP" />
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full lg:w-[400px] mx-auto lg:mt-[120px] mt-[60px] "
        >
          <HeaderTitle
            title="Forget Password"
            description="Please confirm your email address below and we will
                    send you a verification code."
            customClass3="w-full"
            customClass="items-center text-center"
          />

          {/* Email */}
          <div className="relative border border-[#E8EAE8] rounded-lg bg-white shadow-[0_80px_200px_-12px_rgba(15,28,51,0.12)]">
            <input
              name="email"
              type="email"
              placeholder="Type your email address"
              className=" p-4 rounded-lg w-full bg-white text-base font-normal text-[#A2A8AF] focus:outline-none focus:ring-2 focus:ring-[#05073C]/40 transition-all"
            />
          </div>

          {/* Submit Button */}
          <Button title="Send" isIcon={false} widthClass="w-full" />
        </form>
      </div>
    </div>
  );
};

export default page;
