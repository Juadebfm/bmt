import React from "react";

const Badge = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-5 gap-7 sm:gap-4 px-7 pt-10 sm:pb-20 pb-10">
      <div className="flex items-center justify-start sm:justify-center gap-3 box_shadow rounded-[10px] px-[25px] sm:px-[16px] py-[25px] sm:py-[18px]">
        <img
          src="./assets/bmt/bv4.png"
          alt="quality"
          className="w-[38px] h-[38px]"
        />
        <div>
          <span className="text-primary_gold font-[600]">Availability</span>
          <p className="text-[13px] font-semibold leading-[1.4]">
            We ensure that high-quality services are consistently available.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start sm:justify-center gap-3 box_shadow rounded-[10px] px-[25px] sm:px-[16px] py-[25px] sm:py-[18px]">
        <img
          src="./assets/bmt/bv5.png"
          alt="quality"
          className="w-[38px] h-[38px]"
        />
        <div>
          <span className="text-primary_tomato_red font-[600]">
            Accessibility
          </span>
          <p className="text-[13px] font-semibold leading-[1.4]">
            Quality healthcare is readily accessible.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start sm:justify-center gap-3 box_shadow rounded-[10px] px-[25px] sm:px-[16px] py-[25px] sm:py-[18px]">
        <img
          src="./assets/bmt/bv6.png"
          alt="quality"
          className="w-[38px] h-[38px]"
        />
        <div>
          <span className="text-primary_dark font-[600]">Quality</span>
          <p className="text-[13px] font-semibold leading-[1.4]">
            Quality healthcare is made easily reachable for everyone.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start sm:justify-center gap-3 box_shadow rounded-[10px] px-[25px] sm:px-[16px] py-[25px] sm:py-[18px]">
        <img
          src="./assets/bmt/bv7.png"
          alt="quality"
          className="w-[38px] h-[38px]"
        />
        <div>
          <span className="text-primary_green font-[600]">Safe</span>
          <p className="text-[13px] font-semibold leading-[1.4]">
            Safety is our top priority
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start sm:justify-center gap-3 box_shadow rounded-[10px] px-[25px] sm:px-[16px] py-[25px] sm:py-[18px]">
        <img
          src="./assets/bmt/bv9.png"
          alt="quality"
          className="w-[38px] h-[38px]"
        />
        <div>
          <span className="text-primary_blue font-[600]">Affordable</span>
          <p className="text-[13px] font-semibold leading-[1.4]">
            Ensuring affordability of quality care
          </p>
        </div>
      </div>
    </section>
  );
};

export default Badge;
