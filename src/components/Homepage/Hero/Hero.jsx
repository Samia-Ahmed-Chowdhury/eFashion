import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import "./Hero.css";
import Image from 'next/image'

function Hero() {
  return (
    <div className="hero_bg pb-4">
      <Navbar />

      <section>
        <div className="flex flex-col-reverse lg:flex-row mx-6 lg:mx-auto max-w-6xl pb-10">
          <div className="flex flex-col justify-center  mx-auto mt-6 lg:mt-0 lg:w-1/2">
            <h1 className="font-bold text-5xl md:text-7xl md:leading-[84px] text-textC1">
            No mistake: while Shopping and Trending
            </h1>
            <p className="font-normal text-[16px] md:text-lg text-textC9 my-4">
            eFashoin is a brutally competitive online business,involves buying and selling fashion-related items online.
            </p>
            <div className="">
              <button className="my_button">Grab Offers</button>
            </div>
          </div>

          <div className="mx-auto lg:ms-auto">
            <Image
              src="/images/hero_img.png"
              alt="logo"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
