import React, { useEffect } from 'react';
import { auth, provider } from "../../configuration/configeSignINFirebaseGoogle";
import { signInWithPopup } from "firebase/auth";
import googleIcons from "../../Assets/img/google-icon.svg"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoginClientWithGoogle, addUser, fetchUser } from '../../Redux/user';
import { toast } from 'react-toastify';


export default function LoginWithGoogle() {


    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    function signInGoogle() {
        signInWithPopup(auth, provider).then((data) => {
            const { email, uid: googleId, displayName: name, photoURL: picture, phoneNumber: phoneNumber } = data.user;
            const user = { id: googleId, name, email, picture, phoneNumber };
           dispatch(LoginClientWithGoogle(user))

        });
    }
   


    // useEffect(() => {
    //     if (users.isLoggedIn) {
    //         navigate("/home", { replace: true });
    //     }
    //     else {
    //         navigate("/LoginForm");
    //     }
    // }, [users.isLoggedIn]);

    
    return (
        <div className="btn d-flex gap-2 justify-content-center border mt-3 shadow-sm" onClick={signInGoogle}>
            <img src={googleIcons} alt="google-icon" />
            <div className="fw-semibold text-secondary " >Continuer avec Google</div>
        </div>
    )
}
