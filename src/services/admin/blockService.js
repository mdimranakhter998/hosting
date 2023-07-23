import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blockApi = createApi({
  reducerPath: 'blockApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://new-meter-connection.netlify.app/'}),
  tagTypes:["block"],
  endpoints: (builder) => ({
    createblock: builder.mutation({
      query: (body) =>({
      url:'admin/block/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["block"],
    }),
    listblock: builder.query({
        query: () =>({
        url:'admin/block/',
        method:'GET'
      }),
      providesTags:["block"],
    }),
    getByIdblock: builder.query({
        query: (id) =>({
        url:`admin/block/${id}`,
        method:'GET',
       
    }),
    providesTags:["block"],
    }),
    updateblock: builder.mutation({
        query: (body) =>({
        url:`admin/block/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["block"],
      }),
    deleteblock: builder.mutation({
        query: (id) =>({
        url:`admin/block/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["block"],
      })
  }),
})
export const {useCreateblockMutation,useListblockQuery,useGetByIdblockQuery,useUpdateblockMutation,useDeleteblockMutation} =blockApi