import React from "react";
import { useGetProductsByCategoryQuery } from "../redux/apiSlice";
import Card from "./Card";


const Women = () => {

    const {data, error, isLoading, isFetching, isSuccess} = useGetProductsByCategoryQuery("women's clothing")


    return(
        <div className=" min-h-screen box-border">
           
            {isLoading && <h2>...Loading</h2> }
            { isFetching && <h2>.....fetching</h2> }
            {error && <h2>something went wrong</h2>}
            { isSuccess && (
                <div className="flex flex-row items-center justify-center gap-14 flex-wrap  w-full " >
                    {data.map((pro,key)=>{
                        return <Card pro={pro} key={key} />
                    })}
                </div>
            ) }
        </div>
    )
}

export default Women