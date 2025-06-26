import { IProducts } from "@/app/redux/products/typesOrInterfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsBag } from "react-icons/bs";

const Card = ({ product }: { product: IProducts }) => {
  const { title, price, image, category } = product;

  const getCategoryLabel = () => {
    if (category.hot && category.cold) return "Hot & Cold";
    if (category.hot) return "Hot";
    if (category.cold) return "Ice";
    return "Unknown";
  };

  return (
    <Link href={`/our-products/${title}/${product.id}`}>
      <div className="w-[280px] h-[260px] bg-[#F4F4F4] mx-auto relative mt-5 rounded-[20px]">
        <button className="absolute top-3 right-3 flex items-center justify-center">
          <BsBag className="w-6 h-6" />
        </button>
        <Image
          src={image}
          alt="Product image"
          fill
          className="z-[2] absolute top-0 right-0 object-cover"
        />
      </div>

      <div className="grid grid-cols-2 grid-rows-2 w-[280px] mx-auto items-center mt-2.5">
        <h3 className="text-[14px] font-semibold">{title}</h3>
        <p className="text-[11px] font-medium border border-black w-[45px] flex items-center justify-center rounded-[30px]">
          {price}$
        </p>
        <p className="text-[10px] col-span-2">
          Category:
          <span className="font-medium">{getCategoryLabel()} Coffee</span>
        </p>
      </div>
    </Link>
  );
};

export default Card;
