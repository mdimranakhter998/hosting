import { OfficerNavbar } from './OfficerNavbar';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useGetByIdapplicationQuery,useUpdateapplicationMutation } from '../../services/applicant/appicantionService';
import { useListadminGetUserQuery } from '../../services/officer/officerSignUpService';
import { useCreateverifyMutation } from '../../services/status/verifyService';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { object } from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function ApplicationReverifyDetail() {  
   const [remark,setRemark]=useState("") 
   const {refresh,access=null}=localStorage.getItem("officer")?JSON.parse(localStorage.getItem("officer")):{}
   const {data:getUser}=useListadminGetUserQuery(access)
   const request_no=localStorage.getItem('applicationVerify')?JSON.parse(localStorage.getItem("applicationVerify")):{} 
   const {data:applicantDetails,isSuccess,isLoading}=useGetByIdapplicationQuery({id:request_no,access:access})
   const [updateApplication]=useUpdateapplicationMutation()
   const [createVerify]=useCreateverifyMutation ()
   const navigate=useNavigate()
   
   const handleAccept=async ()=>{
    const form=new FormData()
    const form1=new FormData()
    if (applicantDetails.length!==0 && Object.keys(getUser).length!==0){
        const application=applicantDetails.map(e=>e.id)[0] 
        const is_verified=applicantDetails.map(e=>e.is_verified)[0]        
        const officer=getUser.id        
        form.append("application_pk",application)
        form.append("officer_pk",officer)
        form.append("remark",remark)
        form.append("action","Accept")
        form1.append("id",application)
        form1.append("is_verified",true)
       console.log(await updateApplication(form1))
       await createVerify(form)      
       navigate('/application/reverify')
    }       
    }
    const handleDefect=async ()=>{
        const form=new FormData()
        const form1=new FormData()
        if (applicantDetails.length!==0 && Object.keys(getUser).length!==0){
            const application=applicantDetails.map(e=>e.id)[0] 
            const is_verified=applicantDetails.map(e=>e.is_defected)[0]        
            const officer=getUser.id        
            form.append("application_pk",application)
            form.append("officer_pk",officer)
            form.append("remark",remark)
            form.append("action","Defect")
            form1.append("id",application)
            form1.append("is_defected",true)
            form1.append("is_submited",false)          
            await updateApplication(form1)
          
           await createVerify(form)      
         navigate('/application/reverify')
        }       
        }
        const handleReject=async ()=>{
            const form=new FormData()
            const form1=new FormData()
            if (applicantDetails.length!==0 && Object.keys(getUser).length!==0){
                const application=applicantDetails.map(e=>e.id)[0] 
                const is_verified=applicantDetails.map(e=>e.is_rejected)[0]        
                const officer=getUser.id        
                form.append("application_pk",application)
                form.append("officer_pk",officer)
                form.append("remark",remark)
                form.append("action","Reject")
                form1.append("id",application)
                form1.append("is_rejected",true)
               await updateApplication(form1)           
                await createVerify(form)                      
                navigate('/application/reverify')
            }       
            }

 const handleRemark=(e)=>{
    setRemark(e.target.value)   
  }
 
  return (
    
    <>
    
    {isLoading?(
                <>
               
                </>

            ):( 
        <>
        <OfficerNavbar />
      <Container >
        <br />
        <br />



        <div className='u_details_css' >
          <h5>Application Details</h5>
          <br />



          <Table bordered striped>
            <thead>
              <tr>
                <th colspan="2">New Connection Details</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                <td>Application No</td>
                <td>{applicantDetails?applicantDetails.map(e=>e.request_no):null}</td>
              </tr>
                <tr>
                <td>Connection Type</td>
                <td>{applicantDetails?applicantDetails.map(e=>e.connection_type):null}</td>
              </tr>
              
              <tr>
                <td>Tarrif</td>
                <td>{applicantDetails?applicantDetails.map(e=>e.tariff):null}</td>
              </tr>
              <tr>
                <td>Phase</td>
                <td>{applicantDetails?applicantDetails.map(e=>e.phase):null}</td>
              </tr>
              <tr>
                <td>Load</td>
                <td>{applicantDetails?applicantDetails.map(e=>e.load):null}</td>
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
                <td>{applicantDetails?applicantDetails.map(e=>e.district):null}</td>
              </tr>
              <tr>
                <td>Block</td>
                <td>{applicantDetails?applicantDetails.map(e=>e.block):null}</td>
              </tr>
              <tr>
                <td>Pachayat</td>
                <td>{applicantDetails?applicantDetails.map(e=>e.panchayat):null}</td>
              </tr>
              <tr>
                <td>Village/Ward</td>
                <td>{applicantDetails?applicantDetails.map(e=>e.village):null}</td>
              </tr>
              <tr>
                <td>Division</td>
                <td>{applicantDetails?applicantDetails.map(e=>e.division):null}</td>
              </tr>
              <tr>
                <td>Sub-Division</td>
                <td>{applicantDetails?applicantDetails.map(e=>e.subdivision):null}</td>
              </tr>
              <tr>
                <td>Section</td>
                <td>{applicantDetails?applicantDetails.map(e=>e.section):null}</td>
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
                <td>{applicantDetails?applicantDetails.map(e=>e.user.name):null}</td>
              </tr>
              <tr>
                <td>Father/Husband Name</td>
                <td>{applicantDetails?applicantDetails.map(e=>e.father_name):null}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{applicantDetails?applicantDetails.map(e=>e.gender):null}</td>
              </tr>
              <tr>
                <td>Mobile No.</td>
                <td>{applicantDetails?applicantDetails.map(e=>e.user.phone):null}</td>
              </tr>
              <tr>
                <td>E-mail</td>
                <td>{applicantDetails?applicantDetails.map(e=>e.user.email):null}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{applicantDetails?applicantDetails.map(e=>e.address):null}</td>
              </tr>              
              
              <tr>
                <td>Pin Code</td>
                <td>{applicantDetails?applicantDetails.map(e=>e.pincode):null}</td>
              </tr> <tr>
                <td>Document Type</td>
                <td>{applicantDetails?applicantDetails.map(e=>e.document_type):null}</td>
              </tr>
              <tr>
                <td>Address Proof Type</td>
                <td>{applicantDetails?applicantDetails.map(e=>e.address_type):null}</td>
              </tr>
            </tbody>
            <br />
            <thead>
              <tr>
                <th colspan="2">UPLOADED DOCUMENTS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Applicant's Photo</td>
                <td>
                <a href={applicantDetails?applicantDetails.map(e=>e.photo):null} target="_blank" style={{marginRight:'1rem',textDecoration: "none"}}> 👁️ </a>
                
               
                </td>
              </tr>
              <tr>
                <td>document</td>
                <td>
                <a href= {applicantDetails?applicantDetails.map(e=>e.document_file):null} target="_blank" style={{marginRight:'1rem',textDecoration: "none"}}> 👁️ </a>
                
               
                </td>
              </tr>
              <tr>
                <td>Address Proof Front Pic</td>
                <td>
                <a href={applicantDetails?applicantDetails.map(e=>e.address_front):null} target="_blank" style={{marginRight:'1rem',textDecoration: "none"}}> 👁️ </a>
                
               
                </td>
              </tr>
              <tr>
                <td>Address Proof Back Pic</td>
                <td>
                <a href= {applicantDetails?applicantDetails.map(e=>e.address_back):null} target="_blank" style={{marginRight:'1rem',textDecoration: "none"}}> 👁️ </a>
                
               
                </td>
              </tr>
              <tr>
                <td>OwnerShip</td>
                <td>
                <a href= {applicantDetails?applicantDetails.map(e=>e.owner_file):null} target="_blank" style={{marginRight:'1rem',textDecoration: "none"}}> 👁️ </a>             
                </td>
              </tr>
            </tbody>

          </Table>
          <br />

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Remarks (if any)</Form.Label>
        <Form.Control as="textarea" rows={3} name="remark" value={remark} onChange={handleRemark} />
      </Form.Group>
          
          <br />
          <br />

          <div className='d-flex justify-content-center'>
            <Button variant="success" type="button" onClick={handleAccept} className="m-1" size="sm">
              Accept
            </Button>
            <Button variant="warning" type="button" onClick={handleDefect}  className="m-1" size="sm">
              Defect
            </Button>
            <Button variant="danger" type="button" onClick={handleReject} className="m-1" size="sm">
              Reject
            </Button>
          </div>


        </div>





      </Container>
   
        </>
        )}

      

    </>
  )
}