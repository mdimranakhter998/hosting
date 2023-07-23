import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Navbar_admin } from './Navbarr';
import { Sidebar } from './Sidebar';
import { useCreatesectionMutation, } from '../../services/admin/sectionService';
import { useListsubdivisionQuery } from '../../services/admin/subDivisionService';
import { sectionSchema } from '../validation/admin/validation';
import { useFormik } from 'formik';
import { useEffect, useState, useRef,useMemo } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useNavigate,useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const initialValues={
    section:'',
    subdivision:'',   
}

export function Section() {
    const [createSection,createSectionFlag]=useCreatesectionMutation()
    const {data:subdivisionList,isSuccess,isLoading}=useListsubdivisionQuery()
    const[successShow,setSuccessShow]=useState(false)
    const[message,setMessage]=useState("")
    const[errorShow,setErrorShow]=useState(false)
    const [error,setError]=useState([])
    const navigate=useNavigate()
    const editParams=useParams()

    console.log(createSection)
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues:initialValues,
        validationSchema:sectionSchema,       
        onSubmit:async (values,action) => {       
        Object.keys(values).map(e=>values[e]=values[e].toLowerCase())  
       
        try{          
            const response= await createSection(values)                          
            if (response.data){              
                setErrorShow(false)             
                setSuccessShow(true)
                setMessage("you have add successfully")
                action.resetForm()           
                setTimeout(()=>{
                    setSuccessShow(false)
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
         
{isLoading?(<>
    </>
    ):(
        <>
          <Navbar_admin />
<Container >
    <hr />
    <h5>Add Section</h5>
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
                        <Form.Label>Section Name</Form.Label>
                        <Form.Control type="text"  name="section" value={values.section} onChange={handleChange}  onBlur={handleBlur} placeholder="" />
                        {errors.section && touched.section?(<p className="text-danger">{errors.section}</p>):null}
                    </Form.Group>

                   

                </Row>
                <Row>
                <Form.Group as={Col} controlId="formBasicbdist">
                        <Form.Label>Subdivision</Form.Label>
                        <Form.Select name="subdivision" value={values.subdivision}  onChange={handleChange} onBlur={handleBlur} aria-label="Default select example" >
                            <option>---select---</option> 
                            {subdivisionList.map(e=>
                                <option value={e.subdivision}>{e.subdivision}</option>
                                )}                                      
                            
                           

                        </Form.Select>
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