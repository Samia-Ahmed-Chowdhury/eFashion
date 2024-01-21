"use client";
import CatCards from "@/components/Homepage/Categories/CatCards";
import Navbar from "@/components/Navbar/Navbar";
import CatOptions from "@/components/SearchPage/CatOptions";
import Options from "@/components/SearchPage/Options";
import React, { useState } from "react";
import "@/components/Homepage/Categories/categories.css";
import "@/components/CartPage/CartPage.css";
import SideBar from "@/components/SearchPage/SideBar";
import Search from "@/components/SearchPage/Search";



function page() {
  return (
  

    <div className="categories_bg pb-2">
      <Navbar />
      <SideBar />
        
    <div className="grid md:grid-cols-2 items-center justify-between mx-5 lg:mx-auto max-w-6xl">
    <h5 className="text-2xl font-bold text-right text-textC1 mt-5">
        All Products
      </h5>
      <Search/>
    </div>
      <CatCards />
    </div>
  );
}

export default page;
