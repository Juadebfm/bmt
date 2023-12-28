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
      <section className="h-max flex flex-col-reverse lg:flex-row items-center justify-center gap-20 pl-0 lg:pl-14 mt-5 w-full">
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-10">
          <h2 className="w-full lg:w-[85%] text-[30px] lg:text-[40px] text-center lg:text-start leading-[1.2] capitalize font-[600] text-primary_red">
            What to expect in stem cell transplantation
          </h2>
          <p className="w-full text-[20px] leading-normal mt-4 text-center lg:text-start">
            Welcome to our BMT hub. Learn about procedures, find resources, and
            be inspired by patient stories - your comprehensive guide to a
            successful transplant journey.
          </p>
          <Link
            href="/donation"
            className="md:flex md:items-center md:justify-center lg:block"
          >
            <Button
              classes="px-[48px] py-[12px] bg-primary_red font-Lexend font-bold rounded-[4px] text-[15px] hover:bg-primary_red/90 trans_animate tracking-wider block text-white mt-7 w-full md:w-[60%] lg:w-auto"
              text="Donate Now"
            />
          </Link>
        </div>
        <div className="w-full lg:w-1/2 h-full p-0 lg:p-5">
          <img
            src="./assets/bmt/whattoexpect.png"
            alt=""
            className="object-cover w-full"
          />
        </div>
      </section>
      <Badge />
      <div className="px-[25px] lg:px-16 mt-16">
        <h2 className="text-[30px] lg:text-[40px] leading-[1.2] capitalize font-bold text-primary_red text-center">
          Stem Cell Transplantation Stages
        </h2>
        <div className="my-14 flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="box_shadow px-16 py-16 flex items-center justify-center flex-col gap-4 rounded-xl">
            <img src="./assets/bmt/bullet_point.png" alt="" />
            <span className="text-[22px] text-primary_red">Stage 1</span>

            <h3 className="text-[32px]">Pre-Transplant</h3>
          </div>
          <div className="box_shadow px-16 py-16 flex items-center justify-center flex-col gap-4 rounded-xl">
            <img src="./assets/bmt/bullet_point.png" alt="" />
            <span className="text-[22px] text-primary_red">Stage 2</span>

            <h3 className="text-[32px]">Pre-Transplant</h3>
          </div>
          <div className="box_shadow px-16 py-16 flex items-center justify-center flex-col gap-4 rounded-xl">
            <img src="./assets/bmt/bullet_point.png" alt="" />
            <span className="text-[22px] text-primary_red">Stage 3</span>

            <h3 className="text-[32px]">Pre-Transplant</h3>
          </div>
        </div>
      </div>
      <div className="px-[25px] lg:px-16 w-full lg:w-[85%] m-auto mt-32">
        <h2 className="text-[30px] lg:text-[40px] leading-[1.2] capitalize font-bold text-primary_red text-center mb-16">
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
