import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import { useNavigate } from "react-router";

const Checkout = () => {

    const [address,setAddress] = useState('')
    const [payment,setPayment] = useState('')
    const [delivery,setDelivery] = useState(0)
    const products = useSelector(state => state.cart.products)
    const totalPrice = useSelector(state => state.cart.totalPrice)

    const navigate = useNavigate()

    const getDelivery = () => {
        if(totalPrice<= 500){
            setDelivery(70)
        }
    }

    useEffect(()=>{
        setTimeout(() => {
            getDelivery()
        },500)
    },[])

    return(
        <div>
            <div>
                <div>
                    <label for='address' >Please Enter delivery address</label>
                    <input type="text"  name="address" value={address} onChange={(e)=>setAddress(e.target.value)} />
                </div>
                <div>
                    <label for='payment' >Select a payment method</label>
                    <select name='payment' onChange={(e)=>setPayment(e.target.value)} >
                        <option value='none' >none</option>
                        <option value='payOnDelivery' >pay on delivery</option>
                    </select>
                </div>
            </div>

            <div>
                <div className="text-ellipsis overflow-hidden whitespace-nowrap w-1/2 bg-red-500" >Shipping to: {address}</div>
                <hr/>
                <div>
                    <div>Items: {totalPrice}</div>
                    <div>Delivery: {delivery}</div>
                </div>
                <div><h1>Order Total: {totalPrice+delivery}</h1></div>
            </div>

            <button onClick={()=>navigate('/')} >Place your order</button>

           
        </div>
    )
}

export default Checkout