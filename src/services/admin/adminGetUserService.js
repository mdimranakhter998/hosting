import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminGetUserApi = createApi({
  reducerPath: 'adminGetUserApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mdimrankhan.pythonanywhere.com/api/'}),
  tagTypes:["adminGetUser"],
  endpoints: (builder) => ({
   
    listadminGetUser: builder.query({
        query: (token) =>({
        url:'admin/getuser/',
        method:'GET',
        headers:{
            'authorization':`Bearer ${token}`
        }

      }),
      invalidatesTags:["adminGetUser"],
    }),
    
    
  }),
})
export const {useListadminGetUserQuery} =adminGetUserApi