import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import DetailsHeader from "./DetailsHeader/DetailsHeader";
import UserDetails from "./KYCDetails/UserDetails/UserDetails";
import KYCPersonalDetails from "./KYCDetails/KYCPersonalDetails/KYCPersonalDetails";
import KYCSubDetails from "./KYCDetails/KYCSubDetails/KYCSubDetails";
import CheckBox from "./CheckBox/CheckBox";
import NextButton from "./NextButton/NextButton";

function KYCDetails() {

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/api/get-data')
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setUserData(data);
        }
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div style={{ height: "100%", width: "100%", paddingTop: "7vh" }}>
        <DetailsHeader
          heading="KYC Details"
          subHeading="Confirm Details"
          details="Read below details carefully, they cannot be changed later. "
        />
        <div style={{ padding: "0px 16px " }}>
            <UserDetails name = {userData.userName}/>
            <KYCPersonalDetails/>
            <KYCSubDetails userData={userData}/>
            <CheckBox/>
            <NextButton/>
        </div>
      </div>
    </div>
  );
}

export default KYCDetails;
