import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const phaseApi = createApi({
  reducerPath: 'phaseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mdimrankhan.pythonanywhere.com/api/'}),
  tagTypes:["phase"],
  endpoints: (builder) => ({
    createphase: builder.mutation({
      query: (body) =>({
      url:'admin/phase/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["phase"],
    }),
    listphase: builder.query({
        query: () =>({
        url:'admin/phase/',
        method:'GET',
      
      }),
      providesTags:["phase"],
    }),
    getByIdphase: builder.query({
        query: (id) =>({       
        url:`admin/phase/${id}`,
        method:'GET',       
    }),
    providesTags:["phase"],
   
    }),
    updatephase: builder.mutation({
        query: (body) =>({
        url:`admin/phase/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["phase"],
       
      }),
    deletephase: builder.mutation({
        query: (id) =>({
        url:`admin/phase/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["phase"],
      
      }),
   
  }),
})
export const {useCreatephaseMutation,useGetByIdphaseQuery,useListphaseQuery,useUpdatephaseMutation,useDeletephaseMutation} =phaseApi