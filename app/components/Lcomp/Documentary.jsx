import Image from "next/image";
import React from "react";

const Documentary = () => {
  return (
    <section
      style={{
        backgroundImage: "url(./assets/bmt/nurse.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="mt-10 md:mt-5 lg:mt-28 w-[100%] sm:w-auto h-[60vh] md:h-[40vh] lg:h-[90vh] relative p-6 sm:p-14"
    >
      <Image
        src="/assets/bmt/playIcon.png"
        alt=""
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:box_shadow_hover rounded-full trans_animate"
        width={80}
        height={80}
      />
      <div className="absolute bottom-5 sm:bottom-10 w-max">
        <h2 className="w-max text-[30px] sm:text-[40px] text-center leading-[1.2] capitalize font-[600] text-primary_red text_shadow_">
          Documentary
        </h2>
        <p className="text-[18px] md:text-[20px] text_shadow_">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </section>
  );
};

export default Documentary;
