import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../redux/cartSlice";
import Card from "./Card";

const Cart = () => {

    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()

    return(
        <div>
            {products.map((pro,key)=>{
                return <div key={key} className=" bg-slate-600  w-[30.333%]  " >
                            <img className=" w-full h-80" src={pro.product.image} />
                            <h1>{pro.product.title}</h1>
                            <h4>{pro.product.price}</h4>
                            <h4>Count: {pro.count}</h4>
                            <button onClick={()=>dispatch(deleteProduct(pro.product.id))} >Remove From Cart</button>
                        </div>
            })}
        </div>
    )
}

export default Cart

