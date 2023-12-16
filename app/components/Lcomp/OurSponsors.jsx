import React from "react";

const OurSponsors = () => {
  return (
    <section className="px-[25px] sm:px-16 mt-10 sm:mt-28 flex flex-col items-start justify-start">
      <h2 className="text-[34px] sm:text-[44px] text-center sm:text-start w-full leading-[1.2] capitalize font-[600] text-primary_red">
        Our Sponsors
      </h2>
      <div className="w-full sm:w-1/2 h-full mt-10 sm:mt-20 self-end">
        <img
          src="./assets/bmt/logos_nnpc.png"
          alt=""
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default OurSponsors;
