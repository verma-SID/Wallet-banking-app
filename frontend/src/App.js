import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Dashboard from "./components/Dashboard";
import WelcomePage from "./components/WelcomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import RechargePage from "./components/RechargePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route
          path="/recharge"
          element={<ProtectedRoute element={<RechargePage />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
