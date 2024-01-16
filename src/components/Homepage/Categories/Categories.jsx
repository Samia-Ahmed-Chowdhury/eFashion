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
        <CatCards/>
      </div>
    </div>
  );
}

export default Categories;
