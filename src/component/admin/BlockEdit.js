import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Navbar_admin } from './Navbarr';
import { Sidebar } from './Sidebar';
import { useCreateblockMutation, useUpdateblockMutation,useGetByIdblockQuery} from '../../services/admin/blockService'
import { blockSchema } from '../validation/admin/validation';
import { useFormik } from 'formik';
import { useEffect, useState, useRef,useMemo } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useNavigate,useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { useListdistrictQuery } from '../../services/admin/districtService';

const initialValues={
    block:'',
    district:'',   
}

export function BlockEdit() {
   const[successShow,setSuccessShow]=useState(false)
   const {data:districtList,isLoading:districtisLoading}=useListdistrictQuery()
    const[message,setMessage]=useState("")
    const[errorShow,setErrorShow]=useState(false)
    const [error,setError]=useState([])
    const navigate=useNavigate()
    const editParams=useParams()  
    const {data:getBlockId,isLoading,isSuccess}= useGetByIdblockQuery(editParams.id)
    const [updateBlock,updateBlockFlag]=useUpdateblockMutation()
   
console.log(getBlockId)
   
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues:initialValues,
        validationSchema:blockSchema,       
        onSubmit:async (values,action) => {       
        Object.keys(values).map(e=>values[e]=values[e].toLowerCase())  
       
        try{          
            const response= await updateBlock(values)                          
            if (response.data){              
                setErrorShow(false)             
                setSuccessShow(true)
                setMessage("you have update successfully")
                      
                setTimeout(()=>{
                    setSuccessShow(false)
                    action.resetForm()     
                    navigate('/admin/block_d')
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
        let tm=getBlockId.map(e=>e)
        // console.log(tm)
        tm.forEach((e,values)=>{
            initialValues.id=e.id.toString()
            initialValues.block=e.block
            initialValues.district=e.district
            values=e
        })  
    }
    },[isSuccess])
    
    console.log(values) 
    return (
      
        <>
   


{isLoading?(
<>
           
            
</>
):(
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