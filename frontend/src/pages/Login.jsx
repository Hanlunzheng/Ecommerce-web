import React, { useState } from "react";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // You can add your sign-in logic here, e.g., API call
    console.log("Logging in with:", { email, password });
    setError("");
  };

  return (
    <div className="mt-10">
      <div className="flex flex-col justify-center items-center gap-5 p-5 border border-gray-300 rounded-md w-96 mx-auto shadow-lg">
        <Title text1={"SIGN"} text2={"IN"} />
        <form className="flex flex-col gap-4 w-full" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            onClick={() => navigate("/")}
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
