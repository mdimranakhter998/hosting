import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const verifyApi = createApi({
  reducerPath: 'verifyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mdimrankhan.pythonanywhere.com/api/'}),
  tagTypes:["verify"],
  endpoints: (builder) => ({
    createverify: builder.mutation({
      query: (body) =>({
      url:'officer/verify/',
      method:'POST',
      body:body,
     
    }),
    invalidatesTags:["verify"],
    }),
    listverify: builder.query({
        query: () =>({
        url:'officer/verify/',
        method:'GET'
      }),
      providesTags:["verify"],
    }),
    getByIdverify: builder.query({
        query: (id) =>({
        url:`officer/verify/${id}`,
        method:'GET',       
    }),
    providesTags:["verify"],
    }),
    updateverify: builder.mutation({
        query: (body) =>({
        url:`officer/verify/${body.get("id")}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["verify"],
      }),
    deleteverify: builder.mutation({
        query: (id) =>({
        url:`officer/verify/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["verify"],
      }),
      
  }),
})
export const {useCreateverifyMutation,useListverifyQuery,useGetByIdverifyQuery,useUpdateverifyMutation,useDeleteverifyMutation} =verifyApi