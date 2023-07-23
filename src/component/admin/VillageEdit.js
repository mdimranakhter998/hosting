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
import { useUpdatevillageMutation,useGetByIdvillageQuery } from '../../services/admin/villageService';
import { useListpanchayatQuery } from '../../services/admin/panchayatService';
import { villageSchema } from '../validation/admin/validation';

const initialValues={
    village:'',
    panchayat:'',   
}

export function VillageEdit() {
   const[successShow,setSuccessShow]=useState(false)
   const {data:panchayatList,isLoading:panchayatisLoading}=useListpanchayatQuery()
    const[message,setMessage]=useState("")
    const[errorShow,setErrorShow]=useState(false)
    const [error,setError]=useState([])
    const navigate=useNavigate()
    const editParams=useParams()  
    const {data:getVillageId,isLoading,isSuccess}= useGetByIdvillageQuery(editParams.id)
    const [updateVillage,updateVillageFlag]=useUpdatevillageMutation()
   
console.log(getVillageId)
   
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues:initialValues,
        validationSchema:villageSchema,       
        onSubmit:async (values,action) => {       
        Object.keys(values).map(e=>values[e]=values[e].toLowerCase())  
       
        try{          
            const response= await updateVillage(values)                          
            if (response.data){              
                setErrorShow(false)             
                setSuccessShow(true)
                setMessage("you have update successfully")
                      
                setTimeout(()=>{
                    setSuccessShow(false)
                    action.resetForm()     
                    navigate('/admin/village_d')
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
const get=useMemo(()=>{
        if (isSuccess){
        let tm=getVillageId.map(e=>e)
        tm.forEach((e,values)=>{
            initialValues.id=e.id.toString()
            initialValues.village=e.village
            initialValues.panchayat=e.panchayat
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
    <h5>Add Village</h5>
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
                        <Form.Label>Village Name</Form.Label>
                        <Form.Control type="text"  name="village" value={values.village} onChange={handleChange}  onBlur={handleBlur} placeholder="" />
                        {errors.village && touched.village?(<p className="text-danger">{errors.village}</p>):null}
                    </Form.Group>

                   

                </Row>
                <Row>
                <Form.Group as={Col} controlId="formBasicbdist">
                        <Form.Label>Panchayat</Form.Label>
                        <Form.Select name="panchayat" value={values.panchayat}  onChange={handleChange} onBlur={handleBlur} aria-label="Default select example" >
                            <option>---select---</option> 
                            {panchayatList.map(e=>
                                <option value={e.panchayat}>{e.panchayat}</option>
                                )}       
                            
                        </Form.Select>
                        {errors.panchayat && touched.panchayat?(<p className="text-danger">{errors.village}</p>):null}
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