import React from "react";
import "./Services.css";
import Image from "next/image";
function Services() {
  const serviceData = [
    { img_src: "/images/loc.svg", heading: "Home Delivery" },
    { img_src: "/images/plane.svg", heading: "Fastest Serivce",active_card:true },
    { img_src: "/images/books.svg", heading: "Best Prize Guarantee" },
  ];
  return (
    <div className="my-28 mx-6 lg:mx-auto max-w-6xl pb-12 service_sec">
      <h3 className="text-textC1 text-center font-bold text-4xl">
        What we provides
      </h3>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-14 my-14">
        {serviceData.map((item, index) => {
          return (
            <div className={`${item.active_card? 'service_active_cards lg:mt-14':'service_cards'} `}  key={index}>
              <figure className="">
                <Image
                  className=""
                  src={item.img_src}
                  alt="logo"
                  width={64}
                  height={64}
                  priority
                />
              </figure>
              <h4 className="text-[#554747] font-semibold text-xl mt-7 mb-4">
                {item.heading}
              </h4>
              <p className="text-[#887E7E] text-[17px]">
                You share your ideas and we handle the rest. We do i t all -
                from home rent to event services, foods and other requirements.
                Sit back and relax, we take care of it!
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
