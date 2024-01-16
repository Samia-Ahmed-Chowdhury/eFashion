"use client";
import React, { useContext, useState } from "react";
import { catBtnContext } from "@/provider/CategoriesProvider";
import Card from "./Card";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";

function CatCards() {
  const { catWiseCards } = useContext(catBtnContext);
  console.log(catWiseCards);

  return (
    <div className="my-10 mx-5 lg:mx-auto max-w-6xl grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {catWiseCards.map((item) => {
        return (
          <div className="cat_cards">
            <figure className="">
              <Card imgs={item.images} />
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
          </div>
        );
      })}
    </div>
  );
}

export default CatCards;
