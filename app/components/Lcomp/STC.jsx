import React from "react";

const STC = () => {
  return (
    <section className="h-max flex items-center justify-center px-10 mt-28">
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="w-full text-[40px] leading-[1.2] capitalize font-[600] text-primary_red">
          Understanding stem cell transplantation (bone marrow transplantation)
        </h2>
        <p className="w-full text-[18px] leading-normal mt-8">
          Access in-depth disease information on conditions like Sickle Cell
          Disease and Leukemia treated with BMT. Stay informed and engaged with
          upcoming webinars and workshops, fostering knowledge of BMT and
          related health topics. Learn More
          <span className="font-bold text-primary_red text-[18px] pl-2 cursor-pointer">
            Learn More
          </span>
        </p>
      </div>
      <div className="w-1/2 h-full p-10 pl-28 relative">
        <img
          src="./assets/bmt/red_slash2.png"
          alt=""
          className="object-cover"
        />
        <img
          src="./assets/bmt/red_slash.png"
          alt=""
          className="object-cover absolute bottom-5 w-[80%] h-auto"
        />
      </div>
    </section>
  );
};

export default STC;
