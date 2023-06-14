import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, removeProduct } from "../redux/cartSlice";
import Card from "./Card";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Cart = () => {

    //const [totalPrice, setTotalPrice] = useState(0)
    const products = useSelector(state => state.cart.products)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const dispatch = useDispatch()
   

    

    return(
        <div >
            {products.map((pro,key)=>{
                return <div key={key} className=" bg-slate-600  w-full flex justify-between items-center m-4  " >
                            <div>
                                <img className=" w-10" src={pro.product.image} />
                                <h1>{pro.product.title}</h1>
                                <h4>{pro.product.price}</h4>
                            </div>
                            
                            
                            <div className="flex items-center justify-between w-14 ">
                                <button onClick={() => dispatch(addProduct(pro.product))} >+</button>
                                <h4>{pro.count}</h4>
                                <button onClick={() => dispatch(deleteProduct(pro.product.id))} >-</button>
                            </div>
                            <button onClick={()=>dispatch(removeProduct(pro.product.id))} >Remove From Cart</button>
                        </div>
            })}

            <div>
                Total price: {totalPrice}
            </div>
            

            {
                
                products.length!==0? (
                    <Link to='/checkout' >
                        <button>Checkout</button>
                    </Link>
                ) : <></>
            }
        </div>
    )
}

export default Cart

