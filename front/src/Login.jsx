import { FloatingLabel, Button, /* Toast */ } from "flowbite-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {
  const navigate = useNavigate();

  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  // const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async () => {
    setLoading(true);

    if (!email || !password) {
      // display a toast - Warning - please fill all of the fields
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      }

      const { data } = await axios.post(
        "http://localhost:3001/api/v1/users/login",
        { email, password },
        config
      )
      
      console.log(JSON.stringify(data));
      // display toast - success - Login successful
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chat")
    } catch(error) {
      // display toast - error - Error occured
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-flow-col justify-stretch space-x-4">
      <FloatingLabel
        variant="standard"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <FloatingLabel
        variant="standard"
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={submitHandler} isLoading={loading}>Submit</Button>
    </div>
  );
}

export default Login;
