import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const applicantSignUpApi = createApi({
  reducerPath: 'applicantSignUpApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mdimrankhan.pythonanywhere.com/api/'}),
  tagTypes:["applicantSignUp"],
  endpoints: (builder) => ({
    createapplicantSignUp: builder.mutation({
      query: (body) =>({
      url:'applicant/signup/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["applicantSignUp"],
    }),
    getByIdapplicantSignUp: builder.query({
      query: (id) => ({     
      url:`applicant/signup/${id}/`,
      method:'GET'     
  }),
  providesTags:["applicantSignUp"],

  }),
  updateapplicantSignUp: builder.mutation({
    query: (body) =>({
      url:`applicant/signup/${body.get("id")}/`,
      method:"PATCH",
      body:body
      }),
    invalidatesTags:["applicantSignUp"],
  }),
deleteapplicantSignUp: builder.mutation({
    query: (id) =>({
    url:`applicant/signup/${id}/`,
    method:"DELETE"
    }),
    invalidatesTags:["applicantSignUp"],
  }), 
  listadminGetUser: builder.query({
    query: (token) =>({
    url:'admin/getuser/',
    method:'GET',
    headers:{
        'authorization':`Bearer ${token}`
    }

  }),
  providesTags:["applicantSignUp"],
}),
  }),
})
export const {useCreateapplicantSignUpMutation,useGetByIdapplicationSignUpQuery,useDeleteapplicantSignUpMutation,useUpdateapplicantSignUpMutation,useListadminGetUserQuery} =applicantSignUpApi