import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const sectionApi = createApi({
  reducerPath: 'sectionApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://new-meter-connection.netlify.app/'}),
  tagTypes:["section"],
  endpoints: (builder) => ({
    createsection: builder.mutation({
      query: (body) =>({
      url:'admin/section/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["section"],
    }),
    listsection: builder.query({
        query: () =>({
        url:'admin/section/',
        method:'GET'
      }),
      providesTags:["section"],
    }),
    getByIdsection: builder.query({
        query: (id) =>({
        url:`admin/section/${id}`,
        method:'GET',       
    }),
    providesTags:["section"],
    }),
    updatesection: builder.mutation({
        query: (body) =>({
        url:`admin/section/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["section"],
      }),
    deletesection: builder.mutation({
        query: (id) =>({
        url:`admin/section/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["section"],
      })
  }),
})
export const {useCreatesectionMutation,useListsectionQuery,useGetByIdsectionQuery,useUpdatesectionMutation,useDeletesectionMutation} =sectionApi