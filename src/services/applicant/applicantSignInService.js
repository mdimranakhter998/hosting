import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const applicantSignInApi = createApi({
  reducerPath: 'applicantSignInApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://new-meter-connection.netlify.app/'}),
  endpoints: (builder) => ({
    createapplicantSignIn: builder.mutation({
      query: (body) =>({
      url:'applicant/signin/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    })
    }),
    
  }),
})
export const {useCreateapplicantSignInMutation} =applicantSignInApi