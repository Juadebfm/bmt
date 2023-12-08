import React from "react";

const MultiServices = () => {
  return (
    <section className="h-[70vh] flex items-center justify-center px-14 gap-20 mt-16 mb-24">
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="w-full text-[40px] leading-[1.2] capitalize font-[600] text-primary_red">Our Multi-disciplinary services</h2>
        <p className="w-[90%] text-[18px] leading-normal mt-10">
          Our transplant team which includes Paediatricians, haematologists,
          internists and various specialists, ensures quality comprehensive
          care. From social workers to Anaesthetics, we are here for our
          patients well-being, providing support before and after
          transplantation. <span className="font-bold text-primary_red text-[18px] cursor-pointer">Learn More</span>
        </p>
      </div>
      <div className="w-1/2 h-full">
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
