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
import { useDeleteblockMutation, useListblockQuery} from '../../services/admin/blockService';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';



export function Block_d() {
    const {data:blockList,isLoading,isSuccess}=useListblockQuery()
    const navigate=useNavigate()
    const [blockDelete,blockDeleteFlag]=useDeleteblockMutation()
   console.log(blockList)
    return (
        <>
          
            {isLoading?(
            <>
             {/* <Spinner animation="grow"  className='qwea' /> */}
            </>
            ):(
                <>
                <Navbar_admin />
                 <Container >
                 <hr />
                 <h5>Block Details</h5>
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
                                     <Nav.Link style={{ float: 'right' }} as={NavLink} to="/admin/block">    Add Block   </Nav.Link>
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
                                        {blockList?blockList.map(e=>(
                                            <tr>
                                            <td>{e.id}</td>
                                            <td>{e.block}</td>
                                           {e.district?(<td>{e.district}</td>):(<td>null</td>)} 

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }}  onClick={()=>navigate(`/admin/block/edit/${e.id}`)} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }}  onClick={()=>blockDelete(e.id)} variant="light" className="m-1" size="sm">
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