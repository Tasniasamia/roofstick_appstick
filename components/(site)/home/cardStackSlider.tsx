"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "@/components/common/card/testimonialCard";
import HeaderTitle from "@/components/common/headerTitle";

interface Card {
  id: number;
  title: string;
  description: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: "Card 1",
    description: "First card item",
  },
  {
    id: 2,
    title: "Card 2",
    description: "Second card item",
  },
  {
    id: 3,
    title: "Card 3",
    description: "Third card item",
  },
  {
    id: 4,
    title: "Card 4",
    description: "Fourth card item",
  },
  {
    id: 5,
    title: "Card 5",
    description: "Fifth card item",
  },
];

export default function CardStackSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const getCardPosition = (index: number) => {
    const distance = (index - activeIndex + cards.length) % cards.length;

    if (distance === 0) return "center";
    if (distance === 1) return "right";
    if (distance === cards.length - 1) return "left";
    return "hidden";
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className=" lg:pt-[120px] w-full bg-red-300 pt-[60px]">
   
      <div className="container ">
      <div className="md:mb-16 sm:mb-8 ">
      <HeaderTitle
        title={"What our Client Says About us"}
        description={
          "The platform provided a seamless home-buying experience with exceptional professionalism.Their verified listings and expert guidance made the entire process efficient and stress-free."
        }
        customClass="items-center text-center  "
        customClass3="lg:w-[662px] md:w-[427px] w-[80%]"
        customClass2="md:w-[460px] w-full"
      />
      </div>
        <div className="relative w-full   md:h-[643px] sm:h-[490px] h-[290px] flex sm:items-center sm:justify-center perspective">
          <div className="relative w-full h-full ">
            {cards.map((card, index) => {
              const position = getCardPosition(index);

              let positionClasses = "";
              let scaleClass = "";
              let opacityClass = "";
              let zIndexClass = "";

              if (position === "center") {
                positionClasses = "sm:left-1/2 top-0 sm:-translate-x-1/2 ";
                scaleClass = "md:scale-100 scale-75";
                opacityClass = "opacity-100 ";
                zIndexClass = "z-30";
              } else if (position === "right") {
                positionClasses =
                  "lg:right-[20px] sm:block hidden  md:right-[-50px] sm:right-[-50px] 2xl:top-[292px] md:top-[50%] top-[50%] ";
                scaleClass = "lg:scale-100 md:scale-75 scale-60";
                opacityClass = "opacity-100";
                zIndexClass = "z-30";
              } else if (position === "left") {
                positionClasses =
                  "lg:left-[20px] sm:block hidden   md:left-[-50px] sm:left-[-80px] 2xl:top-[340px] md:top-[50%] top-[50%]";
                scaleClass = "lg:scale-100 md:scale-75 scale-60";
                opacityClass = "opacity-100";
                zIndexClass = "z-30";
              } else {
                return null;
              }

              return (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(index)}
                  className={`absolute  cursor-pointer transition-all duration-500 ${positionClasses} ${scaleClass} ${opacityClass} ${zIndexClass}`}
                >
                  <TestimonialCard />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center  gap-2 static z-50 w-full ">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "bg-[#4cac40] w-8"
                  : "bg-[#CDFFFE] w-2 hover:bg-[#4cac40]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
