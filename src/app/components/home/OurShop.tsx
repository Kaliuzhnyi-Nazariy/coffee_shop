import Image from "next/image";
import React from "react";

const OurShop = () => {
  return (
    <section className="relative px-5 w-full h-[227px] mt-9">
      <Image src="/Woodenback.png" alt="wooden" fill className="px-5" />
      <Image
        src="/cafelogo.png"
        alt="cafe logo"
        width={40}
        height={60}
        className="absolute top-5 -translate-x-1/2 left-1/2"
      />
      <p className="text-white text-[9px] absolute z-[2] w-[244px] text-center bottom-6 -translate-x-1/2 left-1/2">
        At Damiun Coffee Shop, we take immense pride in crafting each cup of
        coffee with passion and precision. Our skilled baristas curate a diverse
        selection of specialty coffees sourced from the finest beans across the
        globe, ensuring every sip transports you to a world of unparalleled
        taste and bliss.
      </p>
    </section>
  );
};

export default OurShop;
