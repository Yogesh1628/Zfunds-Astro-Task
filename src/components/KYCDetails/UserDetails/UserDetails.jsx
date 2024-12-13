import React from 'react';
import Heading from '../Heading/Heading';
import './UserDetails.css'
import Container from './Container';

function UserDetails({name = "Dummy Name"}) {

  function onPressEdit()
  {
    const link = document.createElement("a");
    link.href = "/personal-details"; 
    link.style.display = "none"; 
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 

  }
  return (
        <Container heading="User Details" onPressEdit = {onPressEdit}>
        <Heading heading = "Pan Card Number" data = "Indian Citizen"/>
        <Heading heading = "Name" data = {name}/>
        </Container>
  )
}

export default UserDetails
