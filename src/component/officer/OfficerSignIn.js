import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { NavLink,useNavigate } from 'react-router-dom';
// import tw from '../slider/tw.png';
import {useCookies} from 'react-cookie'
import { useFormik } from 'formik';
import Alert from 'react-bootstrap/Alert'
import {useState,useMemo,useEffect,useCallback} from 'react'
import { useCreateofficerSignInMutation } from '../../services/officer/officerSignInService'; 
import { officerSignInSchema } from '../validation/officer/validation';
import AsyncLocalStorage from '@createnextapp/async-local-storage'






const initialValues={
    email:"",
    password:""
}
export function OfficerSignIn() {
    
    const [signin,data]=useCreateofficerSignInMutation()
    const [show, setShow] = useState(false);
    const [alert,setAlert]=useState("")  
     
    const navigate=useNavigate()
   
    
   
   
   
    
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues: initialValues,
        validationSchema:officerSignInSchema, 

        onSubmit: async (values,action)=>{           
           Object.keys(values).forEach((key)=>{           
            values[key]=values[key].trim()          
           })  

          try{  
           
            const response=await signin(values) 
            if (response.data){
                             
               setShow(false)
              const token=response.data  
            try{
            const d= await AsyncLocalStorage.setItem('officer', JSON.stringify(token))
            }
            catch (error){
                console.log(error)
            }                   
            //   localStorage.setItem("officer",JSON.stringify(token)) 
            setTimeout(()=>{
                navigate('/officer/dashboard') 
            },[1000])
            
                        
               
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
                        <Nav.Link as={NavLink} onClick={closeTab} to="/officer/check_forgetpassword">Forgot Password ?</Nav.Link>
                    </Button>
                    <br /><br />

                  
                </Form>
          

          

        </>
    )
}