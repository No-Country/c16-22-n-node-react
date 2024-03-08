
import Perfil from "../../../../public/login/perfil.svg";
import Serviya from "../../../../public/login/serviya.svg";
import Register from "../register/Register";
import ProfessionalRegisterForm from "../register/ProfessionalRegisterForm";

import { handleLogin } from "../../../hanldeloginAndRegister/HandleLogAndReg";

const Login = ({typeOfLogin}) => {

  const {
    onSubmit,
    handleSubmit,
    register,
    handleModalClick,
    info,
    loading,
    openModal,
    setOpenModal,
    openModalProfessional,
    setOpenModalProfessional,
  } = handleLogin();

  const handleProfessionalRegister = async () => {
    setOpenModal(false);
    setOpenModalProfessional(true);
  }

  return (
    <>
      {typeOfLogin === "user" ? (
        <button
          onClick={() => setOpenModal(true)}
          className="cursor-pointer w-[150px] h-[55px] bg-[#055286]
            rounded-2xl p-4 text-xl font-[400] text-white flex items-center
              hover:opacity-80 transition"
        >
          Iniciar sesion
        </button>
      ) : (
        <button
          onClick={() => setOpenModal(true)}
          className="text-primary hover:underline"
        >
          ¿Sos profesional?
        </button>
      )}

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
                {typeOfLogin === "user"
                  ? "Ingresá a tu cuenta ServiYA"
                  : "Ingresá como profesional"}
              </span>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4  p-4"
              >
                <div className="font-bold flex flex-col gap-2 ">
                  <label
                    className=" shadow-lg border-[#7C7C7C] p-1
      border-solid border-2 w-fit px-2 py-1 rounded-xl 
      text-[#7C7C7C] text-sm text-center 
     "
                    htmlFor="email"
                  >
                    Ingresar correo
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className=" shadow-lg font-bold focus:border-[#7C7C7C]   text-[#7C7C7C]
      text-sm text-center    border-2  rounded-xl  "
                    id="email"
                  />
                </div>

                <div className=" font-bold flex flex-col gap-2">
                  <label
                    className=" shadow-lg border-[#7C7C7C] p-1
      border-solid border-2 w-fit px-2 py-1  rounded-xl 
      text-[#7C7C7C] text-sm text-center 
     "
                    htmlFor="password"
                  >
                    Ingresar Contraseña
                  </label>
                  <input
                    {...register("password", { required: true })}
                    className=" shadow-lg  text-[#7C7C7C]
      text-sm text-center  border-solid border-2  rounded-xl 
           outline-none
           focus:border-[#7C7C7C]"
                    id="password"
                    type="password"
                  />
                  {typeOfLogin === "user" ? (
                    <Register onClick={() => setOpenModal(false)} />
                  ) : (
                    <></>
                  )}

                  <span className="self-center text-grey cursor-pointer text-[12px] hover:underline">
                    ¿Olvidaste tu contraseña?
                  </span>
                </div>
                <input
                  type="text"
                  className="hidden"
                  value={typeOfLogin === "user" ? "user" : "profesional"}
                  {...register("type", { required: true })}
                />
                <button
                  type="submit"
                  className="font-bold shadow-lg cursor-pointer   bg-[#E8C900]
              rounded-2xl px-4 py-3 text-md  text-black flex justify-center items-center font-roboto 
                hover:opacity-80 transition"
                  disabled={loading}
                >
                  Iniciar sesión
                </button>

                {typeOfLogin === "professional" ? (
                  <button
                    onClick={() => handleProfessionalRegister()}
                    className="font-bold shadow-lg cursor-pointer   bg-primary
              rounded-2xl px-4 py-3 text-md  text-white flex justify-center items-center font-roboto 
                hover:opacity-80 transition"
                    disabled={loading}
                  >
                    Registrate
                  </button>
                ) : (
                  <></>
                )}
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

      {openModalProfessional && (
        <div
          className="bg-[#E0E9EE] max-w-[1440px] h-full bg-opacity-100 absolute
            z-10 right-0 left-0 top-0 bottom-0 mx-auto flex justify-center modal-container"
        >
          <ProfessionalRegisterForm/>
        </div>
      )}
    </>
  );
};

export default Login;
