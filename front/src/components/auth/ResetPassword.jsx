import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const { resetPassword } = useAuth();
  const [error, setError] = useState();

  const handleResePassword = async (e) => {
    e.preventDefault();
    setEmail(e.target.email.value);
    try {
      await resetPassword(email);
    } catch (error) {
      setError(error.code);
    }
    e.target.reset();
  };

  return (
    <div className=" rounded w-full max-w-xs m-auto flex flex-col justify-center items-center p-2">
      {error && <Alert message={error}/>}
      <form className="bg-white shadow-md  flex flex-col gap-3 p-2 rounded w-full" onSubmit={handleResePassword}>
        <label
          className="block text-gray-700
          text-sm font-bold mb-2
          "
          htmlFor="email"
        >
          Enter your Email
        </label>
        <input
          className=" shadow appearance-none border rounded
          w-full py-2 px-3 text-gray-700 leading-tight
           focus:outline-none focus:shadow-outline
          "
          type="email"
          name="email"
          id="email"
        />
          <div className="flex items-center justify-between w-full ">
        <button
          className="bg-blue-500 transition hover:bg-blue-700 
        text-white font-bold py-2 px-4 rounded focus:outline-none 
        focus:shadow-outline 
        "
          type="submit"
        >
          Enviar
        </button>

        <span>
          <Link to="/login">Login</Link>
        </span>
      </div>
      </form>
    
    </div>
  );
};

export default ResetPassword;
