"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../components/Lcomp/Button";
import Badge from "../components/Lcomp/Badge";
import LatestNews from "../components/Hcomp/LatestNews";
import { CiWallet } from "react-icons/ci";
import { BiSolidDonateHeart } from "react-icons/bi";

import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const [activeButton, setActiveButton] = useState("enterAmount");
  const [activeDiv, setActiveDiv] = useState("one");
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");

  const [error, setError] = useState("");

  const handleButtonClick = (button) => {
    setActiveButton(button);
    if (button === "enterAmount") {
      setActiveDiv("one");
    } else {
      setActiveDiv("two");
    }
  };

  const amountRegex = /^[0-9]+$/; // Regex to validate only numbers
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (currency && amount) {
      if (!amountRegex.test(amount)) {
        setError("Input a valid amount");
      } else {
        setActiveDiv("two");
        setActiveButton("addInformation");
        setError(""); // Clear any previous error messages
      }
    } else {
      setError("Please choose a currency and type an amount.");
    }
  };

  return (
    <>
      <section className="h-max flex flex-col lg:flex-row items-center justify-center px-[25px] lg:px-16 gap-20 mt-10">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="w-full lg:w-1/2 h-full p-0 lg:p-10"
        >
          <img
            src="./assets/bmt/cta_img.png"
            alt=""
            className="object-cover w-full"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <h2 className="w-full lg:w-[90%] text-[34px] lg:text-[44px] leading-[1.2] capitalize font-bold text-primary_red text-center lg:text-start">
            This is a CALL TO ACTION! BE A HERO!
            <br /> CONTRIBUTE TODAY!
          </h2>
          <p className="w-full text-[20px] leading-normal mt-8">
            Your contributions will help subsidies this life-saving procedure
            for the vast majority of Nigerians living with sickle cell disorder,
            giving them the opportunity for a cure.
            <br />
            <br /> Help make this cure a reality for many! 
            <br />
            <br /> THANK YOU!
          </p>
          <Link
            href="/donation"
            className="md:flex md:items-center md:justify-center lg:block"
          >
            <Button
              classes="px-[48px] py-[12px] bg-primary_red font-Lexend font-bold rounded-[4px] text-[15px] hover:bg-primary_red/90 trans_animate tracking-wider block text-white mt-7 w-full md:w-[60%] lg:w-auto"
              text="Donate Now"
            />
          </Link>
        </div>
      </section>
      <Badge />
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-[25px] lg:px-16 gap-20 mt-20">
        <div className="w-full lg:w-1/2 box_shadow p-[1.5rem] lg:p-[3rem] rounded-2xl">
          <div className="w-full m-auto flex items-center justify-center">
            <button
              className={`w-1/2 py-[14px] ${
                activeButton === "enterAmount"
                  ? "bg-primary_red text-white font-bold"
                  : "text-primary_red font-bold"
              }`}
              onClick={() => handleButtonClick("enterAmount")}
            >
              Enter Amount
            </button>
            <button
              className={`w-1/2 py-[14px] ${
                activeButton === "addInformation"
                  ? "bg-primary_red text-white font-bold"
                  : "text-primary_red font-bold"
              }`}
              onClick={() => handleButtonClick("addInformation")}
            >
              Add Your Information
            </button>
          </div>
          {/* DIV ONE */}
          <div className={activeDiv === "one" ? "block mt-10" : "hidden"}>
            <div className="flex flex-col items-center justify-center">
              <span className="text-[20px] font-bold w-max">
                Online Donation
              </span>
              <p className="mt-2 text-[18px] text-center">
                How much would you like to donate? As a contributor to SCFN /
                LUTH bmt program, your donation will go directly to subsidizing
                the transplant procedure
              </p>
            </div>
            <form
              className="mt-10 w-full p-5 lg:p-10 space-y-10"
              onSubmit={handleFormSubmit}
            >
              {error && <p className="text-red-500 text-center">{error}</p>}

              <div className="flex flex-col items-start justify-start w-full">
                <label htmlFor="currency">Select Currency</label>
                <select
                  name=""
                  id=""
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full py-[14px] mt-2 border border-gray-400 rounded-md px-3"
                >
                  <option value="Select"></option>
                  <option value="NGN">NGN</option>
                  <option value="USD">USD</option>
                </select>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <label htmlFor="amount">Enter Amount</label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => {
                    const inputVal = e.target.value;
                    if (!amountRegex.test(inputVal)) {
                      setError("Input a valid amount");
                    } else {
                      setError(""); // Clear error message when valid input
                    }
                    setAmount(inputVal);
                  }}
                  placeholder="Type Here"
                  className={`w-full py-[14px] mt-2 border ${
                    error ? "border-primary_red" : "border-gray-400"
                  } rounded-md px-3`}
                />
              </div>
              <div className="flex justify-center">
                <Button
                  classes="px-[75px] py-[14px] bg-primary_red font-Lexend font-bold rounded-[4px] hover:bg-primary_red/90 trans_animate tracking-wide mt-5 text-white w-full lg:w-[60%]"
                  text="Proceed"
                />
              </div>
            </form>
          </div>
          {/* DIV TWO */}
          <div className={activeDiv === "two" ? "block mt-10" : "hidden"}>
            <div className="flex flex-col items-center justify-center">
              <span className="text-[20px] font-bold w-max">
                Who&apos;s giving today?{" "}
              </span>
              <p className="mt-2 text-[18px] text-center">
                We’ll never share this information with anyone.
              </p>
            </div>
            <form className="mt-10 w-full p-5 lg:p-10 space-y-5">
              <div className="flex flex-col items-start justify-start w-full">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full py-[14px] mt-2 border border-gray-400 rounded-md px-3"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full py-[14px] mt-2 border border-gray-400 rounded-md px-3"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="py-[14px] px-5 bg-[#DDDDDD] flex items-center justify-between w-full rounded-md  mt-3">
                  <div className="flex items-center justify-start gap-4">
                    <img
                      src="./assets/bmt/radio_btn.png"
                      alt=""
                      className="w-[25px] h-[25px]"
                    />
                    <span className="font-bold">
                      Donate with Offline Donation
                    </span>
                  </div>
                  <CiWallet className="text-3xl text-primary_red font-bold" />
                </div>
                <div className="py-[14px] px-5 bg-[#DDDDDD] flex items-center justify-between w-full rounded-md  mt-7">
                  <div className="flex items-center justify-start gap-4">
                    <img
                      src="./assets/bmt/radio_btn.png"
                      alt=""
                      className="w-[25px] h-[25px]"
                    />
                    <span className="font-bold">Donate with Paystack</span>
                  </div>
                  <BiSolidDonateHeart className="text-3xl text-primary_red font-bold" />
                </div>
              </div>
            </form>
            <div className="mt-8 px-5 lg:px-10">
              <span className="text-[20px] font-bold w-max">
                Donation Summary
              </span>
              <div className="flex justify-between mt-5 text-[18px] items-center bg-[#F5F6F8] p-4">
                <span>Payment Amount:</span> <span>N13,500</span>
              </div>
              <div className="flex justify-between mt-5 text-[18px] items-center bg-[#F5F6F8] p-4">
                <span>Giving Frequency:</span> <span>One Time</span>
              </div>
              <div className="flex justify-between mt-5 text-[18px] items-center bg-[#F5F6F8] p-4">
                <span className="font-bold">Donation Total</span>
                <span className="font-bold">N13,500</span>
              </div>
            </div>
            <div className="flex justify-center mt-7">
              <Button
                classes="px-[75px] py-[14px] bg-primary_red font-Lexend font-bold rounded-[4px] hover:bg-primary_red/90 trans_animate tracking-wide mt-5 text-white w-full lg:w-[60%]"
                text="Proceed"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full p-0 lg:p-10">
          <img src="./assets/bmt/donation.png" alt="" className="w-full" />
        </div>
      </div>
      <section className="h-max flex flex-col-reverse lg:flex-row items-center justify-center px-[25px] lg:px-16 gap-20 my-20">
        <div
          data-aos="fade-right"
          data-aos-duration="1100"
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <span className="text-[24px] lg:text-[18px] text-primary_red font-bold leading-[1.2]">
            See what Happens When You Help
          </span>
          <h2 className="w-[90%] text-[18px] lg:text-[24px] leading-[1.2] capitalize font-bold text-primary_dark">
            What We Do When You Donate us
          </h2>
          <p className="w-full text-[20px] leading-normal mt-3">
            Your donation help us subsidise the cost of transplant for persons
            that in need of quality safe and affordable stem cell
            transplantation. You become an integral part of the life changing
            journey when u donate
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="w-full lg:w-1/2 h-full p-0 sm:p-10"
        >
          <img
            src="./assets/bmt/donation_last.png"
            alt=""
            className="object-cover w-full"
          />
        </div>
      </section>
      <LatestNews />
    </>
  );
};

export default Page;
