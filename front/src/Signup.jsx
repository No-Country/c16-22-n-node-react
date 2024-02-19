import { FloatingLabel, Label, FileInput, Button, /* Toast */ } from 'flowbite-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Signup() {
    const [name, setName] = useState();
    // const [lastname, setLastname] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [email, setEmail] = useState();
    // const [show, setShow] = useState(false);
    // const [pic, setPic] = useState();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    // const postDetails = (pics) => {
    //   setLoading(true);
    //   if (pic === undefined) {
    //     // display toast - please add an image
    //   }

    //   if(pics.type === "image/jpeg" || pics.type === "image/png") {
    //     const data = new FormData();
    //     data.append("file", pics);
    //     data.append("upload_preset", "servi-ya");
    //     data.append("cloud_name", "mtercero1");
    //     fetch(/* url of cloudinary */, {
    //       method: "post",
    //       body: data,
    //     }).then((res) => res.json)
    //       .then(data => {
    //         setPic(data.url.toString());
    //         setLoading(false);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //         setLoading(false);
    //       });
    //   } else {
    //     // display toast
    //   }
    // }

    const submitHandler = async () => {
      setLoading(true);
      if(!name || !email || !password || !confirmPassword) {
        // display toast
      }

      if (password != confirmPassword) {
        // display toast
      }

      try {
        const config = {
          header: {
            "Content-type": "application/json",
          },
        };
        /* pic */
        console.log(name, email, password)
        const { data } = await axios.post(
          "http://localhost:3001/api/v1/users",
          { name, email, password },
          config
        );
          
        // display toast - Success - Registration sucessful

        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);

        // after they create an account we move to the chat
        navigate("/chat");
      } catch(error) {
        // display toast - error occured
        console.log(error)
        setLoading(false);
      }
    }

  return (
    <div className="grid grid-flow-col justify-stretch space-x-4">
      <FloatingLabel
        variant="filled"
        label="Name"
        onChange={(e) => setName(e.target.value)}
      />
      {/* <FloatingLabel
        variant="outlined"
        label="Lastname"
        onChange={(e) => setLastname(e.target.value)}
      /> */}
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

      <FloatingLabel
        variant="standard"
        label="Confirm password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <div className="mb-2 block">
        <Label htmlFor="file-upload" value="Upload your picture" />
      </div>
      <FileInput
        id="file-upload" /*onChange={(e) => postDetails(e.target.files[0])} */
      />
      <Button onClick={submitHandler} isLoading={loading}>
        Submit
      </Button>
    </div>
  );
}

export default Signup