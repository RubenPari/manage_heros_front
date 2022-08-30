import React from "react";
import AllHeros from "../components/AllHeros";
import Navbar from "../components/Navbar";
import "../css/App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to manage heros application</h1>
      <AllHeros />
    </div>
  );
};

export default App;
