import React, { createContext, useState } from 'react';


export const AuthProviderContext = createContext()
const AuthProvider = ({children}) => {
    const [headerId,setId] = useState(1);
    const [loading, setLoading] = useState(true)
    const authInfo = {setId, headerId,setLoading,loading}
    return (
        <AuthProviderContext.Provider value={authInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export default AuthProvider;

