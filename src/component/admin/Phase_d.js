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
import {useDeletephaseMutation,useListphaseQuery} from '../../services/admin/phaseService';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export function Phase_d() {
    const {data:phaseList,isLoading,isSuccess}=useListphaseQuery()
    const navigate=useNavigate()
    const [phaseDelete,phaseDeleteFlag]=useDeletephaseMutation()
   console.log(phaseList)
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
                 <h5>Phase Details</h5>
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
                                     <Nav.Link style={{ float: 'right' }} as={NavLink} to="/admin/phase">    Add Phase </Nav.Link>
                                 </Button>
                                 <Table bordered hover size="sm">
                                     <thead>
                                         <tr>
                                             <th>Serial No.</th>
                                             <th>Phase</th>                                            
                                             <th>Action</th>
                                         </tr>
                                     </thead>
 
                                     <tbody>
                            {phaseList?phaseList.map(e=>(
                                            <tr>
                                            <td>{e.id}</td>
                                            <td>{e.phase}</td>
                                           

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }}  onClick={()=>navigate(`/admin/phase/edit/${e.id}`)} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }}  onClick={()=>phaseDelete(e.id)} variant="light" className="m-1" size="sm">
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