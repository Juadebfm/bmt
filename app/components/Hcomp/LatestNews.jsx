"use client";

import React, { useEffect, useState } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const router = useRouter();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;

        if (!apiKey) {
          console.error("API key not found!");
          return;
        }

        const requestOptions = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          redirect: "follow",
        };

        const response = await fetch(
          `https://www.sicklecellfoundation.com/scfn-luth-api/api/admin/get-events-and-news?page=${currentPage}`,
          requestOptions
        );

        if (response.ok) {
          const result = await response.json();
          setNewsData(result.data);
          setTotalPages(result.last_page);
          console.log("Fetched news data:", result.data); // Log the fetched data
        } else {
          console.error("Failed to fetch data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNews();
  }, [currentPage]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const generatePagination = () => {
    const pageNumbers = [];
    const maxVisibleButtons = 5; // Number of page numbers to show before/after ellipsis

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - maxVisibleButtons &&
          i <= currentPage + maxVisibleButtons)
      ) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers.map((pageNumber) => (
      <button
        key={pageNumber}
        onClick={() => handlePageClick(pageNumber)}
        className={
          currentPage === pageNumber ? "active-page" : "text-slate-400"
        }
      >
        {pageNumber}
      </button>
    ));
  };

  const isBackDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  const colors = ["border-red-500", "border-blue-500", "border-yellow-500"]; // Tailwind classes for border colors

  const getRandomColorClass = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const handleReadMoreClick = (id) => {
    router.push(`/news/${id}`);
  };

  return (
    <section className="h-max px-[25px] sm:px-16 mt-10 w-full flex flex-col items-center justify-start">
      <div>
        <h1 className="text-[34px] lg:text-[44px] w-full leading-[1.2] capitalize font-[600] text-primary_red text-center mb-3">
          Latest News & Updates
        </h1>
        <p className="text-[19px] text-center leading-normal mb-10">
          Lorem ipsum dolor sit amet consectetur. Euismod amet in mi integer
          risus leo enim mi. Neque viverra facilisi nec semper nullam ipsum. In
          imperdiet cursus augue donec elit nibh.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 mb-10">
        {newsData.map((newsItem) => (
          <div
            key={newsItem.id}
            className="shadow-md p-5 rounded-md hover:shadow-xl transition-shadow"
          >
            {newsItem.category_type === "news" ? (
              <div className="flex flex-col items-center justify-between h-[580px]">
                <div className="mb-5 relative">
                  <img
                    src={newsItem.events_news_front_image}
                    alt=""
                    className="w-full h-full rounded-lg"
                  />
                  <div className="custom_shape absolute z-25 bottom-0"></div>
                </div>

                <div className="space-y-3">
                  <span
                    className={`inline-block px-2 py-0 text-[#232323]/50 font-bold tracking-wider uppercase text-[15px] border-s-2 ${getRandomColorClass()}`}
                  >
                    News
                  </span>
                  <h2 className="font-bold mb-3 leading-5 line-clamp-4">
                    {newsItem.events_news_name}
                  </h2>
                  <p className="text-[#777777] text-sm">
                    <span className="line-clamp-5">
                      {newsItem.events_news_content}
                    </span>{" "}
                    <span
                      onClick={() => handleReadMoreClick(newsItem.id)}
                      className="text-primary_red cursor-pointer hover:underline transition mt-1"
                    >
                      Read More
                    </span>
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-start w-full">
                  <Image
                    width={100}
                    height={30}
                    src="/assets/bmt/news_logo.png"
                    alt="sfcn logo"
                  />
                </div>
              </div>
            ) : (
              <div
                style={{
                  backgroundImage: `url(${newsItem.events_news_front_image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "300px", // Set your desired height
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "20px",
                  color: "#fff", // Set text color for events
                }}
              >
                <h2>{newsItem.events_news_name}</h2>
                {/* You can add additional content for events */}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="self-end flex items-center justify-center space-x-3">
        <button
          className={
            isBackDisabled
              ? "flex items-center space-x-1 justify-center opacity-50"
              : "flex items-center space-x-1 justify-center opacity-100"
          }
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          <IoChevronBackSharp /> <span>Back</span>
        </button>
        <span className="flex item-center justify-center space-x-3">
          {generatePagination()}
        </span>
        <button
          className={
            isNextDisabled
              ? "flex items-center space-x-1 justify-center opacity-50"
              : "flex items-center space-x-1 justify-center opacity-100"
          }
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          <span>Next</span> <IoChevronForwardSharp />
        </button>
      </div>
    </section>
  );
};

export default LatestNews;
