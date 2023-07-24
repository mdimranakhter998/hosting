import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminSignUpApi = createApi({
  reducerPath: 'adminSignUpApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mdimrankhan.pythonanywhere.com/api/'}),
  tagTypes:["adminSignUp"],
  endpoints: (builder) => ({
    createadminSignUp: builder.mutation({
      query: (body) =>({
      url:'admin/signup/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["adminSignUp"],
    }),
    listadminSignUp: builder.query({
        query: () =>({
        url:'admin/signup/',
        method:'GET'
      }),
      providesTags:["adminSignUp"],
    }),
    getByIdadminSignUp: builder.query({
        query: (id) =>({
        url:`admin/signup/${id}/`,
        method:'GET',       
    }),
    providesTags:["adminSignUp"],
    }),
    updateadminSignUp: builder.mutation({
        query: (body) =>({
        url:`admin/signup/${body.get('id')}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["adminSignUp"],
      }),
    deleteadminSignUp: builder.mutation({
        query: (id) =>({
        url:`admin/signup/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["adminSignUp"],
      }),
      listadminGetUser: builder.query({
        query: (token) =>({
        url:'admin/getuser/',
        method:'GET',
        headers:{
            'authorization':`Bearer ${token}`
        }

      }),
      providesTags:["adminSignUp"],
    }),
    
  }),
})
export const {useCreateadminSignUpMutation,useListadminSignUpQuery,useGetByIdadminSignUpQuery,useUpdateadminSignUpMutation,useDeleteadminSignUpMutation,useListadminGetUserQuery} =adminSignUpApi