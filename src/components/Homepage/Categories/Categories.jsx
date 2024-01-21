import React from "react";
import SelectionDiv from "./SelectionDiv";
import "./categories.css";
import CatButtons from "./CatButtons";
import CatCards from "./CatCards";

function Categories() {
  return (
    <div className="mb-32 ">
      <SelectionDiv />
      <div className="categories_bg py-2">
        <CatButtons />
        <CatCards />
        <div className=" mb-10 mx-5 max-w-6xl  flex justify-end items-center gap-2">
          <button className="flex items-center gap-2">
            <span className="text-[#F2575D] text-[18px] font-semibold ">
              Shop More
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="18"
              viewBox="0 0 11 18"
              fill="none"
            >
              <path
                d="M2 2L9 9L2 16"
                stroke="#F2575D"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
