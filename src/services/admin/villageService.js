import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const villageApi = createApi({
  reducerPath: 'villageApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mdimrankhan.pythonanywhere.com/api/'}),
  tagTypes:["village"],
  endpoints: (builder) => ({
    createvillage: builder.mutation({
      query: (body) =>({
      url:'admin/village/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["village"],
    }),
    listvillage: builder.query({
        query: () =>({
        url:'admin/village/',
        method:'GET'
      }),
      providesTags:["village"],
    }),
    getByIdvillage: builder.query({
        query: (id) =>({
        url:`admin/village/${id}`,
        method:'GET',       
    }),
    providesTags:["village"],
    }),
    updatevillage: builder.mutation({
        query: (body) =>({
        url:`admin/village/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["village"],
      }),
    deletevillage: builder.mutation({
        query: (id) =>({
        url:`admin/village/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["village"],
      }),
  }),
})
export const {useCreatevillageMutation,useListvillageQuery,useGetByIdvillageQuery,useUpdatevillageMutation,useDeletevillageMutation} =villageApi