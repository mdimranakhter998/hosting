import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Navbar_r } from '../component/Navbar';
import Alert from 'react-bootstrap/Alert';
import { useFormik } from 'formik';
import { useNavigate,useParams } from 'react-router-dom';
import { statusSchema } from './validation/applicant/validation';
import { useMemo, useState } from 'react';
import {useGetByIdapplicationQuery} from '../services/applicant/appicantionService'

const initialValues={
    request_no:'',
    access:''
   
}

export function ApplicationPrint(){
   
    const [rqt,setRqt]=useState({id:null,access:null})
    const[message,setMessage]=useState("")
    const[errorShow,setErrorShow]=useState(false)
    const [error,setError]=useState([])
    const navigate=useNavigate()
    const editParams=useParams() 
    const {data:getIdApplication,isLoading,isSuccess,isError}=useGetByIdapplicationQuery(rqt)
    const {refresh,access}=JSON.parse(localStorage.getItem("applicant"))
   
   
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues:initialValues,
        validationSchema:statusSchema,       
        onSubmit:async (values,action) => {
            setRqt({id:values.request_no,access:access}) 
            if (getIdApplication.length!=0){               
                setErrorShow(false)
                localStorage.setItem("application_no",values.request_no)
                navigate("/applicantDetails")              
                }
                else{
                    setErrorShow(true)
                    setError("your application not exist")
                }      
           
        },
    }) 

//  const success=useMemo(()=>{
    
       
        
    
//  },[isSuccess,isLoading])  

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
                        <Form.Label >Enter your Application No.</Form.Label>
                        <Form.Control type="text" name="request_no" value={values.id} onChange={handleChange}  onBlur={handleBlur} placeholder="" />
                        {errors.request_no && touched.request_no?(<p className="text-danger">{errors.request_no}</p>):null}
                    </Form.Group>


                    <Button variant="primary" type="submit"  className="m-1" size="sm">
                        check status
                    </Button>

                </Form>
            </Container>
           
    </>
)
}