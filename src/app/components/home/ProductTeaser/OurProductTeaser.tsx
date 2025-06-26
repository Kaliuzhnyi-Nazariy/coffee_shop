"use client";

import { useAppDispatch } from "@/app/redux/hooks";
import { getProducts } from "@/app/redux/products/operations";
import { products, productsLoading } from "@/app/redux/products/selectors";
import React, { useEffect, useState } from "react";
// import { BsBag } from "react-icons/bs";
import { useSelector } from "react-redux";
import Card from "./Card";
import Link from "next/link";

const OurProductTeaser = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const productsArray = useSelector(products);
  const productsIsLoading = useSelector(productsLoading);

  const nextPage = () => {
    if (page + 1 > productsArray.length) {
      return;
    } else {
      setPage((prev) => prev + 1);
    }
  };

  const backPage = () => {
    if (page - 1 < 0) {
      return;
    } else {
      setPage((prev) => prev - 1);
    }
  };

  const btnStyles =
    "w-[25px] h-[25px] rounded-full border-[1px] border-black bg-black text-white disabled:bg-white disabled:text-black";

  return (
    <section className="px-5 mt-[25px] flex justify-center flex-col">
      {/* make a state with start value 1 and make a request to backend (I can just add number to end of link of request and it returns one item*/}
      <div className="flex justify-between">
        <h2>Our Products</h2>
        <div className="flex gap-[25px]">
          {/*to make logic which gonna check whether click to each side i availble. Number should be betwen 1 and 18*/}
          <button
            className={btnStyles}
            onClick={() => backPage()}
            disabled={page === 0}
          >
            {"<"}
          </button>
          <button
            className={btnStyles}
            onClick={() => nextPage()}
            disabled={page === productsArray.length}
          >
            {">"}
          </button>
        </div>
      </div>
      {productsIsLoading ? (
        "Loading"
      ) : productsArray.length > 0 ? (
        <Card product={productsArray[page]} />
      ) : (
        "No products..."
      )}
      <Link
        href={"/our-products"}
        className="mt-[30px] bg-black text-white w-[62px] h-8 rounded-[50px] text-[8px] font-semibold mx-auto flex justify-center items-center"
      >
        View All
      </Link>
    </section>
  );
};

export default OurProductTeaser;
