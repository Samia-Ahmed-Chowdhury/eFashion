"use client";
import React, { useContext } from "react";
import { catBtnContext } from "@/provider/CategoriesProvider";

function CatButtons() {
  const { catWiseCards, setCatWiseCards, showCards, allProductData ,btnList} =useContext(catBtnContext);
  console.log(catWiseCards);

  // const btnList = ["All", ...new Set(allProductData.map((curElem) => {
  //       return curElem.subCategory;
  //     })
  //   ),
  // ];

  return (
    <div className="mx-5 lg:mx-auto max-w-6xl space-x-5">
      {btnList.map((btn, index) => {
        return (
          <button
            onClick={() => showCards(btn)}
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
