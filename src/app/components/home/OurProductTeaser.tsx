import React from "react";
import { BsBag } from "react-icons/bs";

const OurProductTeaser = () => {
  return (
    <section className="px-5 mt-[25px] flex justify-center flex-col">
      {/* make a state with start value 1 and make a request to backend (I can just add number to end of link of request and it returns one item*/}
      <div className="flex justify-between">
        <h2>Our Products</h2>
        <div className="flex gap-[25px]">
          {/*to make logic which gonna check whether click to each side i availble. Number should be betwen 1 and 18*/}
          <button className="w-[25px] h-[25px] rounded-full border-[1px] border-black">
            {"<"}
          </button>
          <button className="w-[25px] h-[25px] rounded-full border-[1px] border-black bg-black text-white">
            {">"}
          </button>
        </div>
      </div>
      <div className="">
        <div className="w-[280px] h-[260px] bg-[#F4F4F4] mx-auto relative mt-5 rounded-[20px]">
          <button className="absolute top-3 right-3 flex items-center justify-center">
            <BsBag className="w-6 h-6" />
          </button>
          {/* <Image
                src="/cafelogo.png"
                alt="Cafe logo"
                width={180}
                height={190}
                className="z-[2] absolute top-5 left-1/2 -translate-x-1/2"
              /> */}
        </div>

        <div className="grid grid-cols-2 grid-rows-2 w-[280px] mx-auto align-middle items-center">
          <h3 className="text-[14px] font-semibold">Espresso Ice Coffee</h3>
          <p className="text-[11px] font-medium border-[1px] border-black w-[45px] flex items-center justify-center rounded-[30px]">
            10.00$
          </p>
          <p className="text-[10px]">
            Category: <span className="font-medium">Ice Coffee</span>
          </p>
        </div>
      </div>
      <button className="mt-[30px] bg-black text-white w-[62px] h-8 rounded-[50px] text-[8px] font-semibold mx-auto">
        View All
      </button>
    </section>
  );
};

export default OurProductTeaser;
