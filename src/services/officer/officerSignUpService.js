import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const officerSignUpApi = createApi({
  reducerPath: 'officerSignUpApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://new-meter-connection.netlify.app/'}),
  tagTypes:["officerSignUp"],
  endpoints: (builder) => ({
    createofficerSignUp: builder.mutation({
      query: (body) =>({
      url:'officer/signup/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["officerSignUp"],
    }),
    listofficerSignUp: builder.query({
        query: () =>({
        url:'officer/signup/',
        method:'GET'
      }),
      providesTags:["officerSignUp"],
    }),
    getByIdofficerSignUp: builder.query({
        query: (id) =>({
        url:`officer/signup/${id}`,
        method:'GET',       
    }),
    providesTags:["officerSignUp"],
    }),
    updateofficerSignUp: builder.mutation({
        query: (body) =>({
        url:`officer/signup/${body.get("id")}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["officerSignUp"],
      }),
    deleteofficerSignUp: builder.mutation({
        query: (id) =>({
        url:`officer/signup/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["officerSignUp"],
      }),
      listadminGetUser: builder.query({
        query: (token) =>({
        url:'admin/getuser/',
        method:'GET',
        headers:{
            'authorization':`Bearer ${token}`
        }

      }),
      providesTags:["officerSignUp"],
    }),
  }),
})
export const {useCreateofficerSignUpMutation,useListofficerSignUpQuery,useGetByIdofficerSignUpQuery,useUpdateofficerSignUpMutation,useDeleteofficerSignUpMutation,useListadminGetUserQuery} =officerSignUpApi