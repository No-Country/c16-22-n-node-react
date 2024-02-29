import { useState } from "react";
import { handleLocalStorage } from "../../localStorage/LocalStorage";
import axios from 'axios';

function MyChats() {
  const { user } = handleLocalStorage();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const chats = [
    {
      user: {
        pic: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Manuel Lopez",
      },
      latestMessage: "Seria para hacer el diagnosticooooooo",
      selected: true
    },
    {
      user: {
        pic: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Jose Caceres",
      },
      latestMessage: "Perfecto!",
      selected: false
    },
  ];

   const handleSearch = async () => {
     if (!search) {
       // display toast - Please enter something in search
     }

     try {
       setLoading(true);
       const config = {
         headers: {
           Authorization: `Bearer ${user.token}`,
         },
       };
       const response = await axios.get(
         `http://serviya-back.vercel.app/api/v1/users/?search=${search}`,
         config
       );

       const { data } = response;
       setSearchResult(data);
       console.log(data);
       setLoading(false);
     } catch (error) {
       // display a toast = fail to load the search reshults
     }
   };

  return (
    <div className="flex flex-col w-[25%] h-full font-roboto border-r-[1px] border-r-[#D0D0D0]">
      <div className="text-white p-3 h-[10%] flex justify-between w-full items-center bg-primary">
        <div className="flex items-center space-x-4">
          <img className="w-14 h-14 rounded-full" src={user._doc.pic} alt="" />
          <span>Chats</span>
        </div>
        <span>(2)</span>
      </div>
      <div className="flex flex-col">
        {/* {This should be replaced with a search bar component} */}
        <div className="min-w-full max-w-[808px] flex border-[#055286] p-5">
          <input
            className="w-[700px] rounded-l-3xl border-[2px border-[#055286]]"
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Buscar"
          />
          <button
            className="w-[82px] h-[] bg-[#055286] rounded-r-3xl flex items-center justify-center"
            onClick={handleSearch}
          >
            <img src="../../../public/searchbar/lupa.svg" alt="" />
          </button>
        </div>

        {/* {This represents a component "chat"} */}
        {/* {loading ? (<div>Loading...</div>) : (
          searchResult?.map((user) => (
            <ChatListItem></ChatListItem>
          ))
        ) } */}
        {chats.map((chat) => (
          <div className="flex w-full h-[80px] p-5 items-center border-b-[#D0D0D0] border-b-[1px]">
            <img className="w-14 h-14 rounded-full" src={chat.user.pic} alt="" />
            {/* {a state should handle if the div is selected or not} */}
            <div className="flex flex-col ml-3 text-[14px] truncate" selected={chat.selected}>
              <p>{chat.user.name}</p>
              <p className="truncate">{chat.latestMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyChats