import '../Assets/css/style.css';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginWithGoogle from "../Components/LoginForm/LoginWithGoogle";
import LoginCredentiels from "../Components/LoginForm/LoginCredentiels";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { clearMessage, logout } from '../Redux/user';
import { toast } from 'react-toastify';
import { fetchCart } from '../Redux/carts';
import ErrorManager from '../Components/LoginForm/ErrorManager';

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(state => state.users);
  const message=useSelector(state => state.users.message);
 
  const { isLoggedIn, data: userData } = users;

  

  useEffect(() => {
   
    if (userData.blackListed === true) {
      dispatch(logout());
      navigate("/LoginForm", { replace: true });
    }

    if (isLoggedIn) {
      if (userData.name && !userData.blackListed) {
        dispatch(fetchCart(userData.id));
        navigate("/home", { replace: true });
      } else {
        const decoded = jwt_decode(userData.access_token);
        switch (decoded.roles.authority) {
          case "ROLE_ADMIN":
            navigate("/admin", { replace: true });
            break;
          case "ROLE_PREPARATOR":
            navigate("/commandes", { replace: true });
            break;
          case "ROLE_DELIVERY":
            navigate("/livreur", { replace: true });
            break;
          default:
            dispatch(logout());
            break;
        }
      }
    } else {
      navigate("/LoginForm");
    }
  }, [isLoggedIn, userData, dispatch, navigate]);


  

  return (
    <div className="bodyLogin d-flex justify-content-center align-items-center vh-100" >
      <div className="bg-white p-5 rounded-5 text-secondary shadow">
        <ErrorManager/>
        <LoginCredentiels />
        <LoginWithGoogle />
      </div>
    </div>
  );
}
