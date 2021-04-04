import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ gameState }) => (
  <div className="animate__animated animate__slideInLeft">
    <button>{gameState === "default" ? "Start Game" : "Start Again"}</button>
  </div>
);
 
export default CustomButton;
