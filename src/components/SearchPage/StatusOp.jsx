"use client";
import { catBtnContext } from "@/provider/CategoriesProvider";
import React, { useContext } from "react";
import Btn from "./Btn";

function StatusOp() {
    const {  statusOption, setStatusOption } = useContext(catBtnContext);

    return (
      <div>
       <Btn props="Others Options"/>
        <div className="form-control  w-full md:w-1/2  flex-row gap-4  items-center">
          <label className="label cursor-pointer  gap-2">
            <input
              type="radio"
              checked={statusOption === "Tranding"}
              onChange={() => setStatusOption("Tranding")}
              className="radio border-sideColor border-2 border-opacity-100 checked:bg-mainColor checked:shadow-none"
            />
            <span className="label-text text-textC9 font-semibold">Tranding</span>
          </label>
  
          <label className="label cursor-pointer  gap-2">
            <input
              type="radio"
              checked={statusOption === "New Collections"}
              onChange={() => setStatusOption("New Collections")}
              className="radio border-sideColor border-2 border-opacity-100 checked:bg-mainColor checked:shadow-none"
            />
            <span className="label-text text-nowrap text-textC9 font-semibold">New Collections</span>
          </label>
  
        </div>
        <div className="form-control    w-full md:w-1/2  flex-row gap-4  items-center">
          <label className="label cursor-pointer  gap-2">
            <input
              type="radio"
              checked={statusOption === "Offers"}
              onChange={() => setStatusOption("Offers")}
              className="radio border-sideColor border-2 border-opacity-100 checked:bg-mainColor checked:shadow-none"
            />
            <span className="label-text text-textC9 font-semibold">Offers</span>
          </label>
  
          
  
        </div>
      </div>
    );
}

export default StatusOp