import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.init';
import {getAuth, signInWithPopup} from 'firebase/auth'

export const AuthProviderContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [headerId,setId] = useState(1);
    const [loading, setLoading] = useState(true)
    const signInPopup = (provider) =>{
        return signInWithPopup(auth, provider)
    }
    const authInfo = {setId, headerId,setLoading,loading,
        signInPopup
    }
    return (
        <AuthProviderContext.Provider value={authInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export default AuthProvider;

