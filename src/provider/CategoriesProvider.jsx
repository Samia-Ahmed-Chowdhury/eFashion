"use client";
import { createContext, useEffect, useState } from "react";

export const catBtnContext = createContext();

function CategoriesProvider({ children }) {
  const [selectedOption, setSelectedOption] = useState("Women");
  const [allProductData, setAllProductData] = useState([]);
  const [catWiseCards, setCatWiseCards] = useState([]);
  const [allCatProData, setAllCatProData] = useState([]);
  const [cartSelectedImg, setCartSelectedImg] = useState("");

  useEffect(() => {
    fetch("api/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProductData(data.products);
      });
  }, []);

  useEffect(() => {
    const d = allProductData.filter((datas) => {
      return datas.category === selectedOption;
    });
    // console.log(d)
    setAllCatProData(d);
    setCatWiseCards(d);
  }, [selectedOption, allProductData]);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    // console.log("Selected:", option);
  };

  // const allCatProData = allProductData.filter((datas) => {
  //   return datas.category === selectedOption;
  // });

  const btnList = [
    "All",
    ...new Set(
      allCatProData.map((curElem) => {
        return curElem.subCategory;
      })
    ),
  ];

  const showCardsHandler = (clickedBtn) => {
    if (clickedBtn === "All") {
      return setCatWiseCards(allCatProData);
    }
    const updateCards = allCatProData.filter((cards) => {
      return cards.subCategory == clickedBtn;
    });
    setCatWiseCards(updateCards);
  };

  const items = {
    selectedOption,
    handleSelectOption,
    allProductData,
    setAllProductData,
    catWiseCards,
    showCardsHandler,
    btnList,
    cartSelectedImg,
    setCartSelectedImg
  };

  return (
    <catBtnContext.Provider value={items}>{children}</catBtnContext.Provider>
  );
}

export default CategoriesProvider;
