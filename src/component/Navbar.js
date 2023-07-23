import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink,Link, Navigate, useNavigate } from 'react-router-dom';
import aa from '../slider/aa.png';
import a from '../slider/a.png';
import { useState } from 'react';
import "./css/Navbar.css";
import { useListadminGetUserQuery } from '../services/applicant/applicantSignUpService';
import Button from 'react-bootstrap/Button';
import AsyncLocalStorage from '@createnextapp/async-local-storage'
import Spinner from 'react-bootstrap/Spinner';
import Image from 'react-bootstrap/Image'

export function Navbar_r() {
 
  const {refresh,access=null}=localStorage.getItem("applicant")?JSON.parse(localStorage.getItem("applicant")):{}
  const {data:getUser=null,isSuccess,isLoading}=useListadminGetUserQuery(access)
  const navigate=useNavigate()
  



  return (

    <>
    {isLoading?(
     <>
    
     </>
  ):(
    <>
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="first-active" end>
            <img
              className="logo"
              src={a}
              alt="logo"
            />
            Umran ElectriK
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">           
            <Nav className="me-auto nav-item">           
              <Nav.Link as={NavLink}  to="/rti" end>RTI</Nav.Link>
                      

            </Nav>
            </Navbar.Collapse>
           
           {getUser?(
               <Nav>
               <Image
                   className="user_pic"
                   src={getUser.photo}                  
                   alt="logo"
                  roundedCircle
                 >
                 </Image>
                 <NavDropdown style={{width:'5rem'}} title={getUser.name} id="basic-nav-dropdown">                  
                   <NavDropdown.Item as={Link} to="/edit_profile">
                    Edit Profile
                   </NavDropdown.Item>
                   <NavDropdown.Item as={Link} to="/forgetApplication">
                   Forget Application 
                   </NavDropdown.Item>
                   <NavDropdown.Item as={Link} to="/check_application">
                    My Application
                   </NavDropdown.Item>
                   <NavDropdown.Item as={Link} to="/check_status">
                    Check Status
                   </NavDropdown.Item>
                   <NavDropdown.Item as={Link} to="/print">
                    Print Application
                   </NavDropdown.Item>
                   <NavDropdown.Item as={Link} to="/new_conn">
                    New Connection
                   </NavDropdown.Item>
                   <NavDropdown.Item  as={Link} to="/change_password">
                     Change Password
                   </NavDropdown.Item>
                   
                   <NavDropdown.Divider />
                   <NavDropdown.Item  as={Link} to="/" onClick={()=>{AsyncLocalStorage.removeItem("applicant");getUser={}}}>
                     Logout
                   </NavDropdown.Item>
                 </NavDropdown>
               </Nav>
           ):(
            <Button  as={Link} to="/sign_in" variant="danger" size="sm">Sign in</Button>
           )}
         
        </Container>
      </Navbar>
</>
  )}
  
    </>

  )
}

