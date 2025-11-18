"use client";
import Image from "next/image";
import React from "react";

const ServiceDetails = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    console.log(form.name, form.email.value, form.title, form.message.value);
  };
  return (
    <div className="lg:mt-[120px] mt-[60px] lg:px-0 px-3">
      <div className="container grid lg:grid-cols-3 gap-6">
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col p-10 gap-6 w-full  bg-[#EBFFFD] border-[#E8EAE8] rounded-[20px]"
          >
            <h2 className="text-[#05073C] font-semibold font-roboto text-[32px] leading-normal">
              Have Query
            </h2>
            {/* Name */}
            <div>
              <label className="font-roboto text-base text-primary font-medium ">
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="p-4 rounded-lg border border-[#E8EAE8] mt-2 w-full bg-transparent text-base font-normal text-[#A2A8AF] focus:outline-none focus:ring-2 focus:ring-[#05073C]/40 transition-all"
              />
            </div>
            {/* subject */}
            <div>
              <label className="font-roboto text-base text-primary font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="p-4 rounded-lg border mt-2 border-[#E8EAE8] w-full bg-transparent text-base font-normal text-[#A2A8AF] focus:outline-none focus:ring-2 focus:ring-[#05073C]/40 transition-all"
              />
            </div>
            {/* Email */}
            <div>
              <label className="font-roboto text-base text-primary font-medium ">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Type your email address"
                className="p-4 rounded-lg border mt-2 border-[#E8EAE8] w-full bg-transparent text-base font-normal text-[#A2A8AF] focus:outline-none focus:ring-2 focus:ring-[#05073C]/40 transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label className="font-roboto text-base text-primary font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="h-[88px] mt-2 block w-full resize-none border border-[#E8EAE8] rounded-lg p-4 bg-transparent text-[#A2A8AF] shadow-[0_80px_200px_-12px_rgba(15,28,51,0.12)]"
              />
            </div>

            {/* Submit Button */}
            <button className="mt-8 border  bg-[#4CAC40] border-[#4CAC40]  w-full h-14 cursor-pointer flex gap-2 items-center justify-center rounded-[10px]">
              <span className="text-white text-base font-medium font-roboto">
                Purchase Now
              </span>
            </button>
          </form>
          <div className="flex w-full mt-10 flex-col p-10 gap-6  bg-[#EBFFFD] border-[#E8EAE8] rounded-[20px]">
            <h2 className="text-[#333] font-semibold font-roboto text-[32px] leading-normal w-full ">
              More Service
            </h2>
            <ul className="list-none h-[291px] overflow-y-auto w-full">
              <li className="flex gap-3 items-center py-6 border-b border-b-[#E8EAE8]">
                <Image
                  src="/apar1.png"
                  width={57}
                  height={57}
                  className="object-center rounded-[10px] w-[57px] h-[57px]"
                  alt="service"
                />
                <div>
                  <h4 className="text-2xl font-roboto text-primary font-semibold line-clamp-1">
                    Interior Design
                  </h4>
                  <p className="text-base text-secondary font-roboto line-clamp-1">
                    Semper ultrices maecenas dul iaefw
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-center py-6 border-b border-b-[#E8EAE8]">
                <Image
                  src="/apar1.png"
                  width={57}
                  height={57}
                  className="object-center rounded-[10px] w-[57px] h-[57px]"
                  alt="service"
                />
                <div>
                  <h4 className="text-2xl font-roboto text-primary font-semibold line-clamp-1">
                    Interior Design
                  </h4>
                  <p className="text-base text-secondary font-roboto line-clamp-1">
                    Semper ultrices maecenas dul iaefw
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-center py-6 border-b border-b-[#E8EAE8]">
                <Image
                  src="/apar1.png"
                  width={57}
                  height={57}
                  className="object-center rounded-[10px] w-[57px] h-[57px]"
                  alt="service"
                />
                <div>
                  <h4 className="text-2xl font-roboto text-primary font-semibold line-clamp-1">
                    Interior Design
                  </h4>
                  <p className="text-base text-secondary font-roboto line-clamp-1">
                    Semper ultrices maecenas dul iaefw
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-center py-6 border-b border-b-[#E8EAE8]">
                <Image
                  src="/apar1.png"
                  width={57}
                  height={57}
                  className="object-center rounded-[10px] w-[57px] h-[57px]"
                  alt="service"
                />
                <div>
                  <h4 className="text-2xl font-roboto text-primary font-semibold line-clamp-1">
                    Interior Design
                  </h4>
                  <p className="text-base text-secondary font-roboto line-clamp-1">
                    Semper ultrices maecenas dul iaefw
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-center py-6 border-b border-b-[#E8EAE8]">
                <Image
                  src="/apar1.png"
                  width={57}
                  height={57}
                  className="object-center rounded-[10px] w-[57px] h-[57px]"
                  alt="service"
                />
                <div>
                  <h4 className="text-2xl font-roboto text-primary font-semibold line-clamp-1">
                    Interior Design
                  </h4>
                  <p className="text-base text-secondary font-roboto line-clamp-1">
                    Semper ultrices maecenas dul iaefw
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-center py-6 border-b border-b-[#E8EAE8]">
                <Image
                  src="/apar1.png"
                  width={57}
                  height={57}
                  className="object-center rounded-[10px] w-[57px] h-[57px]"
                  alt="service"
                />
                <div>
                  <h4 className="text-2xl font-roboto text-primary font-semibold line-clamp-1">
                    Interior Design
                  </h4>
                  <p className="text-base text-secondary font-roboto line-clamp-1">
                    Semper ultrices maecenas dul iaefw
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
         <div className="lg:col-span-2">
          <Image
            src="/service1.png"
            width={872}
            height={490}
            className="object-center w-full sm:h-[490px] h-[300px] rounded-[20px]"
            alt="service"
          />
          <h2
            className={`text-primary static z-40 mt-10 mb-6  font-raleway-bold  font-bold leading-none text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl `}
          >
            Architecture
          </h2>
          <p className="text-base text-secondary font-roboto line-clamp-1">
            Semper ultrices maecenas dul iaculis in. Proin ipsum enim amet enim
            maecenas lectus. Semper fermentum nisi lorem. Semper ultrices
            maecenas dul iaculis in. Proin ipsum enim amet enim maecenas lectus.
            Semper fermentum nisi lorem. Semper ultrices maecenas dul iaculis
            in. Proin ipsum enim amet enim maecenas lectus. Semper fermentum
            nisi lorem.Semper ultrices maecenas dul iaculis in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
