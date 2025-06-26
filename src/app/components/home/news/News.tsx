"use client";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { getNews } from "./news.request";
import { INews } from "./news.type";

const News = () => {
  const [page, setPage] = useState(1);
  const [news, setNews] = useState([] as INews[]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      const newsFetch = async () => {
        setNews(await getNews());
      };

      newsFetch();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const pageBack = () => {
    if (page <= 1) {
      return;
    }

    setPage((prev) => prev - 1);
  };

  const pageForward = () => {
    if (page + 1 > news.length) {
      setPage(1);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <section className="flex justify-center flex-col px-5 mt-[45px]">
      <h2 className="font-semibold text-[18px]">Our Latest News</h2>
      <div className="mt-5 w-[280px] mx-auto">
        {/* <Image />
        <div className="w-full h-[168px] bg-black rounded-[15px]"></div>
        <h3 className="font-semibold text-[14px] mt-2.5">
          Indonesian Coffee Exports Reach IDR 16.44 Trillion
        </h3>
        <div className="flex justify-between mt-[15px]">
          <p className="italic text-[10px] text-[#818181]">Suara.com</p>
          <p className="text-[10px] font-light">18 Jul</p>
        </div> */}
        {isLoading ? (
          "Loading"
        ) : news.length > 0 ? (
          <NewsItem newsInfo={news[page - 1]} />
        ) : (
          "no news"
        )}
        <hr className="color-[#C1C1C1] bg-[#C1C1C1] bg-gradient-to-r from-[#C1C1C1] via-[#C1C1C1] to-[#C1C1C1]" />
        <div className="flex mt-[18px] items-center justify-between">
          <button className="px-3.5 py-2.5 border-[1px] border-black rounded-[50px] h-[34px] w-[74px] text-[8px] font-medium">
            Read More
          </button>
          <div className="flex gap-[25px]">
            <button
              className="w-[25px] h-[25px] rounded-full border-[1px] border-black bg-black text-white disabled:bg-white disabled:text-black"
              onClick={() => pageBack()}
              disabled={page <= 1}
            >
              {"<"}
            </button>
            <button
              className="w-[25px] h-[25px] rounded-full border-[1px] border-black bg-black text-white"
              onClick={() => pageForward()}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
