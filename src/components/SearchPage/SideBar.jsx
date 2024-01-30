import React from "react";
import { PiCloudArrowUpFill } from "react-icons/pi";
import "./SearchPage.css";
import Options from "./Options";
import { HiFilter } from "react-icons/hi";
import CatOptions from "./CatOptions";
import StatusOp from "./StatusOp";

function SideBar() {
  return (
    <div>
      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        <PiCloudArrowUpFill className="rightArrow text-mainColor " />
      </label>

      <div className="slideout-sidebar cart_dropdown ">
        <div className="mt-5 mb-2 flex items-center ">
          <HiFilter className="text-mainColor w-8 h-8 inline" />
          <h2 className="text-textC1">Filter:</h2>
        </div>
        <Options />
        <CatOptions />
        <StatusOp/>
      </div>
    </div>
  );
}

export default SideBar;
