import React from "react";

const ChoseSize = ({
  size,
  setSize,
}: {
  size: string;
  setSize: (size: string) => void;
}) => {
  return (
    <div className="mt-[15px] flex justify-center flex-col px-5 items-center">
      <h4 className="font-medium text-[12px] items-start">Size</h4>
      <ul className="mt-3 flex gap-2.5">
        <li>
          <button
            className={`rounded-sm px-[14px] font-medium text-[13px] border-[1] border-[#D9D9D9] disabled:bg-white disabled:text-[#D9D9D9] ${
              size === "S" ? "bg-black text-[#D9D9D9]" : "bg-[#D9D9D9]"
            }`}
            onClick={() => setSize("S")}
          >
            S
          </button>
        </li>
        <li>
          <button
            className={`rounded-sm px-[14px] font-medium text-[13px] border-[1] border-[#D9D9D9] disabled:bg-white disabled:text-[#D9D9D9] ${
              size === "M" ? "bg-black text-[#D9D9D9]" : "bg-[#D9D9D9]"
            }`}
            onClick={() => setSize("M")}
          >
            M
          </button>
        </li>
        <li>
          <button
            className={`rounded-sm px-[14px] font-medium text-[13px] border-[1] border-[#D9D9D9] disabled:bg-white disabled:text-[#D9D9D9] ${
              size === "L" ? "bg-black text-[#D9D9D9]" : "bg-[#D9D9D9]"
            }`}
            onClick={() => setSize("L")}
          >
            L
          </button>
        </li>
        <li>
          <button
            className={`rounded-sm px-[14px] font-medium text-[13px] border-[1] border-[#D9D9D9] disabled:bg-white disabled:text-[#D9D9D9] ${
              size === "XL" ? "bg-black text-[#D9D9D9]" : "bg-[#D9D9D9]"
            }`}
            disabled
          >
            XL
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ChoseSize;
