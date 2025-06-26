import React from "react";

const AddToCart = ({
  productAmount,
  substractAmount,
  addAmount,
}: {
  productAmount: number;
  substractAmount: () => void;
  addAmount: () => void;
}) => {
  return (
    <div className="px-4 flex gap-2.5 mt-[15px]">
      <span className="flex gap-3 bg-[#F4F4F4] rounded-[20px] text-[14px] px-[15px] py-2">
        <button
          onClick={() => substractAmount()}
          disabled={productAmount == 1}
          className="disabled:opacity-40"
        >
          -
        </button>
        <p>{productAmount}</p>
        <button onClick={() => addAmount()}>+</button>
      </span>
      <button className="w-[186px] h-[37px] bg-black rounded-[20px] flex items-center gap-3 text-white justify-center text-[10px]">
        <p>+</p>
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default AddToCart;
