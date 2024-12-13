import React from 'react'
import './InputField.css'

function InputField({name, heading, value, onChange, error}) {
  
  return (
    <div style={{marginBottom : "16px"}}>
        <p className='inputHeading'>{heading}</p>
        <input className='textInput' type="text" name = {name} value = {value} onChange = {onChange}/>
        {error && <div className='errorStyle'>Please Fill it</div> }
    </div>
  )
}

export default InputField