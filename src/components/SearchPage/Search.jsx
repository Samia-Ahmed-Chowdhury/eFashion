"use client";
import React, { useContext } from "react";
import "./SearchPage.css";


function Search() {
  const searchHandler = (e) => {
    const seachValue = e.target.value;
   
    console.log(seachValue)

  };

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
