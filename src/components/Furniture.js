import React from "react";
import { useGetProductsByCategoryQuery } from "../redux/apiSlice";
import Card from "./Card";


const Furniture = () => {

    const {data, error, isLoading, isFetching, isSuccess} = useGetProductsByCategoryQuery(3)


    return(
        <div className="box-border" >
            <h1>Furniture</h1>
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
        </div>
    )
}

export default Furniture 
