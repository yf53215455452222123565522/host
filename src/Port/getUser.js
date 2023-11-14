import React from 'react'
import useFetch from './useFetch'

function GetUser() {
    const uid=localStorage.getItem("uid");
    const {data:user,isPending,error}=useFetch("http://localhost:9000/users/"+uid.toString());
    return {user,isPending,error}
}

export default GetUser