"use client";
import React, { useContext, useState } from "react";
import { catBtnContext } from "@/provider/CategoriesProvider";

function CatButtons() {
  const {  btnList,catBtn_active ,CatbtnClickHandler} = useContext(catBtnContext);
  // console.log(btnList);
 


  return (
    <div className="ml-5 md:ml-0 overflow-x-auto whitespace-nowrap lg:mx-auto max-w-6xl space-x-5">
      {btnList.map((btn, index) => {
        return (
          <button
            onClick={() => CatbtnClickHandler(btn)}
            key={index}
            className={`${catBtn_active === btn ? 'catBtn_active ' : 'catBtns'}`}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
}

export default CatButtons;
