import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const applicationApi = createApi({
  reducerPath: 'applicationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mdimrankhan.pythonanywhere.com/api/'}),
  tagTypes:["application"],
  endpoints: (builder) => ({
    createapplication: builder.mutation({
      query: (body) =>({
      url:'application/',
      method:'POST',
      body:body,
      headers: {
        'authorization':`Bearer ${body.get('access')}`,
       
      },
      
    }),
    invalidatesTags:["application"],
    }),
    listapplication: builder.query({
        query: () =>({
        url:'application/',
        method:'GET'
      }),
      providesTags:["application"],
    }),
    getByIdapplication: builder.query({
        query: (id) =>({
        url:`application/${id.id}`,
        method:'GET',  
        headers: {
          'authorization':`Bearer ${id.access}`,
         
        },    
    }),
    providesTags:["application"],
    }),

  updateapplication: builder.mutation({
        query: (body) =>({
        url:`application/${body.get('id')}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["application"],
      }),
      
    deleteapplication: builder.mutation({
        query: (id) =>({
        url:`application/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["application"],
      })
  }),
})
export const {useCreateapplicationMutation,useDeleteapplicationMutation,useGetByIdapplicationQuery,useUpdateapplicationMutation,useListapplicationQuery} =applicationApi