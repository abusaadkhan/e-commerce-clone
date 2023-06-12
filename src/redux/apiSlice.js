import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fakeStoreApi = createApi({
    reducerPath: "fakeStoreApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com"}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ({
                url: 'products',
                method: 'get',
            }),
        }),
        getProductsByCategory: builder.query({
            query: (category) => ({
                url: `products/category/${category}`,
                method: 'get'
            })
        }),
        getAllCategories: builder.query({
            query: () => ({
                url: 'categories',
                method: 'get',
            })
        })
    })
})


export const { useGetAllProductsQuery, useGetAllCategoriesQuery, useGetProductsByCategoryQuery } = fakeStoreApi