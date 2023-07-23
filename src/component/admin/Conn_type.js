import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Navbar_admin } from './Navbarr';
import { Sidebar } from './Sidebar';
import {useCreateconnectiontypeMutation} from '../../services/admin/connectionTypeService'
import { connectionTypeSchema } from '../validation/admin/validation';
import { useFormik } from 'formik';
import { useEffect, useState, useRef,useMemo } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useNavigate,useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const initialValues={
    connection_type:''  
};

export function Conn_type() {
    const [createConnectionType,createConnectionTypeFlag]=useCreateconnectiontypeMutation()
   
    const[successShow,setSuccessShow]=useState(false)
    const[message,setMessage]=useState("")
    const[errorShow,setErrorShow]=useState(false)
    const [error,setError]=useState([])
    const navigate=useNavigate()
    const editParams=useParams()

    console.log(createConnectionType)
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues:initialValues,
        // validationSchema:connectionTypeSchema,       
        onSubmit:async (values,action) => { 
                
        // Object.keys(values).map(e=>values[e]=values[e].toLowerCase())  
       
        try{          
            const response= await createConnectionType(values) 
            console.log(response)                          
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

    console.log(values)
    return (
        <>
            <Navbar_admin />

            <Container >
                <hr />
                <h5>Add Connection Type</h5>
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
                                    <Form.Label>Connection Type</Form.Label>
                                    <Form.Select name="connection_type" value={values.connection_type}  onChange={handleChange} onBlur={handleBlur} aria-label="Default select example" >
                                      
                                        <option>---select---</option>
                                        <option value="Domestic">Domestic</option>
                                        <option value="Commercial">Commercial</option>                                       
                                        <option value="Industrial">Industrial</option>
                                        <option value="Agriculture">Agriculture</option>


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