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
import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useNavigate,useParams } from 'react-router-dom';
import { useRef,useMemo} from 'react';

const initialValues={
    district:'',
   
}


export  function DistrictEdit() { 
    const[successShow,setSuccessShow]=useState(false)
    const[message,setMessage]=useState("")
    const[errorShow,setErrorShow]=useState(false)
    const [error,setError]=useState([])
    const navigate=useNavigate()
    const editParams=useParams()  
    const {data:getDistrictId,isSuccess,isLoading}= useGetByIddistrictQuery(editParams.id)
    const [updateDistrict,updateDistrictFlag]=useUpdatedistrictMutation()
    const saveRef=useRef('')
   

   

  
   
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues:initialValues,
        validationSchema:districtSchema,       
        onSubmit:async (values,action) => {                
        Object.keys(values).map(e=>values[e]=values[e].toLowerCase())            
        const updateRes=await updateDistrict(values)        
        if (updateRes.data){
         setSuccessShow(true)
         setMessage("you have update successfully")                
         setTimeout(()=>{
             setSuccessShow(false)
             navigate('/admin/district_d')
         },1000)
       
     
        }
        else if (updateRes.error){
         console.log(updateRes.error)
        } 
        return values        
       }  
            
    
    })




const get=useMemo(()=>{
    if (isSuccess){
    let tm=getDistrictId.map(e=>e)
    tm.forEach((e,values)=>{
        initialValues.id=e.id.toString()
        initialValues.district=e.district
        values=e
    })  
}
},[isSuccess])


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
                           

                          <Button variant="primary"   type="submit"  ref={saveRef} name="save"  className="m-1" size="sm">
                                Save 
                            </Button>

                        </Form>

                    </Col>
                </Row>
            </Container>

        </>
    )
}
   
