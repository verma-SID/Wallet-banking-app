// SignupPage.js
import React, { useState } from "react";
import axios from "axios";
import "./SignupPage.css";
import CustomNavbar from "./CustomNavbar";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignupSuccess, setIsSignupSuccess] = useState(false); // New state variable
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/register", {
        firstName,
        lastName,
        email,
        password,
      });


      console.log(firstName);
      setIsSignupSuccess(true); // Set signup success to true

      setMessage(response.data);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");

      window.alert("Successfully signed up! Redirecting to LoginPage...");

      navigate("/login");
    } catch (error) {
      setMessage("Error occurred during registration");
    }
  };

  return (
    <div>
      <CustomNavbar />
      <div className="signup-page-container">
        <div className="signup-form">
          <h2 className="signup-title">Signup</h2>
          {isSignupSuccess && ( // Display success message conditionally
            <p className="success-message">Successfully signed up!</p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">First Name:</label>
              <input
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name:</label>
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Register
            </button>
          </form>
          <p className="mt-3">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
