import Image from "next/image";
import React from "react";
import './Offers.css'
import Link from "next/link";

function Offers() {
  return (
    <div className="flex flex-col lg:flex-row gap-24 mx-6 lg:mx-auto max-w-6xl my-8 pb-10">
      <div className="mx-auto lg:ms-auto relative  ">
        <Image  src="/images/banner.png"  alt="logo"  width={550}  height={500}  priority />
        <Image className="absolute top-[30%] girl_em "  src="/images/girl_em.png"  alt="logo"  width={120}  height={120}  priority />
        <Image className="absolute top-[30%] girl_box"  src="/images/girl.svg"  alt="logo"  width={120}  height={120}  priority />
      </div>
      <div className="flex flex-col justify-center  mx-auto mt-8 lg:mt-0 lg:w-1/2">
        <h3 className="font-bold text-2xl md:text-4xl md:leading-[45px] text-textC1">
          Your shopping destination for fashion online. We offer fashion and
          quality at the best price in a more sustainable way.
        </h3>

        <div className="my-5 mx-auto">
        <Link href="/searchPage">
          <button className="my_button">Grab Offers</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Offers;
