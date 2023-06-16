import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";

const Card = ({pro, key}) => {

    const dispatch = useDispatch()

    return(
        
        <div key={key} className="   w-[21.333%] h-[350px] box-border  rounded-md relative ease-in duration-300  hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:scale-105 max-[768px]:w-[80%] max-[768px]:h-[420px] " >
            <img className=" w-full h-60 max-[768px]:h-80 " src={pro.image} />
            <div className="my-2 p-2 " >
                <h1 className="overflow-hidden whitespace-nowrap text-ellipsis" >{pro.title}</h1>
                <h4>Rs. {pro.price}</h4>
            </div>
            <button className=" p-2 absolute bottom-1 left-1 px-2 py-1 bg-red-400 rounded-sm  text-xs"  onClick={()=>dispatch(addProduct(pro))} >Add To Cart</button>
        </div>
        
    )
}

export default Card