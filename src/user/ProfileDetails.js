import React from 'react'
import { Form, Row, Col, Button, Dropdown, DropdownButton } from 'react-bootstrap'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import './styles/ProfileDetails.css'
function ProfileDetails() {
    return (
        <div>
             <div className="head"> Welcome admin Dashboard !</div>
             <div className="bottom">
                
            <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Driver Name</Form.Label>
      <Form.Control type="email" placeholder="Enter Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridphoto">
                            <Form.Label>Profile pic</Form.Label>
                            <img src="https://partners.olacabs.com/public/img/type2.98e5661.png" className="img" ></img>
                            
      </Form.Group>
  </Row>

 <Form.Group  className="mb-3" controlId="formGridMobile">
    <Form.Label>Mobile Number</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group  className="mb-3" controlId="formLicense">
    <Form.Label>License Number</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formLicenseValidity">
      <Form.Label>License Valididty date</Form.Label>
      <DatePickerComponent placeholder="Select Date"></DatePickerComponent>
                
    </Form.Group>

    <Form.Group as={Col} controlId="formVehicleBrand">
      <Form.Label>Vehicle Brand</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formBrand">
      <Form.Label>Vehicle Brand</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formModel">
      <Form.Label>Vehicle Model</Form.Label>
      <Form.Control />
  </Form.Group>
  <Form.Group className="mb-3" id="formVehicleName">
      <Form.Label>Vehicle Name</Form.Label>
      <Form.Control />
  </Form.Group>
  <Form.Group className="mb-3" id="formCategory">
      <Form.Label>Vehicle Category</Form.Label>
      <DropdownButton className="but" id="dropdown-button-dark-example1"  variant="secondary" title="online">
                    <Dropdown.Item href="#/action-1">Open</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Close</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Any</Dropdown.Item>
        </DropdownButton>
   </Form.Group>
   <Form.Group className="mb-3" id="formVehicleColor">
      <Form.Label>Vehicle Colour</Form.Label>
      <Form.Control />
   </Form.Group>
   <Form.Group className="mb-3" id="formVehicleRegNum">
      <Form.Label>Vehicle registration number</Form.Label>
      <Form.Control />
  </Form.Group>
  <Form.Group className="mb-3" id="formVehiclePurchase">
      <Form.Label>Vehicle Purchase year</Form.Label>
      <Form.Control />
  </Form.Group>
  <Form.Group className="mb-3" id="formEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control />
                    </Form.Group>
                    <Form.Group className="mb-3" id="formAddress">
      <Form.Label>Address</Form.Label>
      <Form.Control />
  </Form.Group>
  
                    
                    
           
</Form>
                
            </div> 
        </div>
    )
}

export default ProfileDetails
