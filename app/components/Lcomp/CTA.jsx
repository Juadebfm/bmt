import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <section className="h-max flex items-center justify-center px-10 gap-10 mt-28">
      <div className="w-1/2 h-full p-10">
        <img src="./assets/bmt/cta_img.png" alt="" className="object-cover" />
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="w-full text-[40px] leading-[1.2] capitalize font-[600] text-primary_red">
          This is a CALL TO ACTION! BE A HERO!
          <br /> CONTRIBUTE TODAY!
        </h2>
        <p className="w-full text-[18px] leading-normal mt-8">
          Your contributions will help subsidies this life-saving procedure for
          the vast majority of Nigerians living with sickle cell disorder,
          giving them the opportunity for a cure.
          <br /><br /> Help make this cure a reality for many! 
          <br /><br /> THANK YOU!
          <Button
            classes="px-[48px] py-[10px] bg-primary_red font-lexend font-bold rounded-[4px] text-white block text-[16px] mt-8"
            text="Donate Now"
          />
        </p>
      </div>
    </section>
  );
};

export default CTA;
