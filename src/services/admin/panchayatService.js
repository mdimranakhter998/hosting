import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const panchayatApi = createApi({
  reducerPath: 'panchayatApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mdimrankhan.pythonanywhere.com/api/'}),
  tagTypes:["panchayat"],
  endpoints: (builder) => ({
    createpanchayat: builder.mutation({
      query: (body) =>({
      url:'admin/panchayat/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["panchayat"],
    }),
    listpanchayat: builder.query({
        query: () =>({
        url:'admin/panchayat/',
        method:'GET'
      }),
      providesTags:["panchayat"],
    }),
    getByIdpanchayat: builder.query({
        query: (id) =>({
        url:`admin/panchayat/${id}`,
        method:'GET',
       
    }),
    providesTags:["panchayat"],
    }),
    updatepanchayat: builder.mutation({
        query: (body) =>({
        url:`admin/panchayat/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["panchayat"],
      }),
    deletepanchayat: builder.mutation({
        query: (id) =>({
        url:`admin/panchayat/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["panchayat"],
      }),
  }),
})
export const {useCreatepanchayatMutation,useListpanchayatQuery,useGetByIdpanchayatQuery,useUpdatepanchayatMutation,useDeletepanchayatMutation} =panchayatApi