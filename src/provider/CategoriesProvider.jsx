"use client";
import { createContext, useEffect, useState } from "react";

export const catBtnContext = createContext();

function CategoriesProvider({ children }) {
  const [selectedOption, setSelectedOption] = useState("Woman");
  const [allProductData, setAllProductData] = useState([]);
  const [catWiseCards, setCatWiseCards] = useState([]);
  const [allCatProData, setAllCatProData] = useState([]);
  const [cartSelectedImg, setCartSelectedImg] = useState("");
  const [catBtn_active, setCatBtn_active] = useState("All");
  const [searchData, setSearchData] = useState("");
  const [statusOption, setStatusOption] = useState("");
  const [featuresBtn, setFeaturesBtn] = useState("Tranding");
  const [featuresData, setFeaturesData] = useState([]);

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
    setAllCatProData(d);
    setCatWiseCards(d);
  }, [selectedOption, allProductData]);

  useEffect(() => {
    const d = allProductData.filter((datas) => {
      return datas.status === statusOption && datas.category === selectedOption;
    });
    // console.log(d)
    setAllCatProData(d);
    setCatWiseCards(d);
  }, [statusOption]);

  useEffect(() => {
    const d = allProductData.filter((datas) => {
      return datas.status === featuresBtn;
    });
    setFeaturesData(d);
  }, [featuresBtn,allProductData]);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    // console.log("Selected:", option);
  };

  const searchHandler = (e) => {
    const seachValue = e.target.value;
    setSearchData(seachValue);
    fetch(`api/search?query=${seachValue}`)
      .then((res) => res.json())
      .then((data) => {
        setCatWiseCards(data);
      });
  };


  const btnList = [
    "All",
    ...new Set(
      allCatProData.map((curElem) => {
        return curElem.subCategory;
      })
    ),
  ];

  const CatbtnClickHandler = (btn) => {
    setCatBtn_active(btn);
    showCardsHandler(btn);
  };

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
    setCartSelectedImg,
    catBtn_active,
    setCatBtn_active,
    CatbtnClickHandler,
    searchData,
    setSearchData,
    searchHandler,
    statusOption, setStatusOption,featuresBtn, setFeaturesBtn,featuresData
  };

  return (
    <catBtnContext.Provider value={items}>{children}</catBtnContext.Provider>
  );
}

export default CategoriesProvider;
