import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const divisionApi = createApi({
  reducerPath: 'divisionApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://new-meter-connection.netlify.app/'}),
  tagTypes:["division"],
  endpoints: (builder) => ({
    createdivision: builder.mutation({
      query: (body) =>({
      url:'admin/division/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["division"],
    }),
    listdivision: builder.query({
        query: () =>({
        url:'admin/division/',
        method:'GET'
      }),
      providesTags:["division"],
    }),
    getByIddivision: builder.query({
        query: (id) =>({
        url:`admin/division/${id}`,
        method:'GET',       
    }),
    providesTags:["division"],
    }),
    updatedivision: builder.mutation({
        query: (body) =>({
        url:`admin/division/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["division"],
      }),
    deletedivision: builder.mutation({
        query: (id) =>({
        url:`admin/division/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["division"],
      }),
  }),
})
export const {useCreatedivisionMutation,useListdivisionQuery,useGetByIddivisionQuery,useUpdatedivisionMutation,useDeletedivisionMutation} =divisionApi