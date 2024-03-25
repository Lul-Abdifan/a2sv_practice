import React from "react";
import Image from "next/image";
import Link from "next/link";

import { jobs } from "@/app/jobs/dummyData";

const CardElements = () => {
  return (
    <div className="flex flex-col gap-6 p-12 items-center ">
      {jobs.map((job) => (
        <Link key={job.id} href={`jobs/${job.id}`}>
          <div
            key={job.id}
            className={`border-2 flex space-between gap-6 bg-white  p-6 rounded-[30px]`}
          >
            <div className="w-4 h-4 sm:w-8 sm:h-8 lg:w-16 lg:h-16 relative overflow-hidden  ">
              <Image
                src={job.imageUrl}
                alt="profile"
                objectFit="cover"
                fill
                className=" object-cover rounded-2xl"
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <h1 className="font-600 leading-6 text-[20px] text-[#25324B]">
                {job.title}
              </h1>

              <div className="flex items-center gap-[20px] text-[#7C8493] ">
                <h4 className="inline-block">
                  <span>{job.subTitle}</span>
                </h4>
                <div
                  className="h-2 w-2 bg-[#7C8493] rounded-full
"
                ></div>
                <li className="inline-block ">Addis Ababa, Ethiopia</li>
              </div>
              <p className="text-[#25324B] w-[744px] text-base font-normal leading-[25.6px]">
                {job.description}
              </p>
              <div className="flex gap-[8px]">
                <button
                  className="text-[12px] font-semibold bg-[#56CDAD] bg-opacity-10
   text-[#56CDAD] py-[6px] px-[10px] rounded-[80px]"
                >
                  {job.relatedTopics[0]}
                </button>
                <button
                  className="border-[1px] border-[#FFB836] text-[12px] font-semibold bg-[#FFB836] bg-opacity-10
   text-[#FFB836] py-[6px] px-[10px] rounded-[80px]"
                >
                  {job.relatedTopics[1]}
                </button>
                <button
                  className="border-[1px] border-[#4640DE] text-[12px] font-semibold  bg-opacity-10
            text-[#4640DE] py-[6px] px-[20px] rounded-[80px]"
                >
                  {job.relatedTopics[2]}
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardElements;
