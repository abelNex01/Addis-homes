import React, { useState } from "react";
import img from "../../assets/image/more/home.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:30001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="hidden lg:block lg:w-1/2">
        <img src={img} className="object-cover w-full h-full" alt="Home" />
      </div>
      <div className="flex justify-center items-center w-full lg:w-1/2 p-8">
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-montserratBold mb-6 text-center">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your name"
                required
                className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-[#bf0640] hover:bg-[#bf0640] text-white font-semibold rounded-full py-2 px-4 w-full"
            >
              Submit
            </button>
          </form>
          <div className="mt-6 text-center z-50">
            <span>
              Already have an account?{" "}
              <Link
                to="/login"
                className="hover:underline font-montserratSemiBold px-4 text-[#bf0640]"
              >
                Sign in
              </Link>
            </span>
            <br />
            <Link to="/">
              <p className="text-sm text-[#bf0640]">Go back to home</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
