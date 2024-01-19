'use client'
import React, { useEffect, useRef, useState ,useContext } from "react";
import { catBtnContext } from "@/provider/CategoriesProvider";

function ImgSlider({ imgs }) {

  const { setCartSelectedImg } = useContext(catBtnContext);
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState();

  const carouselItemsRef = useRef([]);

  useEffect(() => {
    if (imgs && imgs.length > 0) {
      carouselItemsRef.current = carouselItemsRef.current.slice(0, imgs.length);

      setSelectedImageIndex(0);
      setSelectedImage(imgs[0]); // Set the initial selected image
      setCartSelectedImg(imgs[0])
    }
  }, [imgs]);

  const handleSelectedImageChange = (newIdx) => {
    if (imgs && imgs.length > 0) {
      setSelectedImage(imgs[newIdx]);
      setCartSelectedImg(imgs[newIdx]);
      setSelectedImageIndex(newIdx);
    }
  };
// console.log('selectedImage===>',selectedImage)
  return (
    <div className="carousel-container">
      <div
        className="selected-image"
        style={{ backgroundImage: `url(${selectedImage})` }}
      />
      <div className="carousel">
        <div className="carousel__images">
          {imgs &&
            imgs.map((image, idx) => (
              <div
                onClick={() => handleSelectedImageChange(idx)}
                style={{ backgroundImage: `url(${image})` }}
                key={idx}
                className={`carousel__image ${
                  selectedImageIndex === idx && "carousel__image-selected"
                }`}
                ref={(el) => (carouselItemsRef.current[idx] = el)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ImgSlider;
