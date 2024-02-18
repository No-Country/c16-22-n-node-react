import { FloatingLabel, Label, FileInput, Button } from 'flowbite-react'
import { useState } from 'react'

function Signup() {
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [email, setEmail] = useState();
    const [show, setShow] = useState(false);
    const [pic, setPic] = useState();

    const postDetails = () => {

    }

    const submitHandler = () => {}

  return (
    <div className="grid grid-flow-col justify-stretch space-x-4">
      <FloatingLabel
        variant="filled"
        label="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <FloatingLabel
        variant="outlined"
        label="Lastname"
        onChange={(e) => setLastname(e.target.value)}
      />
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

      <div className="mb-2 block">
        <Label htmlFor="file-upload" value="Upload your picture" />
      </div>
      <FileInput id="file-upload" onChange={(e) => postDetails(e.target.files[0])} />
      <Button onClick={submitHandler}>Submit</Button>
    </div>
  );
}

export default Signup