
import "./Novedades.css";

const Novedades = () => {


  return (
    <div className="max-w-[1440px] gap-9 flex justify-center mx-auto ">
      <div className="gap-9 flex flex-col">
        <div className="w-[290px] h-[260px] object-cover overflow-hidden " id="novedadesItem1">
        </div>
        <div className="w-[290px] h-[130px] " id="novedadesItem2"></div>
      </div>
      <div className="flex flex-col gap-9">
        <div className="flex gap-9">
          <div className="w-[290px] h-[130px] " id="novedadesItem3"></div>
          <div className="w-[290px] h-[130px] " id="novedadesItem4"></div>
        </div>

        <div className="flex gap-9">
          <div className="w-[400px] h-[260px] " id="novedadesItem5"></div>
          <div className="w-[180px] h-[260px] " id="novedadesItem6"></div>
        </div>
      </div>
      <div className="w-[290px] h-[430] " id="novedadesItem7"></div>
    </div>
  );
};

export default Novedades;
