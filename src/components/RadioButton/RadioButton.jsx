import React from "react";
import "./RadioButton.css";

const RadioButton = ({
  selectedStatus,
  name,
  onChange,
  heading = "Marital Status",
  data = [],
  allignment = "horizontal",
}) => {
  return (
    <div style={{ marginBottom: "16px" }}>
      <p className="radioHeading">{heading}</p>
      <div
        style={{
          display: "flex",
          flexDirection: allignment === "horizontal" ? "row" : "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        {data.map((item, id) => (
          <div className="labelContainer" key={id}>
            <input
              className="radioButton"
              type="radio"
              name={name}
              value={item.value}
              checked={selectedStatus === item.value} 
              onChange={onChange}
            />
            <p className="radioLabel">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButton;
