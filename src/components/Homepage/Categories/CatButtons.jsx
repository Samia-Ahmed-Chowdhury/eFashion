'use client'
import React, { useEffect, useState } from "react";

 function CatButtons() {
 
      const [itemData, setItemData] = useState([])
  
      useEffect(() => {
          fetch('http://localhost:3000/api/products')
              .then(res => res.json())
              .then(data => {
                  setItemData(data.products)
              })
      }, [])
      //  console.log(itemData)

      const btnList = ["All", ...new Set(itemData.map((curElem) => {
        return curElem.subCategory;
      }))]

      const cardHandler=(clickedBtn)=>{
        console.log(clickedBtn)
      }


  return (

    <div className="mx-5 lg:mx-auto max-w-6xl space-x-5">
    {
      btnList.map((btn,index) => {
       return  <button onClick={()=>cardHandler(btn)} key={index} className="catBtns">{btn}</button>;
      })
      }

    </div>

  );
}

export default CatButtons;
