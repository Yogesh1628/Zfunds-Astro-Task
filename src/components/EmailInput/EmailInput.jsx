import React, { useState } from 'react'
import './EmailInput.css'

function EmailInput({name, heading, value, onChange, emailDomain, setEmailDomain}) {
    
    const emailData = 
    [
        "@gmail.com", "@yahoo.com", "yahoo.co.in", "rediffmail.com"
    ]

  return (
    <div style={{marginBottom : "16px"}}>
        <p className='emailInputHeading'>{heading}</p>
        <div className='emailTextInputContainer'>
            <input className='emailTextInput' type="text" name = {name} value = {value} onChange = {onChange}/>
            <div >
                <p>{emailDomain}</p>
            </div>
        </div>
        <div style={{fontSize : "12px" , fontWeight : "600", color : "#8E959F", margin : "4px 0px 8px 0px" }}>
            You will receive portfolio statements on this email id
        </div>
        <div style={{display : "flex", alignItems : "center", justifyContent : "left", flexWrap : "wrap"}}>

                {
                    emailData.map((item, id) => {
                        return (
                          <div
                            key={id}
                            style={{
                              backgroundColor: item === emailDomain ? "#32547C" : "white",
                              color: item !== emailDomain ? "#32547C" : "white",
                            }}
                            className="emailSuggestion"
                            onClick={() => setEmailDomain(item)}
                          >
                            {item}
                          </div>
                        );
                      })                      
                }
        </div> 
    </div>
  )
}

export default EmailInput