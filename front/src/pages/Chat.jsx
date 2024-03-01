import Nav from '../components/nabvar/Navbar';
import MyChats from '../components/chat/MyChats';
import Conversation from '../components/chat/Conversation';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Chat = () => {
  // If the user is not logged in we should redirect them to the home page
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("info"));
    if (!user) {
      navigate("/");
    }
  });

  return (
    <div className="scroll-smooth h-screen w-screen">
      <Nav />
      <div className="flex h-[90%] w-full">
        <MyChats />
        <Conversation />
      </div>
    </div>
  );
}

export default Chat