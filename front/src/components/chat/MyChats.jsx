import { useEffect, useState } from "react";
import { handleLocalStorage } from "../../localStorage/LocalStorage";
import ProfilePic from "./ProfilePic";
import MyChatItem from "./MyChatItem";
import axios from 'axios';

function MyChats() {
  const { user } = handleLocalStorage();
  const [search, setSearch] = useState("");
  const [searchChats, setSearchChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [myChats, setMyChats] = useState([]);


  const fetchChats = async () => {
    try {
      setLoading(true);
      const config = {
        headers: {
          "Authorization": `Bearer ${user.token}`,
        },
      };

      const response = await axios.get(
        "http://localhost:3001/api/v1/chat",
        config
      );

      const { data } = response;
      setMyChats(data);
      console.log(data)
      setLoading(false);
    } catch (error) {
      console.log(error);
      // display toast there was an error
    }
  }

  useEffect(() => {
    // maybe we will have to do something else here
    fetchChats();
  }, []);

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
       setSearchChats(data);
       setLoading(false);
     } catch (error) {
       // display a toast = fail to load the search reshults
     }
   };


  return (
    <div className="flex flex-col w-[25%] h-full font-roboto border-r-[1px] border-r-[#D0D0D0]">
      <div className="text-white p-3 h-[10%] flex justify-between w-full items-center bg-primary">
        <div className="flex items-center space-x-4">
          <ProfilePic pic={user._doc.pic} />
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

        {/* {loading ? (<div>Loading...</div>) : (
          searchResult?.map((user) => (
            <ChatListItem></ChatListItem>
          ))
        ) } */}
        
        {myChats.length > 0 ? (
          myChats.map((chat) => (
            <MyChatItem
              key={chat._id}
              id={chat._id}
              pic={chat.professional.pic}
              title={chat.professional.name}
              subtitle={
                chat.latestMessage.sender === user._doc.id
                  ? `You: ${chat.latestMessage.content}`
                  : chat.latestMessage.content
              }
            />
          ))
        ) : (
          <MyChatItem />
        )}
      </div>
    </div>
  );
}

export default MyChats