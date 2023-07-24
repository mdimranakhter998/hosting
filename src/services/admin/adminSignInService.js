import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminSignInApi = createApi({
  reducerPath: 'adminSignInApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mdimrankhan.pythonanywhere.com/api/'}),
  endpoints: (builder) => ({
    createadminSignIn: builder.mutation({
      query: (body) =>({
      url:'admin/signin/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    })
    }),
    
  }),
})
export const {useCreateadminSignInMutation} =adminSignInApi