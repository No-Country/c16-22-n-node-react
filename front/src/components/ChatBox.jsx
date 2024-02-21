import { Card, Button, Avatar, Tooltip } from 'flowbite-react';
import {ChatState} from '../Context/ChatProvider'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const ENDPOINT = "http://localhost:5180";
var socket, selectedChatCompare;

function ChatBox({fetchAgain, setFetchAgain}) {
  const { user, selectedChat, setSelectedChat } = ChatState();

  const [messages, setMessages] = useState();
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  const fetchMessages = async() => {
    if(!selectedChat) return;
    try {
      const config = {
        headers: {
          "Authorization": `Bearer ${user.token}`,
        }
      };
      setLoading(true);
      const response = await axios.get(
        `http://localhost:3001/api/v1/messages/${selectedChat._id}`,
        config
      );
      const { data } = response;
      setMessages(data);
      setLoading(false);
    } catch (error) {
      // display toast - error ocurred
    }
  }
  
  const sendMessage = async (event) => {
    console.log("worked")
    if(event.key === "Enter" && newMessage) {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };

        setNewMessage(""); // it should change the ui async first and then post a new message

        const response = await axios.post(
          "http://localhost:3001/api/v1/messages",
          {
            content: newMessage,
            chatId: selectedChat._id,
          },
          config
        );
        const { data } = response;

        setMessages([...messages, data]);
      } catch {
        // display a toast - error ocurred
      }
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [selectedChat]);

  // this is for single message area
  useEffect(() => {
    socket = io(ENDPOINT)
  });

  const typingHandler = (e) => {
    setNewMessage(e.target.value);
    // typing indicator logic
  };

  const getSender = (loggedUser, users) => {
    if (users && users.length === 2) {
      return users[0]._id === loggedUser._doc._id
        ? users[1].name
        : users[0].name;
    } else {
      // Handle the case when users array is undefined or does not have expected length
      return "Unknown Sender";
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
    return (
      i === messages.length - 1 &&
      messages[messages.length - 1].sender._id !== userId &&
      messages[messages.length - 1].sender._id
    );
  };

  return (
    <>
      <h3>Single chat</h3>
      {selectedChat ? (
        <h1>{getSender(user, selectedChat.users)}</h1>
      ) : (
        <div>Click on a user to start chatting</div>
      )}
      {loading ? (
        <h1>loading chat...</h1>
      ) : (
        <Card className="messages">
          {messages &&
            messages.map((message, index) => (
              <div key={message._id}>
                {(isSameSender(messages, message, index, user._doc._id) ||
                  isLastMessage(messages, index, user._doc._id)) &&
                    (
                      <Avatar
                        name={message.sender.name}
                        src={message.sender.pic}
                      >
                        <Tooltip
                          content={message.sender.name}
                          placement="bottom"
                        ></Tooltip>
                      </Avatar>
                    )}
                    <span style={{
                        backgroundColor: `${message.sender._id === user._doc._id ? "#BEE3F8" : "#B9F5D0"}`,
                        borderRadius: "20px",
                        padding: "5px 15px",
                        maxWidth: "75%",

                      }}>{message.content}</span>
              </div>
            ))}
          <form>
            <input
              type="text"
              onKeyDown={sendMessage}
              onChange={typingHandler}
              value={newMessage}
            />
            <Button type='submit' onClick={sendMessage}>Send</Button>
          </form>
        </Card>
      )}
    </>
  );
}

export default ChatBox