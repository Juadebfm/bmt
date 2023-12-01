"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "@/styles/slider.css"; // Import custom styles for the slider

const Slider = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1} // Show one slide at a time to cover the entire screen
      effect={"cube"}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <div className="slide-container">
            <img className="slide-image" src={slide.image} alt={slide.title} />
            <div className="slide-content">
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-subtitle">{slide.subTitle}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
