import { handleLocalStorage } from "../../localStorage/LocalStorage";
import { useState, useEffect } from "react";
import axios from 'axios';

function NewMessageForm({setMessages}) {
  const { user, selectedChat } = handleLocalStorage();

  const [newMessage, setNewMessage] = useState("");
  const [typing, setTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  console.log(user);

  const sendMessage = async () => {
    // if(event.key === "Enter" && newMessage) {
    if (newMessage) {
      try {
        //socket.emit("stop typing", selectedChat._id);

        let config = {};

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

        setNewMessage(""); // it should change the ui async first and then post a new message

        const response = await axios.post(
          "https://serviya-back.vercel.app/api/v1/messages",
          {
            content: newMessage,
            chatId: selectedChat,
          },
          config
        );
        const { data } = response;
        console.log(data);

        //socket.emit("new message", data);
        setMessages((prevMessages) => [...prevMessages, data]);
      } catch {
        // display a toast - error ocurred
      }
    }
  };

  const typingHandler = (e) => {
    setNewMessage(e.target.value);
    // typing indicator logic
    // if (!socketConnected) return;

    if (!typing) {
      setTyping(true);
      //socket.emit("typing", selectedChat._id);
    }

    let lastTypingTime = new Date().getTime();
    let timerLength = 3000;

    setTimeout(() => {
      let timeNow = new Date().getTime();
      let timeDiff = timeNow - lastTypingTime;

      if (timeDiff >= timerLength && typing) {
        //socket.emit("stop typing", selectedChat._id);
        setTyping(false);
      }
    }, timerLength);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  return (
    <div className="self-center justify-items-end mt-3">
      <form onSubmit={handleSubmit}>
        <input
          className=" w-[540px] h-[53px] rounded-xl text-black"
          type="text"
          placeholder="Escribi aca tu respuesta"
          onChange={typingHandler}
          value={newMessage}
        />
        <button
          type="submit"
          className=" ml-5 w-[146px] rounded-2xl p-3 text-black bg-accent"
        >
          Responder
        </button>
      </form>
    </div>
  );
}

export default NewMessageForm;
