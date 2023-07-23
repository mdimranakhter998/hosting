import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Navbar_admin } from './Navbarr';
import { Sidebar } from './Sidebar';
import {useCreateloadMutation} from '../../services/admin/loadService'
import { loadSchema } from '../validation/admin/validation';
import { useFormik } from 'formik';
import { useEffect, useState, useRef,useMemo } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useNavigate,useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const initialValues={
    load:''  
};

export function Load() {
    const [createLoad,createLoadFlag]=useCreateloadMutation()   
    const[successShow,setSuccessShow]=useState(false)
    const[message,setMessage]=useState("")
    const[errorShow,setErrorShow]=useState(false)
    const [error,setError]=useState([])
    const navigate=useNavigate()
    const editParams=useParams()

    
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues:initialValues,
        // validationSchema:loadSchema,       
        onSubmit:async (values,action) => {
        
       
        try{          
            const response= await createLoad(values)                                    
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
                <h5>Add Load</h5>
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
                                    <Form.Label>Load</Form.Label>
                                    <Form.Select name="load" value={values.load}  onChange={handleChange} onBlur={handleBlur} aria-label="Default select example" >
                                      
                                        <option>---select---</option>
                                        <option value="50-1500 KVA">50-1500 KVA</option>
                                        <option value="500-15000 KVA">500-15000 KVA</option>                                       
                                        <option value="7500 KVA and above">7500 KVA and above</option>
                                        <option value="10000 KVA and above">10000 KVA and above</option>
                                        <option value="300 KVA and above">300 KVA and above</option>
                                        <option value="1-7 KW">1-7 KW</option>                                       
                                        <option value="1-19 KW">1-19 KW</option>
                                        <option value="20-74 KW">20-74 KW</option>
                                        <option value="5-70 KW">5-70 KW</option>
                                        <option value="1-250 WT">1-250 WT</option>                                       
                                        <option value="7-70 KW">7-70 KW</option>                    


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