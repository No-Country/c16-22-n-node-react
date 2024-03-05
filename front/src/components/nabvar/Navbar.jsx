import Login from "../auth/login/Login";
import useStoreLogin from "../../store/useStoreLogin";
import Register from "../auth/register/Register";
import Logout from "../auth/logout/Logout";
import { useLocation, Link } from "react-router-dom";

const Nav = () => {
  const { login } = useStoreLogin();
  const user = JSON.parse(localStorage.getItem("info"));
  const location = useLocation();

  return (
    <nav
      className={`max-w-[1440px] ${location.pathname === '/chat' ? "h-[10%]" : "h-[120px]"} w-full bg-white
    flex items-center justify-between px-9
    font-roboto mx-auto
    `}
    >
      <Link to="/">
        <img src="./header/iconServiYAwhite.svg" alt="" />
      </Link>
      {user ?  <Logout/>:
        <div className="flex items-center gap-8 justify-center">
          <Login />
           <Register/>
        </div>
       }
    </nav>
  );
};

export default Nav;
