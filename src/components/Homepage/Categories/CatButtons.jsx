"use client";
import React, { useContext } from "react";
import { catBtnContext } from "@/provider/CategoriesProvider";

function CatButtons() {
  const { showCardsHandler ,btnList} =useContext(catBtnContext);
  // console.log(btnList);

  return (
    <div className=" mx-5 lg:mx-auto max-w-6xl space-x-5">
      {btnList.map((btn, index) => {
        return (
          <button
            onClick={() => showCardsHandler(btn)}
            key={index}
            className="catBtns"
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
}

export default CatButtons;

