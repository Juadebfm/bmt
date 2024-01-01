import React from "react";

const SuccessStory = () => {
  return (
    <section
      style={{
        backgroundImage: "url(./assets/bmt/smiling_male_doctor.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="mt-10 md:mt-20 lg:mt-28 w-[100%] sm:w-auto h-[60vh] md:h-[40vh] lg:h-[90vh] relative px-[25px] p-14"
    >
      <img
        src="./assets/bmt/playIcon.png"
        alt=""
        className="w-[80px] h-[80px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:box_shadow_hover rounded-full trans_animate"
      />
      <div className="absolute bottom-5 sm:bottom-10">
        <h2 className="w-max text-[34px] sm:text-[44px] text-center leading-[1.2] capitalize font-[600] text-primary_red text_shadow_">
          DR. Richard Davis
        </h2>
        <p className="text-[18px] md:text-[20px] text_shadow_">
          Success Story of his and his Patients{" "}
        </p>
      </div>
    </section>
  );
};

export default SuccessStory;
