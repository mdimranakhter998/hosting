// import { O_navbar } from './officer/O_navbar';
import { Navbar_r } from './Navbar';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useGetByIdapplicationQuery } from '../services/applicant/appicantionService';
import { useParams } from 'react-router-dom';
import { useListadminGetUserQuery } from '../services/applicant/applicantSignUpService';
export function ApplicantDetails() {
    const {refresh,access}=JSON.parse(localStorage.getItem('applicant'))
    const requestParam=useParams() 
    const {data:getUser}=useListadminGetUserQuery(access)
    const request_no=localStorage.getItem("application_no")
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
            <h5>Details Submitted</h5>
            <br />
  
          
  
            <Table bordered striped>
              <thead>
                <tr>
                  <th colspan="2">New Connection Details</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td>Application Number</td>
                  <td>{applicantDetails.map(e=>e.request_no)}</td>
                </tr>
                <tr>
                  <td>Connection Type</td>
                  <td>{applicantDetails.map(e=>e.connection_type)}</td>
                </tr>
              
                <tr>
                  <td>Tarrif</td>
                  <td>{applicantDetails.map(e=>e.tariff)}</td>
                </tr>
                <tr>
                  <td>Phase</td>
                  <td>{applicantDetails.map(e=>e.phase)}</td>
                </tr>
                <tr>
                  <td>Load</td>
                  <td>{applicantDetails.map(e=>e.load)}</td>
                </tr>
              </tbody>
              <br />
              <thead>
                <tr>
                  <th colspan="2">LOCATION OF PERMISES WHERE SUPPLY IS REQUIRED</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>District</td>
                  <td>{applicantDetails.map(e=>e.district)}</td>
                </tr>
                <tr>
                  <td>Block</td>
                  <td>{applicantDetails.map(e=>e.block)}</td>
                </tr>
                <tr>
                  <td>Pachayat</td>
                  <td>{applicantDetails.map(e=>e.panchayat)}</td>
                </tr>
                <tr>
                  <td>Village/Ward</td>
                  <td>{applicantDetails.map(e=>e.village)}</td>
                </tr>
                <tr>
                  <td>Division</td>
                  <td>{applicantDetails.map(e=>e.division)}</td>
                </tr>
                <tr>
                  <td>Sub-Division</td>
                  <td>{applicantDetails.map(e=>e.subdivision)}</td>
                </tr>
                <tr>
                  <td>Section</td>
                  <td>{applicantDetails.map(e=>e.section)}</td>
                </tr>
              </tbody>
              <br />
              <thead>
                <tr>
                  <th colspan="2">APPLICANTS DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{applicantDetails.map(e=>e.user.name)}</td>
                </tr>
                <tr>
                  <td>Father/Husband Name</td>
                  <td>{applicantDetails.map(e=>e.father_name)}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{applicantDetails.map(e=>e.gender)}</td>
                </tr>
                <tr>
                  <td>Mobile No.</td>
                  <td>{applicantDetails.map(e=>e.user.phone)}</td>
                </tr>
                <tr>
                  <td>E-mail</td>
                  <td>{applicantDetails.map(e=>e.user.email)}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>{applicantDetails.map(e=>e.address)}</td>
                </tr>
               
                <tr>
                  <td>Pin Code</td>
                  <td>{applicantDetails.map(e=>e.pincode)}</td>
                </tr> <tr>
                  <td>Document Type</td>
                  <td>{applicantDetails.map(e=>e.document_type)}</td>
                </tr>
                <tr>
                  <td>Address Proof Type</td>
                  <td>{applicantDetails.map(e=>e.tension_type)}</td>
                </tr>
              </tbody>
  
  
            </Table>
  
  
  
            <Button variant="primary" id='down' style={{ float: 'right' }} size="sm" onClick={() => window.print()} >
              Print
            </Button>
  
          </div>
  
  
  
          </Container>
      
  
  
        )}
        
        
       

        
    </>
  )
}