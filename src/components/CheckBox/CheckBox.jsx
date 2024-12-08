import React, { useState } from "react";
import './CheckBox.css'

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="terms-container" onClick={handleCheckboxToggle}>
      <div className={`checkbox ${isChecked ? "checked" : ""}`}>
        {isChecked && <span className="checkmark">✔</span>}
      </div>
      <span className="terms-text">
        I agree to the <strong>Terms & Conditions</strong>
      </span>
    </div>
  );
};

export default CheckBox;
