import { useEffect, useMemo, useState } from "react"
import { useNavigate,Navigate } from 'react-router-dom';
import AsyncLocalStorage from '@createnextapp/async-local-storage'
import { replace } from "formik";
import { officerSignUpApi } from "../services/officer/officerSignUpService";



export function ProtectedOfficer(props){
  const [off,setOff]=useState(props.officer)
  const navigate=useNavigate()
  
  let Cmp=props.cmp
  
  // const imran=async ()=>{
  //   let data=await AsyncLocalStorage.getItem('officer')
  //   console.log(data)
  //   setOff(data)
  // }
  // imran()
  
    
   console.log(off)
      // if (off && Object.keys(off).length===0){
      //   console.log(off)
      //    navigate("/officer") 

      // }    
  
  


     


  return (
    <>
   
   {/* <Cmp/> */}
 
    
   {off && Object.keys(off).length!==0?(
    <Cmp/>
   ):<Navigate to="/officer" />}  

    </>
)
 
  
   
   
}