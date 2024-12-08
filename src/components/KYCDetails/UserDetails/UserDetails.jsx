import React from 'react';
import Heading from '../Heading/Heading';
import './UserDetails.css'
import Container from './Container';

function UserDetails({name = "Dummy Name"}) {

  function onPressEdit()
  {
    const link = document.createElement("a");
    link.href = "/personal-details"; // Set the desired route
    link.style.display = "none"; // Hide the link from view
    document.body.appendChild(link); // Append to the DOM to make it functional
    link.click(); // Simulate a click to navigate
    document.body.removeChild(link); // Clean up by removing the link after navigation

  }
  return (
        <Container heading="User Details" onPressEdit = {onPressEdit}>
        <Heading heading = "Pan Card Number" data = "Indian Citizen"/>
        <Heading heading = "Name" data = {name}/>
        </Container>
  )
}

export default UserDetails
