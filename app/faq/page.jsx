import React from "react";
import Questions from "../components/Lcomp/Questions";

const page = () => {
  return (
    <section className="mt-16 px-16">
      <h2 className="text-[40px] leading-[1.2] capitalize font-[600] text-primary_red text-center w-max m-auto">
        Frequently Asked Questions{" "}
      </h2>
      <section className="w-[85%] m-auto mt-12">
        <Questions />
      </section>
    </section>
  );
};

export default page;
