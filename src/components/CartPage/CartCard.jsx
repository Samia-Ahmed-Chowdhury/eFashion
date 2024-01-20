"use client";
import React from "react";
import "./CartPage.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { IoIosRemove, IoMdAdd, IoMdTrash } from "react-icons/io";
import { updateCartItem } from "@/app/redux/slice/CartSlice";

function CartCard({ item }) {

  const cartData = useSelector((data) => data.cartListData.cartList);

  const dispatch = useDispatch();

  const ItemHandler = ({item,type}) => {
      dispatch(updateCartItem({item,type}))
  };

  return (
    <>
      <div className="w-full lg:w-10/12 mx-auto cart_card grid grid-cols-1 text-center md:grid-cols-[.9fr,1fr,1fr,1fr,.5fr] gap-1 mb-5">
        <div className="mx-auto">
          <label className=" btn btn-ghost w-[70px] h-[70px] btn-circle avatar mx-auto">
            <div className="w-full rounded-lg mx-auto">
              <Image
                src={item.img}
                alt="logo"
                width={100}
                height={100}
                className=""
                priority
              />
            </div>
          </label>
        </div>
        <div>
          <span className="text-[15px] text-textC1 font-semibold">
            {item.subCategory}'s for {item.category}
          </span>
        </div>

        <div className="flex justify-center  m-auto ">
          <div
            className="flex items-center"
            style={{ borderRadius: "20px", border: "2px solid beige" }}
          >
            <button
              className="subtract cursor-pointer"
              onClick={() => ItemHandler({item,type:'decrement'})}
            >
              <IoIosRemove />
            </button>
            <h2 className="text-xl font-bold text-black">{item.quantity}</h2>
            <button
              className="add cursor-pointer"
              onClick={() => ItemHandler({item,type:'increment'})}
            >
              <IoMdAdd />
            </button>
          </div>
        </div>

        <div className="">
          <h5 className="text-xl font-black text-black text-center">
            {item.price}
          </h5>
          {/* <h5>{count > 0 ? price * count : price}</h5> */}
        </div>
        <div className="flex justify-center">
          <IoMdTrash className="del" />
        </div>
      </div>
    </>
  );
}

export default CartCard;
