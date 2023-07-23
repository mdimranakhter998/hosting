import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Navbar_admin } from './Navbarr';
import { Sidebar } from './Sidebar';
import { useUpdateconnectiontypeMutation,useGetByIdconnectiontypeQuery } from '../../services/admin/connectionTypeService';
import { connectionTypeSchema } from '../validation/admin/validation';
import { useFormik } from 'formik';
import { useEffect, useState, useRef,useMemo } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useNavigate,useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';


const initialValues={
    connection_type:''  
};

export function ConnectionTypeEdit() {
   const[successShow,setSuccessShow]=useState(false)  
    const[message,setMessage]=useState("")
    const[errorShow,setErrorShow]=useState(false)
    const [error,setError]=useState([])
    const navigate=useNavigate()
    const editParams=useParams()  
    const {data:getConnectionTypeId,isLoading,isSuccess}= useGetByIdconnectiontypeQuery(editParams.id)
    const [updateConnectionType,updateConnectionTypeFlag]=useUpdateconnectiontypeMutation()
   

   
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues:initialValues,
        // validationSchema:connectionTypeSchema,       
        onSubmit:async (values,action) => {      
        try{          
            const response= await updateConnectionType(values) 
            console.log(response)                         
            if (response.data){              
                setErrorShow(false)             
                setSuccessShow(true)
                setMessage("you have update successfully")
                      
                setTimeout(()=>{
                    setSuccessShow(false)
                    action.resetForm()     
                    navigate('/admin/conn_type_d')
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
        let tm=getConnectionTypeId.map(e=>e)
      
        tm.forEach((e,values)=>{
            initialValues.id=e.id
            initialValues.connection_type=e.connection_type
           
            values=e
            console.log(e,values)
        })  
    }
    },[isSuccess])
    

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
                    
                   
                <Form.Group as={Col} controlId="formBasicbdist">
                                    <Form.Label>Connection Type</Form.Label>
                                    <Form.Select name="connection_type" value={values.connection_type}  onChange={handleChange} onBlur={handleBlur} aria-label="Default select example" >
                                      
                                        <option>---select---</option>
                                        <option value="Domestic">Domestic</option>
                                        <option value="Commercial">Commercial</option>                                       
                                        <option value="Industrial">Industrial</option>
                                        <option value="Agriculture">Agriculture</option>


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