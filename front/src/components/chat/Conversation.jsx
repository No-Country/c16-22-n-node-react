import { handleLocalStorage } from "../../localStorage/LocalStorage";
import ChatHeader from './ChatHeader.jsx'
import axios from 'axios';
import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import NewMessageForm from './NewMessageForm';

// const ENDPOINT = "http://localhost:3001"; // change this to the deployed url
const ENDPOINT = "https://serviya-back.vercel.app";
let socket, selectedChatCompare;

function Conversation({selectedChatId}) {
  const { user, selectedChat } = handleLocalStorage();

  const [socketConnected, setSocketConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const URL = "https://serviya-back.vercel.app";
  // const URL = "http://localhost:3001";

  useEffect(() => {
    // this is for single message area
    socket = io(ENDPOINT);
    socket.emit("setup", user._doc._id);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("message received", (newMessageReceived) => {
      // if there is no chat selected or if there is a message but its not from the current selected chat
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageReceived.chat._id
      ) {
        // send a notification
      } else {
        setMessages([...messages, newMessageReceived]);
      }
    });
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));
  }, []);

  useEffect(() => {
    fetchMessages();
    // keep the backup of chats, so we can decide between notifications
    selectedChatCompare = selectedChat;
  }, [selectedChat]);

  const fetchMessages = async () => {
    try {
      if (selectedChat === undefined) return;

      let config = {};
      console.log(user.type)
      if (user.type === "professional") {
        config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
            "X-Type": "professional",
          },
        };
      } else {
        config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
      }

      setLoading(true);
      const response = await axios.get(
        `${URL}/api/v1/messages/${selectedChat}`,
        config
      );
      const { data } = response;
      setMessages(data);
      setLoading(false);
      socket.emit("join chat", selectedChat);
    } catch (error) {
      // display toast - error ocurred
    }
  };

  const isSameSender = (messages, m, i, userId) => {
    return (
      i < messages.length - 1 &&
      (messages[i + 1].sender._id !== m.sender._id ||
        messages[i + 1].sender._id === undefined) &&
      messages[i].sender._id !== userId
    );
  };

  const isLastMessage = (messages, i, userId) => {
    return console.log(
      i === messages.length - 1 &&
        messages[messages.length - 1].sender._id !== userId &&
        messages[messages.length - 1].sender._id
    );
  };

  return (
    <div className="w-3/4 text-white">
      {selectedChat && <ChatHeader user={user} />}
      <div className=" w-full h-[90%] p-10 bg-[#E0E9EE] flex flex-col justify-between">
        {/* both chats container */}
        <div className="flex flex-col space-y-6 overflow-auto w-full">
          {/* our chat */}
          {/* probably same component but passing different styles based on whether you are a sender or receiver */}
          {messages.length > 0 ? (
            messages.map((message, index) =>
              user.type === "user" ? (
                message.chat.user === message.sender[0]?._id ? (
                  <div
                    key={message._id}
                    className="flex text-black space-x-4 self-end"
                  >
                    <div className="flex flex-col space-y-2">
                      <p className="bg-secondary p-4 rounded-xl shadow-md max-w-[700px]">
                        {message.content}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div key={message._id} className="flex text-black space-x-4">
                    <div className="flex flex-col space-y-2">
                      <p className="bg-white p-4 rounded-xl shadow-md max-w-[700px]">
                        {message.content}
                      </p>
                    </div>
                  </div>
                )
              ) : message.chat.user === message.sender[0]?._id ? (
                <div
                  key={message._id}
                  className="flex text-black space-x-4"
                >
                  <div className="flex flex-col space-y-2">
                    <p className="bg-white p-4 rounded-xl shadow-md max-w-[700px]">
                      {message.content}
                    </p>
                  </div>
                </div>
              ) : (
                <div key={message._id} className="flex text-black space-x-4 self-end">
                  <div className="flex flex-col space-y-2">
                    <p className="bg-secondary p-4 rounded-xl shadow-md max-w-[700px]">
                      {message.content}
                    </p>
                  </div>
                </div>
              )
            )
          ) : (
            <p></p>
          )}
        </div>

        <NewMessageForm
          socketConnected={socketConnected}
          setMessages={setMessages}
          socket={socket}
        />
      </div>
    </div>
  );
}

export default Conversation

              // <div className="flex text-black space-x-4 self-end">
              //   <div className="flex flex-col space-y-2">
              //     {/* {list of messages} */}
              //     {/* {probably we need a component} */}
              //     <p className="bg-secondary p-4 rounded-xl shadow-md max-w-[700px]">
              //       {message.content}
              //     </p>
              //   </div>
              //   {console.log(message)}
              //   {message.sender === user._doc._id ? (
              //     <img
              //       className="w-14 h-14 rounded-full"
              //       src={user._doc.pic}
              //       alt=""
              //     />
              //   ) : (
              //     <img
              //       className="w-14 h-14 rounded-full"
              //       src={message.sender}
              //       alt=""
              //     />
              //   )}
              // </div>