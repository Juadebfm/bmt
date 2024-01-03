"use client";

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Button from "../Lcomp/Button";
import { CgMenuHotdog } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {

  // Function for animation
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // Sstates
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [showChevronUp, setShowChevronUp] = useState(false); // Added state for chevron direction
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);

  const [showMenu, setShowMenu] = useState(false); // State to manage menu visibility

  const menuRef = useRef(null); // Reference to the entire menu area

  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setShowMenu(false);
        setShowChevronUp(false); // Reset the chevron icon to the default state
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu); // Toggle menu visibility on button click
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Set a threshold value for scroll position when you want the opacity change to occur
      const threshold = 50; // Adjust this value according to your design

      if (scrollPosition > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowMoreDropdown(true);
    setShowChevronUp(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMoreDropdown(false);
      setShowChevronUp(false);
    }, 200); // Adjust this delay (in milliseconds) as needed
  };

  const handleDropdownMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMoreDropdown(false);
      setShowChevronUp(false);
    }, 200);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const [currentURL, setCurrentURL] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    setCurrentURL(window.location.href); // Store current URL when component mounts
  }, []);

  useEffect(() => {
    setCurrentURL(window.location.href); // Update current URL when pathname changes
  }, [pathname]);

  const handleLinkClick = () => {
    setShowMenu(false); // Close the menu on link click
    setShowMoreDropdown(false); // Close dropdowns on link click
    setShowChevronUp(false); // Reset chevron on link click
  };

  return (
    <nav
      className={`font-Lexend bg-primary_dark px-[20px] lg:px-16 py-8 lg:py-3 grid_col-fix_sm sm:grid_col-fix text-[#fffff2] w-screen text-[16.5px] fixed left-0 top-0 z-50 ${
        isScrolled ? "opacity-100" : "" // Apply opacity class based on scroll state
      }`}
    >
      <Link href="/">
        <div className="w-full h-max sm:w-auto sm:h-auto">
          <img src="/assets/bmt/main_logo.png" alt="BMT Logo" className="" />
        </div>
      </Link>

      {/* Render the ul based on showMenu state */}
      {showMenu && (
        <ul
          data-aos="fade-right"
          ref={menuRef} // Set the reference to the entire menu area
          className="absolute left-0 top-[100%] bg-white text-[#232323] flex flex-col items-start justify-start gap-8 group:cursor-pointer font-Lexend w-max md:w-[40%] h-max rounded-r-lg px-10 py-12 md:px-14 shadow-md border border-slate-100 text-base"
        >
          <Link
            onClick={handleLinkClick}
            href="/about"
            className={
              pathname == "/about"
                ? "active_class"
                : "hover:text-slate-300 duration-200 transition-all ease-linear w-max"
            }
          >
            About Us
          </Link>
          <Link
            onClick={handleLinkClick}
            href="/services"
            className={
              pathname == "/services"
                ? "active_class"
                : "hover:text-slate-300 duration-200 transition-all ease-linear w-max"
            }
          >
            Services
          </Link>
          <Link
            onClick={handleLinkClick}
            href="/contact"
            className={
              pathname == "/contact"
                ? "active_class"
                : "hover:text-slate-300 duration-200 transition-all ease-linear w-max"
            }
          >
            Contact Us
          </Link>
          <Link
            onClick={handleLinkClick}
            href="/donation"
            className={
              pathname == "/donation"
                ? "active_class"
                : "hover:text-slate-700 duration-200 transition-all ease-linear w-max"
            }
          >
            Donation
          </Link>
          <Link
            onClick={handleLinkClick}
            href="/education"
            className={
              pathname == "/education"
                ? "active_class"
                : "duration-200 transition-all ease-linear w-max"
            }
          >
            Education & Awareness
          </Link>
          <Link
            onClick={handleLinkClick}
            href="/research"
            className={
              pathname == "/research"
                ? "active_class"
                : "hover:text-slate-700 duration-200 transition-all ease-linear w-max"
            }
          >
            Research & Innovation{" "}
          </Link>
          <Link
            onClick={handleLinkClick}
            href="/whattoexpect"
            className={
              pathname == "/whattoexpect"
                ? "active_class"
                : "hover:text-slate-700 duration-200 transition-all ease-linear w-max"
            }
          >
            Patient Information
          </Link>
          <Link
            onClick={handleLinkClick}
            href="/faq"
            className={
              pathname == "/faq"
                ? "active_class"
                : "hover:text-slate-700 duration-200 transition-all ease-linear w-max"
            }
          >
            FAQ
          </Link>

          <Link href="/donation" onClick={handleLinkClick}>
            <Button
              classes="px-8 py-2 bg-primary_red font-Lexend font-normal rounded-[4px] text-base hover:bg-primary_red/80 trans_animate tracking-wide text-white w-full"
              text="Donate Now"
            />
          </Link>
        </ul>
      )}

      <ul className="hidden lg:flex items-center justify-center gap-12 group:cursor-pointer font-Lexend w-full ml-10">
        <Link
          href="/about"
          className={
            pathname == "/about"
              ? "active_class"
              : "hover:text-slate-300 duration-200 transition-all ease-linear w-max"
          }
        >
          About Us
        </Link>
        <Link
          href="/services"
          className={
            pathname == "/services"
              ? "active_class"
              : "hover:text-slate-300 duration-200 transition-all ease-linear w-max"
          }
        >
          Services
        </Link>
        <Link
          href="/contact"
          className={
            pathname == "/contact"
              ? "active_class"
              : "hover:text-slate-300 duration-200 transition-all ease-linear w-max"
          }
        >
          Contact Us
        </Link>
        <div
          className="cursor-pointer hover:text-slate-300 duration-200 transition-all ease-linear w-max"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
          onClick={() => {
            setShowMoreDropdown(!showMoreDropdown);
            setShowChevronUp(!showChevronUp); // Toggle chevron direction on click
          }}
        >
          <div className="flex items-center justify-center gap-3">
            <span>More</span>
            {showChevronUp ? <FaChevronUp /> : <FaChevronDown />}{" "}
            {/* Render chevron based on state */}
          </div>
          <div
            className={`flex flex-col bg-white text-primary_dark font-Lexend p-8 font-normal rounded-[16px] trans_animate space-y-4 ${
              showMoreDropdown ? "show_more_nav" : "hidden"
            }`}
          >
            <Link
              href="/donation"
              className={
                pathname == "/donation"
                  ? "active_class"
                  : "hover:text-slate-700 duration-200 transition-all ease-linear w-max"
              }
            >
              Donation
            </Link>
            <Link
              href="/education"
              className={
                pathname == "/education"
                  ? "active_class"
                  : "duration-200 transition-all ease-linear w-max"
              }
            >
              Education & Awareness
            </Link>
            <Link
              href="/research"
              className={
                pathname == "/research"
                  ? "active_class"
                  : "hover:text-slate-700 duration-200 transition-all ease-linear w-max"
              }
            >
              Research & Innovation{" "}
            </Link>
            <Link
              href="/whattoexpect"
              className={
                pathname == "/whattoexpect"
                  ? "active_class"
                  : "hover:text-slate-700 duration-200 transition-all ease-linear w-max"
              }
            >
              Patient Information
            </Link>
            <Link
              href="/faq"
              className={
                pathname == "/faq"
                  ? "active_class"
                  : "hover:text-slate-700 duration-200 transition-all ease-linear w-max"
              }
            >
              FAQ
            </Link>
          </div>
        </div>
      </ul>

      <div className="hidden lg:block w-max pl-12">
        <Link href="/donation">
          <Button
            classes="px-[48px] py-4 bg-primary_red font-Lexend font-bold rounded-[4px] text-[15px] hover:bg-primary_red/80 trans_animate tracking-wide"
            text="Donate Now"
          />
        </Link>
      </div>

      {showMenu ? (
        // If the menu is open, render the "X" icon
        <CgClose
          data-aos="fade-in"
          className="w-[45px] h-[45px] lg:hidden cursor-pointer bg-primary_red rounded-full p-2 absolute right-[20px]"
          onClick={toggleMenu}
        />
      ) : (
        // If the menu is closed, render the CgMenuHotdog icon
        <CgMenuHotdog
          data-aos="fade-in"
          className="w-[45px] h-[45px] lg:hidden cursor-pointer bg-primary_red rounded-full absolute right-[20px]"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
