"use client";
import React, { useEffect, useState } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

const NewsDetails = ({ params }) => {
  const [newsDetails, setNewsDetails] = useState(null);

  useEffect(() => {
    const storedNewsData = localStorage.getItem("newsData");
    if (storedNewsData) {
      const parsedNewsData = JSON.parse(storedNewsData);
      const parsedId = parseInt(params.id, 10); // Parse params.id to an integer

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
    <section className="px-[25px] md:px-16 py-[20px] md:py-10">
      <div className="flex items-center justify-between py-4">
        {/* Back and Next buttons */}
      </div>
      {newsDetails ? (
        <div>
          <h2 className="text-[22px] md:text-[32px] font-bold leading-tight mb-5">
            {newsDetails.events_news_name}
          </h2>
          <div className="flex overflow-x-auto scroll_snap scrollbar-thin scrollbar-thumb-primary_dark scrollbar-track-primary_faded_grey/50 justify-start gap-5 mt-8 mb-10">
            {newsDetails.event_news_image_array.map((image, index) => (
              <img
                key={index}
                src={image.file_url}
                alt={`Image ${index + 1}`}
                className="w-40 h-40 object-cover m-2 h-[260px] w-[350px] rounded-2xl shadow-md border border-slate-100"
              />
            ))}
          </div>
          <div>
            <p>{newsDetails.events_news_content}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default NewsDetails;
