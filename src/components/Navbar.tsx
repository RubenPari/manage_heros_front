import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.scss";

const Navbar = () => {
  return (
    <section className="navigation">
      <div className="nav-container">
        <nav>
          <ul className="nav-list">
            <Link to="/">Home</Link>
            <Link to="/add-hero">Add Hero</Link>
            <Link to="/delete-hero">Delete Hero</Link>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
