import React from "react";
import Slider from "./Hcomp/Slider";
import slides from "./Lcomp/SlidesData";
import Button from "./Lcomp/Button";
import Badge from "./Lcomp/Badge";
import Footer from "./Hcomp/Footer";
import MultiServices from "./Lcomp/MultiServices";
import SupportServices from "./Lcomp/SupportServices";
import About from "./Lcomp/About";
import OurSponsors from "./Lcomp/OurSponsors";
import Documentary from "./Lcomp/Documentary";
import STC from "./Lcomp/STC";
import WhatToExpect from "./Lcomp/WhatToExpect";
import Research from "./Lcomp/Research";
import CTA from "./Lcomp/CTA";
import SuccessStory from "./Lcomp/SuccessStory";
import Contact from "./Lcomp/Contact";
import LatestNews from "./Hcomp/LatestNews";

const Mainbody = () => {
  return (
    <section className="font-lexend">
      <div className="relative">
        <Slider slides={slides} />
        <div className="absolute top-[25%] z-20 w-1/2 h-auto px-14 text-white">
          <h1 className="text-[44px] leading-[3rem] capitalize font-bold">
            Providing, safe, quality, affordable healthcare for persons leaving
            with sickle cell
          </h1>
          <p className="text-[18px] my-8 ">
            Be part of a Mission dedicated to making a lasting impact in
            healthcare.
          </p>
          <Button
            classes="px-[68px] py-[10px] bg-primary_red font-lexend font-bold rounded-[4px] hover:bg-primary_red/80 trans_animate"
            text="Donate Now"
          />
        </div>
      </div>
      <Badge />
      <MultiServices />
      <SupportServices />
      <About />
      <OurSponsors />
      <Documentary />
      <STC />
      <WhatToExpect />
      <Research />
      <CTA />
      <SuccessStory />
      <Contact />
      <LatestNews />
    </section>
  );
};

export default Mainbody;
