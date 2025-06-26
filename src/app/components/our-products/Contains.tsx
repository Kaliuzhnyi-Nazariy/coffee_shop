"use client";
import React, { useEffect, useState } from "react";

const Contains = ({
  category,
}: {
  category?: { hot: boolean; cold: boolean };
}) => {
  const [textInLi, setText] = useState("");

  useEffect(() => {
    if (!category) return;

    const { cold, hot } = category;

    const getCategoryLabel = () => {
      if (hot && cold) return "Ice (optional)";
      if (hot) return "";
      if (cold) return "Ice";
      return "Unknown";
    };

    const text = getCategoryLabel();

    setText(text);
  }, [category]);

  return (
    <div className="px-5 flex flex-col">
      <h3 className="text-[12px] font-medium">Product Details</h3>
      <ul className="text-[9px] text-black/50 list-disc px-4">
        <li>Water</li>
        <li>Sugar</li>
        <li>Beans (Arabica or Robusta)</li>
        {textInLi ? <li>{textInLi}</li> : <></>}
      </ul>
    </div>
  );
};

export default Contains;
