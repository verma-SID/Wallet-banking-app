import React, { useState } from "react";
import axios from "axios";
import CustomNavbar from "./CustomNavbar";
import "./RechargePage.css"

const RechargePage = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const userEmail = localStorage.getItem("userEmail");
    console.log(userEmail);
  const handleRecharge = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        `http://localhost:8080/user/${userEmail}/wallet-recharge`,
        {
          email: userEmail,
          amount: amount,
        }
      );
      console.log(userEmail);
      setMessage(response.data);
    } catch (error) {
      setMessage("Error occurred during recharge");
    }
  };
  
  return (
    <div>
      <CustomNavbar />
      <div className="recharge-page-container">
        <div className="recharge-form">
          <h2 className="recharge-title">Recharge Wallet</h2>
          <form onSubmit={handleRecharge}>
            <div className="mb-3">
              <label className="form-label">Amount:</label>
              <input
                type="number"
                className="form-control"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Recharge
            </button>
          </form>
          <p className="mt-3">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default RechargePage;
