import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const Checkout = () => {


    const products = useSelector(state => state.cart.products)

    return(
        <div>
            checkout
           { 
            products.map((pro,key)=>{
                return <Card pro={pro.product} key={key} />
            })
        }
        </div>
    )
}

export default Checkout