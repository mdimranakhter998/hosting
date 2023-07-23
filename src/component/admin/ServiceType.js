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
import { useListconnectiontypeQuery } from '../../services/admin/connectionTypeService';
import { useListtensiontypeQuery } from '../../services/admin/tensionTypeService';
import { useListtariffQuery } from '../../services/admin/tariffService';
import { useListphaseQuery } from '../../services/admin/phaseService';
import { useListloadQuery } from '../../services/admin/loadService';
import { useCreateserviceMutation } from '../../services/admin/service';

const initialValues={
    connection_type:'',
    tension_type:'',
    tariff:'',
    phase:'',
    load:''   
}

export function ServiceType() {
   const[successShow,setSuccessShow]=useState(false)  
    const[message,setMessage]=useState("")
    const[errorShow,setErrorShow]=useState(false)
    const [error,setError]=useState([])
    const {data:tensionList}=useListtensiontypeQuery()
    const {data:tariffList}=useListtariffQuery()
    const {data:phaseList}=useListphaseQuery()
    const {data:loadList}=useListloadQuery()
    const [createService]=useCreateserviceMutation()
    const {data:connectionList,isLoading}=useListconnectiontypeQuery()
   

   

   
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues:initialValues,
        // validationSchema:sectionSchema,            
        onSubmit:async (values,action) => {      
        try{          
            const response= await createService(values)           
            console.log(response)                          
            if (response.data){              
                setErrorShow(false)             
                setSuccessShow(true)
                setMessage("you have Created successfully")
                      
                setTimeout(()=>{
                    setSuccessShow(false)
                    action.resetForm()
                   
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
   


{isLoading?(
 <>
 
 </>
    ):(
        <>
        <Navbar_admin />

<Container >
    <hr />
    <h5>Add Service Type</h5>
    <hr />
    <br />

    <Row style={{ display: 'flex' }}>


        <Col sm={2}>
            <Sidebar />
        </Col>



        <Col sm={10}>
        <Alert show={successShow} variant="success">{message}</Alert>
            <Form className='common_css' onSubmit={handleSubmit} >
            <Alert show={errorShow} variant="danger"><ul>{error.map(error=><li>{error}</li>)}</ul></Alert>  
                
                <Row>
                <Form.Group as={Col} controlId="formBasicbdist">
                        <Form.Label>Connection Type</Form.Label>
                        <Form.Select name="connection_type" value={values.connection_type}  onChange={handleChange} onBlur={handleBlur} aria-label="Default select example" >
                            <option>---select---</option> 
                            {connectionList.map(e=>
                                <option value={e.connection_type}>{e.connection_type}</option>
                                )}       
                            
                        </Form.Select>
                       
                    </Form.Group>
                </Row>
                <br/>
                <Row>
                <Form.Group as={Col} controlId="formBasicbdist">
                        <Form.Label>Tension Type</Form.Label>
                        <Form.Select name="tension_type" value={values.tension_type}  onChange={handleChange} onBlur={handleBlur} aria-label="Default select example" >
                            <option>---select---</option> 
                            {tensionList.map(e=>
                                <option value={e.tension_type}>{e.tension_type}</option>
                                )}       
                            
                        </Form.Select>
                       
                    </Form.Group>
                </Row>
                <br/>
                <Row>
                <Form.Group as={Col} controlId="formBasicbdist">
                        <Form.Label>Tariff</Form.Label>
                        <Form.Select name="tariff" value={values.tariff}  onChange={handleChange} onBlur={handleBlur} aria-label="Default select example" >
                            <option>---select---</option> 
                            {tariffList.map(e=>
                                <option value={e.tariff}>{e.tariff}</option>
                                )}       
                            
                        </Form.Select>
                       
                    </Form.Group>
                </Row>
                <br/>
                <Row>
                <Form.Group as={Col} controlId="formBasicbdist">
                        <Form.Label>Phase</Form.Label>
                        <Form.Select name="phase" value={values.phase}  onChange={handleChange} onBlur={handleBlur} aria-label="Default select example" >
                            <option>---select---</option> 
                            {phaseList.map(e=>
                                <option value={e.phase}>{e.phase}</option>
                                )}       
                            
                        </Form.Select>
                       
                    </Form.Group>
                </Row>
                <br/>
                <Row>
                <Form.Group as={Col} controlId="formBasicbdist">
                        <Form.Label>Load</Form.Label>
                        <Form.Select name="load" value={values.load}  onChange={handleChange} onBlur={handleBlur} aria-label="Default select example" >
                            <option>---select---</option> 
                            {loadList.map(e=>
                                <option value={e.load}>{e.load}</option>
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