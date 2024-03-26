"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import About from "@/components/about";
import { AppDispatch, RootStore } from "@/lib/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import JobOpportunity from "@/lib/features/jobs/types";
import Loading from "@/components/Loading";
import { fetchJobById } from "@/lib/features/jobs/jobSlice";

const DetailJob = () => {
  const { selectedJob, loading } = useSelector(
    (store: RootStore) => store.jobs
  );
  const dispatch = useDispatch<AppDispatch>();

  const params = useParams<{ Id: string }>();
  const detailId = params.Id;

  useEffect(() => {
    if (detailId) {
      dispatch(fetchJobById(detailId));
    }
  }, [dispatch, detailId]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className={`flex gap-[62px] p-[32px] w-full bg-[#FFFFFF]`}>
      <div className="flex flex-col w-[60%] mx-auto  gap-[55px] pt-[46px]">
        <div className="detail-left-page">
          <h1 className="detail-header">Description</h1>
          <div className="detail-topic-sub-description">
            <p>{selectedJob?.description}</p>
          </div>

          <div className="detail-left-page">
            <h1 className="detail-header">Responsibilities</h1>
            <div className="detail-topic-sub-description">
              <div className="flex">
                <Image
                  className="inline-block mr-2"
                  src="/CheckList.svg"
                  alt="vacto-image"
                  width={20}
                  height={20}
                />
                <h3>
                  Community engagement to ensure that is supported and actively
                  represented online
                </h3>
              </div>
              <div className="flex">
                <Image
                  className="inline-block mr-2"
                  src="/CheckList.svg"
                  alt="vacto-image"
                  width={20}
                  height={20}
                />
                <h3>
                  Community engagement to ensure that is supported and actively
                  represented online
                </h3>
              </div>
              <div className="flex">
                <Image
                  className="inline-block mr-2"
                  src="/CheckList.svg"
                  alt="vacto-image"
                  width={20}
                  height={20}
                />
                <h3>
                  Community engagement to ensure that is supported and actively
                  represented online
                </h3>
              </div>
              <div className="flex">
                <Image
                  className="inline-block mr-2"
                  src="/CheckList.svg"
                  alt="vacto-image"
                  width={20}
                  height={20}
                />
                <h3>{selectedJob?.responsibilities}</h3>
              </div>
            </div>
            <div className="flex">
              <Image
                className="inline-block mr-2"
                src="/CheckList.svg"
                alt="vacto-image"
                width={20}
                height={20}
              />
              <h3>
                Community engagement to ensure that is supported and actively
                represented online
              </h3>
            </div>
            <div className="flex">
              <Image
                className="inline-block mr-2"
                src="/CheckList.svg"
                alt="vacto-image"
                width={20}
                height={20}
              />
              <h3>
                Community engagement to ensure that is supported and actively
                represented online
              </h3>
            </div>
          </div>

          <div className="detail-left-page">
            <h1 className="detail-header">Ideal Candidate we want</h1>
            <ul className="detail-topic-sub-description">
              <li>
                <span className="ideal-candidate-span">
                  {selectedJob?.idealCandidate}
                </span>
              </li>
              <li>
                <span className="ideal-candidate-span">
                  Young(18-24 year old) Female social media manager
                </span>
              </li>
              <li>
                <span className="ideal-candidate-span">
                  Passionate & Reliable:
                </span>{" "}
                Genuine interest in our mission and a strong desire to make a
                positive impact, responsible, and committed to fulfilling
                volunteer commitments.
              </li>
              <li>
                <span className="ideal-candidate-span">
                  Adaptable, Team Player & Strong Communication Skills:
                </span>{" "}
                Able to work effectively in diverse teams; and contributes
                positively. Flexible and open to embracing new challenges and
                shifting priorities; Clear verbal and written communication,
                active listening, and constructive feedback.
              </li>
              <li className="ideal-candidate-span">
                <span className="ideal-candidate-span">Respectful:</span>{" "}
                Embraces diversity, inclusive, and treats others with respect.
                Abides with all our rules and regulations
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="detail-header">When & Where</h1>
            <div className="flex items-center gap-4">
              <div className="about-elements-style">
                <Image
                  className="inline-block"
                  src="/Address.svg"
                  alt="vacto-image"
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="detail-topic-sub-description">
                {selectedJob?.whenAndWhere}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <div className="detail-header">
            <h1 className="mb-[23px]">About</h1>
          </div>
          <About />
        </div>
        <div className="border-for-all"></div>
        <div className="flex flex-col gap-[24px]">
          <h1 className="detail-header">Categories</h1>
          <div className="flex gap-2">
            <button
              className="text-[12px] font-semibold bg-[#FFB836] bg-opacity-10
   text-[#FFB836] py-[6px] px-[10px] rounded-[80px]"
            >
              Marketing
            </button>
            <button
              className="text-[12px] font-semibold bg-[#56CDAD] bg-opacity-10
   text-[#56CDAD] py-[6px] px-[10px] rounded-[80px]"
            >
              Design
            </button>
          </div>
          <div className="border-for-all"></div>
        </div>
        <div className="flex flex-col gap-5 w-[293.5px]">
          <h1 className="detail-header">Required Skills</h1>
          <div className="flex flex-row flex-wrap gap-4 text-base text-[#4640DE]  font-normal leading-7 ">
            <h3 className="bg-required-lists">Social Media Marketing</h3>
            <h3 className="bg-required-lists">English</h3>
            <h3 className="bg-required-lists">Copywriting</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailJob;
