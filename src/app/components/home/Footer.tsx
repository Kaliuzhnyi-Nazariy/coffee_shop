import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2B2B2B] flex justify-center flex-col px-5 pt-[30px] pb-4 text-white text-[8px]">
      <Image src="/cafelogo.png" alt="logo of cafe" width={34} height={52} />
      <ul className="mt-2">
        <li>
          <a href="mailto:damiun@coffee.co.id">damiun@coffee.co.id</a>
        </li>
        <li className="mt-2">
          <a href="tel:6282100009090">(+62) 821-0000-9090</a>
        </li>
      </ul>
      <ul className="flex gap-[26px] mt-[25px]">
        <li>
          <h3 className="text-[11px]">Shop</h3>

          <ul className="mt-[14px] font-light flex flex-col gap-2">
            <li>Blog</li>
            <li>Product</li>
            <li>Booking</li>
          </ul>
        </li>
        <li>
          <h3 className="text-[11px]">Legal</h3>

          <ul className="mt-[14px] font-light flex flex-col gap-2">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
          </ul>
        </li>
        <li>
          <h3 className="text-[11px]">Service</h3>

          <ul className="mt-[14px] font-light flex flex-col gap-2">
            <li>Sent with Courier</li>
            <li>Drive Thru</li>
            <li>In Place</li>
          </ul>
        </li>
      </ul>

      <hr className="color-[rgba(255,255,255,0.5)] mt-4" />

      <p className="mt-5">@2023 damiun.cs</p>
    </footer>
  );
};

export default Footer;
