import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const AuthProviderContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [headerId,setId] = useState(1);
    const [user,setUser] = useState()
    const [loading, setLoading] = useState(true)
    const signInPopup = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const SignUp = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const Login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        setLoading(false)
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log(currentUser)
        })
        return () => unSubscribe()
    },[])
    const authInfo = {setId, headerId,setLoading,loading,
        signInPopup,
        SignUp,
        Login,
        LogOut,
        user
    }
    return (
        <AuthProviderContext.Provider value={authInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export default AuthProvider;

