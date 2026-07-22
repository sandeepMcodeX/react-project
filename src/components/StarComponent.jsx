import { ArrowUpRight, Star } from "lucide-react";
import React from "react";

const StarComponent = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl flex gap-4">
          <Star fill="#FDD835" className="w-7 h-7" />
          <span>English Speaking programmers </span>
        </h3>
        <ArrowUpRight />
      </div>
      <hr className="w-full h-[0.01em] mt-8" />
    </div>
  );
};

export default StarComponent;
