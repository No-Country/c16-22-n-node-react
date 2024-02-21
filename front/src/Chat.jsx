import {useState} from 'react';
import { Button, Card } from "flowbite-react";
import SideDrawer from './components/SideDrawer';
import MyChats from './components/MyChats';
import ChatBox from './components/ChatBox';
import { ChatState } from './Context/ChatProvider';


function Chat() {
  // const [chats, setChats] = useState([])
  // const fetchChats = async () => {
  //   const { data } = await axios.get('/api/v1/chat');
  //   console.log(data);
  //   setChats(data);
  // }

  // useEffect(()=> {
  //   fetchChats(chats.map((chat)=> {
  //     <div key={chat._id}>{chat.chatName}</div>
  //   }));
  // });


  // const [response, setResponse] = useState("");
  // const [endpoint] = useState("http://localhost:3001");
  // useEffect(() => {
  //   const socket = socketIOClient(endpoint);
  //   socket.on("FromAPI", (data) => {
  //     setResponse(data);
  //   });
  //   socket.emit("message", "Hello From the Client!");
  // }, [endpoint]);
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div>
      { user && <SideDrawer></SideDrawer>}
      <Button>Chat</Button>
      <Card>
        { user && (<MyChats fetchAgain={fetchAgain}></MyChats>)}
        { user && (<ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}></ChatBox> )}
      </Card>
      {/* <p>{response}</p> */}
    </div>
  );
}

export default Chat