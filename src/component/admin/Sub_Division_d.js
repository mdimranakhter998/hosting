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
import { useListsubdivisionQuery,useDeletesubdivisionMutation } from '../../services/admin/subDivisionService';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export function Sub_Division_d() {
    const {data:subdivisionList,isLoading,isSuccess}=useListsubdivisionQuery()
    const navigate=useNavigate()
    const [subdivisionDelete,subdivisionDeleteFlag]=useDeletesubdivisionMutation()
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
                 <h5>Subdivision Details</h5>
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
                                     <Nav.Link style={{ float: 'right' }} as={NavLink} to="/admin/sub_division">    Add Subdivision  </Nav.Link>
                                 </Button>
                                 <Table bordered hover size="sm">
                                     <thead>
                                         <tr>
                                             <th>Serial No.</th>
                                             <th>Subdivision</th>
                                             <th>division</th>
                                             <th>Action</th>
                                         </tr>
                                     </thead>
 
                                     <tbody>
                                        {subdivisionList?subdivisionList.map(e=>(
                                            <tr>
                                            <td>{e.id}</td>
                                            <td>{e.subdivision}</td>
                                            <td>{e.division}</td>

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }}  onClick={()=>navigate(`/admin/subdivision/edit/${e.id}`)} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }}  onClick={()=>subdivisionDelete(e.id)} variant="light" className="m-1" size="sm">
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