import { Navbar_r } from './Navbar';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {useGetByIdverifyQuery} from '../services/status/verifyService'
import Spinner from 'react-bootstrap/Spinner';

let action=null
export function Status() {
    const request_no=localStorage.getItem("application_no")
    const {data,isSuccess,isLoading}=useGetByIdverifyQuery(request_no)
   
  //  if (data){
  //   data.map(e=>{       
  //   if (e.application.is_defected===true && e.application.is_verified===true && e.application.is_rejected===false ){
  //       action="Verify"
           
  //   }
  //   if (e.application.is_defected===true && e.application.is_verified===false && e.application.is_rejected===false){
  //       action="Defect"
                  
  //   }
  //   if (e.application.is_rejected===true) {
  //       action="Reject"       
  //   }
    
  //  })
  //  }

   
    return (
     <>
        {isLoading?(
            <>
            
            </>
            ):(
            <>
            <Navbar_r />
            <br/> <br/>
            <Container className='common_css'>           

              
                    <h5> 
                        
                    Status</h5>
                    <br />
           

             
            <Table bordered striped>
              <thead>
                <tr>
                  <th colspan="12">Verification Details</th>
                </tr>
                <tr>
                  <th colspan="2">Verify By</th>
                  <th colspan="2">Verify Date</th>
                  <th colspan="2">Remarks</th>
                  <th colspan="2">Action</th>
                </tr>
                
              </thead>
              <tbody>
                {data && data.length!=0?data.map(e=>(
                    <tr>
                    <td  colspan="2">{e.officer.name}</td>
                    <td  colspan="2">{e.created_date}</td>
                    <td  colspan="2">{e.remark}</td>
                    <td  colspan="2">{e.action}</td>

                      
                   
                    </tr>
                )):(
                  <tr>
                   <td colspan="12"> <p className='text-center'>Awaiting For Verification</p></td>
                    </tr>
                )}
                
              </tbody>
              </Table>
          
            </Container>
           
        </>
    )}
    </>
    )
}