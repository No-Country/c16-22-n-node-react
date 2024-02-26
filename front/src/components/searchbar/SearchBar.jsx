import { useState } from 'react';
import Title from '../title/Title';
import { handleLocalStorage } from '../../localStorage/LocalStorage';
import axios from 'axios';

function SearchBar() {
  // Maneja lo que el usuario quiere buscar
  const [search, setSearch] = useState("");
  // Maneja los profesionales que cumplen con los requisitos de busqueda
  const [searchResult, setSearchResult] = useState([]);

  // Obtenemos los datos del usuario que inicio sesion

  const { user } = handleLocalStorage();
  // TO-DO: En caso de no haber iniciado session deberiamos, deberiamos mostrar un mensaje

  const handleSearch = async () => {
    // Para obtener los resultados necesitamos enviar el token del usuario que esta actualmente loggeado
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    // Al momento de hacer la request, enviamos cualquier valor que este almancenado en la barra de busqueda
    const response = await axios.get(
      `https://serviya-back.vercel.app/api/v1/professional?search=${search}`,
      config
    );

    const { data } = response;
    setSearchResult(data);

    // TO-DO: Mientras estemos esperando la respuesta, se puede renderizar un estado de carga "Loading..."
    // setLoading(false);
  };

  // Regresamos un contenedor principal, con el titulo y barra de busqueda dentro
  // La barra de busqueda esta hecha de una input de texto y un boton que envia la request de busqueda al hacer click
  
  // TO-DO: La request de busqueda tambien deberia enviar cuando el usuario presiona "Enter"
  return (
    <div className="max-w-[1440px] w-full mx-auto flex flex-col items-center">
      <Title
        className={"text-[32px] font-[500] mb-[24px] mx-[225px]"}
        text={"Buscá un profesional"}
      ></Title>
      <div className="max-w-[808px] flex border-[#055286] ">
        <input
          className="w-[700px] rounded-l-3xl border-[2px border-[#055286]]"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
        <button
          className="w-[82px] h-[] bg-[#055286] rounded-r-3xl flex items-center justify-center"
          onClick={handleSearch}
        >
          <img src="../../../public/searchbar/lupa.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar