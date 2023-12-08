import React from "react";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { LiaTwitterSquare } from "react-icons/lia";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { PiFacebookLogo, PiInstagramLogoLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";

import Link from "next/link";
import Button from "../Lcomp/Button";

const Footer = () => {
  return (
    <footer className="grid_col_footer gap-8 px-14 py-14 w-full">
      <div>
        <img src="./assets/bmt/logo_footer.png" alt="BMT Logo" className="" />
        <p className="w-[95%] mt-8 text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim.
        </p>
        <div className="flex items-center justify-start text-3xl mt-6 text-primary_red space-x-5">
          <FaInstagram className="cursor-pointer" />
          <RiFacebookBoxLine className="cursor-pointer" />
          <LiaTwitterSquare className="cursor-pointer" />
          <RiLinkedinBoxLine className="cursor-pointer" />
        </div>
      </div>
      <div className="space-y-3">
        <span className="font-bold">Platforms</span>
        <ul className="flex flex-col w-max space-y-5">
          <Link href="/">About</Link>
          <Link href="/">Donation</Link>
          <Link href="/">Education & Awareness</Link>
          <Link href="/">Research & Innovation</Link>
          <Link href="/">Patient Information</Link>
        </ul>
      </div>
      <div className="space-y-3">
        <span className="font-bold">Advancements</span>
        <ul className="flex flex-col w-max space-y-5">
          <Link href="/">Haploidentical BMT</Link>
          <Link href="/">Cord blood transplantation</Link>
          <Link href="/">CAR-T cell therapy</Link>
          <Link href="/">Gene editing</Link>
        </ul>
      </div>
      <div className="space-y-3">
        <span className="font-bold">Contact Us</span>
        <ul className="flex flex-col w-max space-y-5">
          <Link
            href="/"
            className="flex items-center justify-start w-full h-max gap-2"
          >
            <MdOutlinePhoneInTalk className="text-2xl" />

            <div>
              <a href="tel:+2347086622570" className="flex flex-col">
                <span>+234 708 662 2570</span>
                <span className="capitalize font-bold">SEYE KOLAWOLE</span>
              </a>
            </div>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-start w-full h-max gap-2"
          >
            <CiTwitter className="text-3xl" />

            <div className="w-full">
              <a href="tel:+2347086622570">
                <span className="">sicklecellnig</span>
              </a>
            </div>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-start w-full h-max gap-2"
          >
            <PiInstagramLogoLight className="text-3xl" />

            <div className="w-full">
              <a href="tel:+2347086622570">
                <span className="">sicklecellfoundationng</span>
              </a>
            </div>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-start w-full h-max gap-2"
          >
            <PiFacebookLogo className="text-3xl" />

            <div className="w-full">
              <a href="tel:+2347086622570">
                <span className="">sicklecellfoundation</span>
              </a>
            </div>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-start w-full h-max gap-2"
          >
            <CiMail className="text-3xl" />

            <div className="w-full">
              <a href="mailto:info@sicklecellfoundation.com">
                <span className="">sicklecellfoundation</span>
              </a>
            </div>
          </Link>
        </ul>
      </div>
      <div className="space-y-5">
        <span className="font-bold">Subscribe</span>
        <p>
          Lorem ipsum dolor sit amet consectetur. Euismod amet in mi integer
          risus leo enim mi. Neque viverra facilisi nec semper nullam ipsum.{" "}
        </p>
        <form
          action=""
          className="flex items-center justify-center w-full flex-col space-y-3"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="px-[28px] py-[8px] w-full border-[1px] border-primary_red/50 rounded-lg"
          />
          <Button
            classes="px-[68px] py-[10px] bg-primary_red font-lexend font-bold rounded-[4px] hover:bg-primary_red/80 trans_animate block text-white mt-5 text-[15px] w-full"
            text="Subscribe"
          />
        </form>
      </div>
    </footer>
  );
};

export default Footer;
