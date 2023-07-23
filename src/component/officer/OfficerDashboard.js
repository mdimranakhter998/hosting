import { OfficerNavbar } from "./OfficerNavbar"
import AsyncLocalStorage from '@createnextapp/async-local-storage'
import { useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { ApplicationVerify } from "./ApplicationVerify"
export function OfficerDashboard(){
  
    return(
        <>
        <OfficerNavbar/>
        <ApplicationVerify/>
        </>
    )
}