import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const connectiontypeApi = createApi({
  reducerPath: 'connectiontypeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://new-meter-connection.netlify.app/'}),
  tagTypes:["connectiontype"],
  endpoints: (builder) => ({
    createconnectiontype: builder.mutation({
      query: (body) =>({
      url:'admin/connectiontype/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["connectiontype"],
    }),
    listconnectiontype: builder.query({
        query: () =>({
        url:'admin/connectiontype/',
        method:'GET',
      
      }),
      providesTags:["connectiontype"],
    }),
    getByIdconnectiontype: builder.query({
        query: (id) =>({       
        url:`admin/connectiontype/${id}`,
        method:'GET',       
    }),
    providesTags:["connectiontype"],
   
    }),
    updateconnectiontype: builder.mutation({
        query: (body) =>({
        url:`admin/connectiontype/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["connectiontype"],
       
      }),
    deleteconnectiontype: builder.mutation({
        query: (id) =>({
        url:`admin/connectiontype/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["connectiontype"],
      
      }),
   
  }),
})
export const {useCreateconnectiontypeMutation,useGetByIdconnectiontypeQuery,useListconnectiontypeQuery,useUpdateconnectiontypeMutation,useDeleteconnectiontypeMutation} =connectiontypeApi