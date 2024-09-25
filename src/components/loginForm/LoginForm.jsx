import React, { useState } from "react";
import "./LoginForm.css"; // Import your CSS file
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
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
      {/*<img src="logo.png" alt="ShareSource Logo" className="logo" />  Replace with actual logo */}
      <form onSubmit={handleSubmit}>
        {/* <h2>Sharesource Information</h2> */}
        <div className="wrapper">
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
      <div>
        <p className="forgot-password">Forgot Password</p>{" "}
      </div>
    </div>
  );
}
export default LoginForm;
