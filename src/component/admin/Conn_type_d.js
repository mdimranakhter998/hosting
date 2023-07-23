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
import {useDeleteconnectiontypeMutation, useListconnectiontypeQuery} from '../../services/admin/connectionTypeService';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export function Conn_type_d() {
    const {data:connectionTypeList,isLoading,isSuccess}=useListconnectiontypeQuery()
    const navigate=useNavigate()
    const [connectionTypeDelete,connectionTypeDeleteFlag]=useDeleteconnectiontypeMutation()
    console.log(connectionTypeList)
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
                 <h5>Connection Details</h5>
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
                                     <Nav.Link style={{ float: 'right' }} as={NavLink} to="/admin/block">    Add Connection Type   </Nav.Link>
                                 </Button>
                                 <Table bordered hover size="sm">
                                     <thead>
                                         <tr>
                                             <th>Serial No.</th>
                                             <th>Connection Type</th>                                            
                                             <th>Action</th>
                                         </tr>
                                     </thead>
 
                                     <tbody>
                            {connectionTypeList?connectionTypeList.map(e=>(
                                            <tr>
                                            <td>{e.id}</td>
                                            <td>{e.connection_type}</td>
                                           

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }}  onClick={()=>navigate(`/admin/connectionType/edit/${e.id}`)} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }}  onClick={()=>connectionTypeDelete(e.id)} variant="light" className="m-1" size="sm">
                                                    ❌
                                                </Button>                                              

                                            </td>
                                        </tr> 
                                        )):null}
                                                                       
                                            
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