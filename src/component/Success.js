import { Navbar_r } from '../component/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export function Success() {
    const navigate=useNavigate()
    const req_no=localStorage.getItem('application_no')
    setTimeout(()=>{
        window.open('/applicantDetails')
       
       },[2000])
     
    return (
        <>

            <Navbar_r />


            <Container style={{ "padding": "10%", "text-align": "center"}}>

                <span style={{ "font-size": "60px" }}> ✅ </span>
                <br />
                <br />

                <h2>Success !</h2>
                

                <h5>Application Submitted Successfully</h5>
                <br />
                <br />
         
                <br />

                <h1> Your Request No. is {req_no} </h1>
                <br />
                <br />

                <Button variant="danger" onClick={()=>navigate("/")} className="m-1" size="sm">
                    Close
                </Button>

            </Container>
           
        </>

    )
}