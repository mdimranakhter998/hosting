import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

  

   
export const adminChangePasswordApi = createApi({
  reducerPath: 'adminChangePasswordApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mdimrankhan.pythonanywhere.com/api/'}),
  endpoints: (builder) => ({
    createadminChangePassword: builder.mutation({
      query: (body,access) =>({
      url:'user/changepassword/',
      method:'POST',     
      body:body,
      headers:{     
      'authorization':`Bearer ${body.access}`,
      'content-type':'application/json',
      }
    })
    }),
    
  }),
})
export const {useCreateadminChangePasswordMutation} =adminChangePasswordApi