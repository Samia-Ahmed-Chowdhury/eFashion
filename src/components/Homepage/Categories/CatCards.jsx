"use client";
import React, { useContext, useState } from "react";
import { catBtnContext } from "@/provider/CategoriesProvider";
import ImgSlider from "./ImgSlider";
import { PiArrowBendUpRightBold } from "react-icons/pi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
import Modal from "./Modal";

function CatCards() {
  const { catWiseCards } = useContext(catBtnContext);
  console.log(catWiseCards);

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

  return (
    <>
      <div className="my-10 mx-5 lg:mx-auto max-w-6xl grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {catWiseCards.map((item) => {
          return (
            <div className="cat_cards" key={item._id}>
              <div className="">
                <svg
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
      <div className=" mb-10 mx-5 max-w-6xl  flex justify-end items-center gap-2">
       <button className="flex items-center gap-2">
         <span className="text-[#F2575D] text-[18px] font-semibold ">
          Shop More
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
        >
          <path
            d="M2 2L9 9L2 16"
            stroke="#F2575D"
            stroke-width="2.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg></button>
      </div>

      <Modal isOpen={isOpen} item={item} closeModal={closeModal} />
    </>
  );
}

export default CatCards;
