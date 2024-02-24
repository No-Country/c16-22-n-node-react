import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../auth/login/Login";
import useStoreLogin from "../../store/useStoreLogin";
import Register from "../auth/register/Register";
import Logout from "../auth/logout/Logout";

const Nav = () => {


  
  const navigate = useNavigate();
  const { login } = useStoreLogin();


  return (
    <nav
      className="max-w-[1440px] h-[120px] w-full bg-white
    flex items-center justify-between px-9
    font-roboto mx-auto
    "
    >
      <img src="./header/iconServiYAwhite.svg" alt="" />
      {login ?  <Logout/>:
        <div className="flex items-center gap-8 justify-center">
          <Login />
           <Register/>
        </div>
       }
    </nav>
  );
};

export default Nav;
