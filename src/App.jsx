import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import AllaVasen from "./pages/AllaVasen";
import VasenDetails from "./pages/VasenDetails";
import Bestall from "./pages/Bestall";
import VasenPaVift from "./pages/VasenPaVift";

function App() {
  return (
    <Router>
      <Navigation />
      {/* Routing logik */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Startsidan */}
        <Route path="/alla-vasen" element={<AllaVasen />} />
        <Route path="/bestall" element={<Bestall />} />
        <Route path="/vasen-pa-vift" element={<VasenPaVift />} />
        <Route path="/vasen/:id" element={<VasenDetails />} />
        {/* Dynamisk route */}
      </Routes>
    </Router>
  );
}

export default App;
