import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Navbar_admin } from './Navbarr';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import {useCreateofficerSignUpMutation}  from '../../services/officer/officerSignUpService';
import {useRef,useState} from 'react'
import swal from 'sweetalert'
import {useFormik} from 'formik'
import {  officerSignUpSchema} from '../validation/admin/validation';
import { useListdivisionQuery } from '../../services/admin/divisionService';
import { useGetByIdsubdivisionQuery } from '../../services/admin/subDivisionService';
import { useGetByIdsectionQuery } from '../../services/admin/sectionService';


const initialValues= {
    name: '',
    email: '',
    phone:'',
    designation:'',
    division:"",
    subdivision:"",
    section:"",
    password:'',
    confirm_password:'',
    
  }
export function OfficerSignUp() {
    const[divisionid,setDivisionid]=useState(null) 
    const[subdivisionid,setSubdivisionid]=useState(null)
    const division=useListdivisionQuery()
    const subdivision=useGetByIdsubdivisionQuery(divisionid)
    const section=useGetByIdsectionQuery(subdivisionid)
    const [signup,data] =useCreateofficerSignUpMutation()     
    const [show, setShow] = useState(false);
    const [error,setError]=useState([])
    const[successShow,setSuccessShow]=useState(false)
    const[message,setMessage]=useState("")
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues: initialValues,
        validationSchema: officerSignUpSchema,        
        onSubmit:async (values,action)=>{
           Object.keys(values).forEach((key)=>{  
            if (values[key]!=true && values[key]!=false){         
            values[key]=values[key].trim()
            }
           })
            
        values.is_staff=true
        const response=await signup(values)
        console.log(response)
        if (response.data){           
            setShow(false)             
            setSuccessShow(true)
            setMessage("you have SignUp successfully")
            action.resetForm()           
            setTimeout(()=>{
                setSuccessShow(false)
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
                 <Navbar_admin />

            <Container>
                
            <br />
                <br />
                <br />
             
                <Form className='common_css' onSubmit={handleSubmit}>
                    <Alert show={show} variant='danger'><ul>{error.map(error=><li>{error}</li>)}</ul></Alert>  
                <h5>Register With Us</h5>
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Name <span className='text-danger'>*</span></Form.Label>
                        <Form.Control type="text" name="name"  value={values.name} placeholder="" onChange={handleChange} onBlur={handleBlur}/>
                        {errors.name && touched.name?(<p className='text-danger'>{errors.name}</p>):null}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email <span className='text-danger'>*</span></Form.Label>
                        <Form.Control type="email" name="email" value={values.email} placeholder="" onChange={handleChange} onBlur={handleBlur} />
                        {errors.email && touched.email?(<p className='text-danger'>{errors.email}</p>):null}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mobile No <span className='text-danger'>*</span></Form.Label>
                        <Form.Control type="text" name="phone" value={values.phone} placeholder="" onChange={handleChange} onBlur={handleBlur}/>
                        {errors.phone && touched.phone ?(<p className='text-danger'>{errors.phone}</p>):null}
                    </Form.Group>
                   
                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Designation</Form.Label>
                            <Form.Select name="designation" value={values.designation} onChange={handleChange} onBlur={handleBlur}>
                                <option>---select---</option>
                                <option value="officer">officer</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Division<span className="text-danger">*</span></Form.Label>
                            <Form.Select aria-label="Default select example" name="division"  value={values.division}  onChange={handleChange} onBlur={handleBlur} size="sm">
                                <option>---select---</option>
                                {division.data?division.data.map(e=>(
                                 <option value={e.division} onClick={()=>setDivisionid(e.id)}>{e.division}</option>
                              )):null}  
                            </Form.Select>
                            {errors.division && touched.division ?(<p className='text-danger'>{errors.division}</p>):null}
                        </Form.Group>
                      
                       
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col}>
                            <Form.Label>Sub Division<span className="text-danger">*</span></Form.Label>
                            <Form.Select aria-label="Default select example" name="subdivision" value={values.subdivision}  onChange={handleChange} onBlur={handleBlur}  size="sm">
                                <option>---select---</option>
                                {subdivision.data?subdivision.data.map(e=>(
                                  
                                 <option value={e.subdivision} onClick={()=>setSubdivisionid(e.id)}>{e.subdivision}</option>
                              )):null}     
                            </Form.Select>
                            {errors.subdivision && touched.subdivision ?(<p className='text-danger'>{errors.subdivision}</p>):null}
                            </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Section<span className="text-danger">*</span></Form.Label>
                            <Form.Select aria-label="Default select example" name="section" value={values.section}  onChange={handleChange} onBlur={handleBlur} size="sm">
                                <option>---select---</option>
                                {section.data?section.data.map(e=>(
                                 <option value={e.section} >{e.section}</option>
                              )):null}     

                            </Form.Select>
                            {errors.section && touched.section ?(<p className='text-danger'>{errors.section}</p>):null}
                        </Form.Group>
                    </Row>
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