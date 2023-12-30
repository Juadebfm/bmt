"use client";
import React, { useState } from "react";
import Image from "next/image";

const TourFacility = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  const handleClose = () => {
    setShowVideo(false);
  };

  return (
    <section>
      <h2 className="w-full text-[44px] lg:text-[64px] leading-[1.2] text-center capitalize font-[600] text-primary_red mt-14">
        Tour of Our Facility
      </h2>
      {!showVideo ? (
        <div
          style={{
            backgroundImage: "url(./assets/bmt/medical_professionals.png)",
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
            className="w-[80px] h-[80px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer shadow-2xl rounded-full trans_animate pulse-shadow"
            onClick={handleClick}
          />
        </div>
      ) : (
        <div>
          {/* Video container */}
          <div className="w-[70%] h-[70%] mx-auto mt-8 py-10">
            <button onClick={handleClose} className="">
              X
            </button>

            <video controls className="w-full" autoPlay>
              <source
                src="https://www.sicklecellfoundation.com/scfn-luth-api/storage/public/img/Virtual%20Tour%20video%20of%20the%20SCFN_LUTH%20Bone%20Marrow%20Transplant_compressed.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default TourFacility;
