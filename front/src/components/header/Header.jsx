import React from "react";
import "./header.css";
import Nav from "../nabvar/Navbar";
import Serviya from "../../../public/header/icon.svg";
import AppStore from "../../../public/header/descarga1.svg";
import GooglePlay from "../../../public/header/descarga2.svg";
import Human from "../../../public/header/header-human.svg";
const Header = () => {
  return (
    <>
      <Nav />
      <div className="mx-auto h-[600px]  max-w-[1440px]" id="header">
        <div className="flex items-center justify-center ">
          <div className="flex flex-col gap-20 mt">
            <div className="flex flex-col items-center gap-4 mt-[103px]">
              <img src={Serviya} alt="" />
              <span
                className="text-[24px] text-white
            font-semibold
           "
              >
                Calidad, velocidad y seguridad
              </span>
            </div>
            <div className="flex  flex-col items-center gap-6 ">
              <span
                className="text-[32px] text-[#E8C900]
            font-semibold drop-shadow-md
           ">Descargá la App.
              </span>
              <div className="flex gap-4">
                <img src={AppStore} alt="" />
                <img src={GooglePlay} alt="" />
              </div>
            </div>
          </div>
          <img className="mt-[53px]" src={Human} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
