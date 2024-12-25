import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src="/img/logo.png" alt="We Briza Logo" className="navbar-logo" />
          </Link>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  หน้าแรก
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rooms">
                  ห้องพัก
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;