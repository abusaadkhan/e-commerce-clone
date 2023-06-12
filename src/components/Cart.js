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
                return <Card pro={pro} key={key} />
            })}
        </div>
    )
}

export default Cart