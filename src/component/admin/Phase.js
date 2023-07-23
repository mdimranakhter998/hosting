import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Navbar_admin } from './Navbarr';
import { Sidebar } from './Sidebar';
import {useCreatephaseMutation} from '../../services/admin/phaseService'
import { phaseSchema } from '../validation/admin/validation';
import { useFormik } from 'formik';
import { useEffect, useState, useRef,useMemo } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useNavigate,useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const initialValues={
    phase:''  
};

export function Phase() {
    const [createPhase,createPhaseFlag]=useCreatephaseMutation()
   
    const[successShow,setSuccessShow]=useState(false)
    const[message,setMessage]=useState("")
    const[errorShow,setErrorShow]=useState(false)
    const [error,setError]=useState([])
    const navigate=useNavigate()
    const editParams=useParams()

   
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues:initialValues,
        // validationSchema:phaseSchema,       
        onSubmit:async (values,action) => {  
       
       
        try{          
            const response= await createPhase(values)                                   
            if (response.data){              
                setErrorShow(false)             
                setSuccessShow(true)
                setMessage("you have add successfully")
                action.resetForm()           
                setTimeout(()=>{
                    setSuccessShow(false)
                },1000)               
                        
            }          
                      
            if(response.error.status==406){                            
                setErrorShow(true)
                setError(Object.values(response.error.data)) 
                    
               
            }           
        }
        catch{
            console.log("server down")
        }
      
           return values      
       

        },        
    
    })

    
    return (
        <>
            <Navbar_admin />

            <Container >
                <hr />
                <h5>Add Phase</h5>
                <hr />
                <br />

                <Row style={{ display: 'flex' }}>


                    <Col sm={2}>
                        <Sidebar />
                    </Col>



                    <Col sm={10}>
                    <Alert show={successShow} variant="success">{message}</Alert>
                        <Form className='common_css' onSubmit={handleSubmit}>
                            <Row>
                <Alert show={errorShow} variant="danger"><ul>{error.map(error=><li>{error}</li>)}</ul></Alert>  

                                <Form.Group as={Col} controlId="formBasicbdist">
                                    <Form.Label>Phase</Form.Label>
                                    <Form.Select name="phase" value={values.phase}  onChange={handleChange} onBlur={handleBlur} aria-label="Default select example" >
                                      
                                        <option>---select---</option>
                                        <option value="1">1</option>
                                        <option value="3">3</option>                                       
                                       


                                    </Form.Select>
                                </Form.Group>

                            </Row>
                           
                            <br/>
                            <Button  type="submit" variant="primary" className="m-1" size="sm">
                                Save 
                            </Button>

                        </Form>

                    </Col>
                </Row>
            </Container>
          
        </>
    )
}