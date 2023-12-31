import React from "react";
import Questions from "../components/Lcomp/Questions";

const page = () => {
  return (
    <section className="mt-16 px-[25px] md:px-16 overflow-x-hidden">
      <h2 className="text-[34px] md:text-[44px] leading-[1.2] capitalize font-[600] text-primary_red text-center w-full md:w-max m-auto">
        Frequently Asked Questions{" "}
      </h2>
      <section className="w-full md:w-[85%] m-auto mt-12">
        <Questions />
      </section>
    </section>
  );
};

export default page;
