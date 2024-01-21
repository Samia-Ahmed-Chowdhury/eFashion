import React from "react";
import { PiCloudArrowUpFill } from "react-icons/pi";
import "./SearchPage.css";
import Options from "./Options";
import { HiFilter } from "react-icons/hi";
import CatOptions from "./CatOptions";

function SideBar() {
  return (
    <div className="fixed top-1/2">
      <input type="checkbox" id="menu-toggle" />
      <label for="menu-toggle" class="menu-icon">
        <PiCloudArrowUpFill className="rightArrow text-mainColor " />
      </label>

      <div class="slideout-sidebar cart_dropdown ">
        <div className="my-5 flex items-center ">
          <HiFilter className="text-mainColor w-8 h-8 inline" />
          <h2 className="text-textC1">Filter:</h2>
        </div>
        <Options />
        <CatOptions />
      </div>
    </div>
  );
}

export default SideBar;
