"use client";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PiArrowFatLineLeftFill } from "react-icons/pi";
import "@/components/Homepage/Categories/categories.css";
import "@/components/CartPage/CartPage.css";
import { useRouter } from "next/navigation";
import CartCard from "@/components/CartPage/CartCard";
import { Scrollbars } from "react-custom-scrollbars-2";
import { removeAllCartItem } from "../redux/slice/CartSlice";
import Swal from "sweetalert2";
import OptionDiv from "@/components/CartPage/OptionDiv";

function Page() {
  const cartData = useSelector((data) => data.cartListData.cartList);

  const router = useRouter();
  // const allowed = cartData.find((i) => i._id === item._id && i.img===cartSelectedImg);
  const total = cartData.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price * currentValue.quantity;
  }, 0);
  let Shipping_Charge = 22;
  // console.log(total)

  const dispatch = useDispatch();

  const allItemHandler = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-custom-success",
        cancelButton: "btn btn-custom-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your Cart List has been deleted.",
            icon: "success",
          });
          dispatch(removeAllCartItem());
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your Cart List is safe :)",
            icon: "error",
          });
        }
      });
  };

  const nevigateHandler=()=>{
    Swal.fire("Please login first !");
    router.push('/login')
  }

  const [selectOp, setSelectOp] = useState("Collection");

  return (
    <div className="bg-myBg h-[100vh] pb-3">
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

      {cartData.length ? (
        <div className="my-6 mx-5 lg:mx-auto max-w-6xl grid grid-cols-1  md:grid-cols-[1fr,.3fr] justify-between gap-14">
          <div className="cart_part ">
            <Scrollbars className="cart-items-container">
              {cartData.map((item, index) => {
                return <CartCard key={index} item={item} />;
              })}
            </Scrollbars>
          </div>

          <div className="total_part flex flex-col">
            <OptionDiv value={{ selectOp, setSelectOp }} />

            <div className="mt-8">
              <div className="border-b border-black pb-2">
                <h3 className="text-md font-medium text-textC9 mb-2 flex justify-between ">
                  Amount:
                  <span className="font-semibold text-textC1">
                    ${total && total}
                  </span>
                </h3>
                {selectOp !== "Delivery" && (
                  <h5 className="text-md font-medium text-textC9  flex justify-between ">
                    Shipping Charge:
                    <span className="font-semibold text-textC1">
                      ${Shipping_Charge}
                    </span>
                  </h5>
                )}
              </div>

              <h5 className="text-md font-medium text-textC9 mt-2 flex justify-between ">
                Total Amount:
                <span className="font-black text-textC1">
                  ${selectOp !== "Delivery" ? total + Shipping_Charge : total}
                </span>
              </h5>

              <div className="flex flex-col lg:flex-row gap-4 justify-center mt-5">
                
                  <button onClick={nevigateHandler}
                 className=" inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2">
                  Check out
                </button>
               
                <button
                  onClick={allItemHandler}
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-black text-xl my-16 font-black text-center">
          Nothing is added into cart...Please add some products..
        </p>
      )}
    </div>
  );
}

export default Page;
