   // import {Link,Route,Routes} from 'react-router-dom';
   import Container from 'react-bootstrap/Container';
   import Form from 'react-bootstrap/Form';
   import Button from 'react-bootstrap/Button';
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import { Navbar_admin } from './Navbarr';
   import { Sidebar } from './Sidebar';
   import { useUpdatedivisionMutation,useGetByIddivisionQuery } from '../../services/admin/divisionService';
   import { divisionSchema } from '../validation/admin/validation';
   import { useFormik } from 'formik';
   import { useEffect, useState } from 'react';
   import Alert from 'react-bootstrap/Alert';
   import { useNavigate,useParams } from 'react-router-dom';
   import { useRef,useMemo} from 'react';
   
   const initialValues={
       division:'',
      
   }
   
   
   export  function DivisionEdit() { 
       const[successShow,setSuccessShow]=useState(false)
       const[message,setMessage]=useState("")
       const[errorShow,setErrorShow]=useState(false)
       const [error,setError]=useState([])
       const navigate=useNavigate()
       const editParams=useParams()  
       const {data:getDivisionId,isSuccess,isLoading}= useGetByIddivisionQuery(editParams.id)
       const [updateDivision,updateDivisionFlag]=useUpdatedivisionMutation()
       const saveRef=useRef('')
      
   
      
   
     
      
       const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
           initialValues:initialValues,
           validationSchema:divisionSchema,            
           onSubmit:async (values,action) => {
           Object.keys(values).map(e=>values[e]=values[e].toLowerCase())                      
           const response=await updateDivision(values)        
           if (response.data){
            setSuccessShow(true)
            setMessage("you have update successfully")                
            setTimeout(()=>{
                setSuccessShow(false)
                navigate('/admin/division_d')
            },1000)
          
        
           }
           else if (response.error.status===406){
            console.log(response.error)
           } 
           return values        
          }  
               
       
       })
   
   
   
   
   const get=useMemo(()=>{
       if (isSuccess){
       let tm=getDivisionId.map(e=>e)
       tm.forEach((e,values)=>{
           initialValues.id=e.id.toString()
           initialValues.division=e.division
           values=e
       })  
   }
   },[isSuccess])
   
   
       return (
           <>
        
               <Navbar_admin />
   
               <Container >
               <hr />
                <h5>Add Division</h5>
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
                                    <Form.Label>Division Name</Form.Label>
                                    <Form.Control type="text" name="division" value={values.division} onChange={handleChange}  onBlur={handleBlur} placeholder=""  />
                                    {errors.division && touched.division?(<p className="text-danger">{errors.division}</p>):null}
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
      
   