

import Perfil from "../../../../public/login/perfil.svg";
import Serviya from "../../../../public/login/serviya.svg";
import { handleRegister } from "../../../hanldeloginAndRegister/HandleLogAndReg";


const Register = () => {
  const {
    onSubmit,
    handleSubmit,
    register,
    handleModalClick,
    info,
    loading,
    openModal,
    setOpenModal,
  } = handleRegister();
  return (
    <>
      <button
        onClick={() => { 
          
          setOpenModal(true)
        
        }}
        className="cursor-pointer 
             p-1 text-[15px]  text-grey flex self-center
              hover:opacity-80 transition hover:underline"
      >
        No tienes una cuenta aun? Registrate
      </button>
      {openModal && (
        <div
          onClick={handleModalClick}
          className="bg-[#D9D9D9] max-w-[1440px] h-[1920px] bg-opacity-50 absolute
 z-10 right-0 left-0 top-0 bottom-0 mx-auto flex justify-center modal-container"
        >
          <div
            className="  mt-36  w-full max-w-96 p-2  flex items-center flex-col
"
          >
            <img
              className="p-3 text-pretty absolute  shadow-xl 
    rounded-full bg-[#055286] "
              src={Perfil}
              alt=""
            />
            <div
              className="bg-white rounded-2xl 
 flex justify-center flex-col pt-9 border-[#055286] boorder-solid border-2
 w-full max-w-96 mx-auto mt-9 overflow-hidden"
            >
              <span className="text-[#7C7C7C] font-bold text-center">
                Ingresá a tu cuenta ServiYA
              </span>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4  p-4"
              >
                         <div className="font-bold flex flex-col gap-2 ">
                  <label
                    className=" shadow-lg border-[#7C7C7C] p-1
      border-solid border-2 w-fit px-2 rounded-xl 
      text-[#7C7C7C] text-sm text-center 
     "
                    htmlFor="email"
                  >
                   Ingresar Nombre
                  </label>
                  <input
                    {...register("name", {required:true})}
                    
                    type="text"
                    className=" shadow-lg font-bold focus:border-[#7C7C7C]   text-[#7C7C7C]
      text-sm text-center    border-2  rounded-xl  "
                    id="email"
                  />
                </div>
                <div className="font-bold flex flex-col gap-2 ">
                  <label
                    className=" shadow-lg border-[#7C7C7C] p-1
      border-solid border-2 w-fit px-2 rounded-xl 
      text-[#7C7C7C] text-sm text-center 
     "
                    htmlFor="email"
                  >
                   Ingresar Correo
                  </label>
                  <input
                    {...register("email", {required:true})}
                    type="email"
                    className=" shadow-lg font-bold focus:border-[#7C7C7C]   text-[#7C7C7C]
      text-sm text-center    border-2  rounded-xl  "
                    id="email"
                  />
                </div>

                <div className=" font-bold flex flex-col gap-2">
                  <label
                    className=" shadow-lg border-[#7C7C7C] p-1
      border-solid border-2 w-fit px-2 rounded-xl 
      text-[#7C7C7C] text-sm text-center 
     "
                    htmlFor="password"
                  >
                  Ingresar Contraseña
                  </label>
                  <input
                    {...register("password", {required:true})}
                    className=" shadow-lg  text-[#7C7C7C]
      text-sm text-center  border-solid border-2  rounded-xl 
           outline-none
           focus:border-[#7C7C7C]"
                    id="password"
                    type="password"
                  />
                </div>
                <button
                  type="submit"
                  className="font-bold shadow-lg cursor-pointer   bg-[#E8C900]
                  rounded-2xl px-4 py-3 text-md  text-black flex justify-center items-center font-roboto 
                    hover:opacity-80 transition"
                  disabled={loading}
                >
                Registrarse
                </button>
              </form>

              <div
                className="h-[70px] w-full bg-[#055286] flex
    justify-center items-center
    "
              >
                <img className="" src={Serviya} alt="" />
              </div>
            </div>
            <div
              onClick={() => {
                setOpenModal(false);
              }}
              className="shadow-lg cursor-pointer border-[#055286] boorder-solid border-2
  bg-white p-3 rounded-full text-center w-[65px]  mt-5 text-3xl text-[#055286]
   hover:bg-[#055286] hover:text-white hover:border-white transition"
            >
              X
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
