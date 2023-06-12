import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";

const Card = ({pro, key}) => {

    const dispatch = useDispatch()

    return(
        
        <div key={key} className=" bg-slate-600  w-[30.333%]  " >
            <img className=" w-full h-80" src={pro.image} />
            <h1>{pro.title}</h1>
            <h4>{pro.price}</h4>
            <button onClick={()=>dispatch(addProduct(pro))} >Add To Cart</button>
        </div>
        
    )
}

export default Card