import Image from "next/image";
import { INews } from "./news.type";

const NewsItem = ({ newsInfo }: { newsInfo: INews }) => {
  return (
    <div className="relative">
      {newsInfo.image ? (
        <div className="relative w-full h-[168px]">
          <Image
            src={newsInfo.image}
            alt="news info"
            fill
            className="rounded-[15px] relative bg-cover"
          />
        </div>
      ) : (
        <div className="w-full h-[168px] bg-black rounded-[15px] bg-cover"></div>
      )}
      <h3 className="font-semibold text-[14px] mt-2.5 relative bottom-0">
        {newsInfo.title}
        {/* Indonesian Coffee Exports Reach IDR 16.44 Trillion */}
      </h3>
      <div className="flex justify-between mt-[15px] relative">
        <p className="italic text-[10px] text-[#818181] relative">
          {newsInfo.source}
          {/* Suara.com */}
        </p>
        <p className="text-[10px] font-light relative">
          {newsInfo.date}
          {/* 18 Jul */}
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
