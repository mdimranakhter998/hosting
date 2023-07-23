// import { O_navbar } from './officer/O_navbar';
import { Navbar_r } from './Navbar';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useGetByIdapplicationQuery } from '../services/applicant/appicantionService';
import { useParams } from 'react-router-dom';
import { useListadminGetUserQuery } from '../services/applicant/applicantSignUpService';
export function ApplicationList() {
    const {refresh,access}=JSON.parse(localStorage.getItem('applicant'))
    const requestParam=useParams() 
    const {data:getUser}=useListadminGetUserQuery(access)
    const request_no=localStorage.getItem("appforget")
    const {data:applicantDetails,isSuccess,isLoading}=useGetByIdapplicationQuery({id:request_no,access:access})
    if (applicantDetails){
      console.log(applicantDetails)
    }
   
   
  
   
   
  return (
    <>
      <Navbar_r />
     

        {isLoading?(<></>):(
             <Container>
             <br />
             <br />
            <div className='u_details_css u_details_print' >
            <h5>Application List</h5>
            <br />
  
          
  
            <Table bordered striped>
              <thead>
                <tr>
                  <th >Application No.</th>
                  <th >Date</th>

                </tr>
              </thead>
              <tbody>
                {applicantDetails.length!==0 ?applicantDetails.map(e=>(
                   <tr>                  
                   <td>{e.request_no}</td>
                   <td>{e.created_date}</td>
                 </tr>
                
                )):(
                  <tr>                  
                  <td colspan="12">No Data Found</td>                  
                </tr>
                )}    
              
                
              </tbody>
              
            </Table>
  
  

          </div>
  
  
  
          </Container>
      
  
  
        )}
         
       

        
    </>
  )
}