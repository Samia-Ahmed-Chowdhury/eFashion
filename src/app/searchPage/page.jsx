"use client";
import CatCards from "@/components/Homepage/Categories/CatCards";
import Navbar from "@/components/Navbar/Navbar";
import React, { useContext, useState } from "react";
import "@/components/Homepage/Categories/categories.css";
import "@/components/CartPage/CartPage.css";
import SideBar from "@/components/SearchPage/SideBar";
import Search from "@/components/SearchPage/Search";
import { catBtnContext } from "@/provider/CategoriesProvider";
import { PiArrowFatLineLeftFill } from "react-icons/pi";
import { useRouter } from "next/navigation";

function Page() {
  const { searchData, catWiseCards,statusOption } = useContext(catBtnContext);
  const router = useRouter();

  return (
    <div className="categories_bg pb-2">
      <Navbar />
      <SideBar />

      <div className="flex flex-col-reverse justify-between items-center md:flex-row mt-5  mx-6 lg:mx-auto max-w-6xl">
        <div className="order-5 mr-auto md:mr-0 md:order-none">
          <span
            className=" text-[#F2575D] cursor-pointer"
            onClick={() => {
              router.back();
            }}
          >
            <PiArrowFatLineLeftFill className="text-3xl cursor-pointer inline backIcon text-[#F2575D]" />
            Back
          </span>
        </div>

        <div className="">
          {searchData ? (
            <p className="text-lg font-medium   text-textC9 mt-5">
              About {catWiseCards.length} results for {searchData}
            </p>
          ) : (
            <h5 className=" text-2xl font-bold   text-textC1 mt-5">
             {` All ${statusOption && statusOption} Products`}
            </h5>
          )}
        </div>

        <Search  className="" />
      </div>
      <CatCards />
    </div>
  );
}

export default Page;
