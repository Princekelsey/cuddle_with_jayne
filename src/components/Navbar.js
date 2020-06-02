import React from "react";
import logo from "../assets/logo_file.png";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";
const Navbar = ({ toggleSideBar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" width={100} />
          <button type="button" className="toggle-btn" onClick={toggleSideBar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;
