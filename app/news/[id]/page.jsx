"use client";
import React, { useEffect, useState } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

const NewsDetails = ({ params }) => {
  const [newsDetails, setNewsDetails] = useState(null);

  useEffect(() => {
    const storedNewsData = localStorage.getItem("newsData");
    if (storedNewsData) {
      const parsedNewsData = JSON.parse(storedNewsData);
      const parsedId = parseInt(params.id); // Parse params.id to an integer

      const newsItem = parsedNewsData.find((item) => item.id === parsedId);
      if (newsItem) {
        setNewsDetails(newsItem);
        console.log("News details:", newsItem);
      } else {
        console.log("News details not found");
      }
    } else {
      console.log("No news data found in local storage");
    }
  }, [params.id]);

  return (
    <section className="px-16 py-10">
      <div className="flex items-center justify-between py-4">
        <button className="flex items-center justify-between">
          <IoChevronBackSharp className="text-3xl" />
          <span>Back</span>
        </button>
        <button className="flex items-center justify-between">
          <span>Next</span>
          <IoChevronForwardSharp className="text-3xl" />
        </button>
      </div>
      <div className="flex flex-wrap justify-start mt-8">
        {newsDetails.event_news_image_array.map((image, index) => (
          <img
            key={index}
            src={image.file_url}
            alt={`Image ${index + 1}`}
            className="w-40 h-40 object-cover m-2"
          />
        ))}
      </div>
      {newsDetails ? (
        <div>
          <h2 className="text-[32px] font-bold leading-tight mb-5">
            {newsDetails.events_news_name}
          </h2>
          <p>{newsDetails.events_news_content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default NewsDetails;
