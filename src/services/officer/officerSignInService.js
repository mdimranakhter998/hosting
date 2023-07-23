import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const officerSignInApi = createApi({
  reducerPath: 'officerSignInApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://new-meter-connection.netlify.app/'}),
  endpoints: (builder) => ({
    createofficerSignIn: builder.mutation({
      query: (body) =>({
      url:'officer/signin/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    })
    }),
    
  }),
})
export const {useCreateofficerSignInMutation} =officerSignInApi