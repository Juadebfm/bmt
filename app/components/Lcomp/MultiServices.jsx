"use client";
import Link from "next/link";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const MultiServices = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section
      data-aos="fade-up"
      className="h-auto sm:h-[70vh] flex flex-col-reverse sm:flex-row items-center justify-center px-[25px] sm:px-16 gap-10 sm:gap-20 mt-14 mb-24 scroll_item"
    >
      <div className="w-full sm:w-1/2 flex flex-col justify-center">
        <h2 className="text-[34px] sm:text-[44px] w-full sm:w-[90%] leading-[1.2] capitalize font-[600] text-primary_red text-center sm:text-start">
          Our Multi-disciplinary services
        </h2>
        <p className="text-[19px] leading-normal mt-6">
          Our transplant team which includes Paediatricians, haematologists,
          internists and various specialists, ensures quality comprehensive
          care. From social workers to Anaesthetics, we are here for our
          patients well-being, providing support before and after
          transplantation.{" "}
          <Link href="/services">
            <span className="font-bold text-primary_red cursor-pointer">
              Learn More
            </span>
          </Link>
        </p>
      </div>
      <div className="w-full sm:w-1/2 h-full">
        <img
          src="./assets/bmt/person1.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default MultiServices;
