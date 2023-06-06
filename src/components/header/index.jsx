import React from "react";
import "./index.css";
import { BiCameraMovie } from "react-icons/bi";
const Header = () => {
  return (
    <header className="header">
      <BiCameraMovie size={30} />
      <h2> TV MAZE</h2>
    </header>
  );
};

export default Header;
