import React from "react";
import Button from "./Button";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="h-max flex flex-col sm:flex-row items-center justify-center px-[25px] sm:px-16 gap-10 mt-10 sm:mt-28">
      <div className="w-full sm:w-1/2 h-full p-0 sm:p-10">
        <img
          src="./assets/bmt/smiling_family.png"
          alt=""
          className="object-cover"
        />
      </div>
      <div className="w-full sm:w-1/2 flex flex-col justify-center">
        <h2 className="w-full text-[34px] sm:text-[40px] text-center sm:text-start leading-[1.2] capitalize font-[600] text-primary_red">
          Do u live with sickle cell disorder? Or seeking support for a loved
          one? Click on the contact us button below.
        </h2>
        <div className="w-full text-[18px] leading-normal mt-1">
          <Link href="/contact">
            <Button
              classes="px-[75px] py-[14px] w-full sm:w-auto bg-primary_red font-Lexend font-bold rounded-[4px] hover:bg-primary_red/90 trans_animate tracking-wide text-white mt-8"
              text="Contact Us"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
