import React from "react";
import { Link } from "react-router-dom";
import cart from '../assets/shopping-cart.png'
import { useSelector } from "react-redux";

const Navbar = () => {

    const count = useSelector((state) => state.cart.count)

    return(
        
        <div className=" bg-slate-400 w-screen h-[50px] flex flex-row items-center justify-between " >
            <ul className="flex flex-row items-center  gap-4" >
                <Link to='/' >
                    <li>Home</li>
                </Link>
                <Link to='/men' >
                    <li>Men's Fashion</li>
                </Link>
                <Link to='/women' >
                    <li>Women's Fashion</li>
                </Link>
                <Link to='/electronics' >
                    <li>Electronics</li>
                </Link>
                <Link to='/jewelery' >
                    <li>Jewelery</li>
                </Link>
            </ul>
            <div>
                <Link to='/cart' >
                    <img src={cart} className=" w-8 relative " />
                </Link>
                <div className=" bg-red-600 w-4 h-4 rounded-full flex justify-center items-center text-xs absolute top-2 right-2 " >{count}</div>
            </div>
        </div>
    )
}

export default Navbar