import React from "react";
import Slider from "./Hcomp/Slider";

const slides = [
  {
    image:
      "https://res.cloudinary.com/juadeb/image/upload/v1701439724/BMT/bmt_landpage_h2ec10.png",
    title:
      "Providing, safe, quality, affordable healthcare for sickle cell patients",
    subTitle:
      "Be part of a Mission dedicated to making a lasting impact in healthcare,",
    interval: 1500,
  },
  {
    image:
      "https://res.cloudinary.com/juadeb/image/upload/v1701442187/BMT/bmt_landpage2_thhopr.png",
    title:
      "Providing, safe, quality, affordable healthcare for sickle cell patients",
    subTitle:
      "Be part of a Mission dedicated to making a lasting impact in healthcare,",
    interval: 1500,
  },
  {
    image:
      "https://res.cloudinary.com/juadeb/image/upload/v1701442178/BMT/bmt_landpage3_vdx8mb.png",
    title:
      "Providing, safe, quality, affordable healthcare for sickle cell patients",
    subTitle:
      "Be part of a Mission dedicated to making a lasting impact in healthcare,",
    interval: 1500,
  },
  {
    image:
      "https://res.cloudinary.com/juadeb/image/upload/v1701439724/BMT/bmt_landpage_h2ec10.png",
    title:
      "Providing, safe, quality, affordable healthcare for sickle cell patients",
    subTitle:
      "Be part of a Mission dedicated to making a lasting impact in healthcare,",
    interval: 1500,
  },
  {
    image:
      "https://res.cloudinary.com/juadeb/image/upload/v1701442178/BMT/bmt_landpage4_hmg1ac.png",
    title:
      "Providing, safe, quality, affordable healthcare for sickle cell patients",
    subTitle:
      "Be part of a Mission dedicated to making a lasting impact in healthcare,",
    interval: 1500,
  },
  {
    image:
      "https://res.cloudinary.com/juadeb/image/upload/v1701442178/BMT/bmt_landpage5_eszs01.png",
    title:
      "Providing, safe, quality, affordable healthcare for sickle cell patients",
    subTitle:
      "Be part of a Mission dedicated to making a lasting impact in healthcare,",
    interval: 1500,
  },
];

const Mainbody = () => {
  return (
    <div>
      <Slider slides={slides} />
    </div>
  );
};

export default Mainbody;
