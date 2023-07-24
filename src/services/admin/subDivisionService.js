import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const subdivisionApi = createApi({
  reducerPath: 'subdivisionApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mdimrankhan.pythonanywhere.com/api/'}),
  tagTypes:["subdivision"],
  endpoints: (builder) => ({
    createsubdivision: builder.mutation({
      query: (body) =>({
      url:'admin/subdivision/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["subdivision"],
    }),
    listsubdivision: builder.query({
        query: () =>({
        url:'admin/subdivision/',
        method:'GET'
      }),
      providesTags:["subdivision"],
    }),
    getByIdsubdivision: builder.query({
        query: (id) =>({
        url:`admin/subdivision/${id}`,
        method:'GET',       
    }),
    providesTags:["subdivision"],
    }),
    updatesubdivision: builder.mutation({
        query: (body) =>({
        url:`admin/subdivision/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["subdivision"],
      }),
    deletesubdivision: builder.mutation({
        query: (id) =>({
        url:`admin/subdivision/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["subdivision"],
      }),
  }),
})
export const {useCreatesubdivisionMutation,useListsubdivisionQuery,useGetByIdsubdivisionQuery,useUpdatesubdivisionMutation,useDeletesubdivisionMutation} =subdivisionApi