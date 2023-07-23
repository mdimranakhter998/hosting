import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Navbar_r } from '../component/Navbar';
import Alert from 'react-bootstrap/Alert';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import {useCreateapplicantSignUpMutation} from '../services/applicant/applicantSignUpService'
import {useRef,useState} from 'react'
import swal from 'sweetalert'
import {useFormik} from 'formik'
import { applicantSignUpSchema } from './validation/applicant/validation';
import { useNavigate } from 'react-router-dom';

const initialValues= {
    name: '',
    email: '',
    phone:'',
    password:'',
    confirm_password:''
  }
export function Sign_Up() {
    const navigate=useNavigate()
    const [signup,data] =useCreateapplicantSignUpMutation() 
    const inputRef=useRef(0)   
    const [show, setShow] = useState(false);
    const [error,setError]=useState([])
    const[successShow,setSuccessShow]=useState(false)
    const[message,setMessage]=useState("")
    
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues: initialValues,
        validationSchema:applicantSignUpSchema,
       
        
        onSubmit:async (values,action)=>{
           Object.keys(values).forEach((key)=>{           
            values[key]=values[key].trim()
           })
           
        const response=await signup(values)
        console.log(response)
        if (response.data){                  
            setShow(false)             
            setSuccessShow(true)
            setMessage("you have SignUp successfully")
            action.resetForm()           
            setTimeout(()=>{
                setSuccessShow(false)
                navigate("/sign_in")
            },1000)   
             
        }  
        else if (response.error.status===406){                  
            const e=Object.values(response.error.data)                               
            setShow(true) 
            const currentError=[]
            e.map(e=>{                  
                currentError.push(...e)                            
            })
            setError(currentError)       
           
        }
       
    },
    
    })
    

   
                   
    
    
    return (

        <>
                 <Navbar_r />

            <Container>
                
            <br />
                <br />
                <br />
               
                <Form className='common_css' onSubmit={handleSubmit}>
                    <Alert show={show} variant='danger'><ul>{error.map(error=><li>{error}</li>)}</ul></Alert>  
                <h5>Register With Us</h5>
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicEmail" ref={inputRef}>
                        <Form.Label>Applicant's Name <span className='text-danger'>*</span></Form.Label>
                        <Form.Control type="text" name="name"  value={values.name} placeholder="" onChange={handleChange} onBlur={handleBlur}/>
                        {errors.name && touched.name?(<p className='text-danger'>{errors.name}</p>):null}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={values.email} placeholder="" onChange={handleChange} onBlur={handleBlur} />
                        {errors.email && touched.email?(<p className='text-danger'>{errors.email}</p>):null}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mobile No <span className='text-danger'>*</span></Form.Label>
                        <Form.Control type="text" name="phone" value={values.phone} placeholder="" onChange={handleChange} onBlur={handleBlur}/>
                        {errors.phone && touched.phone ?(<p className='text-danger'>{errors.phone}</p>):null}
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password <span className='text-danger'>*</span></Form.Label>
                        <Form.Control type="password" name="password" value={values.password} placeholder="" onChange={handleChange} onBlur={handleBlur}/>
                        {errors.password && touched.password ?(<p className='text-danger'>{errors.password}</p>):null}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Re-enter Password <span className='text-danger'>*</span></Form.Label>
                        <Form.Control type="password" name="confirm_password" value={values.confirm_password} onChange={handleChange}  onBlur={handleBlur} placeholder="" />
                        {errors.confirm_password && touched.confirm_password ?(<p className='text-danger'>{errors.confirm_password}</p>):null}
                    </Form.Group>

                    <Button type="submit"   variant="primary" className="m-1" size="sm">
                        Register
                    </Button>
                </Form>
                <Alert show={successShow} variant="success">{message}</Alert>
            </Container>
          


        </>
    )
}