import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tariffApi = createApi({
  reducerPath: 'tariffApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://new-meter-connection.netlify.app/'}),
  tagTypes:["tariff"],
  endpoints: (builder) => ({
    createtariff: builder.mutation({
      query: (body) =>({
      url:'admin/tariff/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["tariff"],
    }),
    listtariff: builder.query({
        query: () =>({
        url:'admin/tariff/',
        method:'GET',
      
      }),
      providesTags:["tariff"],
    }),
    getByIdtariff: builder.query({
        query: (id) =>({       
        url:`admin/tariff/${id}`,
        method:'GET',       
    }),
    providesTags:["tariff"],
   
    }),
    updatetariff: builder.mutation({
        query: (body) =>({
        url:`admin/tariff/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["tariff"],
       
      }),
    deletetariff: builder.mutation({
        query: (id) =>({
        url:`admin/tariff/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["tariff"],
      
      }),
   
  }),
})
export const {useCreatetariffMutation,useGetByIdtariffQuery,useListtariffQuery,useUpdatetariffMutation,useDeletetariffMutation} =tariffApi