import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cart from '../assets/shopping-cart.png'
import { useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Navbar = () => {

    const [extendNavbar,setExtendNavbar] = useState(false)
    const[user,setUser] = useState(null)
    const count = useSelector((state) => state.cart.count)

    const handleExtendeNavbar = () => {
        setExtendNavbar(curr => !curr)
    }

    const handleExtendeNavbarLogOut = () => {
        logOut()
        handleExtendeNavbar()
    }

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
        
        <div className="relative" >
            <div className=" bg-white mx-[5%] h-[80px] flex flex-row items-center justify-between fixed top-0 left-0 right-0 z-10  " >
            <button className=" text-3xl hidden max-[640px]:inline-block  " onClick={handleExtendeNavbar} >
                {
                    extendNavbar? <div>&#10005;</div> : <div>&#8801;</div>
                }
            </button>
            
            <ul className="flex flex-row items-center  gap-4 max-[640px]:hidden" >
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
                        
                        
                        <li className="hover:underline underline-offset-8 decoration-2 cursor-pointer max-[640px]:hidden" onClick={logOut}>logout</li>
                        
                    ) : (
                        <div className=" list-none flex gap-2 items-center max-[640px]:hidden " >
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

            <div>
                {
                    extendNavbar? (
                        <div className="h-screen bg-white w-full z-10 fixed top-[79px] ">
                            <ul className="flex flex-col items-center gap-20 text-xl " >
                            <Link to='/' >
                                <li onClick={handleExtendeNavbar} >Home</li>
                            </Link>
                            <Link to='/men' >
                                <li onClick={handleExtendeNavbar} >Men's Fashion</li>
                            </Link>
                            <Link to='/women' >
                                <li onClick={handleExtendeNavbar} >Women's Fashion</li>
                            </Link>
                            <Link to='/electronics' >
                                <li onClick={handleExtendeNavbar} >Electronics</li>
                            </Link>
                            <Link to='/jewelery' >
                                <li onClick={handleExtendeNavbar} >Jewelery</li>
                            </Link>
                            </ul>
                            <div className="list-none mt-14 flex flex-col items-center gap-20 text-xl  " >
                                {
                                    user? (
                                        
                                        
                                        <li className="hover:underline underline-offset-8 decoration-2 cursor-pointer text-xl " onClick={handleExtendeNavbarLogOut}>logout</li>
                                        
                                    ) : (
                                        <div className=" list-none flex flex-col gap-20 text-xl items-center " >
                                            <Link to="/signin" >
                                            <li className="hover:underline underline-offset-8 decoration-2" onClick={handleExtendeNavbar} >SignIn</li>
                                            </Link>
                                            <Link to="/signup" >
                                                <li className="hover:underline underline-offset-8 decoration-2" onClick={handleExtendeNavbar} >SignUp</li>
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                    ) : <></>
                }
            </div>
        </div>


    )
}

export default Navbar