"use client";
import React, { useContext  } from "react";
import { catBtnContext } from "@/provider/CategoriesProvider";

function SelectionDiv() {

  const {selectedOption,handleSelectOption}=useContext(catBtnContext)
  // console.log(selectedOption)


  return (
    <div className="my-10 mx-5 lg:mx-auto max-w-6xl flex justify-center md:justify-normal">
      <div className="switch">
        <input type="radio" id="switch-radio1"  name="radio"
        checked={selectedOption === "Kids"}
        onChange={() => handleSelectOption("Kids")}
         />
        <label htmlFor="switch-radio1">Kids</label>

        <input type="radio" id="switch-radio2" name="radio"
         checked={selectedOption === "Women"}
         onChange={() => handleSelectOption("Women")}
        />
        <label htmlFor="switch-radio2">Women</label>

        <input type="radio" id="switch-radio3" name="radio"
         checked={selectedOption === "Men"}
         onChange={() => handleSelectOption("Men")}
        />
        <label htmlFor="switch-radio3">Men</label>

      </div>





      {/* <div className="toggle_div">
        <span>Kids</span>
        <span className="mx-14">Women</span>
        <span>Men</span>
      </div> */}
    </div>
  );
}

export default SelectionDiv;
