import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../firebase/firebase'
import { useNavigate } from 'react-router'


 

export const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
   

    const signIn = () => {
        createUserWithEmailAndPassword(auth,email,password)
            .then((res)=>{
                console.log("user signed in successfully",res.user)
                navigate('/')
            })
            .catch((error)=>{
                console.log('user signed in failed',error)
            })
    }



    return(
        <div className='flex justify-center items-start min-h-screen pt-10' >
        <div className=' flex flex-col w-[300px] h-[300px] justify-between items-center mx-auto p-2 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ' >
        <h1 className='text-xl font-semibold' >Sign Up</h1>
        <div>
            <input className='w-full p-2 mb-4' type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
            <input className='w-full p-2' type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className='bg-blue-500 py-1 px-2 rounded-sm w-full' onClick={signIn} >Sign Up</button>
        </div>
    </div>
    )
}