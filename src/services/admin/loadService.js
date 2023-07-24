import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const loadApi = createApi({
  reducerPath: 'loadApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mdimrankhan.pythonanywhere.com/api/'}),
  tagTypes:["load"],
  endpoints: (builder) => ({
    createload: builder.mutation({
      query: (body) =>({
      url:'admin/load/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["load"],
    }),
    listload: builder.query({
        query: () =>({
        url:'admin/load/',
        method:'GET',
      
      }),
      providesTags:["load"],
    }),
    getByIdload: builder.query({
        query: (id) =>({       
        url:`admin/load/${id}`,
        method:'GET',       
    }),
    providesTags:["load"],
   
    }),
    updateload: builder.mutation({
        query: (body) =>({
        url:`admin/load/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["load"],
       
      }),
    deleteload: builder.mutation({
        query: (id) =>({
        url:`admin/load/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["load"],
      
      }),
   
  }),
})
export const {useCreateloadMutation,useGetByIdloadQuery,useListloadQuery,useUpdateloadMutation,useDeleteloadMutation} =loadApi