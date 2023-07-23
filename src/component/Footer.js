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

                        Office  No. 23 <br />
                        Lane - 12<br />
                        Opposite Khudabaksh Library
                        <br />

                        Patna 800004
                        <br />

                        Helpline : 9122784489
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
                        <a target="_blank" href="https://fb.com/umar.qadeer.5"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        &nbsp;
                        &nbsp;
                        <a target="_blank" href="https://fb.com/umar.qadeer.5"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        &nbsp;
                        &nbsp;
                        <a target="_blank" href="https://fb.com/umar.qadeer.5"><i class="fa fa-instagram" aria-hidden="true"></i> </a>

                    </Col>
                    <a className='to_top' href="#">&#8613;</a>
                </Row>

            </Container>

        </>
    )
}