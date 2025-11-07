"use client";
import Image from "next/image";
import Rating from "react-rating";
import { IoStar } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";

const TestimonialCard = () => {
  return (
    <div className="relative h-[292px]">
      <div
        className="sm:w-[460px] rounded-sm sm:h-[244px] bg-white sm:pt-[31px] sm:pb-[27px] sm:ps-[38px] sm:pe-[26px]"
        style={{ boxShadow: " 0 4px 25px 0 rgba(0, 0, 0, 0.25)" }}
      >
        <Image
          src="/man.png"
          alt="man"
          width={500}
          height={500}
          className="w-[180px] sm:h-[292px] sm:block hidden h-full absolute -top-6 object-center rounded-sm"
        />

        <div className="flex sm:flex-row flex-col">
          <div className="sm:w-1/2 sm:block hidden"></div>
          <div className="sm:w-1/2 w-full sm:p-0 p-6">
          <Image
          src="/man.png"
          alt="man"
          width={500}
          height={500}
          className="w-[50px] h-[50px] mb-3 sm:hidden block object-center rounded-full"
        />
            <Rating
              initialRating={4.5}
              fullSymbol={<IoStar className="text-primary" />}
              readonly={true}
              emptySymbol={<IoMdStarOutline className="text-primary" />}
            />

            <p className="line-clamp-5 mt-2 font-roboto text-secondary text-sm mb-4">
              Great platform with a wide range of verified properties and
              responsive support.Made my home search smooth and stress-free.
            </p>
            <h4 className="text-primary text-lg font-roboto font-semibold">
              Jaime Konopelski
            </h4>
            <p className="line-clamp-5 font-roboto text-secondary text-sm mt-1">
              Central Web Planner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
