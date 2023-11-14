import React, { useEffect, useState } from 'react'
import loginIcons from "../../Assets/img/login-icon.svg"
import passwordIcons from "../../Assets/img/password-icon.svg"
import usernameIcons from "../../Assets/img/username-icon.svg"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithCredentials } from '../../Redux/user';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function LoginCredentiels() {
   
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
  
    const dispatch=useDispatch();
    const handleLogin = () => {
        const data={email,password};
        dispatch(loginWithCredentials(data))
        
    
     }
     
 
     
     
  return (
    <>
         <div className="d-flex justify-content-center">
                    <img src={loginIcons} alt="login-icon" style={{ height: "7rem" }}/>
                </div>
                <div className="text-center fs-1 fw-bold">Se connecter</div>
                <div className="input-group mt-4">
                    <div id="btnLogin" className="input-group-text ">
                        <img src={usernameIcons} alt="username-icon" style={{ height: "1rem" }}/>
                    </div>
                    <input className="form-control bg-light" type="text" placeholder="Username" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-group mt-1">
                    <div id="btnLogin" className="input-group-text ">
                        <img src={passwordIcons} alt="password-icon" style={{ height: "1rem" }}/>
                    </div>
                    <input className="form-control bg-light" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="d-flex justify-content-around mt-1">
                    <div className="d-flex align-items-center gap-1">
                        <input className="form-check-input" type="checkbox" />
                        <div className="pt-1" >Mémorisez mot de passe</div>
                    </div>
                    <div className="pt-1">
                        <Link to="#" className="text-decoration-none text-info fw-semibold fst-italic"></Link>
                    </div>
                </div>
                <div id="btnLogin" className=" btn btn-info text-white w-100 mt-4 fw-semibold shadow-sm" onClick={handleLogin}> Se connecter </div>
                <div className="d-flex gap-1 justify-content-center mt-1">
                    <div>Vous n'avez pas de compte?</div>
                    <Link id="textRegister" to="#" className="text-decoration-none  fw-semibold"> Créer </Link>
                </div>
                <div className="p-3">
                    <div className="border-bottom text-center" >
                        <span className="bg-white px-3">ou</span>
                    </div>
                </div>
    </>
  )
}