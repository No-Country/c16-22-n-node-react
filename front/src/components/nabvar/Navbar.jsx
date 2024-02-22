import Login from "../auth/login/Login";

const Nav = () => {


  return (
    <nav className="max-w-[1440px] h-[120px] w-full bg-white
    flex items-center justify-between px-9
    font-roboto mx-auto
    ">
        <img src="./header/iconServiYAwhite.svg" alt="" />
        <div className="flex items-center gap-8 justify-center">
            <Login/>
            <span className="hover:opacity-80 transition cursor-pointer text-xl font-roboto text-[#055286] font-[400]"> Registrarse</span>
        </div>
    </nav>
  );
};

export default Nav;
