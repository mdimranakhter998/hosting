import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Navbar_admin } from './Navbarr';
import Alert from 'react-bootstrap/Alert';
import { useFormik } from 'formik';
import { useNavigate,useParams } from 'react-router-dom';
import { checkEmail } from '../validation/admin/validation';
import { useMemo, useState } from 'react';
import {useGetByIdadminSignUpQuery} from '../../services/admin/adminSignUpService'

const initialValues={
    email:'',
    phone:''
   
}

export function AdminCheckForgetPassword(){   
    const [rqt,setRqt]=useState(null)
    const[message,setMessage]=useState("")
    const[errorShow,setErrorShow]=useState(false)
    const [error,setError]=useState([])
    const navigate=useNavigate()
    const editParams=useParams() 
    const {data:check,isLoading,isSuccess,isError}=useGetByIdadminSignUpQuery(rqt)
   
   
   
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues:initialValues,
        validationSchema:checkEmail,       
        onSubmit:async (values,action) => {
            setRqt(values.email) 
            console.log(check)
            if (isSuccess===true && check.length!==0 ){
            if (check.length!==0){ 
                const id=check.map(e=>e.id)              
                localStorage.setItem("userforget",id[0])              
                setErrorShow(false)                
                navigate("/admin/forget_password")              
                }
                else{
                    setErrorShow(true)
                    setError("your email not exist")
                }   
            }   
           
        },
    }) 


return (
    <>
    
   
            <Container>
                <br />
                <br />
                <br />

                <Form className='common_css' onSubmit={handleSubmit}>                   
                    <br />
                    <Alert show={errorShow} variant="danger">{error}</Alert>
                    <Form.Group className="mb-3 qw" controlId="formBasicEmail">
                        <Form.Label >Enter your Email</Form.Label>
                        <Form.Control type="text" name="email" value={values.email} onChange={handleChange}  onBlur={handleBlur} placeholder="" />
                        {errors.email && touched.email?(<p className="text-danger">{errors.email}</p>):null}
                    </Form.Group>


                    <Button variant="primary" type="submit"  className="m-1" size="sm">
                       Click
                    </Button>

                </Form>
            </Container>
           
    </>
)
}