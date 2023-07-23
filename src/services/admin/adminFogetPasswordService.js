import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminForgetPasswordApi = createApi({
  reducerPath: 'adminForgetPasswordApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://new-meter-connection.netlify.app/'}),
  endpoints: (builder) => ({
    createadminForgetPassword: builder.mutation({
      query: (body) =>({
      url:'user/forgetpassword/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    })
    }),
    
  }),
})
export const {useCreateadminForgetPasswordMutation} =adminForgetPasswordApi