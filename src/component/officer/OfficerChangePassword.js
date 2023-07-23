import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { OfficerNavbar } from './OfficerNavbar';
import { useFormik } from 'formik';
import { useEffect, useState, useRef,useMemo } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { useCreateadminChangePasswordMutation } from '../../services/admin/adminChangePasswordService';
import { changePasswordSchema } from '../validation/admin/validation';
import Alert from 'react-bootstrap/Alert';
const initialValues={
    password:'',
    new_password:'',   
    confirm_password:'',  
    access:'' 

}


export function OfficerChangePassword() {
    const[successShow,setSuccessShow]=useState(false)  
    const[message,setMessage]=useState("")
    const[errorShow,setErrorShow]=useState(false)
    const [error,setError]=useState([])
    const navigate=useNavigate()        
    const [updateAdmin,updateAdminFlag]=useCreateadminChangePasswordMutation()
    const {refresh,access}=JSON.parse(localStorage.getItem("officer"))
 
     
     const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
         initialValues:initialValues,
         validationSchema:changePasswordSchema,       
         onSubmit:async (values,action) => {        
         try{      
            values.access=access
            console.log(values)
             const response= await updateAdmin(values)                               
             if (response.data){              
                 setErrorShow(false)             
                 setSuccessShow(true)
                 setMessage("you have changed password successfully")
                       
                 setTimeout(()=>{
                     setSuccessShow(false)
                     action.resetForm()     
                     navigate('/change_password')
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
               <OfficerNavbar />

            <Container>
            <br />
                <br />
                <br />
                <Alert show={successShow} variant="success">{message}</Alert>
                <Form className='common_css' onSubmit={handleSubmit}>
                <Alert show={errorShow} variant="danger"><ul>{error.map(error=><li>{error}</li>)}</ul></Alert>  
                <h5>Change Password</h5>
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicOldpass">
                        <Form.Label>Enter Old Password</Form.Label>
                        <Form.Control type="password" name="password" value={values.password} onChange={handleChange}  onBlur={handleBlur} placeholder="" />
                        {errors.password && touched.password?(<p className="text-danger">{errors.password}</p>):null}
                    </Form.Group>

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