import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./component/About/About";
import Listing from "./component/listing/listing";

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/listing/:id" element={<Listing />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
