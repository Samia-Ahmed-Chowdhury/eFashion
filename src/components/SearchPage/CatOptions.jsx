"use client";
import React, { useContext } from "react";
import { catBtnContext } from "@/provider/CategoriesProvider";
import Btn from "./Btn";

function CatOptions() {
  const { btnList, catBtn_active, CatbtnClickHandler } =  useContext(catBtnContext);
  // console.log(btnList);
  return (
    <div className="mt-6 mb-4">
      <Btn props="Sub Categories" />
      <div className="flex flex-col items-start  ">
        {btnList.map((btn, index) => {
          return (
            <label key={index} className="  label cursor-pointer  gap-2">
              <input
                type="radio"
                checked={catBtn_active === btn}
                onChange={() => CatbtnClickHandler(btn)}
                className="radio border-sideColor border-2 border-opacity-100 checked:bg-mainColor checked:shadow-none"
              />
              <span className="label-text text-textC9 font-semibold">
                {btn}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default CatOptions;
