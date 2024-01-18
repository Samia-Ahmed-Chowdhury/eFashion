"use client";
import ImgSlider from "@/components/Homepage/Categories/ImgSlider";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PiArrowBendUpRightBold, PiArrowFatLineLeftFill } from "react-icons/pi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
import Modal from "@/components/Homepage/Categories/Modal";
import "@/components/Homepage/Categories/categories.css";
import { useRouter } from "next/navigation";
import { removeWishItem } from "../redux/slice/WishedSlice";

function page() {
  const wishedData = useSelector((data) => data.wishListData.wishList);

  const dispatch = useDispatch();

  const wishItemDispatch = (item) => {
    dispatch(removeWishItem(item._id));
  };

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
    <div className="bg-myBg pb-10">
      <Navbar />
      <div className="my-5 mx-5 lg:mx-auto max-w-6xl mr-auto">
        <PiArrowFatLineLeftFill
          className="text-3xl cursor-pointer backIcon text-[#F2575D]"
          onClick={() => {
            router.back();
          }}
        />
      </div>
      <div className="my-10 mx-5 lg:mx-auto max-w-6xl grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {wishedData.map((item) => {
          return (
            <div className="cat_cards" key={item._id}>
              <div className="">
                {wishedData.find((i) => i._id === item._id) ? (
                  <svg
                    onClick={() => wishItemDispatch(item)}
                    className="ml-auto cursor-pointer "
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                  >
                    <g filter="url(#filter0_ddii_772_19)">
                      <path
                        d="M6.61093 6.61093C6.1002 7.12165 5.69507 7.72797 5.41867 8.39526C5.14226 9.06255 5 9.77775 5 10.5C5 11.2223 5.14226 11.9375 5.41867 12.6048C5.69507 13.2721 6.1002 13.8784 6.61093 14.3891L16 23.7782L25.3891 14.3891C26.4205 13.3577 27 11.9587 27 10.5C27 9.04133 26.4205 7.64238 25.3891 6.61093C24.3576 5.57948 22.9587 5.00001 21.5 5.00001C20.0413 5.00001 18.6423 5.57948 17.6109 6.61093L16 8.22181L14.3891 6.61093C13.8784 6.1002 13.2721 5.69507 12.6048 5.41867C11.9375 5.14226 11.2223 5 10.5 5C9.77775 5 9.06255 5.14226 8.39526 5.41867C7.72797 5.69507 7.12165 6.1002 6.61093 6.61093Z"
                        fill="#FF0000"
                      />
                      <path
                        d="M6.61093 6.61093C6.1002 7.12165 5.69507 7.72797 5.41867 8.39526C5.14226 9.06255 5 9.77775 5 10.5C5 11.2223 5.14226 11.9375 5.41867 12.6048C5.69507 13.2721 6.1002 13.8784 6.61093 14.3891L16 23.7782L25.3891 14.3891C26.4205 13.3577 27 11.9587 27 10.5C27 9.04133 26.4205 7.64238 25.3891 6.61093C24.3576 5.57948 22.9587 5.00001 21.5 5.00001C20.0413 5.00001 18.6423 5.57948 17.6109 6.61093L16 8.22181L14.3891 6.61093C13.8784 6.1002 13.2721 5.69507 12.6048 5.41867C11.9375 5.14226 11.2223 5 10.5 5C9.77775 5 9.06255 5.14226 8.39526 5.41867C7.72797 5.69507 7.12165 6.1002 6.61093 6.61093Z"
                        stroke="#FF6262"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_ddii_772_19"
                        x="0"
                        y="0"
                        width="32"
                        height="32.7782"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.873611 0 0 0 0 0.873611 0 0 0 0 0.873611 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_772_19"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.723611 0 0 0 0 0.723611 0 0 0 0 0.723611 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_dropShadow_772_19"
                          result="effect2_dropShadow_772_19"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_772_19"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect3_innerShadow_772_19"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="-4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect3_innerShadow_772_19"
                          result="effect4_innerShadow_772_19"
                        />
                      </filter>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    onClick={() => wishItemDispatch(item)}
                    className="ml-auto cursor-pointer heart"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="29"
                    viewBox="0 0 32 29"
                    fill="none"
                  >
                    <g filter="url(#filter0_dii_770_18)">
                      <path
                        d="M6.61093 2.61093C6.1002 3.12165 5.69507 3.72797 5.41867 4.39526C5.14226 5.06255 5 5.77775 5 6.50003C5 7.2223 5.14226 7.9375 5.41867 8.60479C5.69507 9.27209 6.1002 9.8784 6.61093 10.3891L16 19.7782L25.3891 10.3891C26.4205 9.35767 27 7.95872 27 6.50003C27 5.04133 26.4205 3.64238 25.3891 2.61093C24.3576 1.57948 22.9587 1.00001 21.5 1.00001C20.0413 1.00001 18.6423 1.57948 17.6109 2.61093L16 4.22181L14.3891 2.61093C13.8784 2.1002 13.2721 1.69507 12.6048 1.41867C11.9375 1.14226 11.2223 1 10.5 1C9.77775 1 9.06255 1.14226 8.39526 1.41867C7.72797 1.69507 7.12165 2.1002 6.61093 2.61093V2.61093Z"
                        fill="white"
                      />
                      <path
                        d="M6.61093 2.61093C6.1002 3.12165 5.69507 3.72797 5.41867 4.39526C5.14226 5.06255 5 5.77775 5 6.50003C5 7.2223 5.14226 7.9375 5.41867 8.60479C5.69507 9.27209 6.1002 9.8784 6.61093 10.3891L16 19.7782L25.3891 10.3891C26.4205 9.35767 27 7.95872 27 6.50003C27 5.04133 26.4205 3.64238 25.3891 2.61093C24.3576 1.57948 22.9587 1.00001 21.5 1.00001C20.0413 1.00001 18.6423 1.57948 17.6109 2.61093L16 4.22181L14.3891 2.61093C13.8784 2.1002 13.2721 1.69507 12.6048 1.41867C11.9375 1.14226 11.2223 1 10.5 1C9.77775 1 9.06255 1.14226 8.39526 1.41867C7.72797 1.69507 7.12165 2.1002 6.61093 2.61093V2.61093Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_dii_770_18"
                        x="0"
                        y="-4"
                        width="32"
                        height="32.7783"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.873611 0 0 0 0 0.873611 0 0 0 0 0.873611 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_770_18"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_770_18"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.876389 0 0 0 0 0.875172 0 0 0 0 0.875172 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect2_innerShadow_770_18"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="-4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect2_innerShadow_770_18"
                          result="effect3_innerShadow_770_18"
                        />
                      </filter>
                    </defs>
                  </svg>
                )}
              </div>
              <figure className="">
                <ImgSlider imgs={item.images} />
              </figure>

              <div className="mt-3">
                <p className="text-sm text-[#554747]  line-clamp-2">
                  {item.details}
                </p>

                <h5 className="my-1 text-sm font-bold text-[#F2575D]">
                  ${item.price}
                </h5>
                <Rating
                  className="text-[#398AB9]"
                  placeholderRating={item.rating}
                  emptySymbol={<FaStarHalfAlt />}
                  placeholderSymbol={<FaStar />}
                  fullSymbol={<FaStar />}
                  readonly
                />
              </div>

              <div className="flex justify-end">
                <button className="pulse_btn">
                  <PiArrowBendUpRightBold onClick={() => openModal(item)} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Modal isOpen={isOpen} item={item} closeModal={closeModal} />
    </div>
  );
}

export default page;
