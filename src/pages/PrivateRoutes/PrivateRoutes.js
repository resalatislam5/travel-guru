import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthProviderContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthProviderContext)
    if(loading){
        return <button className="btn btn-square loading"></button>
    }
    if(user && user.uid){
        return children
    }
    return <Navigate state={{from : Navigate}} replace/>
};

export default PrivateRoutes;