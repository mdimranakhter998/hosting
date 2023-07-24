import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink,Link } from 'react-router-dom';
import a from '../../slider/a.png'
import { useListadminGetUserQuery } from '../../services/admin/adminSignUpService';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import AsyncLocalStorage from '@createnextapp/async-local-storage'
import Image from 'react-bootstrap/Image'

export function Navbar_admin() {
  const {refresh,access=null}=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):{}
  const {data:getUser,isSuccess,isLoading}=useListadminGetUserQuery(access)
   
 
  
    
   
  return (
    <>
  {isLoading?(
     <>
    
    
     </>
  ):(
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" expand="lg">
        <Container>
        <Navbar.Brand  as={NavLink} to="/"  end>
            <img
              className="logo"
              src={a}
              alt="logo"
            />
            Umran Electric
          </Navbar.Brand>


          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink}  to="/admin/dashboard" end>Go to Home Page</Nav.Link>
              
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
              <NavDropdown title={getUser.name} id="basic-nav-dropdown"  >             
                <NavDropdown.Item as={Link} to="/admin/edit_profile">
                 Edit Profile
                </NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/admin/change_password">
                  Change Password
                </NavDropdown.Item>
                
                <NavDropdown.Divider />


                <NavDropdown.Item as={Link} to="/" onClick={()=> AsyncLocalStorage.removeItem("user")}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ):(
            <Button  as={Link} to="/admin" variant="danger" size="sm">Sign in</Button>
          )}

          
        </Container>
      </Navbar>

  )}
      
    </>
  )
}

