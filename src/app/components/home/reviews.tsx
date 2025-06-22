import React from "react";

const ReviewsSection = () => {
  return (
    <section className="mt-[45px] px-5">
      <h2 className="text-[18px] font-semibold w-[200px]">
        See what <span className="text-[#EC8B1E]">others are saying</span>.
      </h2>
      <div className="flex gap-[5px] mt-[22px] justify-center">
        <button>←</button>
        <div className="w-[236px] h-[294px] border-[1px] border-[#D9D9D9] rounded-[20px] pt-[30px] pr-[23px] pl-[15px] pb-[25px]">
          <div className="h-[175px]">
            <p className="text-[16px] h-[155px] overflow-y-hidden commentshadow">
              “Feel happy shopping from Damiun products, the place is clean, the
              service is good, what is most appropriate for me is because the
              prices are friendly for the lower class“
            </p>
            <a href="" className="text-[8px]">
              read more
            </a>
          </div>
          <div className="mt-[23px] flex items-center gap-2.5">
            <div className="w-[45px] h-[45px] bg-black rounded-full"></div>
            <div className="">
              <p className="text-[12px]">Katty Rahmawati</p>
              <p className="text-[10px] italic text-[#818181]">Freelance</p>
            </div>
          </div>
        </div>
        <button>→</button>
      </div>
    </section>
  );
};

export default ReviewsSection;
