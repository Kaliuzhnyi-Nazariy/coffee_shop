"use client";
import { IoIosMenu } from "react-icons/io";
import MenuOpen from "./MenuOpen";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();

  console.log(pathname);
  const title = () => {
    const link = pathname.slice(1, pathname.length);

    if (link === "home") return "";
    if (link === "our-products") return "Product";
  };

  const [isMenuOpen, setMenuOpen] = useState(false);

  const onOpen = () => {
    setMenuOpen(true);
  };

  const onClose = () => {
    setMenuOpen(false);
  };

  const menuStyles = `absolute top-5 right-[25px] w-[25px] h-[25px] flex justify-center items-center z-[2] ${
    title() === "" ? "text-white" : "text-black"
  }`;

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <div className="absolute z-10 w-full h-[66px]">
      <h2 className="flex items-center h-[66px] ml-5 text-[16px]">{title()}</h2>
      <button className={menuStyles} onClick={onOpen}>
        <IoIosMenu />
      </button>
      {isMenuOpen ? <MenuOpen onClose={onClose} /> : <></>}
    </div>
  );
};

export default Menu;
