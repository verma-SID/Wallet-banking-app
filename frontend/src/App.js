import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Home'; // Import your Home component
import Signup from './components/SignupPage'; // Import your Signup component

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/register" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
