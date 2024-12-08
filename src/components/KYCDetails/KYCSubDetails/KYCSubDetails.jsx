import React from "react";
import Container from "../UserDetails/Container";
import Heading from "../Heading/Heading";

function KYCSubDetails({ userData }) 
{
  const annualIncomeData = 
  [
    { label: "Below 1 Lakh", value: "belowOneLakh" },
    { label: "1-5 Lakh", value: "lessThanFiveLakh" },
    { label: "5-10 Lakh", value: "lessThanTenLakh" },
    { label: "10-15 Lakh", value: "lessThanFifteenLakh" },
    { label: "> 25 Lakh", value: "moreThanTweentyFiveLakh" },
  ];

  const incomeValueStatus = userData.incomeStatus;
  const matchingLabel = annualIncomeData.find((item) => item.value === incomeValueStatus)?.label || " ";

  const email = (userData.email === undefined ? ' ' : userData.email)
  const emailDomain = (userData.emailDomain === undefined ? ' ' : userData.emailDomain)
  const finalEmail = (email != ' ' && emailDomain != ' ' ? email + emailDomain : ' ' );
  
  function onPressEdit() {
    const link = document.createElement("a");
    link.href = "/personal-details"; 
    link.style.display = "none"; 
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
  }

  return (
    <Container heading="KYC Details" onPressEdit={onPressEdit}>
      <Heading
        heading="Email"
        data = {finalEmail}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Heading heading="Martial Status" data={userData.status} />
        <Heading heading="Annual Income" data={matchingLabel} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Heading heading="Father Name" data={userData.fatherName} />
        <Heading heading="Mother Name" data={userData.motherName} />
      </div>
    </Container>
  );
}

export default KYCSubDetails;
