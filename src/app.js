import { Route, Routes } from 'react-router-dom';
import { About } from './component/About';

import { RTI } from './component/RTI';
import { Home } from './component/Home';
import { Sign_In } from './component/Sign_In';
import { New_conn } from './component/New_conn';
import { New_conn_form } from './component/New_conn_form';
import { Sign_Up } from './component/Sign_Up';
// import { For_pass } from './component/For_pass';
import { Chng_pass } from './component/Chng_pass';
import { Homee } from './component/admin/Homee';
import { Block } from './component/admin/Block';
import { Block_d } from './component/admin/Block_d';
import { Village } from './component/admin/Village';
import { Village_d } from './component/admin/Village_d';
import { District } from './component/admin/District';
import { Panchayat_d } from './component/admin/Panchayat_d';
import { Division_d } from './component/admin/Division_d';
import { Division} from './component/admin/Division';
import { Section_d } from './component/admin/Section_d';
import { Section} from './component/admin/Section';
import { Sub_Division_d } from './component/admin/Sub_Division_d';
import { Sub_Division} from './component/admin/Sub_Division';
import { Panchayat } from './component/admin/Panchayat';
import { District_d } from './component/admin/District_d';
import { Tariff } from './component/admin/Tariff';
import { Tariff_d } from './component/admin/Tariff_d';
import { Conn_type_d } from './component/admin/Conn_type_d';
import { Conn_type } from './component/admin/Conn_type';
import { User } from './component/admin/User';
import { User_d } from './component/admin/User_d';
import { Temp_app } from './component/admin/Temp_app';
import { Temp_app_d } from './component/admin/Temp_app_d';
import { DistrictEdit } from './component/admin/DistrictEdit';
import { ApplicantDetails } from './component/ApplicantDetails';
import { BlockEdit } from './component/admin/BlockEdit';
import { PanchayatEdit } from './component/admin/PanchayatEdit';
import { VillageEdit } from './component/admin/VillageEdit';
import { DivisionEdit } from './component/admin/DivisionEdit';
import {SubdivisionEdit} from './component/admin/SubdivisionEdit'
import { SectionEdit } from './component/admin/SectionEdit';
import { ConnectionTypeEdit } from './component/admin/ConnectionTypeEdit';
import { Tension_type } from './component/admin/Tension_type';
import { Tension_type_d } from './component/admin/Tension_type_d';
import { TensionTypeEdit } from './component/admin/TensionTypeEdit';
import { TariffEdit } from './component/admin/TariffEdit';
import { Phase } from './component/admin/Phase';
import { Phase_d } from './component/admin/Phase_d';
import { PhaseEdit } from './component/admin/PhaseEdit';
import { Load } from './component/admin/Load';
import { Load_d } from './component/admin/Load_d';
import { LoadEdit } from './component/admin/LoadEdit';
import { ServiceType } from './component/admin/ServiceType';
import { ServiceType_d } from './component/admin/ServiceType_d';
import { ServiceTypeEdit } from './component/admin/ServiceTypeEdit';
import { SignUp } from './component/admin/SignUp';
import { SignIn } from './component/admin/SignIn';
import { OfficerSignUp } from './component/admin/OfficerSignUp';
import { OfficerSignIn } from './component/officer/OfficerSignIn';
import { AdminChangePassword } from './component/admin/AdminChangePassword';
import { AdminForgetPassword } from './component/admin/AdminForgetPassword';
import './app.css'
import { useSelector} from 'react-redux'
import { ChangePassword } from './component/ChangePassword';
import { CheckStatus } from './component/CheckStatus';
import { Status } from './component/Status';
import {Navigate} from 'react-router-dom'
import { PageNotFound } from './component/PageNotFound';
import { ApplicantEditProfile } from './component/ApplicantEditProfile';
import {AdminEditProfile} from './component/admin/AdminEditProfile'
import {OfficerChangePassword} from './component/officer/OfficerChangePassword'
import {OfficerEditProfile} from './component/officer/OfficerEditProfile'
import { OfficerDashboard } from './component/officer/OfficerDashboard';
import { ApplicationPrint } from './component/ApplicationPrint';
import {CheckApplication} from './component/CheckApplication'
import {MyApplication} from './component/MyApplication'
import {ApplicationVerify} from './component/officer/ApplicationVerify'
import { ApplicationVerifyDetail } from './component/officer/ApplicationVerifyDetail';
import { ApplicationReVerify } from './component/officer/ApplicationReverify';
import { ApplicationReverifyDetail } from './component/officer/ApplicationReverifyDetail';
import {ProtectedOfficer} from './component/Protected'
import { CheckForgetPassword } from './component/CheckForgetPassword';
import { ForgetPassword } from './component/ForgetPassword';
import { AdminCheckForgetPassword } from './component/admin/AdminCheckForgetPassword';
import { OfficerCheckForgetPassword } from './component/officer/OfficerCheckForgetPassword';
import { OfficerForgetPassword } from './component/officer/OfficerForgetPassword';
import { Success } from './component/Success';
import { ApplicationForget } from './component/ApplicationForget';
import { ApplicationList } from './component/ApplicationList';

function App() {
  
  return (

    <div className='htmll'>
      



      <Routes>


        <Route  path='/' element={<Home />} />        
        <Route path='/about' element={<About />} />        
        <Route path='/rti' element={<RTI />} />    
        <Route path='/new_conn' element={<New_conn />} /> 
        <Route path='/submit' element={<Success />} />
        <Route path='/new_conn_form' element={< New_conn_form/>} />
        <Route path='/sign_in' element={<Sign_In />} />
        <Route path='/sign_up' element={<Sign_Up />} />
        <Route path='/change_password' element={<ChangePassword />} />
        <Route path='/check_status' element={<CheckStatus />} />  
        <Route path='/check_forgetpassword' element={<CheckForgetPassword />} />
        <Route path='/status' element={<Status />} />
        <Route path='/print' element={<ApplicationPrint />} />
        <Route path='/check_application' element={<CheckApplication />} />
        <Route path='/my_application' element={<MyApplication />} />
        <Route path='/applicantDetails' element={<ApplicantDetails />} />
        <Route path='/edit_profile' element={<ApplicantEditProfile/>} />
        <Route path='/for_pass' element={<ForgetPassword />} />
        <Route path='/forgetApplication' element={<ApplicationForget />} />
        <Route path='/applicationList' element={<ApplicationList />} />
        <Route path='/chng_pass' element={<Chng_pass />} />       
        <Route path='/admin/signup' element={<SignUp />} />
        <Route path='/admin' element={<SignIn/>} />
        <Route path='/admin/change_password' element={<AdminChangePassword />} />
        <Route path='admin/check_forgetpassword' element={<AdminCheckForgetPassword />} />
        <Route path='admin/forget_password' element={<AdminForgetPassword />} />
        <Route path='/admin/edit_profile' element={<AdminEditProfile />} />
        <Route path='/admin/block' element={<Block />} />
        <Route path='/admin/block/edit/:id' element={<BlockEdit />} />
        <Route path='/admin/block_d' element={<Block_d />} />
        <Route path='/admin/district' element={<District />} />
        <Route path='/admin/district/edit/:id' element={<DistrictEdit />} />
        <Route path='/admin/district_d' element={<District_d />} />
        <Route path='/admin/division_d' element={<Division_d />} />
        <Route path='/admin/division' element={<Division />} />
        <Route path='/admin/division/edit/:id' element={<DivisionEdit />} />
        <Route path='/admin/sub_Division_d' element={<Sub_Division_d />} />
        <Route path='/admin/sub_division' element={<Sub_Division />} />
        <Route path='/admin/subdivision/edit/:id' element={<SubdivisionEdit />} />
        <Route path='/admin/Panchayat_d' element={<Panchayat_d />} />
        <Route path='/admin/panchayat/edit/:id' element={<PanchayatEdit />} />
        <Route path='/admin/Panchayat' element={<Panchayat />} />
        <Route path='/admin/dashboard' element={<Homee />} />
        <Route path='/admin/section' element={<Section />} />
        <Route path='/admin/section_d' element={<Section_d />} />
        <Route path='/admin/section/edit/:id' element={<SectionEdit />} />        
        <Route path='/admin/tariff' element={<Tariff />} />
        <Route path='/admin/tariff_d' element={<Tariff_d />} />
        <Route path='/admin/tariff/edit/:id' element={<TariffEdit />} />
        <Route path='/admin/village' element={<Village />} />
        <Route path='/admin/village_d' element={<Village_d />} />
        <Route path='/admin/village/edit/:id' element={<VillageEdit />} />
        <Route path='/admin/phase' element={<Phase />} />
        <Route path='/admin/phase_d' element={<Phase_d />} />
        <Route path='/admin/phase/edit/:id' element={<PhaseEdit />} />
        <Route path='/admin/conn_type' element={<Conn_type />} />
        <Route path='/admin/connectionType/edit/:id' element={<ConnectionTypeEdit />} />
        <Route path='/admin/conn_type_d' element={<Conn_type_d />} />
        <Route path='/admin/tension_type' element={<Tension_type />} />
        <Route path='/admin/tension_type_d' element={<Tension_type_d />} />
        <Route path='/admin/tensionType/edit/:id' element={<TensionTypeEdit />} />
        <Route path='/admin/load' element={<Load />} />
        <Route path='/admin/load_d' element={<Load_d />} />
        <Route path='/admin/load/edit/:id' element={<LoadEdit />} />
        <Route path='/admin/service_type' element={<ServiceType />} />
        <Route path='/admin/service_type_d' element={<ServiceType_d />} />
        <Route path='/admin/service_type/edit/:id' element={<ServiceTypeEdit />} />      
        <Route path='/admin/User' element={<User />} />
        <Route path='/admin/User_d' element={<User_d />} />
        <Route path='/admin/temp_app' element={<Temp_app />} />
        <Route path='/admin/temp_app_d' element={<Temp_app_d />} /> 
        <Route path='/admin/temp_app_d' element={<Temp_app_d />} />
        <Route path='/officer/signup' element={<OfficerSignUp />} />
        <Route path='/officer' element={<OfficerSignIn />} />       
        <Route path='/officer/dashboard' element={< OfficerDashboard/>}/>
        <Route path='/officer/edit_profile' element={<OfficerEditProfile/>}/>      
        <Route path='/officer/change_password' element={<OfficerChangePassword />} />
        <Route path='officer/check_forgetpassword' element={<OfficerCheckForgetPassword />} />
        <Route path='officer/forget_password' element={<OfficerForgetPassword/>} />
        <Route path='/application/verify' element={<ApplicationVerify />} />
        <Route path='/application/reverify' element={<ApplicationReVerify/>} />
        <Route path='/application/verifydetail' element={<ApplicationVerifyDetail />} />
        <Route path='/application/reverifydetail' element={<ApplicationReverifyDetail/>} />
        <Route path='/*' element={<PageNotFound />} />       
      </Routes>
    </div>
  )
}


export default App;