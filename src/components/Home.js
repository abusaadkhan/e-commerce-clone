import React, { useEffect, useState } from "react";
import { useGetAllProductsQuery, useGetAllCategoriesQuery, useGetProductsByCategoryQuery } from '../redux/apiSlice'
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";
import Card from "./Card";


const Home = () => {

    const {data, error, isLoading, isFetching, isSuccess} = useGetAllProductsQuery()
    const dispatch = useDispatch()

   // console.log("DATA FROM RTQ Query:",data)
    const fetchProducts = () => {
        fetch("https://fakestoreapi.com/products")
        .then((res)=>(
            res.json()
        ))
        .then((data)=>(
            console.log('DATÂ from fetch:',data)
        ))
        .catch((error)=>{
            console.log('error while fetching products',error)
        })
    }
   
    useEffect(()=>{
        fetchProducts()
    },[])

    return(
        <h1>Home
        {isLoading && <h2>...Loading</h2> }
        { isFetching && <h2>.....fetching</h2> }
        {error && <h2>something went wrong</h2>}
        { isSuccess && (
            <div className="flex flex-row flex-wrap gap-5 w-screen " >
                {data.map((pro,key)=>{
                    return <Card pro={pro} key={key} />
                })}
            </div>
        ) }

        
        
        </h1>
    )
}

export default Home