import React from "react";
import Image from "next/image";

const TourFacility = () => {
  return (
    <section>
      <h2 className="w-full text-[44px] lg:text-[64px] leading-[1.2] text-center capitalize font-[600] text-primary_red mt-14">
        Tour of Our Facility
      </h2>
      <div
        style={{
          backgroundImage: "url(./assets/bmt/about_bmt.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="mt-14 mb-14 h-[50vh] lg:h-screen relative p-14"
      >
        <Image
          src="/assets/bmt/playIcon.png"
          alt=""
          width={80}
          height={80}
          className="w-[80px] h-[80px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:box_shadow_hover rounded-full trans_animate"
        />
      </div>
    </section>
  );
};

export default TourFacility;