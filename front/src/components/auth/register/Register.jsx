import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Perfil from "../../../../public/login/perfil.svg";
import Serviya from "../../../../public/login/serviya.svg";
import axios from "axios";
import useStoreLogin from "../../../store/useStoreLogin";

const Register = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState();
  const {setLogin} = useStoreLogin();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (info) {
      setLoading(true);

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      axios
        .post(
          "http://localhost:3001/api/v1/users",
          {
            name:info.name,
            email: info.email,
            password: info.password,
          },
          config
        )
        .then((response) => {
          console.log(response, "success");
          setLoading(true);
          setOpenModal(false);
          setLogin(true)
        })
        .catch((error) => console.log(error))
        .finally(setLoading(false));
    }
  }, [info]);

  // manejo de datos del formulario de capturan en el data
  // hacer pruebas en el formulario
  const onSubmit = async ({name, email, password, }) => {
    console.log(name, email, password);
    setInfo({name, email, password });
    setLoading(true); // Set loading to true before making the API call
    reset();
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-container")) {
      setOpenModal(false); //
    }
  };

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="cursor-pointer w-[150px] h-[55px] 
            rounded-2xl p-4 text-xl font-[400] text-[#055286] flex items-center justify-center
              hover:opacity-80 transition"
      >
        Registrase
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
      border-solid border-2 w-32 rounded-xl 
      text-[#7C7C7C] text-sm text-center 
     "
                    htmlFor="email"
                  >
                    Nombre
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
      border-solid border-2 w-32 rounded-xl 
      text-[#7C7C7C] text-sm text-center 
     "
                    htmlFor="email"
                  >
                   Correo
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
      border-solid border-2 w-32 rounded-xl 
      text-[#7C7C7C] text-sm text-center 
     "
                    htmlFor="password"
                  >
                  Contraseña
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
                  className="font-bold shadow-lg cursor-pointer w-[130px] h-[45px] bg-[#055286]
              rounded-2xl p-4 text-md  text-white flex justify-center items-center font-roboto 
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
