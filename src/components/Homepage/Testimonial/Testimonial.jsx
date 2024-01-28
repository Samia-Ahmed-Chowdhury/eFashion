import Image from "next/image";
import React from "react";
import "./Testimonial.css";

function Testimonial() {
  return (
    <div className="my-8 mx-6 lg:mx-auto max-w-6xl pb-12 testimonial">
      <h3 className="text-textC1 text-center font-bold text-4xl">
        Our beloved customers
      </h3>

      <div className="py-64 relative">
        {Datas.map((data, index) => (
          <div className={`${data.rect_div && data.rect_div}`}>
            <Image
              className={`lg:${data.p_img_clsnam && data.p_img_clsnam}`}
              src={data.p_img_src}
              alt="logo"
              width={70}
              height={70}
              priority
            />
    
          <div className={` ${data.txt_con_div_cls && data.txt_con_div_cls}`}>
          <h4 className="text-[16px] text-[#333333] font-semibold">
            {data.h4 && data.h4}
          </h4>
          <h6 className="text-[14px] text-[#554747]">
            {data.h6 && data.h6}
          </h6>
          <div className="t">
          {
            data.p &&   <Image
            className={`lg:${data.box_cls&&data.box_cls}`}
            src="/images/box.svg"
            alt="logo"
            width={350}
            height={400}
            priority
          />
          }
            <p className={`text-[#554747] text-[13px] ${data.box_p}`}>{data.p && data.p}</p>
          </div>
        </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;

const Datas = [
  {
    rect_div: "test_con1",
    p_img_clsnam:
      "t_img1 absolute top-[10%]  left-[5%] lg:left-[15%]   w-[47px] h-[46px] rounded-full ",
    p_img_src: "https://picsum.photos/800/600?random=45",
    txt_con_div_cls:
      "test_con absolute z-50 top-[20%] left-[12%] lg:left-[17%] -translate-x-1/2 text-center ",
    h4: "S",
    h6: "san88",
    box_cls:"z-40 -translate-y-[10%]  translate-x-[40%] relative",
    box_p:'left-[60%]',
    p: "Service to others is the rent you pay.",
  },
  {
    rect_div: "test_con2",
    p_img_clsnam:
      "t_img2 absolute top-1/2 left-[35%] lg:left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105px] lg:w-[145px] h-[104px] lg:h-[144px] rounded-full ",
    p_img_src: "https://picsum.photos/800/600?random=5",
    txt_con_div_cls:
      "test_con  absolute z-50 top-[65%] left-[25%] lg:left-[47%]  ",
    h4: "AMARA SANIGA",
    h6: "amarasan88",
    box_cls:'z-40 -translate-y-[10%]   relative',
    box_p:'left-[20%] ',
    p: "To review eFashoin would be insan.",
  },
  {
    rect_div: "test_con3",
    p_img_clsnam:
      "t_img3 absolute top-[69%] lg:top-[25%] left-[0%] lg:left-[20%]  w-[75px] lg:w-[135px] h-[74px] lg:h-[134px] rounded-full ",
    p_img_src: "https://picsum.photos/800/600?random=2",
    txt_con_div_cls:
      "test_con absolute z-50 top-[85%] lg:top-[52%] left-[8%]  lg:left-[24%]",
    h4: "Sam",
    h6: "sam44",
    box_cls:"z-40 -translate-y-[10%]  relative",
    box_p:'left-[20%]',
    p: "Lose yourself in the service of others",
  },
  {
    rect_div: "hidden lg:block test_con4",
    p_img_clsnam:
      "t_img4 absolute top-[60%] left-[4%] lg:left-[10%]  w-[78px] lg:w-[118px] h-[77px] lg:h-[117px]  rounded-full",
    p_img_src: "https://picsum.photos/800/600?random=2",
    txt_con_div_cls:
      "test_con absolute z-50 top-[85%] left-[25%] lg:left-[28%] -translate-x-1/2",
    h4: "Nadia",
    h6: "nadia87",
    box_cls:'z-40 -translate-y-[10%]   relative',
    box_p:'left-[20%]',
    p: "Our own self-realization is the greatest service we can render the worlds",
  },
  {
    rect_div: "hidden lg:block",
    p_img_clsnam:
      "hidden lg:block t_img5 absolute top-[65%] left-[25%] lg:left-[35%]  w-[48px] h-[47px] rounded-full",
    p_img_src: "https://picsum.photos/800/600?random=22",
  },
  {
    rect_div: "test_con5",
    p_img_clsnam:
      "t_img6 absolute top-[15%] right-[16%]  w-[81px] h-[80px] lg:w-[131px] lg:h-[130px] rounded-full",
    p_img_src: "https://picsum.photos/800/600?random=22",
    txt_con_div_cls:
      "hidden lg:block test_con absolute z-50  top-[42%] left-[77%] ",
    h4: "Abir",
    h6: "abir09",
    box_cls:"z-40 -translate-y-[10%]  relative",
    box_p:'left-[20%]',
    p: " customers are life of business.",
  },
  {
    rect_div: "hidden lg:block",
    p_img_clsnam:
      "t_img7 absolute top-[47%] right-[29%]  w-[48px] h-[47px] rounded-full",
    p_img_src: "https://picsum.photos/800/600?random=22",
  },
  {
    rect_div: "test_con6",
    p_img_clsnam:
      "t_img8 absolute top-[70%] right-[20%] w-[71px] lg:w-[111px] h-[70px] lg:h-[110px] rounded-full",
    p_img_src: "https://picsum.photos/800/600?random=2",
    txt_con_div_cls:
      "hidden lg:block test_con absolute z-50  top-[92%] left-[73%] ",
    h4: "Ahmed",
    h6: "ahmed55",
    box_cls:"z-40 -translate-y-[10%]  relative",
    box_p:'left-[20%]',
    p: "blessed to be part of a family .",
  },
  
];
