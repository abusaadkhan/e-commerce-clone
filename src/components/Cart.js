import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, removeProduct } from "../redux/cartSlice";
import Card from "./Card";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import bin from '../assets/delete.png'

const Cart = () => {

    //const [totalPrice, setTotalPrice] = useState(0)
    const products = useSelector(state => state.cart.products)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const dispatch = useDispatch()
   

    

    return(
        <div >
            {products.map((pro,key)=>{
                return <div key={key} className="  w-full flex justify-between items-center my-4 p-4 " >
                            <div className="flex items-center gap-3 w-1/4">
                                <img className=" w-10" src={pro.product.image} />
                                <h1>{pro.product.title}</h1>
                            </div>
                            <div className="w-1/4" > <h4>{pro.product.price}</h4> </div>
                            
                            <div className="flex items-center gap-4 w-1/4 ">
                                <button className="bg-red-200 px-2 rounded-md" onClick={() => dispatch(addProduct(pro.product))} >+</button>
                                <h4>{pro.count}</h4>
                                <button className="bg-red-200 px-2 rounded-md" onClick={() => dispatch(deleteProduct(pro.product.id))} >-</button>
                            </div>
                            <button   onClick={()=>dispatch(removeProduct(pro.product.id))} >
                                <img className="w-6" src={bin}/>
                            </button>
                        </div>
            })}

            <div>
                Subtotal: Rs. {totalPrice}
            </div>
            

            {
                
                products.length!==0? (
                    <Link to='/checkout' >
                        <button className=" bg-red-700 text-white px-2 py-1 rounded-sm flex items-center " >Proceed to checkout</button>
                    </Link>
                ) : <></>
            }
        </div>
    )
}

export default Cart

