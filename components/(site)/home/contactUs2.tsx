// "use client";
// import Button from "@/components/common/button";
// import React from "react";
// import { BsSend } from "react-icons/bs";
// import { FaPhoneAlt, FaRegUser, FaUser } from "react-icons/fa";
// import { MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";

// const ContactUs2 = () => {
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = e.target as HTMLFormElement;
//     console.log(form.name, form.email.value, form.title, form.message.value);
//   };
//   return (
//     <div className="lg:mt-[120px] mt-[60px] ">
//       <div
//         className="container bg-white h-[700px] rounded-xl border border-[#E8EAE8] flex  justify-between items-center"
//         style={{ boxShadow: "0 24px 40px -10px rgba(15, 28, 51, 0.16)" }}
//       >
//         <form
//           className="flex flex-col gap-6 2xl:ms-[120px] ms-0 w-[350px]"
//           onSubmit={handleSubmit}
//         >
//           <div className="relative rounded-lg  w-fit border border-[#E8EAE8]">
//             <FaRegUser
//               size={16}
//               className={`text-[#A2A8AF] absolute left-3 top-1/2 -translate-y-1/2 text-[16px] pointer-events-none`}
//             />

//             <input
//               name="name"
//               type="text"
//               placeholder="Your Name"
//               style={{
//                 boxShadow: "0 80px 200px -12px rgba(15, 28, 51, 0.12)",
//               }}
//               className={`
//             ps-10 w-[350px]
//             p-4 rounded-lg bg-white  text-base font-normal  
//             focus:outline-none appearance-none 
//             text-[#A2A8AF]  
//             focus:ring-2 focus:ring-[#05073C]/40 
//             transition-all cursor-pointer
//           `}
//               defaultValue=""
//             />
//           </div>

//           <div className="relative border border-[#E8EAE8] rounded-lg bg-white w-fit">
//             <MdOutlineEmail
//               size={16}
//               className={`text-[#A2A8AF] absolute left-3 top-1/2 -translate-y-1/2 text-[16px] pointer-events-none`}
//             />
//             <input
//               name="email"
//               type="email"
//               placeholder="Type your email address"
//               style={{
//                 boxShadow: "0 80px 200px -12px rgba(15, 28, 51, 0.12)",
//               }}
//               className={`
//             ps-10 w-[350px]
//             p-4 rounded-lg  text-base font-normal  
//             focus:outline-none appearance-none bg-white
//             text-[#A2A8AF]  
//             focus:ring-2 focus:ring-[#05073C]/40 
//             transition-all cursor-pointer
//           `}
//               defaultValue=""
//             />
//           </div>

//           <div className="relative border border-[#E8EAE8] rounded-lg bg-white w-fit">
//             <input
//               name="title"
//               type="text"
//               placeholder="Title"
//               style={{
//                 boxShadow: "0 80px 200px -12px rgba(15, 28, 51, 0.12)",
//               }}
//               className={`
//             p-4 rounded-lg  text-base font-normal  
//             focus:outline-none appearance-none bg-white
//             text-[#A2A8AF] w-[350px]   
//             focus:ring-2 focus:ring-[#05073C]/40 
//             transition-all cursor-pointer
//           `}
//               defaultValue=""
//             />
//           </div>
//           <textarea
//             style={{
//               boxShadow: "0 80px 200px -12px rgba(15, 28, 51, 0.12)",
//               backgroundColor: "white",
//             }}
//             name="message"
//             id="message"
//             className="h-[88px] text-[#A2A8AF] bg-white w-[350px] resize-none  border rounded-lg border-[#E8EAE8] p-4  "
//             placeholder="Message"
//           />
//           <Button
//             title="Send"
//             isIcon={true}
//             Icon={BsSend}
//             widthClass="w-full"
//           />
//         </form>
//         <div className="w-1/2 relative h-full">
          // <button className="ps-6 pt-[22px] absolute z-40 left-0 top-[118px] pb-[21px] bg-[#FAFAFB] flex flex-col gap-1 rounded-[10px] items-start border border-[#E8EAE8] w-[221px]">
          //   <MdEmail className="text-[#0B0A0A] text-[24px]" />
          //   <p className="text-base font-roboto font-semibold">Message Us</p>
          //   <p className="text-base font-roboto font-normal">
          //     example@email.com
          //   </p>
          // </button>

          // <button className="ps-6 pt-[22px] absolute z-40 left-6 top-[286px] pb-[21px] bg-[#FAFAFB] flex flex-col gap-1 rounded-[10px] items-start border border-[#E8EAE8] w-[221px]">
          //   <FaPhoneAlt className="text-[#0B0A0A] text-[24px]" />
          //   <p className="text-base font-roboto font-semibold">Contact Us</p>
          //   <p className="text-base font-roboto font-normal">(704) 555-0127</p>
          // </button>
          // <button className="ps-6 pt-[22px] absolute z-40 left-12 top-[454px] pb-[21px] bg-[#FAFAFB] flex flex-col gap-1 rounded-[10px] items-start border border-[#E8EAE8] w-[221px]">
          //   <MdLocationOn className="text-[#0B0A0A] text-[24px]" />
          //   <p className="text-base font-roboto font-semibold">Address</p>
          //   <p className="text-base font-roboto font-normal">
          //     43 wallaby way, sydney
          //   </p>
          // </button>

//           <div className="w-[434px] h-[600px] absolute 2xl:right-[120px] right-0 z-30 top-1/2 -translate-y-1/2">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49471.03598205848!2d89.52891534741151!3d22.84108963684329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9b952e7b24af%3A0xae7655bcfe3f6c35!2sAppstick!5e0!3m2!1sen!2sbd!4v1738438245621!5m2!1sen!2sbd"
//               width="100%"
//               height="100%"
//               style={{ border: "0", borderRadius: "20px" }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
            
//           </div>
//           <div className="h-[700px] z-20 w-[450px] bg-[#183A4A] rounded-e-xl absolute right-0"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs2;


"use client";
import Button from "@/components/common/button";
import React from "react";
import { BsSend } from "react-icons/bs";
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";

const ContactUs2 = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    console.log(form.name, form.email.value, form.title, form.message.value);
  };

  return (
    <div className="lg:mt-[120px] mt-[60px]">
      <div
        className="container contact bg-white rounded-xl lg:border border-[#E8EAE8] flex flex-col lg:flex-row justify-between items-center lg:h-[700px] h-auto overflow-hidden"
        // style={{ }}
      >
        {/* ---------- Left Form Section ---------- */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full lg:w-[380px] md:px-6 lg:px-12 py-10 lg:py-0 2xl:ms-[100px] xl:ms-[50px] "
        >
          {/* Name */}
          <div className="relative rounded-lg w-full border border-[#E8EAE8] bg-white shadow-[0_80px_200px_-12px_rgba(15,28,51,0.12)]">
            <FaRegUser
              size={16}
              className="text-[#A2A8AF] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            />
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="ps-10 p-4 rounded-lg w-full bg-white text-base font-normal text-[#A2A8AF] focus:outline-none focus:ring-2 focus:ring-[#05073C]/40 transition-all"
            />
          </div>

          {/* Email */}
          <div className="relative border border-[#E8EAE8] rounded-lg bg-white shadow-[0_80px_200px_-12px_rgba(15,28,51,0.12)]">
            <MdOutlineEmail
              size={16}
              className="text-[#A2A8AF] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Type your email address"
              className="ps-10 p-4 rounded-lg w-full bg-white text-base font-normal text-[#A2A8AF] focus:outline-none focus:ring-2 focus:ring-[#05073C]/40 transition-all"
            />
          </div>

          {/* Title */}
          <div className="relative border border-[#E8EAE8] rounded-lg bg-white shadow-[0_80px_200px_-12px_rgba(15,28,51,0.12)]">
            <input
              name="title"
              type="text"
              placeholder="Title"
              className="p-4 rounded-lg w-full bg-white text-base font-normal text-[#A2A8AF] focus:outline-none focus:ring-2 focus:ring-[#05073C]/40 transition-all"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className="h-[88px] resize-none border border-[#E8EAE8] rounded-lg p-4 bg-white text-[#A2A8AF] shadow-[0_80px_200px_-12px_rgba(15,28,51,0.12)]"
          />

          {/* Submit Button */}
          <Button title="Send" isIcon={true} Icon={BsSend} widthClass="w-full" />
        </form>

        {/* ---------- Right Map Section ---------- */}
        <div className="relative md:w-[700px] w-full sm:w-[580px] lg:w-1/2 lg:h-full h-[700px] flex justify-center lg:justify-end items-center">
          {/* Info Buttons */}
          {/* <div className="absolute z-40 flex flex-col gap-6 top-10 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-8">
            <div className="ps-6 pt-[22px] pb-[21px] bg-[#FAFAFB] flex flex-col gap-1 rounded-[10px] border border-[#E8EAE8] w-[220px] shadow-sm">
              <MdEmail className="text-[#0B0A0A] text-[24px]" />
              <p className="text-base font-roboto font-semibold">Message Us</p>
              <p className="text-base font-roboto font-normal">example@email.com</p>
            </div>

            <div className="ps-6 pt-[22px] pb-[21px] bg-[#FAFAFB] flex flex-col gap-1 rounded-[10px] border border-[#E8EAE8] w-[220px] shadow-sm">
              <FaPhoneAlt className="text-[#0B0A0A] text-[24px]" />
              <p className="text-base font-roboto font-semibold">Contact Us</p>
              <p className="text-base font-roboto font-normal">(704) 555-0127</p>
            </div>

            <div className="ps-6 pt-[22px] pb-[21px] bg-[#FAFAFB] flex flex-col gap-1 rounded-[10px] border border-[#E8EAE8] w-[220px] shadow-sm">
              <MdLocationOn className="text-[#0B0A0A] text-[24px]" />
              <p className="text-base font-roboto font-semibold">Address</p>
              <p className="text-base font-roboto font-normal">43 Wallaby Way, Sydney</p>
            </div>
          </div> */}
          <button className="ps-6 pt-[22px] absolute z-40 xl:left-[-100px]  lg:-left-12 md:left-12 left-0 top-[118px] pb-[21px] bg-[#FAFAFB] flex flex-col gap-1 rounded-[10px] items-start border border-[#E8EAE8] w-[221px]">
            <MdEmail className="text-[#0B0A0A] text-[24px]" />
            <p className="text-base font-roboto font-semibold">Message Us</p>
            <p className="text-base font-roboto font-normal">
              example@email.com
            </p>
          </button>

          <button className="ps-6 pt-[22px] absolute z-40 xl:left-[-80px] lg:-left-8 md:left-[72px] left-0 top-[286px] pb-[21px] bg-[#FAFAFB] flex flex-col gap-1 rounded-[10px] items-start border border-[#E8EAE8] w-[221px]">
            <FaPhoneAlt className="text-[#0B0A0A] text-[24px]" />
            <p className="text-base font-roboto font-semibold">Contact Us</p>
            <p className="text-base font-roboto font-normal">(704) 555-0127</p>
          </button>
          <button className="ps-6 pt-[22px] absolute z-40 xl:left-[-50px] lg:-left-5 md:left-[100px] left-0 top-[454px] pb-[21px] bg-[#FAFAFB] flex flex-col gap-1 rounded-[10px] items-start border border-[#E8EAE8] w-[221px]">
            <MdLocationOn className="text-[#0B0A0A] text-[24px]" />
            <p className="text-base font-roboto font-semibold">Address</p>
            <p className="text-base font-roboto font-normal">
              43 wallaby way, sydney
            </p>
          </button>
          {/* Google Map */}
          <div className="w-full md:w-[434px] sm:w-[434px] md:right-[50px] sm:right-[50px] right-0 sm:p-0 p-4  h-[600px] z-30 absolute 2xl:right-[120px] xl:right-[120px] lg:right-[50px] top-1/2 -translate-y-1/2">
            <iframe
              src="https://www.google.com/maps?q=22.841089,89.528915&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Blue Background Layer */}
          <div className="absolute  right-0 top-0 h-full  sm:w-[450px] w-full bg-[#183A4A]  lg:rounded-e-xl  z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs2;
