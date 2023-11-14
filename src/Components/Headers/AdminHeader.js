import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBarAdmin from '../OffCanvas/SideBarAdmin';
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/user';
import { useNavigate } from 'react-router-dom';

export default function AdminHeader({link}) {
    const [showNavBar, setShowNavBar] = useState(false);
    const handleShowNavBar = () => setShowNavBar(true);
    const handleCloseNavBar = () => setShowNavBar(false);
    const dispatch=useDispatch();
    const navigate = useNavigate();

  return (
    <>
    <div className="listing-navbar bg-primary d-flex align-items-center gap-3 shadow-sm mb-auto p-3">
    <div className="d-flex align-items-center gap-2">
    <Link to={link}><i className="bi bi-arrow-left text-white fs-5"></i> </Link>

    <h6 className="fw-bold text-white mb-0">Admin</h6>

        </div>
    <div className="d-flex align-items-center gap-2 ms-auto">
                        
                        <a className="toggle" href="#" onClick={handleShowNavBar}>
                            <b className="bg-dark bg-opacity-75 rounded-circle user-icon">
                                <i className="bi bi-list d-flex m-0 h4 text-white"></i>
                            </b>
                        </a>

                        <a className="toggle" href="#" onClick={()=>{dispatch(logout());
                         navigate("/LoginForm");}}>
                            <b className="bg-dark bg-opacity-75 rounded-circle user-icon">
                                <i className="bi bi-box-arrow-right d-flex m-0 h4 text-white"></i>
                            </b>
                        </a>
                       
                    </div>
                      
            </div>
            
   
    <SideBarAdmin show={showNavBar} handleClose={handleCloseNavBar} />

</>
  )
}