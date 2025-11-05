import React from "react";
import { CardStack } from "@/components/ui/card-stack";

const CardAnimation = () => {
  return (
    <div className="lg:mt-[50px] mt-5 ">
      <CardStack items={CARDS} />
    </div>
  );
};

export default CardAnimation;

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, <p>I want to use them</p> in my project. Framer
        motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing, <p>deleting it right away</p> because
        yolo. Instead, I would like to call it <p>X.com</p> so that it can
        easily be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <p>Fight Club</p> is that you do not talk about fight club. The second
        rule of
        <p>Fight club</p> is that you DO NOT TALK about fight club.
      </p>
    ),
  },
];
