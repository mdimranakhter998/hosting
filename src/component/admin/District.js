// import {Link,Route,Routes} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Navbar_admin } from './Navbarr';
import { Sidebar } from './Sidebar';
import {useCreatedistrictMutation,useGetByIddistrictQuery,useUpdatedistrictMutation} from '../../services/admin/districtService';
import { districtSchema } from '../validation/admin/validation';
import { useFormik } from 'formik';
import { useEffect, useState, useRef,useMemo } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useNavigate,useParams } from 'react-router-dom';


const initialValues={
    district:'',
   
}


export  function District() {
    const [createDistrict,createDistrictFlag]=useCreatedistrictMutation()
    const[successShow,setSuccessShow]=useState(false)
    const[message,setMessage]=useState("")
    const[errorShow,setErrorShow]=useState(false)
    const [error,setError]=useState([])
    const navigate=useNavigate()
    const editParams=useParams()   
    const saveRef=useRef('')
   

   

  
   
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues:initialValues,
        validationSchema:districtSchema,       
        onSubmit:async (values,action) => {       
        Object.keys(values).map(e=>values[e]=values[e].toLowerCase())  
        try{          
            const response= await createDistrict(values)                
            if (response.data){              
                setErrorShow(false)             
                setSuccessShow(true)
                setMessage("you have add successfully")
                action.resetForm()           
                setTimeout(()=>{
                    setSuccessShow(false)
                },1000) 
               
                if  (saveRef.current.name==='save'){               
                    navigate('/admin/district_d')
                }               
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

// create form 



    return (
        <>
     
            <Navbar_admin />

            <Container >
                <hr />
                <h5>Add District</h5>
                <hr />
                <br />

                <Row style={{ display: 'flex' }}>
                <Col sm={2}>
                        <Sidebar />
                    </Col>



                    <Col sm={10}>

                    <Alert show={successShow} variant="success">{message}</Alert> 
                        <Form className='common_css'  onSubmit={handleSubmit}>
                            <Row className="mb-3">
                            <Alert show={errorShow} variant="danger"><ul>{error.map(error=><li>{error}</li>)}</ul></Alert>  
                                <Form.Group as={Col} controlId="formBasicblock">
                                    <Form.Label>District Name</Form.Label>
                                    <Form.Control type="text" name="district" value={values.district} onChange={handleChange}  onBlur={handleBlur} placeholder=""  />
                                    {errors.district && touched.district?(<p className="text-danger">{errors.district}</p>):null}
                                </Form.Group>

                              
                            </Row>                         

                          <Button variant="primary"   type="submit"   name="save"  className="m-1" size="sm">
                                Save 
                            </Button>

                        </Form>

                    </Col>
                </Row>
            </Container>

        </>
    )
}