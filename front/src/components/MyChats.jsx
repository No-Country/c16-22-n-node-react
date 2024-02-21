import { useState, useEffect } from "react";
import axios from 'axios'
import { ChatState } from "../Context/ChatProvider";
import { Card } from "flowbite-react";


function MyChats({fetchAgain}) {
  const [loggedUser, setLoggedUser] = useState();
  const { user, selectedChat, setSelectedChat, chats, setChats } = ChatState();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          "Authorization": `Bearer ${user.token}`
        }
      }

      const response = await axios.get("http://localhost:3001/api/v1/chat", config);
      
      const {data} = response;
      setChats(data);
    } catch(error) {
      // display toast - failed to load the toast
    }
  }

  const getSender = (loggedUser, users) => {
    if (users && users.length === 2) {
      return users[0]._id === loggedUser._doc._id
        ? users[1].name
        : users[0].name;
    } else {
      // Handle the case when users array is undefined or does not have expected length
      console.log(users);
      return "Unknown Sender";
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, [fetchAgain])

  return (
    <div>
      <h1>MyChats</h1>
      {chats ? (
        <div>
          { chats.map((chat) => (
            <Card onClick={() => {setSelectedChat(chat)}} key={chat._id}>
              <h3>Chat user name: {getSender(loggedUser, chat.users)}</h3>
            </Card>
          ))}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  )
}

export default MyChats