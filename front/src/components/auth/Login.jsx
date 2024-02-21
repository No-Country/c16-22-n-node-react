import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { login, loginWitGoogle } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleGoogle = async () => {
    await loginWitGoogle();
    navigate("/");
  };

  const handleChangue = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const hadleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.code);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        className="bg-white shadow-md rounded px-8 py-8 mb-4"
        onSubmit={hadleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700
          text-sm font-boldmb-2
          "
            htmlFor="email"
          >
            Email
          </label>
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
          "
            htmlFor="password"
          >
            {" "}
            Password
          </label>
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

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 transition hover:bg-blue-700 
        text-white font-bold py-2 px-4 rounded focus:outline-none 
        focus:shadow-outline
        "
          >
            Login
          </button>
          <a
            href="#"
            className=" inline-block align-baseline font-bold text-sm text-blue-500
          hover:text-blue-800
          "
          >
            {" "}
            <Link to="/resetpassword"> Forgot Password? </Link>{" "}
          </a>
        </div>
      </form>
      <p className="my-4 text-sm flex justify-between">
        Don't have an Account <Link to="/register">Register</Link>
      </p>
      <button
        className="bg-slate-50 transition hover:bg-slate-200 text-black
       shadow-md rounded border-gray-300 py-2 px-4 w-full
      "
        onClick={handleGoogle}
      >
        login with Gooogle
      </button>
    </div>
  );
};

export default Login;
