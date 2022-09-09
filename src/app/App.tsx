import React from "react";
import AllHeroes from "../components/Hero/AllHeros";
import Navbar from "../components/Navbar";
import "../css/App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to manage heroes application</h1>
      <AllHeroes />
    </div>
  );
};

export default App;
