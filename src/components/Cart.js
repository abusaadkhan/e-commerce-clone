import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../redux/cartSlice";
import Card from "./Card";

const Cart = () => {

    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()

    const getCount = ( index) => {
        let count = useSelector(state => state.cart.products[index].count)
        console.log("product count from getCount",count)
        return count
    }

    return(
        <div >
            {products.map((pro,key)=>{
                return <div key={key} className=" bg-slate-600  w-full flex justify-between items-center m-4  " >
                            <div>
                                <img className=" w-10" src={pro.product.image} />
                                <h1>{pro.product.title}</h1>
                                <h4>{pro.product.price}</h4>
                            </div>
                            
                            <h4>Count: {()=>getCount(key)} </h4>
                            <div>
                                <button onClick={() => dispatch(addProduct(pro.product.id))} >+</button>
                            </div>
                            <button onClick={()=>dispatch(deleteProduct(pro.product.id))} >Remove From Cart</button>
                        </div>
            })}
        </div>
    )
}

export default Cart

