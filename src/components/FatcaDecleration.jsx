import React, { useState } from "react";
import DetailsHeader from "./DetailsHeader/DetailsHeader";
import Header from "./Header/Header";
import ToggleButton from "./ToggleButton/ToggleButton";
import NextButton from "./NextButton/NextButton";

function FatcaDecleration() {
    const [indianCitizen , setIndianCitizen] = useState(false);
    const [indianTaxResident , setIndianTaxResident] = useState(false);
    const [notPoliticallyExposed , setNotPoliticallyExposed] = useState(false);

    const handleOnNext = () => {
      if(indianCitizen || indianTaxResident || notPoliticallyExposed)
      {
          const link = document.createElement("a");
          link.href = "/kyc-details"; 
          link.style.display = "none"; 
          document.body.appendChild(link); 
          link.click();
          document.body.removeChild(link); 
      }
      else
      {
        alert("Please select atleast one option");
      }
    };
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div style={{ height: "100%", width: "100%", paddingTop: "7vh", display : "flex" , flexDirection : "column"}}>
        <DetailsHeader
          heading="FATCA Declaration"
          subHeading="Declaration"
          details="Declare your FATCA details "
        />
        <div style={{ padding: "0px 16px " , flex : 1, display : "flex", flexDirection : "column", justifyContent : "space-between"}}>
            <div>
                <div style={{fontSize : "14px" , fontWeight : "700", color : "#052F5F", margin: "24px 0px 8px 0px"}}>
                    Please verify that you are an:
                </div>
                <ToggleButton heading = "Indian Citizen" value = {indianCitizen} handleToggle={ () => setIndianCitizen(!indianCitizen) } />
                <ToggleButton heading = "Indian Tax Resident" value = {indianTaxResident} handleToggle={ () => setIndianTaxResident(!indianTaxResident) } />
                <ToggleButton heading = "Not Politically Exposed" value = {notPoliticallyExposed} handleToggle={ () => setNotPoliticallyExposed(!notPoliticallyExposed) } />
            </div>
            <NextButton onNext={handleOnNext}/>
        </div>      
      </div>
    </div>
  );
}

export default FatcaDecleration;
