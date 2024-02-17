import { Card, Tabs } from 'flowbite-react'
import { MdLogin } from "react-icons/md";
import Login from './Login'
import Signup from './Signup'

function Homepage() {
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