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
import { userInfo } from "@/app/redux/user/selectors";
// import { useAppDispatch } from "@/app/redux/hooks";
// import { addFavorites, removeFavorites } from "@/app/redux/user/userOperations";

const Product = () => {
  const pathname = usePathname();
  const [productInfo, setProduct] = useState({} as IProducts);
  //   const dispatch = useAppDispatch();
  const [size, setSize] = useState("M");
  const [productAmount, setproductAmount] = useState(1);
  // const [isFav, setFav] = useState(false);

  // const dispatch = useAppDispatch();

  // const addFav = async ({ id, prod }: { id: string; prod: IProducts }) => {
  //   await dispatch(addFavorites({ goodId: id, prodData: prod }));
  //   return;
  // };

  // const removeFav = async (id: string) => {
  //   await dispatch(removeFavorites(id));
  //   return;
  // };

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
  const userData = useSelector(userInfo);

  useEffect(() => {
    if (productData) {
      try {
        setProduct(productData);
        localStorage.setItem("item_data", JSON.stringify(productData));

        // console.log(
        //   "isFav: ",
        //   Boolean(userData.favorites?.find((fav) => fav.id == productData.id))
        // );

        // setFav(
        //   Boolean(
        //     userData.favorites?.find((fav) => fav.id == productData.id)
        //   ) || false
        // );
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
  }, [productData, userData.favorites]);

  return (
    <div className="">
      {productsIsLoading ? (
        "Loading..."
      ) : productInfo ? (
        <>
          <ProductBasic
            productInfo={productInfo}
            isFavorite={userData.favorites}
            // addFav={addFav}
            // removeFav={removeFav}
          />
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
