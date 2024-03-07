import Perfil from "../../../../public/login/perfil.svg";
import Serviya from "../../../../public/login/serviya.svg";

function ProfessionalRegisterForm() {
  return (
    <div className="w-[791px] p-2  flex items-center flex-col">
      <img
        className="p-3 text-pretty absolute  shadow-xl rounded-full bg-[#055286] "
        src={Perfil}
        alt=""
      />
      <div
        className="bg-white rounded-2xl flex justify-center flex-col pt-9
       border-[#055286] boorder-solid border-2 w-[791px] mx-auto mt-9 overflow-hidden"
      >
        <span className="text-[#7C7C7C] font-bold text-center">
          {" "}
          Registrate como profesional{" "}
        </span>
        <span className="text-[#7C7C7C] font-bold text-center">
          {" "}
          Paso 1 de 2{" "}
        </span>

        <form action="">
          <div className="flex justify-center gap-28">
            <div className="flex flex-col hidden">
              <label htmlFor="name">Nombre y apellido</label>
              <input type="text" />

              <label htmlFor="dni">DNI / Pasaporte</label>
              <input type="text" />

              <label htmlFor="telephone">Telefono</label>
              <input type="tel" />
            </div>

            <div className="flex flex-col hidden">
              <label htmlFor="email">E-mail</label>
              <input type="text" />

              <label htmlFor="password">Contraseña</label>
              <input type="password" />

              <label htmlFor="password">Repetir contraseña</label>
              <input type="password" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="name">Puesto de trabajo</label>
              <input type="text" />

              <label htmlFor="dni">Matricula nº</label>
              <input type="text" />

              <label htmlFor="gender">Género</label>
              <select name="gender" id="gender">
                <option value={"Sin especificar"}>Sin especificar</option>
                <option value={"Masculino"}>Masculino</option>
                <option value={"Femenino"}>Femenino</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="area">Zona de trabajo</label>
              <input type="text" />

              <label htmlFor="password">Habilidades</label>
              <select name="aptitudes" id="aptitudes">
                <option value={"Sin especificar"}>Sin especificar</option>
                <option value={"Masculino"}>Masculino</option>
                <option value={"Femenino"}>Femenino</option>
              </select>

              <label htmlFor="password">Disponibilidad</label>
              <select name="timeAvailability" id="timeAvailability">
                <option value={"24hrs"}>24hrs</option>
                <option value={"Noche"}>Noche</option>
                <option value={"Tarde"}>Tarde</option>
                <option value={"Mañana"}>Mañana</option>
              </select>
            </div>
          </div>

          <button
            className="shadow-lg cursor-pointer   bg-[#E8C900]
              rounded-2xl px-5 py-2 text-sm  text-black flex justify-center items-center hover:opacity-80 transition"
          >
            Siguiente
          </button>
        </form>

        {/* <form
          //   onSubmit={handleSubmit(onSubmit)}
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
              //   {...register("name", { required: true })}
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
              //   {...register("email", { required: true })}
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
              //   {...register("password", { required: true })}
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
            // disabled={loading}
          >
            Registrarse
          </button>
        </form> */}

        <div className="h-[70px] w-full bg-[#055286] flex justify-center items-center">
          <img className="" src={Serviya} alt="" />
        </div>
      </div>
      <div
        // onClick={() => {
        //   setOpenModal(false);
        // }}
        className="shadow-lg cursor-pointer border-[#055286] boorder-solid border-2
  bg-white p-3 rounded-full text-center w-[65px]  mt-5 text-3xl text-[#055286]
   hover:bg-[#055286] hover:text-white hover:border-white transition"
      >
        X
      </div>
    </div>
  );
}

export default ProfessionalRegisterForm;
