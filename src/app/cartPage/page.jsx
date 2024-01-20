"use client";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import {  useSelector } from "react-redux";
import {  PiArrowFatLineLeftFill } from "react-icons/pi";
import Modal from "@/components/Homepage/Categories/Modal";
import "@/components/Homepage/Categories/categories.css";
import { useRouter } from "next/navigation";
import { removeWishItem } from "../redux/slice/WishedSlice";
import CartCard from "@/components/CartPage/CartCard";
import { Scrollbars } from "react-custom-scrollbars-2";

function page() {
  const cartData = useSelector((data) => data.cartListData.cartList);

  let [isOpen, setIsOpen] = useState(false);
  let [item, setItem] = useState({});

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(item) {
    // console.log(item)
    setIsOpen(true);
    setItem(item);
  }
  const router = useRouter();

  return (
    <div className="bg-myBg pb-3">
      <Navbar />
      <div className="my-1 mx-5 lg:mx-auto max-w-6xl mr-auto">
        <span
          className="ml-2 text-[#F2575D] cursor-pointer"
          onClick={() => {
            router.back();
          }}
        >
          <PiArrowFatLineLeftFill className="text-3xl cursor-pointer inline backIcon text-[#F2575D]" />
          Continue Shopping
        </span>
        <div className="my-3 md:my-0">
          <h5 className="text-center text-2xl text-textC1 font-semibold">
            Your Order
          </h5>
          <p className="text-center text-sm text-textC9">
            you have {cartData.length && cartData.length} items in shopping cart
          </p>
        </div>
      </div>

      <div className="my-6 mx-5 lg:mx-auto max-w-6xl grid grid-cols-1  md:grid-cols-[1fr,.3fr] justify-between gap-14">
        <div className="cart_part ">
          <Scrollbars className="cart-items-container">
            {cartData.map((item,index) => {
              return <CartCard key={index} item={item} />;
            })}
          </Scrollbars>
        </div>

        <div className="total_part">
          
          <div className="border-b border-black pb-2">
          <h3 className="text-md font-medium text-textC9 mb-2 flex justify-between ">Amount: <span className="font-semibold text-textC1">$22</span></h3>
          <h5  className="text-md font-medium text-textC9  flex justify-between ">Shipping Charge: <span className="font-semibold text-textC1">$22</span></h5>
          
          </div>

          <h5  className="text-md font-medium text-textC9 mt-2 flex justify-between ">Total Amount: <span className="font-black text-textC1">$22</span></h5>

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-5">
            <button className=" inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2">
              Check out
            </button>
            <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              Cancel
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} item={item} closeModal={closeModal} />
    </div>
  );
}

export default page;
