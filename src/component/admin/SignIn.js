import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { NavLink,useNavigate } from 'react-router-dom';
import {useCookies} from 'react-cookie'
import { useFormik } from 'formik';
import Alert from 'react-bootstrap/Alert'
import {useState,useMemo,useEffect,useCallback} from 'react'
import { useCreateadminSignInMutation } from '../../services/admin/adminSignInService';
import { adminSignInSchema } from '../validation/admin/validation';
import AsyncLocalStorage from '@createnextapp/async-local-storage'
import { setToken, unSetToken } from '../../features/token';
import { useSelector, useDispatch } from 'react-redux'






const initialValues={
    email:"",
    password:""
}
export function SignIn() {
    
    const [signin,data]=useCreateadminSignInMutation()
    const [show, setShow] = useState(false);
    const [alert,setAlert]=useState("")   
    const navigate=useNavigate()
    const dispatch=useDispatch()
    
   
   
   
    
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues: initialValues,
        validationSchema:adminSignInSchema, 

        onSubmit: async (values,action)=>{           
           Object.keys(values).forEach((key)=>{           
            values[key]=values[key].trim()          
           })  

          try{  
           
            const response=await signin(values) 
            if (response.data){                             
               setShow(false)
              const token=response.data
             
                await AsyncLocalStorage.setItem('user', JSON.stringify(token))
                dispatch(setToken("imran"))
              
                
                       
             navigate('/admin/dashboard')           
              
            }                        
           
                    
             
                                 
             
                        
               
                   
            if (response.error){
             if (response.error.status===401){
               setShow(true)
               setAlert ("email or password incorrect") 
             }
            }
            
            
       
        }
        catch{
            console.log("error")
        }
                    
        }
       
           })
    

  
   

    const closeTab = () => {
        window.opener = null;
        window.open("", "_self");
        window.close();
    }
     
   
    return (

        <>  
           
       

                <br />
                <br />
                <br />
               
              
                <Form className='common_css sign_in_form' onSubmit={handleSubmit}>
                <Alert show={show} variant='danger'>{alert}</Alert>  
                    <h5>Log In</h5>
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="" />
                        {errors.email && touched.email?(<p className='text-danger'>{errors.email}</p>):null}
                   
                    </Form.Group>

                    <Form.Group className="mb-3"  controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}  placeholder="" />
                        {errors.password && touched.password?(<p className='text-danger'>{errors.password}</p>):null}
                    </Form.Group>

                    <Button variant="primary" type="submit"   className="m-1" size="sm">
                       Login
                    </Button>


                    <Button variant="Light" style={{ float: 'right' }} size="sm">
                        <Nav.Link as={NavLink} onClick={closeTab} to="/admin/check_forgetpassword">Forgot Password ?</Nav.Link>
                    </Button>
                    <br /><br />

                    New with us??
                    <Button variant="link" style={{ "text-decoration": 'none' }} className="m-1" size="sm">
                        <Nav.Link as={NavLink} onClick={closeTab} to="/admin/signup">Register</Nav.Link>
                    </Button>to get in touch ✔️
                </Form>
          

            <br /><br /><br />  <br /><br /><br />  <br /><br />

        </>
    )
}