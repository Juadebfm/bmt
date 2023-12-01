"use client";

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  const pathname = usePathname();

  // // HANDLE SCROLL
  // const navMenuRef = useRef(null); // Create a reference to the navigation menu

  // const scrollThreshold = 200; // Adjust the threshold as needed (in pixels)

  // const handleScroll = () => {
  //   if (window.scrollY > scrollThreshold) {
  //     // When the user has scrolled down beyond the threshold
  //     navMenuRef.current.style.position = "fixed";
  //     navMenuRef.current.style.top = "0";
  //   } else {
  //     // When the user is above the thr3shold
  //     navMenuRef.current.style.position = "static"; // or "relative" if you prefer
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // // HANDLE SCROLL
  return (
    <nav className="bg-primary_dark px-12 py-5 grid_col-fix text-[#fffff2]">
      <div>
        <img
          src="https://res.cloudinary.com/juadeb/image/upload/v1701434801/BMT/bmt_logo_blxacb.png"
          alt="BMT Logo"
          className=""
        />
      </div>

      <ul className="flex items-center justify-center gap-16 group:cursor-pointer font-lexend w-full pl-5">
        <Link
          href="/home"
          className={
            pathname == "/home"
              ? "active_class"
              : "hover:text-slate-300 duration-200 transition-all ease-linear"
          }
        >
          Home
        </Link>
        <Link
          href="/about"
          className={
            pathname == "/about"
              ? "active_class"
              : "hover:text-slate-300 duration-200 transition-all ease-linear"
          }
        >
          About Us
        </Link>
        <Link
          href="/services"
          className={
            pathname == "/services"
              ? "active_class"
              : "hover:text-slate-300 duration-200 transition-all ease-linear"
          }
        >
          Services
        </Link>
        <Link
          href="/contact"
          className={
            pathname == "/contact"
              ? "active_class"
              : "hover:text-slate-300 duration-200 transition-all ease-linear"
          }
        >
          Contact Us
        </Link>
        <div className="flex items-center justify-center gap-3 cursor-pointer hover:text-slate-300 duration-200 transition-all ease-linear">
          <span>More</span>
          <FaChevronDown />
        </div>
      </ul>

      <div className="w-full pl-24">
        <button className="px-[28px] py-[8px] bg-primary_red font-lexend font-normal">
          Donate Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
