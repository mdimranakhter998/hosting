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
import { useListdistrictQuery,useDeletedistrictMutation} from '../../services/admin/districtService';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export function District_d() {
    const {data:districtList,isLoading}=useListdistrictQuery()
    const navigate=useNavigate()
    const [districtDelete,districtDeleteFlag]=useDeletedistrictMutation()
    
    return (
        <>
           
            {isLoading?(
                <>
                 
                 </>
            ):(
                <>
                <Navbar_admin />
                <Container >
                <hr />
                <h5>District Details</h5>
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
                                    <Nav.Link style={{ float: 'right' }} as={NavLink} to="/admin/district">    Add District   </Nav.Link>
                                </Button>
                                <Table bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Serial No.</th>

                                            <th>District Name</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {districtList?districtList.map(e=>
                                            ( 
                                            <tr>
                                               
                                            <td>{e.id}</td>

                                            <td>{e.district}</td>

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }} onClick={()=>navigate(`/admin/district/edit/${e.id}`)} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }} onClick={()=>districtDelete(e.id)}  variant="light" className="m-1" size="sm">
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