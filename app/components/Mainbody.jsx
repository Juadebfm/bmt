import React from "react";
import Slider from "./Hcomp/Slider";
import slides from "./Lcomp/SlidesData";
import Button from "./Lcomp/Button";
import Badge from "./Lcomp/Badge";
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
import Link from "next/link";
import SmallScreenSlider from "./Hcomp/SmallScreenSlider";
import slidesSm from "./Lcomp/SlidesDataSm";

const Mainbody = () => {
  return (
    <section>
      <div className="relative">
        <Slider slides={slides} />
        <SmallScreenSlider slidesSm={slidesSm} />
        <div className="absolute top-[25%] md:top-[20%] z-20 w-full lg:w-[55%] h-auto px-[1.5rem] sm:px-16 text-white">
          <h1 className="w-full lg:w-[80%] text-[30px] md:text-[38px] lg:text-[48px] leading-[1.2] lg:leading-[3.4rem] tracking-wide capitalize text-center lg:text-start font-bold text_shadow_">
            Providing, safe, quality, affordable healthcare for persons leaving
            with sickle cell
          </h1>
          <p className="text-[17.5px] lg:text-[20px] text-center sm:text-start  my-8 w-[90%] lg:w-full mx-auto lg:mx-0 text_shadow_ tracking-wide">
            Be part of a mission dedicated to making a lasting impact in
            healthcare.
          </p>
          <Link
            href="/donation"
            className="md:flex md:items-center md:justify-center lg:block"
          >
            <Button
              classes="px-[48px] py-[12px] bg-primary_red font-Lexend font-bold rounded-[4px] text-[15px] hover:bg-primary_red/80 trans_animate tracking-wider w-full md:w-[60%] lg:w-auto"
              text="Donate Now"
            />
          </Link>
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
