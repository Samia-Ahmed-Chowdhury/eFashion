"use client";
import React, { useContext, useState } from "react";
import { PiArrowBendUpRightBold } from "react-icons/pi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
import Image from "next/image";
import { catBtnContext } from "@/provider/CategoriesProvider";
import Modal from "../Categories/Modal";
import Carousel from 'react-grid-carousel'

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

  return (
    <div className="categories_bg py-14">
      <div className="mx-6 lg:mx-auto max-w-6xl">
      <Carousel cols={4} rows={2} gap={20} loop  autoplay={2000}>
        {featuresData.map((item) => {
          return (
            <Carousel.Item key={item._id} >
            <div className="cat_cards circles " onClick={() => openModal(item)}>
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
            </Carousel.Item>
          );
        })}
      </Carousel>
      </div>
      <Modal isOpen={isOpen} item={item} closeModal={closeModal} />
    </div>
  );
}

export default FeaturesDiv;

