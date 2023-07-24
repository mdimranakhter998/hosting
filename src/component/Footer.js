// import { Link, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink, Routes, Route, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
export function Footer() {



    return (

        <>

            <Container fluid>


                <Row className="footer_last bg-primary" >

                    <Col className=''>
                        <br />

                        <u>Contact Us</u> <br />
                        <br />                        
                        Opposite Khudabaksh Library
                        <br />

                        Patna 800007
                        <br />
                        Email : mdimranakhter998@gmail.com
                        <br/>
                        Contact No : 8210276291
                    </Col>

                    <Col>
                        <br />

                        <u>Important Links</u> <br /> <br />
                        <Nav.Link as={NavLink} to="/rti" end>RTI</Nav.Link>
                        <Nav.Link as={NavLink} to="/sign_in" end>Customer Login</Nav.Link>
                        <Nav.Link as={NavLink} to="/sign_up" end>Customer Registration</Nav.Link>

                    </Col>

                    <Col>
                        <br />

                        <u>Follow Us on </u> <br />
                        <br />
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100004994553825"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        &nbsp;
                        &nbsp;
                        <a target="_blank" href="https://linkedin.com/in/md-imran-akhter-256a73221"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                        &nbsp;
                        &nbsp;
                        <a target="_blank" href="https://www.instagram.com/mdimranakhter998/?igshid=MzNlNGNkZWQ4Mg%3D%3D"><i class="fa fa-instagram" aria-hidden="true"></i> </a>
                        
                    </Col>
                    <a className='to_top' href="#">&#8613;</a>
                </Row>

            </Container>

        </>
    )
}