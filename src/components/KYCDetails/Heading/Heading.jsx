import React from 'react'
import './Heading.css'

function Heading({heading, data}) {
  return (
    <div style={{margin : "8px 0px "}}>
        <div className='heading-container'>
            {heading}
        </div>
        <div className='data-container'>
            {data}
        </div>
    </div>
  )
}

export default Heading