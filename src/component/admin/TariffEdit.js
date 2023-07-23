import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Navbar_admin } from './Navbarr';
import { Sidebar } from './Sidebar';
import { useUpdatetariffMutation,useGetByIdtariffQuery } from '../../services/admin/tariffService';
import { tariffSchema } from '../validation/admin/validation';
import { useFormik } from 'formik';
import { useEffect, useState, useRef,useMemo } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useNavigate,useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';


const initialValues={
    tariff:''  
};

export function TariffEdit() {
   const[successShow,setSuccessShow]=useState(false)  
    const[message,setMessage]=useState("")
    const[errorShow,setErrorShow]=useState(false)
    const [error,setError]=useState([])
    const navigate=useNavigate()
    const editParams=useParams()  
    const {data:getTariffId,isLoading,isSuccess}= useGetByIdtariffQuery(editParams.id)
    const [updateTariff,updateTariffFlag]=useUpdatetariffMutation()
   

   
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues:initialValues,
        // validationSchema:connectionTypeSchema,       
        onSubmit:async (values,action) => {      
        try{          
            const response= await updateTariff(values)                                    
            if (response.data){              
                setErrorShow(false)             
                setSuccessShow(true)
                setMessage("you have update successfully")
                      
                setTimeout(()=>{
                    setSuccessShow(false)
                    action.resetForm()     
                    navigate('/admin/tariff_d')
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
        let tm=getTariffId.map(e=>e)
      
        tm.forEach((e,values)=>{
            initialValues.id=e.id
            initialValues.tariff=e.tariff
           
            values=e
           
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
    <h5>Add Tariff</h5>
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
                                    <Form.Label>Tariff</Form.Label>
                                    <Form.Select name="tariff" value={values.tariff}  onChange={handleChange} onBlur={handleBlur} aria-label="Default select example" >
                                      
                                        <option>---select---</option>
                                        <option value="HTS-I">HTS-I</option>
                                        <option value="HTS-II">HTS-II</option>                                       
                                        <option value="HTS-III">HTS-III</option>
                                        <option value="HTS-IV">HTS-IV</option>
                                        <option value="HTSS">HTSS</option>
                                        <option value="LTIS1D">LTIS1D</option>                                       
                                        <option value="LTIS2D">LTIS2D</option>
                                        <option value="NDS1D">NDS1D</option>
                                        <option value="LTEV">LTEV</option>
                                        <option value="KJ">KJ</option>                                       
                                        <option value="DS1D">DS1D</option>
                                        <option value="DS3D">HDS3D</option>


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