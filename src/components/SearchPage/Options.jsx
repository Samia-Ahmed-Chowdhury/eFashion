"use client";
import { catBtnContext } from "@/provider/CategoriesProvider";
import React, { useContext } from "react";
import Btn from "./Btn";

function Options() {
  const { selectedOption, handleSelectOption } = useContext(catBtnContext);

  return (
    <div className="my-3 ">
     <Btn props="Categories"/>

      {/* <h2 className="text-textC9 text-sm mb-2">Categories:</h2> */}
      <div className="form-control  w-full md:w-1/2  flex-row gap-4  items-center">
        <label className="label cursor-pointer  gap-2">
          <input
            type="radio"
            checked={selectedOption === "Kids"}
            onChange={() => handleSelectOption("Kids")}
            className="radio border-sideColor border-2 border-opacity-100 checked:bg-mainColor checked:shadow-none"
          />
          <span className="label-text text-textC9 font-semibold">Kids</span>
        </label>

        <label className="label cursor-pointer  gap-2">
          <input
            type="radio"
            checked={selectedOption === "Women"}
            onChange={() => handleSelectOption("Women")}
            className="radio border-sideColor border-2 border-opacity-100 checked:bg-mainColor checked:shadow-none"
          />
          <span className="label-text text-textC9 font-semibold">Women</span>
        </label>

        <label className="label cursor-pointer  gap-2">
          <input
            type="radio"
            checked={selectedOption === "Men"}
            onChange={() => handleSelectOption("Men")}
            className="radio border-sideColor border-2 border-opacity-100 checked:bg-mainColor checked:shadow-none"
          />
          <span className="label-text text-textC9 font-semibold">Men</span>
        </label>
      </div>
    </div>
  );
}

export default Options;
