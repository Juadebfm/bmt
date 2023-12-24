"use client";

import React, { useEffect, useState } from "react";

const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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

  return (
    <section className="h-screen px-[25px] sm:px-16 mt-10 w-full flex flex-col items-center justify-start">
      <h1 className="text-[34px] lg:text-[44px] w-full leading-[1.2] capitalize font-[600] text-primary_red text-center">
        Latest News & Updates
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {newsData.map((newsItem) => (
          <div key={newsItem.id}>
            <h2>{newsItem.events_news_name}</h2>
            {/* Render other details */}
          </div>
        ))}
      </div>
      <div className="self-end">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`${currentPage} / ${totalPages}`}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </section>
  );
};

export default LatestNews;
