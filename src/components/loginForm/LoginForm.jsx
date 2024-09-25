import React, { useState } from "react";
import "./LoginForm.css";
import LoginButton from "../LoginButton";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.status === 200) {
        console.log("Login successful!");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="login-container">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md"
        style={{ display: "flex" }}
      >
        <div className="form-group mb-4" style={{ "margin-right": "1rem" }}>
          <label htmlFor="email" className="text-sm text-gray-700 mb-1">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
        <div className="form-group mb-4" style={{ "margin-right": "1rem" }}>
          <label htmlFor="password" className="text-sm text-gray-700 mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
        <div className="flex items-center justify-between">
          <LoginButton />
        </div>
      </form>
      <div className="text-center mt-4">
        <p className="forgot-password text-sm text-gray-500 underline cursor-pointer">
          Forgot Password?
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
