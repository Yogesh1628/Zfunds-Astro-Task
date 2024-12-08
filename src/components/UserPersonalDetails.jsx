import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import DetailsHeader from './DetailsHeader/DetailsHeader';
import RadioButton from './RadioButton/RadioButton';
import InputField from './InputField/InputField';
import EmailInput from './EmailInput/EmailInput';
import NextButton from './NextButton/NextButton';

function UserPersonalDetails() {
  const [status, setStatus] = useState('');
  const [emailDomain, setEmailDomain] = useState('@gmail.com');
  const [userName, setUserName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [incomeStatus, setIncomeStatus] = useState('');
  const [email, setEmail] = useState('');
  

  useEffect(() => {
    fetch('http://localhost:5000/api/get-data')
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setStatus(data.status || '');
          setUserName(data.userName || '');
          setMotherName(data.motherName || '');
          setFatherName(data.fatherName || '');
          setIncomeStatus(data.incomeStatus || '');
          setEmail(data.email || '');
          setEmailDomain(data.emailDomain || '@gmail.com');
        }
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  const handleOnNext = () => {
    if (
      userName.trim() === '' ||
      motherName.trim() === '' ||
      fatherName.trim() === '' ||
      email.trim() === '' ||
      !status ||
      !incomeStatus
    ) {
      alert('Please fill out all fields and select the required options.');
      return;
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

    fetch('http://localhost:5000/api/user-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
          alert('Failed to save data.');
        }
      })
      .catch((error) => console.error('Error saving data:', error));
  };

  const maritalStatusData = [
    { label: 'Single', value: 'Single' },
    { label: 'Married', value: 'Married' },
  ];

  const annualIncomeData = [
    { label: 'Below 1 Lakh', value: 'belowOneLakh' },
    { label: '1-5 Lakh', value: 'lessThanFiveLakh' },
    { label: '5-10 Lakh', value: 'lessThanTenLakh' },
    { label: '10-15 Lakh', value: 'lessThanFifteenLakh' },
    { label: '> 25 Lakh', value: 'moreThanTweentyFiveLakh' },
  ];

  return (
    <div style={{ height: '100vh' }}>
      <Header />
      <div style={{ height: '100%', width: '100%', paddingTop: '7vh' }}>
        <DetailsHeader
          heading="Personal Details"
          subHeading="Personal Details"
          details="These details are required to complete your KYC verification."
        />
        <div style={{ padding: '0px 16px ' }}>
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
            onChange={(e) => setUserName(e.target.value)}
          />
          <InputField
            name="fatherName"
            heading="Father Name"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
          />
          <InputField
            name="motherName"
            heading="Mother Name"
            value={motherName}
            onChange={(e) => setMotherName(e.target.value)}
          />

          <EmailInput
            name="email"
            heading="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            emailDomain={emailDomain}
            setEmailDomain={setEmailDomain}
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
