import React from "react";
import logo from "../assets/logo_file.png";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";
import { Link } from "gatsby";
const Navbar = ({ toggleSideBar }) => {
  return (
    <nav className="navbar-main">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" width={100} />
          </Link>

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
