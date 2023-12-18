import React from "react";
import Image from "next/image";
import About from "./About";
import OurTeam from "./OurTeam";
import TourFacility from "./TourFacility";

const page = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: "url(./assets/bmt/scfn-luth.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-[50vh] md:h-screen relative p-14"
      >
        <Image
          src="/assets/bmt/sfcn_luth_logo.png"
          alt="bmt-logo"
          width={847}
          height={225}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-14"
        />
      </section>
      <About />
      <OurTeam />
      <TourFacility />
    </>
  );
};

export default page;
