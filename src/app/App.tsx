import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddHero from "../components/Hero/AddHero";
import AllHeroes from "../components/Hero/AllHeros";
import DeleteHero from "../components/Hero/DeleteHero";
import Navbar from "../components/Navbar";
import "../css/App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllHeroes />} />
          <Route path="/add-hero" element={<AddHero />} />
          <Route path="/delete-hero" element={<DeleteHero />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
