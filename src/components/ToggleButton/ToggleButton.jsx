import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = ({heading, value, handleToggle}) => {

  return (
    <div className="toggle-container">
      <span className="toggle-label">{heading}</span>
      <div className={`toggle-switch ${value ? "active" : ""}`} onClick={handleToggle}>
        <div className="toggle-circle"></div>
      </div>
    </div>
  );
};

export default ToggleButton;
