import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />

      {/* for creating a router */}
      {/* <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
    </Router>
  );
};

export default App;
