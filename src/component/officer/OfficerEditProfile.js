import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Navbar_admin } from '../admin/Navbarr';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { NavLink,useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useRef,useMemo, useState} from 'react'
import {useFormik} from 'formik'
import {editProfileSchema } from '../validation/applicant/validation';
import { useListadminGetUserQuery } from '../../services/officer/officerSignUpService';
import { useUpdateofficerSignUpMutation } from '../../services/officer/officerSignUpService';
import Alert from 'react-bootstrap/Alert';
import { OfficerNavbar } from './OfficerNavbar';
 import Image from 'react-bootstrap/Image'
const initialValues= {
  id:'',
  name: '',
  email: '',
  phone:'',
  photo:''

}
export function OfficerEditProfile() {
  const {refresh,access=null}=localStorage.getItem("officer")?JSON.parse(localStorage.getItem("officer")):{}
  const {data:getUser,isSuccess,isLoading}=useListadminGetUserQuery(access)
  const[successShow,setSuccessShow]=useState(false)  
  const[message,setMessage]=useState("")
  const[errorShow,setErrorShow]=useState(false)
  const [error,setError]=useState([])
  const inputRef=useRef()
  const navigate=useNavigate() 
  const [preview,setPreview]=useState(null)
  const [updateAdmin,updateAdminFlag]=useUpdateofficerSignUpMutation()
 

  const {values,errors,handleChange,handleSubmit,touched,handleBlur,setFieldValue}=useFormik({
   
    initialValues: initialValues,
    validationSchema:editProfileSchema,    
    onSubmit:async (values,action)=>{    
        const form = new FormData()
        console.log(values)
        form.append('name',values.name)
        form.append('email',values.email)   
        form.append('phone',values.phone)
        if (values.photo){
          form.append('photo',values.photo) 
        }      
        form.append('id',values.id)
        try{   
            console.log(form.get("photo"))
            const response= await updateAdmin(form)  
            console.log(response)                           
            if (response.data){            
                setErrorShow(false)             
                setSuccessShow(true)
                setMessage("you have update successfully")               
                      
                setTimeout(()=>{
                    setSuccessShow(false)
                    action.resetForm()                       
                    navigate('/officer/dashboard')
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
       

        
    }

})




const handleClick = () => {
    inputRef.current.click();   
   
}
  

  

const get=useMemo(()=>{
if (getUser){ 
    console.log(getUser)
    initialValues.id=getUser.id.toString()
    initialValues.name=getUser.name
    initialValues.email=getUser.email
    initialValues.phone=getUser.phone   
    setPreview(getUser.photo)
}
},[isSuccess,getUser])


if ('File' in window && values.photo instanceof File){   
  const reader=new FileReader()  
  reader.readAsDataURL(values.photo)
  reader.onload=()=>{ 
  setPreview(reader.result)
  }
}

  return (

    <>
      <OfficerNavbar />

      <Alert show={successShow} variant="success">{message}</Alert> 
      <Container >
      <Alert show={errorShow} variant="danger"><ul>{error.map(error=><li>{error}</li>)}</ul></Alert>  
        <br />
        <br />
        <br />
        

       
            
        <Image
          style={{ float: 'left'}}
          className="user_pic"
          src={preview}         
          alt="logo"       
          roundedCircle         
        > 
        </Image><span> <Button    onClick={handleClick} variant="">➕</Button>
        </span>
     
       
       

       
        





       




        <Form className='common_css'  style={{paddingLeft:'7rem'}} onSubmit={handleSubmit} >            
          <h5>Edit User Profile</h5>
          <br />



        
             
              

               
                  <Form.Group  className="mb-3" controlId="formGridemail">
                  <Form.Label>Name</Form.Label>
                    <Form.Control style={{ width: '55%' }} name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} size="sm" type="text" placeholder="" />
                    {errors.name && touched.name?(<p className='text-danger'>{errors.name}</p>):null}
                  </Form.Group>
              
               

              



                  <Form.Group className="mb-3" controlId="formGridemail">
                  <Form.Label>Email</Form.Label>
                    <Form.Control style={{ width: '55%' }}  name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} size="sm" type="email" placeholder="" />
                    {errors.email && touched.email?(<p className='text-danger'>{errors.email}</p>):null}
                  </Form.Group>
              
             
               

              

                  <Form.Group className="mb-3" controlId="formGridemail">
                  <Form.Label>Phone</Form.Label>
                    <Form.Control style={{ width: '55%' }} size="sm"  name="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="" />
                    {errors.phone && touched.phone ?(<p className='text-danger'>{errors.phone}</p>):null}
                  </Form.Group>
               
            <Form.Group className="mb-3" controlId="formGridAdd">            
             <Form.Control accept='image/*' ref={inputRef} name="photo"  onChange={(event) => {setFieldValue("photo", event.target.files[0])}}  style={{ width: '15%',display:'none' }} size="sm" type="file" />        
          
          </Form.Group>


         


          


        


          <Button  type="submit" variant="primary" size="sm">
              Submit
            </Button>

        </Form>







      </Container>
    

    </>
  )
}