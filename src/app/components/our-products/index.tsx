"use client";

import { useAppDispatch } from "@/app/redux/hooks";
import { getProducts } from "@/app/redux/products/operations";
import { products, productsLoading } from "@/app/redux/products/selectors";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const OurProducts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const productsArray = useSelector(products);
  const productsIsLoading = useSelector(productsLoading);

  return (
    <ul className="flex flex-wrap gap-5 pt-[100px] justify-center mb-[51px]">
      {productsIsLoading ? (
        <li>Loading...</li>
      ) : productsArray.length === 0 ? (
        <li>No products...</li>
      ) : (
        productsArray.map((product) => (
          <li
            key={product.id}
            className="w-[130px] h-[192px] rounded-[5px] border-[1] border-[#D9D9D9]"
          >
            <Card product={product} />
          </li>
        ))
      )}
    </ul>
  );
};

export default OurProducts;
