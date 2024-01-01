"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../components/Lcomp/Button";
import Badge from "../components/Lcomp/Badge";
import LatestNews from "../components/Hcomp/LatestNews";

import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const [donationAmount, setDonationAmount] = useState(0); // Initialize with 0 or any default value
  const [activeButton, setActiveButton] = useState("enterAmount");
  const [activeDiv, setActiveDiv] = useState("one");
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");

  const [error, setError] = useState("");

  const [fullNameInput, setFullNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [secondDivError, setSecondDivError] = useState("");

  const handleButtonClick = (button) => {
    setActiveButton(button);
    if (button === "enterAmount") {
      setActiveDiv("one");
    } else {
      setActiveDiv("two");
    }
  };

  const amountRegex = /^$|^[1-9][0-9]*$/; // Regex to validate only numbers
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

  const handleSecondProceed = () => {
    console.log("Proceed button clicked"); // Check if this message appears in the console

    if (!fullNameInput.trim() || fullNameInput.trim().length < 3) {
      console.log("Full Name validation failed"); // Check if this message appears in the console
      setSecondDivError("Full Name should be at least 3 characters");
    } else if (!/^\S+@\S+\.\S+$/.test(emailInput)) {
      console.log("Email validation failed"); // Check if this message appears in the console
      setSecondDivError("Please enter a valid email address");
    } else {
      console.log("Validation passed"); // Check if this message appears in the console
      // If all validations pass, perform further actions or proceed
      // For now, let's just clear the error state
      setSecondDivError("");
    }
  };

  return (
    <>
      <section className="h-max flex flex-col lg:flex-row items-center justify-center px-[25px] lg:px-16 gap-10 md:gap-20 mt-10">
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
          <p className="w-full text-[18px] md:text-[20px] text-center md:text-start leading-normal mt-8">
            Your contributions will help subsidize this life-saving procedure
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
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-[25px] lg:px-16 gap-10 md:gap-20 mt-20">
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
              <p className="leading-normal mt-2 text-[18px] md:text-[20px] text-center md:text-start">
                How much would you like to donate? As a contributor to SCFN /
                LUTH BMT program, your donation will go directly to subsidizing
                the transplant procedure
              </p>
            </div>
            <form
              className="mt-10 w-full p-0 lg:p-10 space-y-10"
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
                      setAmount(inputVal);
                      setDonationAmount(parseInt(inputVal)); // Update donation amount state
                    }
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
                Who&apos;s giving today?
              </span>
              <p className="mt-2 text-[18px] text-center">
                We’ll never share this information with anyone.
              </p>
            </div>
            {secondDivError && (
              <p className="text-red-500 text-center mt-5 text-[18px]">{secondDivError}</p>
            )}
            <form className="mt-10 w-full p-5 lg:p-10 space-y-5">
              {/* Full Name Input */}

              <div className="flex flex-col items-start justify-start w-full">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  value={fullNameInput}
                  onChange={(e) => setFullNameInput(e.target.value)}
                  placeholder="Enter Full Name"
                  className={`w-full py-[14px] mt-2 border ${
                    secondDivError &&
                    (!fullNameInput.trim() || fullNameInput.trim().length < 3)
                      ? "border-red-500"
                      : "border-gray-400"
                  } rounded-md px-3`}
                />
              </div>
              {/* Email Input */}
              <div className="flex flex-col items-start justify-start w-full">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Email Address"
                  className={`w-full py-[14px] mt-2 border ${
                    secondDivError && !/^\S+@\S+\.\S+$/.test(emailInput)
                      ? "border-red-500"
                      : "border-gray-400"
                  } rounded-md px-3`}
                />
              </div>
            </form>
            <div className="mt-8 px-5 lg:px-10">
              <span className="text-[20px] font-bold w-max">
                Donation Summary
              </span>
              {/* <div className="flex justify-between mt-5 text-[18px] items-center bg-[#F5F6F8] p-4">
                <span>Payment Amount:</span> <span>N13,500</span>
              </div>
              <div className="flex justify-between mt-5 text-[18px] items-center bg-[#F5F6F8] p-4">
                <span>Giving Frequency:</span> <span>One Time</span>
              </div> */}
              <div className="flex justify-between mt-5 text-[18px] items-center bg-[#F5F6F8] p-4">
                <span className="text-base md:text-[18px]">Donation Total</span>
                <span className="text-base md:text-[18px]">
                  N{donationAmount}
                </span>
              </div>
            </div>
            <div
              onClick={handleSecondProceed}
              className="flex justify-center mt-7"
            >
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
          <span className="text-center md:text-start text-[34px] md:text-[44px] mb-5 lg:text-[18px] text-primary_red font-bold leading-[1.2]">
            See what Happens When You Help
          </span>
          <h2 className="w-full md:w-[90%] text-[20px] lg:text-[28px] text-center md:text-start leading-[1.2] capitalize font-bold text-primary_dark">
            What We Do When You Donate us
          </h2>
          <p className="w-full text-[18px] md:text-[20px] text-center md:text-start leading-normal mt-3">
            Your donation help us subsidize the cost of transplant for persons
            that are in need of quality safe and affordable stem cell
            transplantation. <br /> You become an integral part of the life
            changing journey when you donate.
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
