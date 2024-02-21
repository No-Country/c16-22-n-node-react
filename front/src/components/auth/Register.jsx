import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { signup } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  const handleChangue = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const hadleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.code);
   
  }
}

  return (
    <div className="w-full max-w-xs m-auto">
        {error && <Alert message={error}/>}
      <form className="bg-white shadow-md rounded px-8 py-8 mb-4" onSubmit={hadleSubmit}>
      <div className="mb-4">
          <label className="block text-gray-700
          text-sm font-boldmb-2
          " htmlFor="email">Email</label>
          <input
          className=" shadow appearance-none border rounded
          w-full py-2 px-3 text-gray-700 leading-tight
           focus:outline-none focus:shadow-outline
          "
            onChange={handleChangue}
            type="email"
            name="email"
            placeholder="youremail@company.com"
          />
        </div>
        <div className="mb-4">
          <label
          className="block text-gray-700
          text-sm font-boldmb-2
          " htmlFor="password"> Password</label>
          <input
          className=" shadow appearance-none border rounded
          w-full py-2 px-3 text-gray-700 leading-tight
           focus:outline-none focus:shadow-outline
          "
            onChange={handleChangue}
            type="password"
            name="password"
            id="password"
            placeholder="******"
          />
        </div>
        
        <button className="bg-blue-500 transition hover:bg-blue-700 
        text-white font-bold py-2 px-4 rounded focus:outline-none 
        focus:shadow-outline
        ">Register</button>

      </form>

      <p className="my-4 text-sm flex justify-between">Already have an Account?  <Link to='/login'>Login</Link></p>
    </div>
  );
};

export default Register;
