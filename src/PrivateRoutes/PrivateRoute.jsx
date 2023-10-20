import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Spinner } from 'flowbite-react';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    if (loading) {
        return   <div className='flex items-center min-h-screen w-screen justify-center'>
            <Spinner
                aria-label="Extra large spinner example"
                size="xl"
            />
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
}

export default PrivateRoute