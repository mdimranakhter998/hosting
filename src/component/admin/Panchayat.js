import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Navbar_admin } from './Navbarr';
import { Sidebar } from './Sidebar';
import { panchayatSchema } from '../validation/admin/validation';
import { useFormik } from 'formik';
import { useEffect, useState, useRef,useMemo } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useNavigate,useParams } from 'react-router-dom';
import { useCreatepanchayatMutation } from '../../services/admin/panchayatService';
import { useListblockQuery } from '../../services/admin/blockService';
import Spinner from 'react-bootstrap/Spinner';
const initialValues={
    panchayat:'',
    block:'',   
}

export function Panchayat() {
    const [createPanchayat,createPanchayatFlag]=useCreatepanchayatMutation()
    const {data:blockList,isSuccess,isLoading}=useListblockQuery()
    const[successShow,setSuccessShow]=useState(false)
    const[message,setMessage]=useState("")
    const[errorShow,setErrorShow]=useState(false)
    const [error,setError]=useState([])
    const navigate=useNavigate()
    const editParams=useParams()

    console.log(createPanchayat)
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues:initialValues,
        validationSchema:panchayatSchema,       
        onSubmit:async (values,action) => {       
        Object.keys(values).map(e=>values[e]=values[e].toLowerCase())  
       
        try{          
            const response= await createPanchayat(values)          
                              
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

    console.log(values)
    return (
      
        <>
   


{isLoading?(<></>):(
    <>
    <Navbar_admin />
<Container >
    <hr />
    <h5>Add panchayat</h5>
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
                    <Form.Group as={Col} controlId="formBasicpanchayat">
                        <Form.Label>Panchayat Name</Form.Label>
                        <Form.Control type="text"  name="panchayat" value={values.panchayat} onChange={handleChange}  onBlur={handleBlur} placeholder="" />
                        {errors.panchayat && touched.panchayat?(<p className="text-danger">{errors.panchayat}</p>):null}
                    </Form.Group>

                   

                </Row>
                <Row>
                <Form.Group as={Col} controlId="formBasicbdist">
                        <Form.Label>block</Form.Label>
                        <Form.Select name="block" value={values.block}  onChange={handleChange} onBlur={handleBlur} aria-label="Default select example" >
                            <option>---select---</option> 
                            {blockList.map(e=>
                                <option value={e.block}>{e.block}</option>
                                )}                                 
                            
                           

                        </Form.Select>
                    </Form.Group>
                </Row>
              

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