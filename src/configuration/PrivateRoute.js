import React from 'react'
import { useSelector } from 'react-redux';
import {  Navigate , Outlet } from 'react-router-dom'

export default function PrivateRoute() {

    const auth = useSelector(state=>state.users); 
    return (auth.isLoggedIn && auth.data.name && !auth.data.blackListed)? <Outlet/> : <Navigate to="/LoginForm" />;
}