import { IProducts } from "@/app/redux/products/typesOrInterfaces";
import React from "react";

const Description = ({ productInfo }: { productInfo: IProducts }) => {
  return (
    <div className="flex justify-center flex-col px-5 mt-[15px]">
      <h3 className="text-[12px] font-medium">Description</h3>
      <p className="text-[9px] text-black/50">{productInfo.description}</p>
    </div>
  );
};

export default Description;
