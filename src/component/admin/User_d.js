// import {Link,Route,Routes} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Navbar_admin } from './Navbarr';
import { Sidebar } from './Sidebar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
export function User_d() {
    return (
        <>
            <Navbar_admin />

            <Container >
                <hr />
                <h5>User Details</h5>
                <hr />
                <br />

                <Row style={{ display: 'flex' }}>


                    <Col sm={2}>
                        <Sidebar />
                    </Col>



                    <Col sm={10}>

                        <Form className='common_csss' >
                            <Row className="mb-3">
                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                    <Nav.Link style={{ float: 'right' }} as={NavLink} to="/admin/user">    Add User  </Nav.Link>
                                </Button>
                                <Table bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Serial No.</th>
                                            <th>Block</th>
                                            <th>District</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Alamganj</td>
                                            <td>Patna</td>

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ❌
                                                </Button>
                                                {/* <span style={{ float: 'right' }}> <Button style={{ "background": "none","border": "none" }}  variant="light" className="m-1" size="sm">
                                                    <Nav.Link as={NavLink} to="/admin/block">➕    </Nav.Link>
                                                </Button>
                                                
                                                </span> */}

                                            </td>


                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Alamganj</td>
                                            <td>Patna</td>

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ❌
                                                </Button>
                                                {/* <span style={{ float: 'right' }}> <Button style={{ "background": "none","border": "none" }}  variant="light" className="m-1" size="sm">
                                                    <Nav.Link as={NavLink} to="/admin/block">➕    </Nav.Link>
                                                </Button>
                                                
                                                </span> */}

                                            </td>


                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Alamganj</td>
                                            <td>Patna</td>

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ❌
                                                </Button>
                                                {/* <span style={{ float: 'right' }}> <Button style={{ "background": "none","border": "none" }}  variant="light" className="m-1" size="sm">
                                                    <Nav.Link as={NavLink} to="/admin/block">➕    </Nav.Link>
                                                </Button>
                                                
                                                </span> */}

                                            </td>


                                        </tr> <tr>
                                            <td>1</td>
                                            <td>Alamganj</td>
                                            <td>Patna</td>

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ❌
                                                </Button>
                                                {/* <span style={{ float: 'right' }}> <Button style={{ "background": "none","border": "none" }}  variant="light" className="m-1" size="sm">
                                                    <Nav.Link as={NavLink} to="/admin/block">➕    </Nav.Link>
                                                </Button>
                                                
                                                </span> */}

                                            </td>


                                        </tr> <tr>
                                            <td>1</td>
                                            <td>Alamganj</td>
                                            <td>Patna</td>

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ❌
                                                </Button>
                                                {/* <span style={{ float: 'right' }}> <Button style={{ "background": "none","border": "none" }}  variant="light" className="m-1" size="sm">
                                                    <Nav.Link as={NavLink} to="/admin/block">➕    </Nav.Link>
                                                </Button>
                                                
                                                </span> */}

                                            </td>


                                        </tr> <tr>
                                            <td>1</td>
                                            <td>Alamganj</td>
                                            <td>Patna</td>

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ❌
                                                </Button>
                                                {/* <span style={{ float: 'right' }}> <Button style={{ "background": "none","border": "none" }}  variant="light" className="m-1" size="sm">
                                                    <Nav.Link as={NavLink} to="/admin/block">➕    </Nav.Link>
                                                </Button>
                                                
                                                </span> */}

                                            </td>


                                        </tr> <tr>
                                            <td>1</td>
                                            <td>Alamganj</td>
                                            <td>Patna</td>

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ❌
                                                </Button>
                                                {/* <span style={{ float: 'right' }}> <Button style={{ "background": "none","border": "none" }}  variant="light" className="m-1" size="sm">
                                                    <Nav.Link as={NavLink} to="/admin/block">➕    </Nav.Link>
                                                </Button>
                                                
                                                </span> */}

                                            </td>


                                        </tr> <tr>
                                            <td>1</td>
                                            <td>Alamganj</td>
                                            <td>Patna</td>

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ❌
                                                </Button>
                                                {/* <span style={{ float: 'right' }}> <Button style={{ "background": "none","border": "none" }}  variant="light" className="m-1" size="sm">
                                                    <Nav.Link as={NavLink} to="/admin/block">➕    </Nav.Link>
                                                </Button>
                                                
                                                </span> */}

                                            </td>


                                        </tr> <tr>
                                            <td>1</td>
                                            <td>Alamganj</td>
                                            <td>Patna</td>

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ❌
                                                </Button>
                                                {/* <span style={{ float: 'right' }}> <Button style={{ "background": "none","border": "none" }}  variant="light" className="m-1" size="sm">
                                                    <Nav.Link as={NavLink} to="/admin/block">➕    </Nav.Link>
                                                </Button>
                                                
                                                </span> */}

                                            </td>


                                        </tr> <tr>
                                            <td>1</td>
                                            <td>Alamganj</td>
                                            <td>Patna</td>

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ❌
                                                </Button>
                                                {/* <span style={{ float: 'right' }}> <Button style={{ "background": "none","border": "none" }}  variant="light" className="m-1" size="sm">
                                                    <Nav.Link as={NavLink} to="/admin/block">➕    </Nav.Link>
                                                </Button>
                                                
                                                </span> */}

                                            </td>


                                        </tr> <tr>
                                            <td>1</td>
                                            <td>Alamganj</td>
                                            <td>Patna</td>

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ❌
                                                </Button>
                                                {/* <span style={{ float: 'right' }}> <Button style={{ "background": "none","border": "none" }}  variant="light" className="m-1" size="sm">
                                                    <Nav.Link as={NavLink} to="/admin/block">➕    </Nav.Link>
                                                </Button>
                                                
                                                </span> */}

                                            </td>


                                        </tr> <tr>
                                            <td>1</td>
                                            <td>Alamganj</td>
                                            <td>Patna</td>

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ❌
                                                </Button>
                                                {/* <span style={{ float: 'right' }}> <Button style={{ "background": "none","border": "none" }}  variant="light" className="m-1" size="sm">
                                                    <Nav.Link as={NavLink} to="/admin/block">➕    </Nav.Link>
                                                </Button>
                                                
                                                </span> */}

                                            </td>


                                        </tr> <tr>
                                            <td>1</td>
                                            <td>Alamganj</td>
                                            <td>Patna</td>

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ❌
                                                </Button>
                                                {/* <span style={{ float: 'right' }}> <Button style={{ "background": "none","border": "none" }}  variant="light" className="m-1" size="sm">
                                                    <Nav.Link as={NavLink} to="/admin/block">➕    </Nav.Link>
                                                </Button>
                                                
                                                </span> */}

                                            </td>


                                        </tr> <tr>
                                            <td>1</td>
                                            <td>Alamganj</td>
                                            <td>Patna</td>

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ❌
                                                </Button>
                                                {/* <span style={{ float: 'right' }}> <Button style={{ "background": "none","border": "none" }}  variant="light" className="m-1" size="sm">
                                                    <Nav.Link as={NavLink} to="/admin/block">➕    </Nav.Link>
                                                </Button>
                                                
                                                </span> */}

                                            </td>


                                        </tr>
                                    </tbody>


                                </Table>

                            </Row>




                        </Form>

























                    </Col>
                </Row>
            </Container>

        </>
    )
}