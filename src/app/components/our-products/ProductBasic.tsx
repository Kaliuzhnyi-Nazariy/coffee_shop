import { IProducts } from "@/app/redux/products/typesOrInterfaces";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { RiDiscountPercentLine } from "react-icons/ri";

const ProductBasic = ({ productInfo }: { productInfo: IProducts }) => {
  return (
    <div className="flex justify-center flex-col px-5">
      <h2 className="h-[66px] flex items-center">{productInfo?.title}</h2>
      <div className="flex justify-center flex-col items-center">
        <div className="relative w-[280px] h-[280px] rounded-[20px] bg-[#F4F4F4]">
          {productInfo.image ? (
            <Image
              src={productInfo.image}
              alt={productInfo.title}
              fill
              className="object-contain"
            />
          ) : (
            <p>No photo</p>
          )}
        </div>
        <div className="mt-5 flex justify-between">
          <div className="w-[280px]">
            <h3 className="font-semibold text-[14px]">{productInfo.title}</h3>
            <span className="flex w-full gap-1.5 items-center">
              <p className="font-semibold text-[18px]">${productInfo.price}</p>
              <p className="line-through text-[#B6B6B6] text-[12px]">
                $
                {Math.round(productInfo.price + (productInfo.price * 30) / 100)}
              </p>
              <span className="bg-[#A9FF81] w-8 h-4 flex justify-center items-center gap-0.5 text-[#039F00] text-[7px] rounded-[20px]">
                <RiDiscountPercentLine /> 30%
              </span>
            </span>

            <span className="flex items-center h-[18px]">
              {productInfo.rating && productInfo.rating.rate ? (
                <>
                  {" "}
                  <FaStar className="fill-[#FFC727] w-[15px] h-[15px]" />
                  <p className="font-semibold text-[11px] self-end">
                    {productInfo.rating.rate}
                  </p>
                </>
              ) : (
                <p>Undefined</p>
              )}
            </span>
          </div>
          <button className="flex content-start">
            <MdFavoriteBorder />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBasic;
