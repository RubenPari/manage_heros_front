import React from "react";
import Navbar from "../components/Navbar";
import "../css/App.css";
import AddHero from "../components/AddHero";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to manage heroes application</h1>
      <AddHero />
    </div>
  );
};

export default App;
