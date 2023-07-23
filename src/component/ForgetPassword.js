import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { Navbar_r } from './Navbar';
import { useFormik } from 'formik';
import { useEffect, useState, useRef,useMemo } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { useUpdateadminSignUpMutation} from '../services/admin/adminSignUpService';
import {  forgetPasswordSchema } from './validation/admin/validation';
import Alert from 'react-bootstrap/Alert';

const initialValues={   
    new_password:'',   
    confirm_password:'',
}


export function ForgetPassword() {
    const[successShow,setSuccessShow]=useState(false)  
    const[message,setMessage]=useState("")
    const[errorShow,setErrorShow]=useState(false)
    const [error,setError]=useState([])
    const navigate=useNavigate()        
    const [updateAdmin,updateAdminFlag]=useUpdateadminSignUpMutation()
    const id=localStorage.getItem("userforget")
    console.log(id)
     
     const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
         initialValues:initialValues,
         validationSchema:forgetPasswordSchema,       
         onSubmit:async (values,action) => {        
         try{      
          const form=new FormData()
          form.append('password',values.new_password)
          form.append('id',id)
             const response= await updateAdmin(form)                               
             if (response.data){              
                 setErrorShow(false)             
                 setSuccessShow(true)
                 setMessage("you have changed password successfully")
                       
                 setTimeout(()=>{
                     setSuccessShow(false)
                     action.resetForm()     
                     navigate('/sign_in')
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
               <Navbar_r />

            <Container>
            <br />
                <br />
                <br />
                <Alert show={successShow} variant="success">{message}</Alert>
                <Form className='common_css' onSubmit={handleSubmit}>
                <Alert show={errorShow} variant="danger"><ul>{error.map(error=><li>{error}</li>)}</ul></Alert>  
                <h5>Change Password</h5>
                    <br />
                    

                    <Form.Group className="mb-3" controlId="formBasicNewpass">
                        <Form.Label>Enter New Password</Form.Label>
                        <Form.Control type="password" name="new_password" value={values.new_password} onChange={handleChange}  onBlur={handleBlur} placeholder="" />
                        {errors.new_password && touched.new_password?(<p className="text-danger">{errors.new_password}</p>):null}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNewpass2">
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control type="password"name="confirm_password" value={values.confirm_password} onChange={handleChange}  onBlur={handleBlur} placeholder="" />
                        {errors.confirm_password && touched.confirm_password?(<p className="text-danger">{errors.confirm_password}</p>):null}
                    </Form.Group>


                    <Button variant="primary" type="submit" className="m-1" size="sm">
                        Submit
                    </Button>

                </Form>
            </Container>
           

        </>
    )
}