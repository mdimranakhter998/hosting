import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Navbar_admin } from './Navbarr';
import { Sidebar } from './Sidebar';
import { useCreateblockMutation } from '../../services/admin/blockService'
import { blockSchema } from '../validation/admin/validation';
import { useFormik } from 'formik';
import { useEffect, useState, useRef,useMemo } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useNavigate,useParams } from 'react-router-dom';
import { useListdistrictQuery } from '../../services/admin/districtService';
import Spinner from 'react-bootstrap/Spinner';
const initialValues={
    block:'',
    district:'',   
}

export function Block() {
    const [createBlock,createBlockFlag]=useCreateblockMutation()
    const {data:districtList,isSuccess,isLoading}=useListdistrictQuery()
    const[successShow,setSuccessShow]=useState(false)
    const[message,setMessage]=useState("")
    const[errorShow,setErrorShow]=useState(false)
    const [error,setError]=useState([])
    const navigate=useNavigate()
    const editParams=useParams()

    console.log(createBlock)
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues:initialValues,
        validationSchema:blockSchema,       
        onSubmit:async (values,action) => {       
        Object.keys(values).map(e=>values[e]=values[e].toLowerCase())  
       
        try{          
            const response= await createBlock(values)                          
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
    <h5>Add Block</h5>
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
                        <Form.Label>Block Name</Form.Label>
                        <Form.Control type="text"  name="block" value={values.block} onChange={handleChange}  onBlur={handleBlur} placeholder="" />
                        {errors.block && touched.block?(<p className="text-danger">{errors.block}</p>):null}
                    </Form.Group>

                   

                </Row>
                <Row>
                <Form.Group as={Col} controlId="formBasicbdist">
                        <Form.Label>District</Form.Label>
                        <Form.Select name="district" value={values.district}  onChange={handleChange} onBlur={handleBlur} aria-label="Default select example" >
                            <option>---select---</option> 
                            {districtList.map(e=>
                                <option value={e.district}>{e.district}</option>
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