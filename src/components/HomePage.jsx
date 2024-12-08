import React from "react";
import Header from "./Header/Header";
const HomePage = () => {
  return (
    <div style={{ height : "100vh"}}>
      <Header/>
      <div style={{display : "flex", alignItems : "center", justifyContent : "center", height : "100%", width : "100%", paddingTop : "7vh"}}>
      <a href="/personal-details" style={{backgroundColor :  "#32547C", color : "white", fontSize : "24px", fontWeight : "700px", padding : "24px 27px", textDecoration : "none"}} > 
        Complete KYC 
        </a>
    </div>
    </div>
  );
};

export default HomePage;
