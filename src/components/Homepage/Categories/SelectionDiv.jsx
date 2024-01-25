"use client";
import React, { useContext  } from "react";
import { catBtnContext } from "@/provider/CategoriesProvider";

function SelectionDiv() {

  const {selectedOption,handleSelectOption}=useContext(catBtnContext)
  // console.log(selectedOption)


  return (
    <div className="my-10 mx-6 lg:mx-auto max-w-6xl flex justify-center md:justify-normal">
      <div className="switch switch_cat">
        <input type="radio" id="switch-cat-radio1"  name="cat-radio"
        checked={selectedOption === "Kids"}
        onChange={() => handleSelectOption("Kids")}
         />
        <label htmlFor="switch-cat-radio1">Kids</label>

        <input type="radio" id="switch-cat-radio2" name="cat-radio"
         checked={selectedOption === "Women"}
         onChange={() => handleSelectOption("Women")}
        />
        <label htmlFor="switch-cat-radio2">Women</label>

        <input type="radio" id="switch-cat-radio3" name="cat-radio"
         checked={selectedOption === "Men"}
         onChange={() => handleSelectOption("Men")}
        />
        <label htmlFor="switch-cat-radio3">Men</label>

      </div>
    </div>
  );
}

export default SelectionDiv;
