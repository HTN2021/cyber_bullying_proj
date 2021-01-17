import React from "react";
import "../styles/navbar.css";
import personIcon from "../styles/person.png";

const Navbar = () => {
  return (
    <div className="navbar">
      Stop Cyberbullying
      <img src={personIcon} className="circle" />
    </div>
  );
};

export default Navbar;
