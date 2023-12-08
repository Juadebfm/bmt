"use client";

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa6";
import Button from "../Lcomp/Button";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-primary_dark px-12 py-3 grid_col-fix text-[#fffff2] w-full text-[16.5px]">
      <div>
        <img
          src="https://res.cloudinary.com/juadeb/image/upload/v1701434801/BMT/bmt_logo_blxacb.png"
          alt="BMT Logo"
          className=""
        />
      </div>

      <ul className="flex items-center justify-center gap-16 group:cursor-pointer font-lexend w-full pl-5 ml-10">
        <Link
          href="/"
          className={
            pathname == "/"
              ? "active_class"
              : "hover:text-slate-200 duration-200 transition-all ease-linear"
          }
        >
          Home
        </Link>
        <Link
          href="/about"
          className={
            pathname == "/about"
              ? "active_class"
              : "hover:text-slate-200 duration-200 transition-all ease-linear"
          }
        >
          About Us
        </Link>
        <Link
          href="/services"
          className={
            pathname == "/services"
              ? "active_class"
              : "hover:text-slate-200 duration-200 transition-all ease-linear"
          }
        >
          Services
        </Link>
        <Link
          href="/contact"
          className={
            pathname == "/contact"
              ? "active_class"
              : "hover:text-slate-200 duration-200 transition-all ease-linear"
          }
        >
          Contact Us
        </Link>
        <div className="flex items-center justify-center gap-3 cursor-pointer hover:text-slate-200 duration-200 transition-all ease-linear">
          <span>More</span>
          <FaChevronDown />
        </div>
      </ul>

      <div className="w-max pl-28">
        <Button
          classes="px-[28px] py-[8px] bg-primary_red font-lexend font-bold rounded-[4px] text-[15px] hover:bg-primary_red/80 trans_animate"
          text="Donate Now"
        />
      </div>
    </nav>
  );
};

export default Navbar;
