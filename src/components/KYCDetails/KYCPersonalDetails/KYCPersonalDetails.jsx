import React from 'react'
import Container from '../UserDetails/Container'
import Heading from '../Heading/Heading'

function KYCPersonalDetails() {
  return (
    <Container heading="Personal Details" >
        <Heading heading = "Gender" data = "Male"/>
        <Heading heading = "DOB" data = "DD/MM/YYYY"/>
        <Heading heading = "Address" data = "250 flat no, second floor, Sector 57, Sushant Lok Phase 2 "/>
        <Heading heading = "Pincode" data = "122003"/>
    </Container>
  )
}

export default KYCPersonalDetails