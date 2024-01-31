import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import "./Hero.css";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="hero_bg pb-4">
      <Navbar />

      <section>
        <div className="flex flex-col-reverse lg:flex-row mx-6 lg:mx-auto max-w-6xl pb-10">
          <div className="z-50 flex flex-col justify-center  mx-auto mt-24 lg:mt-0 lg:w-1/2">
            <h1 className="font-bold text-5xl md:text-7xl md:leading-[84px] text-textC1">
              No mistake: while Shopping and Trending
            </h1>
            <p className="font-normal text-[16px] md:text-lg text-textC9 my-4">
              eFashoin is a brutally competitive online business,involves buying
              and selling fashion-related items online.
            </p>
            <div className="">
              <Link href="/searchPage">
                <button className="my_button">Grab Offers</button>
              </Link>
            </div>
          </div>

          <div className="mx-auto relative">
            <Image
              className="relative hbg left-[7%] md:left-[15%] z-10"
              src="/images/hbg.svg"
              alt="logo"
              width={450}
              height={500}
              priority
            />
            <Image
              className="absolute h-girl "
              src="/images/h-girl.svg"
              alt="logo"
              width={88}
              height={80}
              priority
            />

            <Image
              className="absolute h-boxes z-20"
              src="/images/boxes.svg"
              alt="logo"
              width={120}
              height={120}
              priority
            />
                <Image
              className="absolute h-bag z-20"
              src="/images/bag.svg"
              alt="logo"
              width={45}
              height={45}
              priority
            />
           
            <Image
              className="absolute h-man z-40"
              src="/images/h-man.svg"
              alt="logo"
              width={120}
              height={120}
              priority
            />
              <Image
              className="absolute h-bags z-20"
              src="/images/bags.svg"
              alt="logo"
              width={70}
              height={70}
              priority
            />
 
            <Image
              className="absolute h-woman z-20"
              src="/images/h-woman.svg"
              alt="logo"
              width={200}
              height={200}
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
