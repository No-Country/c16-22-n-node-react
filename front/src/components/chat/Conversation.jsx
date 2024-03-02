import { handleLocalStorage } from "../../localStorage/LocalStorage";
import ChatHeader from './ChatHeader.jsx'
import axios from 'axios';
import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import NewMessageForm from './NewMessageForm';

// const ENDPOINT = "http://localhost:3001"; // change this to the deployed url
// let socket, selectedChatCompare;

function Conversation() {
  const { user, selectedChat } = handleLocalStorage();

  const [socketConnected, setSocketConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   // this is for single message area
  //   socket = io(ENDPOINT);
  //   socket.emit("setup", user._doc._id);
  //   socket.on("connected", () => setSocketConnected(true));
  //   socket.on("message received", (newMessageReceived) => {
  //     // if there is no chat selected or if there is a message but its not from the current selected chat
  //     if (
  //       !selectedChatCompare ||
  //       selectedChatCompare._id !== newMessageReceived.chat._id
  //     ) {
  //       // send a notification
  //     } else {
  //       setMessages([...messages, newMessageReceived]);
  //     }
  //   });
  //   socket.on("typing", () => setIsTyping(true));
  //   socket.on("stop typing", () => setIsTyping(false));
  // }, []);

  useEffect(() => {
    fetchMessages();
    // keep the backup of chats, so we can decide between notifications
    // selectedChatCompare = selectedChat;
  }, [selectedChat]);

  const fetchMessages = async () => {
    
    try {
      if (selectedChat === undefined) return;
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      setLoading(true);
      const response = await axios.get(
        `http://localhost:3001/api/v1/messages/${selectedChat}`,
        config
      );
      const { data } = response;
      setMessages(data);
      setLoading(false);
      //socket.emit("join chat", selectedChat._id);
    } catch (error) {
      // display toast - error ocurred
    }
  };


  return (
    <div className="w-3/4 text-white">
      <ChatHeader user={user} />
      <div className=" w-full h-[90%] p-10 bg-[#E0E9EE] flex flex-col justify-between">
        {/* both chats container */}
        <div className="flex flex-col space-y-6 overflow-auto w-full"> 
          {/* our chat */}
          {/* probably same component but passing different styles based on whether you are a sender or receiver */}
          {messages.length > 0 ?
            messages.map((message) => (
              <div className="flex text-black space-x-4 self-end">
                <div className="flex flex-col space-y-2">
                  {/* {list of messages} */}
                  {/* {probably we need a component} */}
                  <p className="bg-secondary p-4 rounded-xl shadow-md max-w-[700px]">
                    {message.content}
                  </p>
                </div>
                <img className="w-14 h-14 rounded-full" src={user._doc.pic} alt="" />
              </div>

            ))
             : <div className="text-black">Click on a user to start chatting</div>}
          {/* {the person we are chatting with} */}
          {/* <div className="flex text-black space-x-4">
            <img className="w-14 h-14 rounded-full" src={user._doc.pic} alt="" />
            <div className="flex flex-col space-y-2">
              {/* {list of messages} */
              /* {probably we need a component} 
              <p className="max-w-[700px] bg-white p-4 rounded-xl shadow-md">
                Hola Camila, como estas?
              </p>
              <p className="max-w-[700px] bg-white p-4 rounded-xl shadow-md">
                El lunes puedo a las 18hs
              </p>
              <p className="max-w-[700px] bg-white p-4 rounded-xl shadow-md">
                Seria para hacer el diagnostico, esta bien?
              </p>
            </div>
          </div> */}
        </div>

        <NewMessageForm setMessages={setMessages}/>
      </div>
    </div>
  );
}

export default Conversation