import React from "react";
import Serviya from "/footer/serviya.svg";
import Youtube from "/footer/youtube.svg";
import Facebook from "/footer/facebook.svg";
import Instagram from "/footer/instagram.svg";

const Footer = () => {
  return (
    <footer
      className="h-[445px] max-w-[1440px] 
    flex items-center justify-end flex-col mx-auto gap-16
    bg-white
    "
    >
      <div className="flex flex-col items-center ">
        <img src={Serviya} alt="" />
        <span
          className="text-[36px] font-[500] font-roboto 
    text-[#055286]
    "
        >
          La solución mas rápida y segura
        </span>
      </div>
      <div className=" flex max-w-[800px] gap-3">
        <div className="flex font-roboto font-medium 
        text-[#055286]
        gap-2
        ">
          <img src={Youtube} alt="" />
          <span>Youtube</span>
        </div>

        <div className="flex font-roboto font-medium 
        text-[#055286]
        gap-2
        ">
          <img src={Facebook} alt="" />
          <span>Facebook</span>
        </div>

        <div className="flex font-roboto font-medium 
        text-[#055286]
        gap-2
        ">
          <img src={Instagram} alt="" />
          <span>Instagram</span>
        </div>
      </div>

      <div className="h-[100px] w-full bg-[#055286]"></div>
    </footer>
  );
};

export default Footer;
