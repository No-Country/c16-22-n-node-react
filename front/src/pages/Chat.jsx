import Nav from '../components/nabvar/Navbar';
import MyChats from '../components/chat/MyChats';
import Conversation from '../components/chat/Conversation';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Chat = () => {
  const [selectedChatId, setSelectedChatId] = useState(localStorage.getItem("selectedChat") || null);
  
  // If the user is not logged in we should redirect them to the home page
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("info"));
    if (!user) {
      navigate("/");
    }
  }, [selectedChatId]);

  return (
    <div className="scroll-smooth h-screen w-screen">
      <Nav />
      <div className="flex h-[90%] w-full">
        <MyChats />
        {selectedChatId === "undefined" || selectedChatId === null ? <div>nothing yet</div> : <Conversation />}
      </div>
    </div>
  );
}

export default Chat