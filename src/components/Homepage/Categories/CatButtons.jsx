'use client'
import React, { useEffect, useState } from "react";

function CatButtons() {
 
      const [itemData, setItemData] = useState([])
  
      useEffect(() => {
          fetch('https://samia-ahmed-chowdhury.github.io/ecommerce-website/ecommerce_website/categories.json')
              .then(res => res.json())
              .then(data => {
                  setItemData(data)
              })
      }, [])

      const btnList = ["All", ...new Set(itemData.map((curElem) => {
        return curElem.subCategory;
      }))]
      console.log(btnList)
  return (

    <div className="mx-5 lg:mx-auto max-w-6xl space-x-5">
    {
      btnList.map((btn,index) => {
       return  <button key={index} className="catBtns">{btn}</button>;
      })
      }

    </div>

  );
}

export default CatButtons;
