"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative w-[326px] h-[161px]">
   {cards.map((card, index) => {
  // Calculate dynamic opacity based on index
  const opacity =
    index === 0 ? 1 : index === 1 ? 0.7 : 0.5; // front=1, middle=0.7, back=0.5

  return (
    <motion.div
      key={card.id}
      className="absolute w-[326px] h-[129px] p-2"
      style={{
        transformOrigin: "top center",
      }}
      animate={{
        top: index * -CARD_OFFSET,
        scale: 1 - index * SCALE_FACTOR,
        zIndex: cards.length - index,
        opacity: opacity, // 👈 dynamic opacity
      }}
      // transition={{ type: "spring", stiffness: 200, damping: 20 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      
    >
      <div className="flex justify-between items-center bg-white p-2 rounded-[10px] border border-[#E8EAE8] shadow-md">
        <div className="ps-4">
          <h4 className="text-xl font-roboto text-black font-medium">
            {card.name}
          </h4>
          <p className="text-base mt-4 font-roboto font-normal">
            {card.designation}
          </p>
        </div>
        <Image
          src="/img1.png"
          width={500}
          height={500}
          className="h-[113px] w-[113px] object-fill rounded-[10px]"
          alt="img"
        />
      </div>
    </motion.div>
  );
})}

    </div>
  );
};
