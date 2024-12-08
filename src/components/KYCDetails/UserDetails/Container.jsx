import React from 'react';
import EditIcon from '../../../assets/Edit Icon.png'
import './UserDetails.css'

function Container({children, heading, onPressEdit = false}) {
  return (
    <div className='container'>
      <div className='container-main'>
        <div className='container-heading'>
          {heading}
        </div>
        {onPressEdit && <div onClick = {onPressEdit} className='edit-container'>
            <img className ='edit-icon' src={EditIcon} />
            <div className='edit-text'>
              Edit
            </div>
          </div>}
        </div>
        {children}
      </div>
  )
}

export default Container
