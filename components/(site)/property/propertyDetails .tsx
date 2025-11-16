"use client";
import Button from "@/components/common/button";
import { Bath, Bed, SquaresIntersect } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaWalking } from "react-icons/fa";
import { FaPhone, FaPlay } from "react-icons/fa6";
import { GoShare } from "react-icons/go";
import { MdOutlineDirectionsCar } from "react-icons/md";
import { IoMdBicycle, IoLogoWhatsapp } from "react-icons/io";
import { BsSend } from "react-icons/bs";
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";

const PropertyDetails = () => {
  let [isPlaying, setIsPlaying] = useState<Boolean | null>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  let handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    console.log(form.name, form.email.value, form.title, form.message.value);
  };

  return (
    <div className="lg:mt-[120px] mt-[60px] 2xl:px-0 px-3">
      <div className="container ">
        {/* Image Part */}
        <div className=" grid xl:grid-cols-5 lg:grid-cols-4  md:grid-cols-2  grid-cols-1 gap-6 h-full">
          <div className="xl:col-span-3 lg:col-span-2 col-span-1 lg:h-[482px] h-[382px]">
            <Image
              src="/img2.png"
              width={500}
              height={500}
              className="w-full h-full object-center rounded-xl"
              alt="property"
            />
          </div>
          <div className="lg:col-span-2  col-span-1 flex flex-col lg:h-[482px] md:h-[382px] h-full gap-6">
            <Image
              src="/property-1.png"
              width={527}
              height={229}
              alt="img"
              className="w-full lg:h-[229px] h-[179px] object-center rounded-xl"
            />
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
              <div
                className="relative  z-50 lg:h-[229px] h-[179px] w-full cursor-pointer rounded-xl bg-black lg:mx-auto xl:mx-0  "
                onClick={handlePlay}
              >
                <div>
                  <video
                    ref={videoRef}
                    id="choose-video"
                    className="lg:h-[229px] h-[179px] w-full rounded-xl object-fill "
                    muted
                    playsInline
                  >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {!isPlaying && (
                    <>
                      <div className="absolute top-0  h-full w-full ">
                        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center video-blur lg:h-[84px] w-[50px] h-[50px] lg:w-[84px] rounded-xl">
                          <button
                            className="group relative lg:h-[60px] lg:w-[60px] w-[30px] h-[30px] rounded-full bg-white transition-all duration-300 hover:scale-110 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                            aria-label="Play video"
                          >
                            <div className="animate-ripple absolute inset-0 rounded-full">
                              <div className="animate-ripple-1 absolute inset-0 rounded-full border-white border-2 bg-white"></div>
                              <div className="animate-ripple-2 absolute inset-0 rounded-full border-white border-2 bg-white"></div>
                            </div>

                            <div className="relative z-10 flex h-full w-full items-center justify-center">
                              <FaPlay className="ml-1 text-[20px] text-[#00D0DE] transition-transform duration-300 group-hover:scale-110" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <Image
                src="/img2.png"
                width={252}
                height={229}
                alt="img"
                className="w-full lg:h-[229px] h-[179px] object-center rounded-xl"
              />
            </div>
          </div>
        </div>
        {/* Details part */}
        <div className="mt-6 h-full">
          <h2 className="text-primary font-roboto font-bold text-5xl">
            Seaside Serenity Hill House
          </h2>
          <p className="text-secondary text-base font-roboto xl:w-[959px] md:w[600px] w-[80%] mt-6">
            Seaside Serenity Hill House offers breathtaking ocean views and
            tranquil surroundings. Perched on a scenic hilltop, this elegant
            home blends nature with modern comfort. Spacious interiors, sunlit
            rooms, and coastal charm create a perfect retreat. Enjoy peaceful
            living just minutes from the beach and local attractions.
          </p>
          <div className="grid xl:grid-cols-3 grid-cols-1 mt-10">
            <div className="lg:col-span-2 col-span-1 me-24">
              <div className="flex gap-6 items-center">
                <div className="h-[97px] w-[118px] bg-[#E8EAE8] rounded-xl flex flex-col justify-center items-center gap-2.5 text-primary text-base font-roboto">
                  <Bed className="text-[#05073C] text-[16px]" />
                  <p>7 Beds</p>
                </div>

                <div className="h-[97px] w-[118px] bg-[#E8EAE8] rounded-xl flex flex-col justify-center items-center gap-2.5 text-primary text-base font-roboto">
                  <Bath className="text-[#05073C] text-[16px]" />
                  <p>4 Baths</p>
                </div>

                <div className="h-[97px] w-[118px] bg-[#E8EAE8] rounded-xl flex flex-col justify-center items-center gap-2.5 text-primary text-base font-roboto">
                  <SquaresIntersect className="text-[#05073C] text-[16px]" />
                  <p>1200 sqft</p>
                </div>
              </div>

              <ul className="sm:w-[481px] h-fit w-[80%] flex flex-col gap-[37px]  list-none mt-[30.5px]">
                <li className="flex sm:w-[350px] w-[80%] justify-between items-center text-black text-base font-roboto">
                  <span>Deposite</span>
                  <span>$2500</span>
                </li>
                <li className="flex justify-between sm:w-[350px] w-[80%] items-center text-black text-base font-roboto">
                  <span>Monthly Rent</span>
                  <span>$2500</span>
                </li>
                <li className="flex gap-6 items-center">
                  <Button
                    widthClass="sm:w-[350px] w-[80%]"
                    title="Book Appointment"
                  />
                  <div className="w-11 h-11 rounded-[10px] grid place-content-center border border-[#00ACC1]">
                    <GoShare />
                  </div>
                  <div className="w-11 h-11 rounded-[10px] grid place-content-center border border-[#00ACC1]">
                    <CiBookmark />
                  </div>
                </li>
              </ul>
              <div>
                <div>
                  <h3 className="text-2xl font-semibold my-6 font-roboto text-primary">
                    Facilities
                  </h3>
                  <p className="text-base font-roboto font-normal text-secondary">
                    Kitchen, living room, study, 4 bedrooms, 2 bathrooms,
                    wardrobe, fireplace. Two garage parking spaces in the
                    underground garage. The apartment is divided into day and
                    night zone. The living area consists of a large living room,
                    which is connected to the kitchen and dining room. In this
                    part of the apartment there is also a study, which is very
                    subtly separated from the living area by an elegant glass
                    wall and wooden beams. From the living area there is a
                    smooth transition to the night wing, where there are two
                    rooms, a wardrobe, a shared bathroom and a master bedroom
                    with a separate bathroom.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl my-6 font-semibold font-roboto text-primary">
                    Amenities
                  </h3>
                  <p className="text-base font-roboto font-normal text-secondary">
                    Kitchen, living room, study, 4 bedrooms, 2 bathrooms,
                    wardrobe, fireplace. Two garage parking spaces in the
                    underground garage. The apartment is divided into day and
                    night zone. The living area consists of a large living room,
                    which is connected to the kitchen and dining room. In this
                    part of the apartment there is also a study, which is very
                    subtly separated from the living area by an elegant glass
                    wall and wooden beams. From the living area there is a
                    smooth transition to the night wing, where there are two
                    rooms, a wardrobe, a shared bathroom and a master bedroom
                    with a separate bathroom.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl my-6 font-semibold font-roboto text-primary">
                    Description
                  </h3>
                  <p className="text-base font-roboto font-normal text-secondary">
                    Kitchen, living room, study, 4 bedrooms, 2 bathrooms,
                    wardrobe, fireplace. Two garage parking spaces in the
                    underground garage. The apartment is divided into day and
                    night zone. The living area consists of a large living room,
                    which is connected to the kitchen and dining room. In this
                    part of the apartment there is also a study, which is very
                    subtly separated from the living area by an elegant glass
                    wall and wooden beams. From the living area there is a
                    smooth transition to the night wing, where there are two
                    rooms, a wardrobe, a shared bathroom and a master bedroom
                    with a separate bathroom.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl my-6 font-semibold font-roboto text-primary">
                    Layout Solutions
                  </h3>
                  <p className="text-base font-roboto font-normal text-secondary">
                    Kitchen, living room, study, 4 bedrooms, 2 bathrooms,
                    wardrobe, fireplace. Two garage parking spaces in the
                    underground garage. The apartment is divided into day and
                    night zone. The living area consists of a large living room,
                    which is connected to the kitchen and dining room. In this
                    part of the apartment there is also a study, which is very
                    subtly separated from the living area by an elegant glass
                    wall and wooden beams. From the living area there is a
                    smooth transition to the night wing, where there are two
                    rooms, a wardrobe, a shared bathroom and a master bedroom
                    with a separate bathroom.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl my-6 font-semibold font-roboto text-primary">
                    Execution and furnishing of the apartment
                  </h3>
                  <p className="text-base font-roboto font-normal text-secondary">
                    Kitchen, living room, study, 4 bedrooms, 2 bathrooms,
                    wardrobe, fireplace. Two garage parking spaces in the
                    underground garage. The apartment is divided into day and
                    night zone. The living area consists of a large living room,
                    which is connected to the kitchen and dining room. In this
                    part of the apartment there is also a study, which is very
                    subtly separated from the living area by an elegant glass
                    wall and wooden beams. From the living area there is a
                    smooth transition to the night wing, where there are two
                    rooms, a wardrobe, a shared bathroom and a master bedroom
                    with a separate bathroom.
                  </p>
                </div>
                <h3 className="text-2xl my-6 font-semibold font-roboto text-primary">
                  Transportations
                </h3>
                <ul className="flex justify-between items-center">
                  <li className="flex text-[#717171] gap-1 items-center">
                    <FaWalking className="text-[16px] text-[#717171]" />
                    <span>73/100 Walkable</span>
                  </li>
                  <li className="flex text-[#717171] gap-1 items-center">
                    <MdOutlineDirectionsCar className="text-[16px] text-[#717171]" />
                    <span>97% Drivable</span>
                  </li>
                  <li className="flex text-[#717171] gap-1 items-center">
                    <IoMdBicycle className="text-[16px] text-[#717171]" />
                    <span>59/100 Bikable</span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="p-10 border flex flex-col items-center bg-[#FAFAFB] h-fit border-[#E8EAE8] rounded-xl "
              style={{ boxShadow: "0 72px 132px 0 rgba(15, 28, 51, 0.06)" }}
            >
              <div className="w-[257px]  bg-white font-normal border border-[#E8EAE8] text-black font-roboto text-base h-[239px] rounded-xl flex flex-col items-center justify-center gap-6">
                <Image
                  src="/man.png"
                  alt="img"
                  width={75}
                  height={75}
                  className="h-[75px] w-[75px] object-center rounded-full"
                />
                <p className="flex  gap-1 items-center">
                  Send Message By WhatsApp
                </p>
                <p className="flex gap-1.5 items-center px-6 py-4 border border-[#00ACC1] rounded-xl">
                  <IoLogoWhatsapp className="text-[24px] text-green-500 " />
                  <span>+8801971202020</span>
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 w-full bg-white mt-10  p-6 border border-[#E8EAE8] rounded-xl"
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
      {/* Name */}
      <div className="relative rounded-lg w-full border border-[#E8EAE8] bg-white shadow-[0_80px_200px_-12px_rgba(15,28,51,0.12)]">
                  <FaPhone
                    size={16}
                    className="text-[#A2A8AF] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  />
                  <input
                    name="phone"
                    type="number"
                    placeholder="Phone Number"
                    className="ps-10 p-4 rounded-lg w-full bg-white text-base font-normal text-[#A2A8AF] focus:outline-none focus:ring-2 focus:ring-[#05073C]/40 transition-all"
                  />
                </div>
                {/* Title */}
                <div className="relative border border-[#E8EAE8] rounded-lg bg-white shadow-[0_80px_200px_-12px_rgba(15,28,51,0.12)]">
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
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
                <Button
                  title="Send"
                  isIcon={true}
                  Icon={BsSend}
                  widthClass="w-full"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
