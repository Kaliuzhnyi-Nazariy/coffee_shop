"use client";

import { product, productsLoading } from "@/app/redux/products/selectors";
import { IProducts } from "@/app/redux/products/typesOrInterfaces";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductBasic from "./ProductBasic";
import ChoseSize from "./ChoseSize";
import AddToCart from "./AddToCart";
import Description from "./Description";
import Contains from "./Contains";
import Shop from "./Shop";

const Product = () => {
  const pathname = usePathname();
  const [productInfo, setProduct] = useState({} as IProducts);
  //   const dispatch = useAppDispatch();
  const [size, setSize] = useState("M");
  const [productAmount, setproductAmount] = useState(1);

  const addAmount = () => {
    setproductAmount((prev) => prev + 1);
  };

  const substractAmount = () => {
    if (productAmount - 1 < 1) return;
    setproductAmount((prev) => prev - 1);
  };

  const productId = () => {
    return pathname.split("/")[3];
  };

  const productData = useSelector(product(productId()));
  const productsIsLoading = useSelector(productsLoading);

  useEffect(() => {
    if (productData) {
      try {
        setProduct(productData);
        localStorage.setItem("item_data", JSON.stringify(productData));
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const stored = localStorage.getItem("item_data");
        if (stored) {
          console.log(stored);
          setProduct(JSON.parse(stored));
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [productData]);

  return (
    <div className="">
      {productsIsLoading ? (
        "Loading..."
      ) : productInfo ? (
        <>
          <ProductBasic productInfo={productInfo} />
          <hr className="w-full h-[5px] color-[#F2F2F2] mt-[15px]" />
          <ChoseSize size={size} setSize={setSize} />
          <div className="mt-[15px] h-[5px] w-full bg-linear-to-t from-[#DDDDDD] to-transparent"></div>
          <AddToCart
            productAmount={productAmount}
            addAmount={addAmount}
            substractAmount={substractAmount}
          />
          <Description productInfo={productInfo} />
          <div className="mt-[15px] h-[5px] w-full bg-[#F2F2F2]"></div>
          <Contains category={productInfo.category} />
          <div className="mt-[15px] h-[5px] w-full bg-[#F2F2F2]"></div>
          <Shop />
          <div className="mt-[15px] mb-[15px] h-[5px] w-full bg-[#F2F2F2]"></div>
        </>
      ) : (
        "no product data"
      )}
    </div>
  );
};

export default Product;
