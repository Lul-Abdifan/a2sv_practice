import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex width-[915px] justify-around">
      <div className="flex flex-col gap-1">
        <h1 className="text-[32px] font-black text-[#25324B]">Opportunities</h1>
        <h4 className="text-[#7C8493] inline-block">Showing 73 results</h4>
      </div>
      <div className="flex gap-[22px] items-center">
        <h4 className="text-[#7C8493] inline-block">Sort by:</h4>
        <div className="flex gap-2">
          <h4
            className="font-medium text-[#25324B]
"
          >
            Most relevant
          </h4>

          <Image src="/Arrow.svg" alt="arrow-image" width={16} height={16} />
        </div>
      </div>
    </div>
  );
};

export default Header;
