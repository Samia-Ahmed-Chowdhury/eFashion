'use client'
import { createContext, useEffect, useState } from "react";

export const catBtnContext = createContext();

function CategoriesProvider({children})  {
    const [selectedOption, setSelectedOption] = useState("Women");
    const [allProductData, setAllProductData] = useState([])
    const [catWiseCards,setCatWiseCards]=useState([])
  

    useEffect(() => {
        fetch('api/products')
            .then(res => res.json())
            .then(data => {
                setAllProductData(data.products)
            })
    }, [])

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        console.log("Selected:", option);
      };


      const showCards=(clickedBtn)=>{
       const updateCards= allProductData.filter((cards)=>{
           return cards.subCategory==clickedBtn
        })
        console.log(updateCards)
      }

      const btnList = ["All", ...new Set(allProductData.map((curElem) => {
        return curElem.subCategory;
      })
    ),
  ];

// const btnList = ["All", ...new Set(allProductData.filter((curSelectOp=>{
//     const curCatCard=
// }))
// ),
// ];
     


    const items={
      selectedOption,handleSelectOption,allProductData, setAllProductData,catWiseCards,setCatWiseCards,showCards,
      btnList
    }

  return (
    <catBtnContext.Provider value={items}>
        {children}
    </catBtnContext.Provider>
  );
}

export default CategoriesProvider;
