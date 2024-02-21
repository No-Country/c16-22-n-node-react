import { Card, Tabs } from 'flowbite-react'
import { MdLogin } from "react-icons/md";
import Login from './Login'
import Signup from './Signup'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      navigate("/chat");
    }
  });

  return (
    <Card>
      <Tabs>
        <Tabs.Item active title="Login" icon={MdLogin}>
          <Login></Login>
        </Tabs.Item>

        <Tabs.Item title="Sign - Up" icon={MdLogin}>
          <Signup></Signup>
        </Tabs.Item>
      </Tabs>
    </Card>
  );
}

export default Homepage;