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
import { useDeletesectionMutation,useListsectionQuery } from '../../services/admin/sectionService';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';



export function Section_d() {
    const {data:sectionList,isLoading,isSuccess}=useListsectionQuery()
    const navigate=useNavigate()
    const [sectionDelete,sectionDeleteFlag]=useDeletesectionMutation()

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
                 <h5>Section Details</h5>
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
                                     <Nav.Link style={{ float: 'right' }} as={NavLink} to="/admin/section">    Add Section  </Nav.Link>
                                 </Button>
                                 <Table bordered hover size="sm">
                                     <thead>
                                         <tr>
                                             <th>Serial No.</th>
                                             <th>Section</th>
                                             <th>Subdivision</th>
                                             <th>Action</th>
                                         </tr>
                                     </thead>
 
                                     <tbody>
                                        {sectionList?sectionList.map(e=>(
                                            <tr>
                                            <td>{e.id}</td>
                                            <td>{e.section}</td>
                                            <td>{e.subdivision}</td>

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }}  onClick={()=>navigate(`/admin/section/edit/${e.id}`)} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }}  onClick={()=>sectionDelete(e.id)} variant="light" className="m-1" size="sm">
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