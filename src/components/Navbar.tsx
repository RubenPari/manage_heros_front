import React from "react";
import "../css/Navbar.scss";

const Navbar = () => {
  return (
    <section className="navigation">
      <div className="nav-container">
        <nav>
          <ul className="nav-list">
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">Add hero</a>
            </li>
            <li>
              <a href="#!">Delete hero</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
