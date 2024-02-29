import Nav from '../components/nabvar/Navbar';
import MyChats from '../components/chat/MyChats';
import Conversation from '../components/chat/Conversation';

const Chat = () => {
  return (
    <div className='scroll-smooth h-screen w-screen' >
        <Nav/>
        <div className='flex h-[90%] w-full'>
            <MyChats/>
            <Conversation/>
        </div>
    </div>
  )
}

export default Chat