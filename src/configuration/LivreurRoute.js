import React from 'react';
import { useSelector } from 'react-redux';
import {  Navigate , Outlet } from 'react-router-dom';
import jwt_decode from "jwt-decode";

export default function LivreurRoute() {
    const auth = useSelector(state=>state.users); 
    const decoded=jwt_decode(auth.data.access_token);

    return (auth.isLoggedIn && auth.data.access_token && decoded.roles.authority==="ROLE_DELIVERY") ? <Outlet/> : <Navigate to="/LoginForm" />;
 
}
