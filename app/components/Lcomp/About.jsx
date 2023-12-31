import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="h-max flex flex-col lg:flex-row items-center justify-center px-[25px] sm:px-16 gap-10 mt-10 sm:mt-28">
      <div className="w-full lg:w-1/2 h-full p-10 lg:pl-28">
        <img src="./assets/bmt/logos.png" alt="" className="object-cover w-full" />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h2 className="w-full text-[30px] lg:text-[40px] text-center lg:text-start leading-[1.2] capitalize font-[600] text-primary_red">
          About the SCFN | LUTH | VUMC Partnership
        </h2>
        <p className="w-full text-[18px] md:text-[20px] text-center lg:text-start leading-normal mt-3">
          The SCFN/LUTH/VUMC BMT Centre was officially opened January 2022 and
          it is heartwarming to know that the SCFN/LUTH/VUMC BMT Centre will not
          only provide safe, quality and affordable cure for sickle cell
          disorder, but also serve as a Centre of Excellence for BMT training in
          Africa. In addition, it will usher a new dawn for Nigeria and the
          concept of Reverse Medical Tourism as Nigeria will be hosting patients
          from other countries travelling in to access SAFE, QUALITY, MORE
          AFFORDABLE BONE MARROW TRANSPLANTATION AT THE SCFN/LUTH/VUMC
          BMT CENTRE, LAGOS.
          <Link href="/about">
            <span className="font-bold text-primary_red cursor-pointer ml-2">
              Learn More
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default About;
