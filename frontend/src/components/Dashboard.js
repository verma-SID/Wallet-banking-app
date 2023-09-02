import React from "react";
import { useNavigate } from "react-router-dom";
import { FiCreditCard, FiSend, FiList } from "react-icons/fi"; // Import icons
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./CustomNavbar";

const Dashboard = () => {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("userEmail") !== null;

  if(!isLoggedIn){
    navigate("/login");
    return null;
  }

  return (
    <div className="dashboard-container">
      <CustomNavbar />
      <div className="mt-4 row">
        <div className="col-md-4">
          <div
            className="dashboard-item text-center"
            onClick={() => navigate("/recharge")}
          >
            <FiCreditCard className="dashboard-item-icon" />
            <p className="dashboard-item-text">Recharge Wallet</p>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="dashboard-item text-center"
            onClick={() => navigate("/transfer")}
          >
            <FiSend className="dashboard-item-icon" />
            <p className="dashboard-item-text">Transfer Amount</p>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="dashboard-item text-center"
            onClick={() => navigate("/account-statement")}
          >
            <FiList className="dashboard-item-icon" />
            <p className="dashboard-item-text">View Account Statement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
