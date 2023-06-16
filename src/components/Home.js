import React, { useEffect, useState } from "react";
import { useGetAllProductsQuery, useGetAllCategoriesQuery, useGetProductsByCategoryQuery } from '../redux/apiSlice'
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";
import Card from "./Card";
import { Link } from "react-router-dom";


const Home = () => {

    const {data, error, isLoading, isFetching, isSuccess} = useGetAllProductsQuery()
    const dispatch = useDispatch()

   // console.log("DATA FROM RTQ Query:",data)
    // const fetchProducts = () => {
    //     fetch("https://fakestoreapi.com/products")
    //     .then((res)=>(
    //         res.json()
    //     ))
    //     .then((data)=>(
    //         console.log('DATÂ from fetch:',data)
    //     ))
    //     .catch((error)=>{
    //         console.log('error while fetching products',error)
    //     })
    // }
   
    // useEffect(()=>{
    //     fetchProducts()
    // },[])

    return(
        <div className="box-border" >

            <div className="w-full bg-[#faedeb] h-screen my-10 mt-0 flex items-center px-10 " >
                <div className="w-1/2 h-1/2" >
                    <h1>Men</h1>
                    <h1 className="text-6xl font-bold" >Slick. Modern. <br/> Awesome.</h1>
                    <Link to='/men' >
                        <button className="mt-10 bg-black text-white px-4 py-2" >Shop Collection</button>
                    </Link>
                </div>
                <div className="w-1/2 h-1/2 bg-white " >
                </div>
            </div>

            <div>
                {isLoading && <h2>...Loading</h2> }
                { isFetching && <h2>.....fetching</h2> }
                {error && <h2>something went wrong</h2>}
                { isSuccess && (
                    <div className="flex flex-row items-center justify-center flex-wrap gap-5 w-full " >
                        {data.map((pro,key)=>{
                            return <Card pro={pro} key={key} />
                        })}
                    </div>
                ) }
            </div>

        
        
        </div>
    )
}

export default Home