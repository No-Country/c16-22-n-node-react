import { FloatingLabel, Button } from "flowbite-react";
import { useState } from "react";

function Login() {

  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [show, setShow] = useState(false);

  const submitHandler = () => {};

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

      <Button onClick={submitHandler}>Submit</Button>
    </div>
  );
}

export default Login;
