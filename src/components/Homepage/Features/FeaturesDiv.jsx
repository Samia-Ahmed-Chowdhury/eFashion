"use client";
import React, { useContext, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
import Image from "next/image";
import { catBtnContext } from "@/provider/CategoriesProvider";
import Modal from "../Categories/Modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function FeaturesDiv() {
  const { featuresData } = useContext(catBtnContext);

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

  const settings = {
    dots: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    rows: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          rows:2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2, // For smaller screens, maintain 2 rows
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2, // For smaller screens, maintain 2 rows
        },
      },
    ],
  };

  return (
    <div className="categories_bg py-14">
      <div className="mx-6 lg:mx-auto max-w-6xl">
      <Slider {...settings}>
        {featuresData.map((item) => {
          return (
            <div className="cat_cards circles mb-5"  key={item._id} onClick={() => openModal(item)}>
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
              <figure className="">
                <Image
                  className="feature_img"
                  src={item.images[0]}
                  alt="logo"
                  width={200}
                  height={150}
                  priority
                />
              </figure>

              <div className="mt-5">
                <p className="text-sm font-medium text-[#554747] ">
                  {item.subCategory}&apos;s for {item.category}
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
            </div>
          );
        })}
          </Slider>
      </div>
      <Modal isOpen={isOpen} item={item} closeModal={closeModal} />
    </div>
  );
}

export default FeaturesDiv;

