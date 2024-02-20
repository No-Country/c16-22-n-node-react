import { ChatState } from "../Context/ChatProvider";
import { Avatar, Button } from 'flowbite-react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import UserListItem from '../components/UserListItem'


function SideDrawer() {
    const { user } = ChatState();
    const navigate = useNavigate();

    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingChat, setLoadingChat] = useState(false);

    const logoutHandler = () => {
      localStorage.removeItem("userInfo");
      navigate("/");
    }

    const handleSearch = async () => {
      if(!search) {
        // display toast - Please enter something in search
      }

      try {
        setLoading(true);
        const config = {
          headers: {
            "Authorization": `Bearer ${user.token}`,
          },
        };
        const response = await axios.get(
          `http://localhost:3001/api/v1/users/?search=${search}`,
          config
        );

        const { data } = response;
        setSearchResult(data);
        setLoading(false);
      } catch(error) {
        // display a toast = fail to load the search reshults
      }
    }

    const accessChat = (userId) => {

    }
  return (
    <div>
      SideDrawer
      <input onChange={(e) => setSearch(e.target.value)}></input>
      <Button onClick={handleSearch}>Search</Button>
      <Avatar img={user._doc.pic} rounded>
        <div className="space-y-1 font-medium dark:text-white">
          <div>{user._doc.name}</div>
        </div>
      </Avatar>
      {loading ? (
        <div>Loading...</div>
      ) : (
        searchResult?.map((user) => (
          <UserListItem
            key={user._id}
            user={user}
            handleFunction={() => accessChat(user._id)}
          />
        ))
      )}
      <Button onClick={logoutHandler}>Logout</Button>
    </div>
  );
}

export default SideDrawer