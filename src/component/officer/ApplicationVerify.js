// import { Link, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { OfficerNavbar } from './OfficerNavbar';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Spinner from 'react-bootstrap/Spinner';
import { useListapplicationQuery } from '../../services/applicant/appicantionService';

export function ApplicationVerify() {
    var {data,isLoading,isSuccess}=useListapplicationQuery()
    if (data){        
        data=data.filter(e=>e.is_verified===false && e.is_defected===false  && e.is_rejected===false)      
    }
   
    return (
        <>
        
           
            {isLoading?(
                <>
                
                </>

            ):(             
              <>
                {/* <OfficerNavbar /> */}
                <Container>
    
    
                    <br /> <br /><br /><br />  <br />
    
    
                    <Form className='common_css'>
                        <h5>Application Verification List</h5>
                        <br />
    
    
                        <Table style={{ "text-align": "center" }} border="1" center striped bordered hover size="lg">
                            <thead>
                                <tr>
                                    <th >Application No.</th>
                                    <th >Name</th>
    
                                    <th >Email</th>
                                    <th >Phone</th>
    
                                    <th >View</th>
    
                                </tr>
    
                            </thead>
                            <tbody >
                            {data.length!==0?data.map(e=>(
                                <tr>
                                <td>{e.request_no}</td>                               
                                <td>{e.user.name}</td>                              
                                <td>{e.user.email}</td>                             
                                <td>{e.user.phone} </td> 
                               
                                <td>

                                

                                <Nav.Link as={NavLink} onClick={()=>localStorage.setItem("applicationVerify",JSON.stringify(e.request_no)) } to="/application/verifydetail" end>👁️</Nav.Link>

                                </td>
                            </tr>

                            )):(
                                <tr>
                                <td colspan="12">
                                <p className='text-center'>No data found</p>
                                </td>
                                </tr>
                            )}

                                
                            </tbody>
                        </Table>
    
    
                    </Form>
    
    
                </Container>
    
               
            </>
           
    
            )}
             </>
               )
}