import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const RoutePages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RoutePages;
