import React from "react";
import CardElements from "@/components/Card";
import Header from "@/components/Header";


export const Card = ({}) => {
  return (
    <div className="flex flex-col width-[915px] gap-6 p-12 ">
      <Header />
      <CardElements />

    </div>
  );
};

export default Card;
