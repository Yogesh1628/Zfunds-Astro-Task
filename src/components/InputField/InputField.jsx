import React from 'react'
import './InputField.css'

function InputField({name, heading, value, onChange}) {
  return (
    <div style={{marginBottom : "16px"}}>
        <p className='inputHeading'>{heading}</p>
        <input className='textInput' type="text" name = {name} value = {value} onChange = {onChange}/>
    </div>
  )
}

export default InputField