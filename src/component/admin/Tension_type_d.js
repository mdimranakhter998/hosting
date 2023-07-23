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
import {useDeletetensiontypeMutation,useListtensiontypeQuery} from '../../services/admin/tensionTypeService';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export function Tension_type_d() {
    const {data:tensionTypeList,isLoading,isSuccess}=useListtensiontypeQuery()
    const navigate=useNavigate()
    const [connectionTypeDelete,connectionTypeDeleteFlag]=useDeletetensiontypeMutation()
    console.log(tensionTypeList)
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
                 <h5>Tension Details</h5>
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
                                     <Nav.Link style={{ float: 'right' }} as={NavLink} to="/admin/tension_type"> Add Tension Type   </Nav.Link>
                                 </Button>
                                 <Table bordered hover size="sm">
                                     <thead>
                                         <tr>
                                             <th>Serial No.</th>
                                             <th>Tension Type</th>                                            
                                             <th>Action</th>
                                         </tr>
                                     </thead>
 
                                     <tbody>
                            {tensionTypeList?tensionTypeList.map(e=>(
                                            <tr>
                                            <td>{e.id}</td>
                                            <td>{e.tension_type}</td>
                                           

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }}  onClick={()=>navigate(`/admin/tensionType/edit/${e.id}`)} variant="light" className="m-1" size="sm">
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