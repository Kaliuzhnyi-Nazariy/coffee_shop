"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { FaRegBell, FaBagShopping } from "react-icons/fa6";
import { FaRegHeart, FaRegCopyright } from "react-icons/fa";

const MenuOpen = ({ onClose }: { onClose: () => void }) => {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalRoot(document.getElementById("root"));
  }, []);

  if (!portalRoot) return null;

  return (
    <>
      {createPortal(
        <div className="fixed top-0 right-0 w-full h-full bg-[#0D0D0D] z-10 text-white ">
          <button
            className="absolute top-6 right-6 hover:cursor-pointer z-[12]"
            onClick={() => onClose()}
          >
            {/* close */}
            <IoMdClose className="w-6 h-6" />
          </button>
          {/* MenuOpen */}
          <div className="relative w-full h-full flex flex-col items-center">
            <button className="w-full flex flex-col items-center mt-12">
              <div className="bg-white w-10 h-10 rounded-full"></div>
              <p className="text-[12px]">username</p>
            </button>
            <div className="flex gap-1 w-full justify-center mt-3">
              <Image
                src="/location.png"
                alt="location icon"
                width={24}
                height={24}
              />
              <p className="text-[14px] font-semibold">location</p>
            </div>
            <div className="w-[269px] mt-6 relative h-10">
              <input
                type="text"
                className="h-10 w-[269px] border-[1] border-white outline-1 outline-white rounded-[50px] px-[13px] py-[11px] text-[12px] text-white placeholder:text-white relative"
                placeholder="Search product.."
              />
              <button className="absolute top-3 right-4">
                <FiSearch />
              </button>
            </div>

            <ul className="mt-[45px] w-[206px] flex flex-col gap-[50px] text-[15px] text-white/50">
              <li className="hover:text-white cursor-pointer flex justify-between">
                <p>Notification</p>
                <FaRegBell className="w-5 h-5" />
              </li>
              <li className="hover:text-white cursor-pointer flex justify-between">
                <p>Wishlist</p>
                <FaRegHeart className="w-5 h-5" />
              </li>
              <li className="hover:text-white cursor-pointer flex justify-between">
                <p>Cart</p>
                <FaBagShopping className="w-5 h-5" />
              </li>
            </ul>
            <div className="absolute flex justify-center gap-1 bottom-8 items-center">
              <FaRegCopyright className="w-[18px] h-[18px]" />
              <p className="text-[12px]">2023 - damiun.cs</p>
            </div>
          </div>
        </div>,
        portalRoot
      )}
    </>
  );
};

export default MenuOpen;
