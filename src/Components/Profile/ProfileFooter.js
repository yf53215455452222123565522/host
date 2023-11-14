import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/user';

export default function ProfileFooter() {
   const dispatch = useDispatch();
   const handleLogout = () => {
      dispatch(logout())
      localStorage.clear();
      window.location.reload(false);
   }
   return (
      <div className="link-dark">
         <div className="bg-primary d-flex align-items-center rounded-3 shadow-sm justify-content-between p-3" onClick={handleLogout}>
            <h6 className="fw-bold text-white text-uppercase m-0">Déconnexion</h6>
            <i className="icofont-rounded-right text-white h6 m-0"></i>
         </div>
      </div>
   )
}
