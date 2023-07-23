import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { json, NavLink,useNavigate } from 'react-router-dom';
import tw from '../slider/tw.png';
import {useCookies} from 'react-cookie'
import {applicantSignInSchema} from './validation/applicant/validation'
import { useFormik } from 'formik';
import Alert from 'react-bootstrap/Alert'
import {useState,useMemo,useEffect,useCallback} from 'react'
import { useCreateapplicantSignInMutation } from '../services/applicant/applicantSignInService';
import { useGetByIdapplicationSignUpQuery } from '../services/applicant/applicantSignUpService';
import { Navbar_r } from './Navbar';
import AsyncLocalStorage from '@createnextapp/async-local-storage'




const initialValues={
    phone:"",
    password:""
}
export function Sign_In() {
   
    const [signin,data]=useCreateapplicantSignInMutation()
    const [show, setShow] = useState(false);
    const [alert,setAlert]=useState("")  
     
    const navigate=useNavigate()
   
   
   
    
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues: initialValues,
        validationSchema:applicantSignInSchema, 

        onSubmit: async (values,action)=>{           
           Object.keys(values).forEach((key)=>{           
            values[key]=values[key].trim()          
           })  

          try{  
         
            const response=await signin(values)                   
            if (response.error){
             if (response.error.status===401){
               setShow(true)
               setAlert ("Phone or password incorrect") 
             }
            }
            else if (response.data){                                 
                 setShow(false)
                const token=response.data
                console.log(token) 
                await AsyncLocalStorage.setItem('applicant', JSON.stringify(token))
              
                                                         
                navigate('/')               
                 
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
           
          <Navbar_r/>

                <br />
                <br />
                <br />
               
              
                <Form className='common_css sign_in_form' onSubmit={handleSubmit}>
                <Alert show={show} variant='danger'>{alert}</Alert>  
                    <h5>Log In</h5>
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Enter Mobile No.</Form.Label>
                        <Form.Control type="text" name="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} placeholder="" />
                        {errors.phone && touched.phone?(<p className='text-danger'>{errors.phone}</p>):null}
                   
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
                        <Nav.Link as={NavLink}  to="/check_forgetpassword">Forgot Password ?</Nav.Link>
                    </Button>
                    <br /><br />

                    New with us??
                    <Button variant="link" style={{ "text-decoration": 'none' }} className="m-1" size="sm">
                        <Nav.Link as={NavLink}  to="/sign_up">Register</Nav.Link>
                    </Button>to get in touch ✔️
                </Form>
          

          

        </>
    )
}