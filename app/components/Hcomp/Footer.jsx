import React from "react";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { LiaTwitterSquare } from "react-icons/lia";
import { RiLinkedinBoxLine } from "react-icons/ri";
import Link from "next/link";
import Button from "../Lcomp/Button";

const Footer = () => {
  return (
    <footer className="grid_col_footer px-10 py-14">
      <div className="space-y-5">
        <img src="./assets/bmt/logo_footer.png" alt="BMT Logo" className="" />
        <p className="w-[70%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim.
        </p>
        <div className="flex items-center justify-start text-3xl text-primary_red space-x-5">
          <FaInstagram className="cursor-pointer" />
          <RiFacebookBoxLine className="cursor-pointer" />
          <LiaTwitterSquare className="cursor-pointer" />
          <RiLinkedinBoxLine className="cursor-pointer" />
        </div>
      </div>
      <div>
        <span>Platforms</span>
        <ul className="flex flex-col w-full">
          <Link href="/">About</Link>
          <Link href="/">Donation</Link>
          <Link href="/">Education & Awareness</Link>
          <Link href="/">Research & Innovation</Link>
          <Link href="/">Patient Information</Link>
        </ul>
      </div>
      <div>
        <span>Platforms</span>
        <ul className="flex flex-col w-full">
          <Link href="/">About</Link>
          <Link href="/">Donation</Link>
          <Link href="/">Education & Awareness</Link>
          <Link href="/">Research & Innovation</Link>
          <Link href="/">Patient Information</Link>
        </ul>
      </div>
      <div>
        <span>Platforms</span>
        <ul className="flex flex-col w-full">
          <Link href="/">About</Link>
          <Link href="/">Donation</Link>
          <Link href="/">Education & Awareness</Link>
          <Link href="/">Research & Innovation</Link>
          <Link href="/">Patient Information</Link>
        </ul>
      </div>

      <div className="space-y-5">
        <h3>Subscribe</h3>
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
            placeholder="Email Address"
            required
            className="px-[28px] py-[8px] w-full"
          />
          <Button
            classes="px-[28px] py-[8px] bg-primary_red font-lexend font-bold rounded-[4px] w-full text-white"
            text="Donate Now"
          />
        </form>
      </div>
    </footer>
  );
};

export default Footer;
