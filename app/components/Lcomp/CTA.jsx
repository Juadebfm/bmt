"use client";
import React, { useEffect } from "react";
import Button from "./Button";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";

const CTA = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="600"
      className="h-max flex flex-col sm:flex-row items-center justify-center px-[25px] sm:px-16 gap-10 sm:gap-20 mt-10 sm:mt-28"
    >
      <div className="w-full sm:w-1/2 h-full p-0 sm:p-10">
        <img src="./assets/bmt/cta_img.png" alt="" className="object-cover" />
      </div>
      <div className="w-full sm:w-1/2 flex flex-col justify-center">
        <h2 className="w-full sm:w-[95%] text-[34px] sm:text-[44px] text-center sm:text-start leading-[1.2] capitalize font-[600] text-primary_red">
          This is a CALL TO ACTION! BE A HERO!
          <br /> CONTRIBUTE TODAY!
        </h2>
        <p className="w-full text-[19px] leading-normal mt-8">
          Your contributions will help subsidies this life-saving procedure for
          the vast majority of Nigerians living with sickle cell disorder,
          giving them the opportunity for a cure.
          <br />
          <br /> Help make this cure a reality for many! 
          <br />
          <br /> THANK YOU!
          <Link href="/donation">
            <Button
              classes="px-[48px] py-[12px] bg-primary_red font-Lexend font-bold rounded-[4px] text-[15px] hover:bg-primary_red/90 trans_animate tracking-wider block text-white mt-7"
              text="Donate Now"
            />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default CTA;
