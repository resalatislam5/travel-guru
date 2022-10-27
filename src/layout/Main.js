import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthProviderContext } from '../contexts/AuthProvider/AuthProvider';
import Header from '../pages/shared/Header/Header';

const Main = () => {
    const {headerId} = useContext(AuthProviderContext)
    return (
        <div>
            <Header headerId={headerId} />
            <Outlet></Outlet>
        </div>
    );
};

export default Main;