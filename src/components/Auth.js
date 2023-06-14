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
        <div>
            <input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={signIn} >Sign UP</button>
        </div>
    )
}