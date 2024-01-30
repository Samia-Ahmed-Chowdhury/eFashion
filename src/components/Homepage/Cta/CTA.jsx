import React from "react";
import "./CTA.css";
import Image from "next/image";

function CTA() {
  return (
    <section className="my-32 cta_sce">
      <div className="flex flex-col lg:flex-row gap-24 mx-6 lg:mx-auto max-w-6xl  ">
        <div className="mx-auto lg:ms-auto relative  ">
          <Image
            src="/images/cta-bg.svg"
            alt="logo"
            width={550}
            height={500}
            priority
          />
          <Image
            className="absolute top-[18%] man  "
            src="/images/man-cart.svg"
            alt="logo"
            width={250}
            height={220}
            priority
          />
          <Image
            className="absolute top-[18%] woman"
            src="/images/cta-woman.svg"
            alt="logo"
            width={120}
            height={120}
            priority
          />
        </div>
        <div className="flex flex-col justify-center  mx-auto mt-10 lg:mt-0 lg:w-1/2">
          <h3 className="font-bold text-2xl md:text-4xl md:leading-[45px] text-textC1 mx-auto">
            Please Join
            <br className="hidden lg:block" />
            Our newsletter Now
          </h3>
          <form className='my-6 flex mx-auto   '>
            <input type="email" className="bg-white md:w-[260px]"  name="email" placeholder="Enter your email" />
            <button className="btn border-0 rounded-l-[0px] text-center text-white bg-[#398AB9]" type="submit">
            Subscribe
            </button>
          </form>
       
        </div>
      </div>
    </section>
  );
}

export default CTA;
