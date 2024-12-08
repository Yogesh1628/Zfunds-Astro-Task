import React from 'react'
import  './DetailsHeader.css';

function DetailsHeader(props) {
    const {heading, details, subHeading} = props
  return (
    <div>
        <div className='top-container'>
            <p>
                {heading}
            </p>
            <div className='green-line'/>
        </div>
        <p className='sub-heading'>
                {details}
        </p>
        <div className='bottom-container'>
            <p>
                {subHeading}
            </p>
        </div>
    </div>
  )
}

export default DetailsHeader