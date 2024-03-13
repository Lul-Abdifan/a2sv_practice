import React from "react";
import Image from "next/image";
import logo from "./logo.svg";
import { Epilogue } from "next/font/google";

import { jobs } from "./dummyData";

interface JobData {
  position: string;
  logo: string;
  company_name: string;
  description: string;
  location: string;
  requirements: string[];
  salary: string;
}

const jobsData: JobData[] = jobs;

const epilogue = Epilogue({ subsets: ["latin"] });

const Card = ({}) => {
  return (
    <div className="flex flex-col gap-6">
      {jobsData.map((job) => (
        <div
          key={job.description}
          className={` flex space-between gap-[24px] bg-white w-[919px] h-[266px] p-6 rounded-[30px] ${epilogue.className}`}
        >
          <Image className="w-[66px] h-[59px]" src={logo} alt="company logo" />

          <div className="flex flex-col gap-[8px]">
            <h1 className="text-[#25324B]">{job.position}</h1>
            <div className="flex gap-[8px] text-[#7C8493]">
              <h4 className="inline-block">
                <span>{job.company_name}</span>
              </h4>
              <li className="inline-block ">{job.location}</li>
            </div>
            <p className="text-[#25324B] w-[744px] text-base font-normal leading-[25.6px]">
              {job.description}
            </p>
            <div className="flex gap-[8px]">
              <button
                className="text-[12px] font-semibold bg-[#56CDAD] bg-opacity-10
   text-[#56CDAD] py-[6px] px-[10px] rounded-[80px]"
              >
                {job.requirements[0]}
              </button>
              <button
                className="border-[1px] border-[#FFB836] text-[12px] font-semibold bg-[#FFB836] bg-opacity-10
   text-[#FFB836] py-[6px] px-[10px] rounded-[80px]"
              >
                {job.requirements[1]}
              </button>
              <button
                className="border-[1px] border-[#4640DE] text-[12px] font-semibold  bg-opacity-10
            text-[#4640DE] py-[6px] px-[20px] rounded-[80px]"
              >
                {job.requirements[2]}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
