import { useState } from 'react';
import Title from '../title/Title';
import { handleLocalStorage } from '../../localStorage/LocalStorage';
import axios from 'axios';

function SearchBar() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([])
  const { user } = handleLocalStorage();

  const handleSearch = async () => {
    console.log(user.token)
    console.log(search)
    const config = {
      headers: {
        "Authorization" : `Bearer ${user.token}`
      }
    }

    const response = await axios.get(`https://serviya-back.vercel.app/api/v1/professional?search=${search}`,
    config
    )

    const { data } = response;
    setSearchResult(data);
    console.log(data);
    // setLoading(false);
  }

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