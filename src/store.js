import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { districtApi } from './services/admin/districtService'
import { blockApi } from './services/admin/blockService'
import { panchayatApi } from './services/admin/panchayatService'
import { villageApi } from './services/admin/villageService'
import { divisionApi } from './services/admin/divisionService'
import { subdivisionApi } from './services/admin/subDivisionService'
import { sectionApi } from './services/admin/sectionService'
import { tensiontypeApi } from './services/admin/tensionTypeService'
import { connectiontypeApi } from './services/admin/connectionTypeService'
import { tariffApi } from './services/admin/tariffService'
import { applicationApi } from './services/applicant/appicantionService'
import { applicantSignUpApi } from './services/applicant/applicantSignUpService'
import { applicantSignInApi } from './services/applicant/applicantSignInService'
import { serviceApi } from './services/admin/service'
import { phaseApi } from './services/admin/phaseService'
import { loadApi } from './services/admin/loadService'
import { adminSignUpApi } from './services/admin/adminSignUpService'
import { adminSignInApi } from './services/admin/adminSignInService'
import { officerSignInApi } from './services/officer/officerSignInService'
import { officerSignUpApi } from './services/officer/officerSignUpService'
import { adminGetUserApi } from './services/admin/adminGetUserService'
import { adminChangePasswordApi } from './services/admin/adminChangePasswordService'
import { adminForgetPasswordApi } from './services/admin/adminFogetPasswordService'
import { verifyApi } from './services/status/verifyService'

export const store = configureStore({
  reducer: {
    [districtApi.reducerPath]: districtApi.reducer,
    [blockApi.reducerPath]: blockApi.reducer,
    [panchayatApi.reducerPath]: panchayatApi.reducer,
    [villageApi.reducerPath]: villageApi.reducer,
    [divisionApi.reducerPath]: divisionApi.reducer,
    [subdivisionApi.reducerPath]: subdivisionApi.reducer,
    [sectionApi.reducerPath]: sectionApi.reducer,
    [tensiontypeApi.reducerPath]: tensiontypeApi.reducer,
    [connectiontypeApi.reducerPath]: connectiontypeApi.reducer,
    [tariffApi.reducerPath]: tariffApi.reducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
    [applicantSignUpApi.reducerPath]: applicantSignUpApi.reducer,
    [applicantSignInApi.reducerPath]: applicantSignInApi.reducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
    [phaseApi.reducerPath]: phaseApi.reducer,
    [loadApi.reducerPath]: loadApi.reducer,
    [adminSignUpApi.reducerPath]: adminSignUpApi.reducer,
    [adminSignInApi.reducerPath]: adminSignInApi.reducer,
    [adminGetUserApi.reducerPath]: adminGetUserApi.reducer,
    [adminChangePasswordApi.reducerPath]: adminChangePasswordApi.reducer,
    [adminForgetPasswordApi.reducerPath]: adminForgetPasswordApi.reducer,
    [officerSignInApi.reducerPath]: officerSignInApi.reducer,
    [officerSignUpApi.reducerPath]: officerSignUpApi.reducer,
    [verifyApi.reducerPath]: verifyApi.reducer,

   
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(districtApi.middleware, blockApi.middleware, panchayatApi.middleware, villageApi.middleware, divisionApi.middleware, subdivisionApi.middleware, sectionApi.middleware, tensiontypeApi.middleware, connectiontypeApi.middleware, tariffApi.middleware, applicationApi.middleware, applicantSignUpApi.middleware, applicantSignInApi.middleware, serviceApi.middleware, phaseApi.middleware, loadApi.middleware, adminSignInApi.middleware, adminSignUpApi.middleware, adminGetUserApi.middleware, adminChangePasswordApi.middleware, adminForgetPasswordApi.middleware, officerSignUpApi.middleware, officerSignInApi.middleware,verifyApi.middleware)


})
setupListeners(store.dispatch)

