import {useEffect, useState} from 'react';
import socketIOClient from 'socket.io-client';
import { Button } from "flowbite-react";
import axios from 'axios';


function Chat() {
  const [chats, setChats] = useState([])
  const fetchChats = async () => {
    const { data } = await axios.get('/api/v1/chat');
    console.log(data);
    setChats(data);
  }

  useEffect(()=> {
    fetchChats(chats.map((chat)=> {
      <div key={chat._id}>{chat.chatName}</div>
    }));
  }, []);


  const [response, setResponse] = useState("");
  const [endpoint] = useState("http://localhost:3001");
  useEffect(() => {
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", (data) => {
      setResponse(data);
    });
    socket.emit("message", "Hello From the Client!");
  }, [endpoint]);

  

  return (
    <>
      <Button>Chat</Button>
      <p>{response}</p>
    </>
  );
}

export default Chat