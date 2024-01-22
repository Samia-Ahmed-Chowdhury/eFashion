"use client";
import "./SearchPage.css";
import React, {  useContext, useState } from "react";
import { catBtnContext } from "@/provider/CategoriesProvider";

function Search() {
  const { searchHandler } = useContext(catBtnContext);

  return (
    <>
      <div className="ml-auto">
        <input
          type="text"
          onChange={searchHandler}
          placeholder="search here.."
          className="input input-bordered search_area"
        />
      </div>
    </>
  );
}

export default Search;
