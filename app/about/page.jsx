"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import About from "./About";
import OurTeam from "./OurTeam";
import TourFacility from "./TourFacility";
import { FaAnglesDown } from "react-icons/fa6";

const Page = () => {
  // show arrow state
  const [showArrow, setShowArrow] = useState(true);

  // use effect for showing the arrow
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Remove event listener and hide arrow when scrolled
      setShowArrow(false);
      window.removeEventListener("scroll", handleScroll);
    };

    // Add event listener to handle scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up by removing event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="overflow-x-hidden">
      <div
        style={{
          backgroundImage: "url(./assets/bmt/scfn-luth.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-[50vh] md:h-screen relative p-14"
      >
        <img
          src="/assets/bmt/sfcn_luth_logo.png"
          alt="bmt-logo"
          className="px-[25px] md:px-0 absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-14 w-[500px] h-auto"
        />
        <div className="hidden w-full absolute bottom-36 z-50 lg:flex items-center justify-center">
          {showArrow && (
            <FaAnglesDown className="text-4xl text-white/80 shadow-md bounce-animation rounded-full font-extralight" />
          )}
        </div>
      </div>
      <About />
      <OurTeam />
      <TourFacility />
    </section>
  );
};

export default Page;
