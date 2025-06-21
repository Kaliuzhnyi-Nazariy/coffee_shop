import React from "react";
import Image from "next/image";

const BookAnEvent = () => {
  return (
    <section className="mt-9 relative w-full h-[310px]">
      <div className="">
        <div className="bg-black w-full h-[310px] absolute top-0 left-0 z-[2] opacity-20"></div>
        <Image
          src="/cupoftea.jpg"
          alt="cup of tea on a table"
          fill
          className="object-cover w-full scale-x-[-1] z-[1]"
        />
      </div>
      <div className="z-[3] relative px-5 pt-[30px] text-white w-[250px]">
        <h2 className="text-[20px] font-semibold">
          Request an order for your private party or event?
        </h2>
        <p className="text-[12px] font-light mt-[10px]">
          We are open to ordering party events such as weddings, celebrations,
          or other events
        </p>
        <button className="mt-[43px] h-7 w-[83px] bg-white text-black font-semibold text-[8px] px-[15px] py-2 rounded-[30px]">
          Booking Now
        </button>
      </div>
    </section>
  );
};

export default BookAnEvent;
