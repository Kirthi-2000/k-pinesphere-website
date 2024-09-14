// RightNavbar.js
import React from "react";
import "./RightNavbar.css";

const RightNavbar = ({ isExpanded, handleToggle }) => {
  return (
    <div className={`right-navbar ${isExpanded ? "expanded" : ""}`} onClick={handleToggle}>
      <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
  );
};

export default RightNavbar;