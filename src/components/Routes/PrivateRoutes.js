import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { ValidateContext } from '../contexts/AuthProvider';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(ValidateContext);
    const location = useLocation();

    if (loading) {
        return (
            <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_uhnbbycj.json"
                className='text-center'
            ></Player>
        )
    }

    if (user === null) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    return children
};

export default PrivateRoutes;