import React from "react";
import Button from "../components/Lcomp/Button";
import Link from "next/link";
import Badge from "../components/Lcomp/Badge";
import Questions from "../components/Lcomp/Questions";
import SuccessStory from "../components/Lcomp/SuccessStory";
import LatestNews from "../components/Hcomp/LatestNews";

const page = () => {
  return (
    <>
      <section className="h-max flex items-center justify-center gap-20 pl-14 mt-5 w-full">
        <div className="w-1/2 flex flex-col justify-center p-10">
          <h2 className="w-[85%] text-[40px] leading-[1.2] capitalize font-[600] text-primary_red">
            What to expect in stem cell transplantation
          </h2>
          <p className="w-full text-[20px] leading-normal mt-4">
            Welcome to our BMT hub. Learn about procedures, find resources, and
            be inspired by patient stories - your comprehensive guide to a
            successful transplant journey.
          </p>
          <Link href="/donation">
            <Button
              classes="px-[75px] py-[14px] bg-primary_red font-lexend font-bold rounded-[4px] hover:bg-primary_red/90 trans_animate tracking-wide mt-8 w-max text-white"
              text="Donate Now"
            />
          </Link>
        </div>
        <div className="w-1/2 h-full p-10 pl-0">
          <img
            src="./assets/bmt/whattoexpect.png"
            alt=""
            className="object-cover w-[90%]"
          />
        </div>
      </section>
      <Badge />
      <div className="px-14">
        <h2 className="text-[40px] leading-[1.2] capitalize font-bold text-primary_red text-center">
          Stem Cell Transplantation Stages
        </h2>
        <div className="my-14 flex items-center justify-center gap-12">
          <div className="box_shadow px-14 py-16 flex items-center justify-center flex-col gap-4 rounded-xl">
            <img src="./assets/bmt/bullet_point.png" alt="" />
            <span className="text-[22px] text-primary_red">Stage 1</span>

            <h3 className="text-[32px]">Pre-Transplant</h3>
          </div>
          <div className="box_shadow px-14 py-16 flex items-center justify-center flex-col gap-4 rounded-xl">
            <img src="./assets/bmt/bullet_point.png" alt="" />
            <span className="text-[22px] text-primary_red">Stage 2</span>

            <h3 className="text-[32px]">Pre-Transplant</h3>
          </div>
          <div className="box_shadow px-14 py-16 flex items-center justify-center flex-col gap-4 rounded-xl">
            <img src="./assets/bmt/bullet_point.png" alt="" />
            <span className="text-[22px] text-primary_red">Stage 3</span>

            <h3 className="text-[32px]">Pre-Transplant</h3>
          </div>
        </div>
      </div>
      <div className="px-14 w-[85%] m-auto mt-32">
        <h2 className="text-[40px] leading-[1.2] capitalize font-bold text-primary_red text-center mb-16">
          Frequently Asked Questions
        </h2>
        <Questions />
      </div>
      <SuccessStory />
      <LatestNews />
    </>
  );
};

export default page;
