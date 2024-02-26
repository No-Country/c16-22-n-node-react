
import "./Novedades.css";

const Novedades = () => {


  return (
    <div className="max-w-[1440px]  mx-auto  flex flex-col">
   <span className="px-3 ml-14 text-[#4E4E4E] font-medium text-3xl">Noveades</span>
    <div className="max-w-[1440px] gap-14 flex justify-center mx-auto mt-10 ">
        
      <div className="gap-11 flex flex-col">
        <div className="w-[290px] h-[260px]  shadow-xl " id="novedadesItem1">
        </div>
        <div className="w-[290px] h-[130px] shadow-xl " id="novedadesItem2"></div>
      </div>
      <div className="flex flex-col gap-9">
        <div className="flex gap-9">
          <div className="w-[290px] h-[130px] shadow-xl" id="novedadesItem3"></div>
          <div className="w-[290px] h-[130px] shadow-xl" id="novedadesItem4"></div>
        </div>

        <div className="flex gap-9">
          <div className="w-[400px] h-[260px] shadow-xl" id="novedadesItem5"></div>
          <div className="w-[180px] h-[260px]shadow-xl " id="novedadesItem6"></div>
        </div>
      </div>
      <div className="w-[290px] h-[430] shadow-xl" id="novedadesItem7"></div>
    </div>
    </div>
  );
};

export default Novedades;
