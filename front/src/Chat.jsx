import {useEffect, useState} from 'react';
import socketIOClient from 'socket.io-client';


function Chat() {
  const [response, setResponse] = useState("");
  const [endpoint] = useState("http://localhost:3001");
  useEffect(() => {
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", (data) => {
      setResponse(data);
    });
    socket.emit("message", "Hello From the Client!");
  }, [endpoint]);

  return <p>{response}</p>;
}

export default Chat