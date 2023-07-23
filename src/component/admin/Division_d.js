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
import { useListdivisionQuery,useDeletedivisionMutation } from '../../services/admin/divisionService';
import { useNavigate } from 'react-router-dom';

import Spinner from 'react-bootstrap/Spinner';

export function Division_d() {
    const {data:divisionList,isLoading}=useListdivisionQuery()
    const navigate=useNavigate()
    const [divisionDelete,divisionDeleteFlag]=useDeletedivisionMutation()
    
    return (
        <>
            <Navbar_admin />
            {isLoading?(
                <>
                 
                 </>
            ):(
                <>
                <Container >
                <hr />
                <h5>Divsion Details</h5>
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
                                    <Nav.Link style={{ float: 'right' }} as={NavLink} to="/admin/division">Add Division</Nav.Link>
                                </Button>
                                <Table bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Serial No.</th>

                                            <th>Division Name</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {divisionList?divisionList.map(e=>
                                            ( 
                                            <tr>
                                               
                                            <td>{e.id}</td>

                                            <td>{e.division}</td>

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }} onClick={()=>navigate(`/admin/division/edit/${e.id}`)} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }} onClick={()=>divisionDelete(e.id)}  variant="light" className="m-1" size="sm">
                                                    ❌
                                                </Button>
                                            </td>
                                        </tr>)):null}                                        
                                    </tbody>
                                </Table>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>          
            </>

            )}           
        </>
    )
}