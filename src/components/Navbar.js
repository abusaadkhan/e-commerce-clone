import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cart from '../assets/shopping-cart.png'
import { useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Navbar = () => {

    const[user,setUser] = useState(null)
    const count = useSelector((state) => state.cart.count)

    const logOut = async() => {
        try{
            await signOut(auth)
            setUser(auth.currentUser)
        }
        catch(error){
            console.log('user signout failed',error)
        }
    }

    const getUser = () => {
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(auth.currentUser)
            }
        })
    }

    useEffect(()=>(
        getUser()
    ),[])

    return(
        
        <div className=" bg-white w-full h-[80px] flex flex-row items-center justify-between " >
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
            <div className="flex  gap-2 items-center " >
                <div className="relative" >
                    <Link to='/cart' >
                    <img src={cart} className=" w-8  " />
                    </Link>
                    <div className=" bg-red-600 w-4 h-4 rounded-full flex justify-center items-center text-xs absolute top-[-5px] right-2 " >{count}</div>
                </div>
                <div className="list-none" >
                {
                    user? (
                        
                        
                        <li className="hover:underline underline-offset-8 decoration-2 cursor-pointer" onClick={logOut}>logout</li>
                        
                    ) : (
                        <div className=" list-none flex gap-2 items-center " >
                            <Link to="/signin" >
                            <li className="hover:underline underline-offset-8 decoration-2">SignIn</li>
                            </Link>
                            <Link to="/signup" >
                                <li className="hover:underline underline-offset-8 decoration-2">SignUp</li>
                            </Link>
                        </div>
                    )
                 }
                </div>
            </div>
        </div>
    )
}

export default Navbar