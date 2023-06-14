import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../firebase/firebase'
import { useNavigate } from 'react-router'


 

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
   

    const signIn = () => {
        signInWithEmailAndPassword(auth,email,password)
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
            <button onClick={signIn} >Sign In</button>
        </div>
    )
}

export default SignIn