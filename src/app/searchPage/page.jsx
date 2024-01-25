"use client";
import CatCards from "@/components/Homepage/Categories/CatCards";
import Navbar from "@/components/Navbar/Navbar";
import CatOptions from "@/components/SearchPage/CatOptions";
import Options from "@/components/SearchPage/Options";
import React, { useContext, useState } from "react";
import "@/components/Homepage/Categories/categories.css";
import "@/components/CartPage/CartPage.css";
import SideBar from "@/components/SearchPage/SideBar";
import Search from "@/components/SearchPage/Search";
import { catBtnContext } from "@/provider/CategoriesProvider";

function Page() {
  const { searchData, catWiseCards } = useContext(catBtnContext);
  return (
    <div className="categories_bg pb-2">
      <Navbar />
      <SideBar />

      <div className="flex flex-col-reverse md:flex-row   mx-6 lg:mx-auto max-w-6xl">
        {searchData ? (
         <p  className="text-lg font-medium text-center md:ml-auto text-textC9 mt-5">
          About {catWiseCards.length} results for {searchData}</p>
        ) : (
          <h5 className=" text-2xl font-bold text-center md:ml-auto text-textC1 mt-5">
            All Products
          </h5>
        )}
        <Search />
      </div>
      <CatCards />
    </div>
  );
}

export default Page;
