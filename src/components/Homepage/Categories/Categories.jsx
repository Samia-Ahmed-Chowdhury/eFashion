import React from "react";
import SelectionDiv from "./SelectionDiv";
import "./categories.css";
import CatButtons from "./CatButtons";

function Categories() {
  return (
    <div className="mb-32 ">
      <SelectionDiv />
      <div className="categories_bg py-32">
        <CatButtons />
      </div>
    </div>
  );
}

export default Categories;
