import React from "react";
import "./NextButton.css";

const NextButton = ({onNext}) => {
  return (
    <div className="next-button-container">
      <button className="next-button" onClick={onNext}>
        Next
      </button>
      <p className="skip-link">
        SKIP FOR NOW
      </p>
    </div>
  );
};

export default NextButton;
