import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Navbar_r } from './Navbar';
import Alert from 'react-bootstrap/Alert';
import { useFormik } from 'formik';
import { useNavigate,useParams } from 'react-router-dom';
import { checkPhone } from './validation/applicant/validation';
import { useEffect, useMemo, useState } from 'react';
import {useGetByIdadminSignUpQuery} from '../services/admin/adminSignUpService'

const initialValues={
    email:'',
    phone:''
   
}

export function ApplicationForget(){   
    const [rqt,setRqt]=useState(null)
    const[message,setMessage]=useState("")
    const[errorShow,setErrorShow]=useState(false)
    const [error,setError]=useState([])
    const navigate=useNavigate()
    const editParams=useParams() 
    const {data:check,isLoading,isSuccess,isError}=useGetByIdadminSignUpQuery(rqt)
   
   
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues:initialValues,
        validationSchema:checkPhone,       
        onSubmit:async (values,action) => {            
           
                   
               if (isSuccess===true ){
                
                if (check.length!==0){                                
                    localStorage.setItem("appforget",rqt)              
                    setErrorShow(false)                
                    navigate("/applicationList")              
                    }
               
                else{                   
                    setErrorShow(true)
                    setError("your phone number not exist")
                }  
            }    
             
               
                             
            }
           
           
    }) 

    useEffect(()=>{
        setRqt(values.phone)  

    })


return (
    <>
    
         <Navbar_r />
            <Container>
                <br />
                <br />
                <br />

                <Form className='common_css' onSubmit={handleSubmit}>
                   
                    <br />
                    <Alert show={errorShow} variant="danger">{error}</Alert>
                    <Form.Group className="mb-3 qw" controlId="formBasicEmail">
                        <Form.Label >Enter your Phone No.</Form.Label>
                        <Form.Control type="text" name="phone" value={values.phone} onChange={handleChange}  onBlur={handleBlur} placeholder="" />
                        {errors.phone && touched.phone?(<p className="text-danger">{errors.phone}</p>):null}
                    </Form.Group>


                    <Button variant="primary" type="submit"  className="m-1" size="sm">
                       Click
                    </Button>

                </Form>
            </Container>
           
    </>
)
}