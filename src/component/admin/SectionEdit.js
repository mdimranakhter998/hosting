import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Navbar_admin } from './Navbarr';
import { Sidebar } from './Sidebar';
import { useFormik } from 'formik';
import { useEffect, useState, useRef,useMemo } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useNavigate,useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { useUpdatesectionMutation,useGetByIdsectionQuery } from '../../services/admin/sectionService';
import { useListsubdivisionQuery } from '../../services/admin/subDivisionService';
import { sectionSchema } from '../validation/admin/validation';

const initialValues={
    section:'',
    subdivision:'',   
}

export function SectionEdit() {
   const[successShow,setSuccessShow]=useState(false)
   const {data:subdivisionList,isLoading:subdivisionisLoading}=useListsubdivisionQuery()
    const[message,setMessage]=useState("")
    const[errorShow,setErrorShow]=useState(false)
    const [error,setError]=useState([])
    const navigate=useNavigate()
    const editParams=useParams()  
    const {data:getSectionId,isLoading,isSuccess}=useGetByIdsectionQuery(editParams.id)
    const [updateSection,updateSectionFlag]=useUpdatesectionMutation()
   

   
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues:initialValues,
        validationSchema:sectionSchema,            
        onSubmit:async (values,action) => {       
        Object.keys(values).map(e=>values[e]=values[e].toLowerCase())  
       
        try{          
            const response= await updateSection(values)
            console.log("imran") 
            console.log(response)                          
            if (response.data){              
                setErrorShow(false)             
                setSuccessShow(true)
                setMessage("you have update successfully")
                      
                setTimeout(()=>{
                    setSuccessShow(false)
                    action.resetForm()     
                    navigate('/admin/section_d')
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

const get=useMemo(()=>{
        if (isSuccess){
        let tm=getSectionId.map(e=>e)
        tm.forEach((e,values)=>{
            initialValues.id=e.id.toString()
            initialValues.section=e.section
            initialValues.subdivision=e.subdivision.toString()
            values=e
        })  
    }
    },[isSuccess])
    return (
      
        <>
   


{isLoading?(<></>):(
    <>
    <Navbar_admin />
<Container >
    <hr />
    <h5>Add section</h5>
    <hr />
    <br />

    <Row style={{ display: 'flex' }}>


        <Col sm={2}>
            <Sidebar />
        </Col>



        <Col sm={10}>
        <Alert show={successShow} variant="success">{message}</Alert>
            <Form className='common_css' onSubmit={handleSubmit} >
                <Row className="mb-3">
                <Alert show={errorShow} variant="danger"><ul>{error.map(error=><li>{error}</li>)}</ul></Alert>  
                    <Form.Group as={Col} controlId="formBasicblock">
                        <Form.Label>section Name</Form.Label>
                        <Form.Control type="text"  name="section" value={values.section} onChange={handleChange}  onBlur={handleBlur} placeholder="" />
                        {errors.section && touched.section?(<p className="text-danger">{errors.section}</p>):null}
                    </Form.Group>

                   

                </Row>
                <Row>
                <Form.Group as={Col} controlId="formBasicbdist">
                        <Form.Label>subdivision</Form.Label>
                        <Form.Select name="subdivision" value={values.subdivision}  onChange={handleChange} onBlur={handleBlur} aria-label="Default select example" >
                            <option>---select---</option> 
                            {subdivisionList.map(e=>
                                <option value={e.subdivision}>{e.subdivision}</option>
                                )}       
                            
                        </Form.Select>
                        {errors.subdivision && touched.subdivision?(<p className="text-danger">{errors.section}</p>):null}
                    </Form.Group>
                </Row>
                <br/>

                <Button type="submit"   name="save" variant="primary" className="m-1" size="sm">
                    Save 
                </Button>
            </Form>
        </Col>
    </Row>
</Container>
</>
 )}  
               
        </>
       
    )
}