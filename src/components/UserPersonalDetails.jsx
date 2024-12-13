import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import DetailsHeader from "./DetailsHeader/DetailsHeader";
import RadioButton from "./RadioButton/RadioButton";
import InputField from "./InputField/InputField";
import EmailInput from "./EmailInput/EmailInput";
import NextButton from "./NextButton/NextButton";

function UserPersonalDetails() {
  const [emailError, setEmailError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [motherError, setMotherError] = useState(false);
  const [fatherError, setFatherError] = useState(false);

  const [status, setStatus] = useState("");
  const [emailDomain, setEmailDomain] = useState("@gmail.com");
  const [userName, setUserName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [incomeStatus, setIncomeStatus] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/get-data")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setStatus(data.status || "");
          setUserName(data.userName || "");
          setMotherName(data.motherName || "");
          setFatherName(data.fatherName || "");
          setIncomeStatus(data.incomeStatus || "");
          setEmail(data.email || "");
          setEmailDomain(data.emailDomain || "@gmail.com");
        }
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  function handleUserError(name, e)
  {
    if(name == "user") 
    {
      setUserName(e.target.value);
      if(e.target.value) 
      {
        setUserNameError(false);
      }
    }
    else if(name == "father")
    {
      setFatherName(e.target.value);
      if(e.target.value) 
      {
        setFatherError(false);
      }
    }
    else if(name == "mother")
    {
      setMotherName(e.target.value);
      if(e.target.value) 
      {
        setMotherError(false);
      }
    }
    else
    {
      setEmail(e.target.value);
      if(e.target.value) 
      {
        setEmailError(false);
      }
    }

  }
  const handleOnNext = () => {
    if (
      userName.trim() === "" ||
      motherName.trim() === "" ||
      fatherName.trim() === "" ||
      email.trim() === "" ||
      !status ||
      !incomeStatus
    ) {
      if (userName.trim() === "") {
        setUserNameError(true);
      }
      if (motherName.trim() === "") {
        setMotherError(true);

      }
      if (fatherName.trim() === "") {
        setFatherError(true);
      }
      if (email.trim() === "") {
        setEmailError(true);
      }
      return ;
    }

    const updatedData = {
      status,
      userName,
      motherName,
      fatherName,
      incomeStatus,
      email,
      emailDomain,
    };

    fetch("http://localhost:5000/api/user-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (response.ok) {
          const link = document.createElement("a");
          link.href = "/document";
          link.style.display = "none";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          alert("Failed to save data.");
        }
      })
      .catch((error) => console.error("Error saving data:", error));
  };

  const maritalStatusData = [
    { label: "Single", value: "Single" },
    { label: "Married", value: "Married" },
  ];

  const annualIncomeData = [
    { label: "Below 1 Lakh", value: "belowOneLakh" },
    { label: "1-5 Lakh", value: "lessThanFiveLakh" },
    { label: "5-10 Lakh", value: "lessThanTenLakh" },
    { label: "10-15 Lakh", value: "lessThanFifteenLakh" },
    { label: "> 25 Lakh", value: "moreThanTweentyFiveLakh" },
  ];

  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div style={{ height: "100%", width: "100%", paddingTop: "7vh" }}>
        <DetailsHeader
          heading="Personal Details"
          subHeading="Personal Details"
          details="These details are required to complete your KYC verification."
        />
        <div style={{ padding: "0px 16px " }}>
          <RadioButton
            onChange={(e) => setStatus(e.target.value)}
            selectedStatus={status}
            data={maritalStatusData}
            name="maritalStatus"
            heading="Marital Status"
          />

          <InputField
            name="userName"
            heading="User Name"
            value={userName}
            onChange={(e) => handleUserError("user", e)}
            error={userNameError}
          />
          <InputField
            name="fatherName"
            heading="Father Name"
            value={fatherName}
            onChange={(e) => handleUserError("father", e)}
            error={fatherError}
          />
          <InputField
            name="motherName"
            heading="Mother Name"
            value={motherName}
            onChange={(e) => handleUserError("mother", e)}
            error={motherError}
          />

          <EmailInput
            name="email"
            heading="Email"
            value={email}
            onChange={(e) => handleUserError("email", e)}
            emailDomain={emailDomain}
            setEmailDomain={setEmailDomain}
            error={emailError}
          />
          <RadioButton
            onChange={(e) => setIncomeStatus(e.target.value)}
            selectedStatus={incomeStatus}
            data={annualIncomeData}
            name="annualIncome"
            heading="Annual Income"
            allignment="Vertical"
          />
        </div>
        <div>
          <NextButton onNext={handleOnNext} />
        </div>
      </div>
    </div>
  );
}

export default UserPersonalDetails;
