import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import NextButton from "./NextButton/NextButton";
import DetailsHeader from "./DetailsHeader/DetailsHeader";
import FileUpload from "./FileUpload/FileUpload";

function Documents() {
  const [pan, setPan] = useState(null);
  const [sign, setSign] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/get-data")
      .then((response) => response.json())
      .then((data) => {
        if (data.panCardImage) setPan(data.panCardImage);
        if (data.signatureImage) setSign(data.signatureImage);
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const handleOnNext = () => {
    fetch("http://localhost:5000/api/update-images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        panCardImage: pan,
        signatureImage: sign,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const link = document.createElement("a");
          link.href = "/fatca-details"; 
          link.style.display = "none"; 
          document.body.appendChild(link); 
          link.click();
          document.body.removeChild(link); 
      })
      .catch((error) => console.log("Error saving images:", error));
  };

  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div
        style={{
          height: "100%",
          width: "100%",
          paddingTop: "7vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DetailsHeader
          heading="Documents"
          subHeading="Upload Documents"
          details="These documents are required to complete your KYC verification."
        />
        <div
          style={{
            padding: "0px 16px ",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <FileUpload
              heading="Pan Card"
              text="Click a picture of your PAN Card and upload"
              labelText="Upload Pan Card"
              image={pan}
              setImage={setPan}
            />
            <FileUpload
              heading="Signature"
              text="Sign on a blank white paper (same as in Bank records). Click a picture & upload."
              labelText="Upload Signature"
              image={sign}
              setImage={setSign}
            />
          </div>
          <NextButton onNext={handleOnNext} />
        </div>
      </div>
    </div>
  );
}

export default Documents;
