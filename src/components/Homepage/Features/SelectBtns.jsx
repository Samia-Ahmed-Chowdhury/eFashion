'use client'
import React, { useContext } from "react";
import './Features.css'
import { catBtnContext } from "@/provider/CategoriesProvider";

function SelectBtns() {

    const {featuresBtn, setFeaturesBtn}=useContext(catBtnContext)
    // console.log(featuresBtn)


  return (
    <div className="mt-20 mx-6 lg:mx-auto max-w-6xl flex">
      <div className="switchBtns switch">
        <input
          type="radio"
          id="switch-btn1"
          name="radio2"
          checked={featuresBtn === "Tranding"}
          onChange={() => setFeaturesBtn("Tranding")}
        />
        <label className="lable-switch-btn1 text-nowrap" htmlFor="switch-btn1">Tranding</label>

        <input
          type="radio"
          id="switch-btn2"
          name="radio2"
          checked={featuresBtn === "New Collections"}
          onChange={() => setFeaturesBtn("New Collections")}
        />
        <label className="lable-switch-btn2 text-nowrap" htmlFor="switch-btn2">New Collections</label>

      </div>
    </div>
  );
}

export default SelectBtns;
