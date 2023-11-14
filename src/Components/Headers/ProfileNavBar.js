import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../OffCanvas/SideBar';
function ProfileNavBar() {
    const [showNavBar,setShowNavBar]=useState(false);
   const handleShowNavBar=()=>setShowNavBar(true);
   const handleCloseNavBar=()=>setShowNavBar(false);
    return (
        <>
         <div className="d-flex align-items-center gap-2 ms-auto">
               <Link to="/profile" className="link-dark">
                  <div className="bg-dark bg-opacity-75 rounded-circle user-icon"><i className="bi bi-person d-flex m-0 h4 text-white"></i></div>
               </Link>
               <Link className="toggle "  role="button" aria-controls="hc-nav-1" onClick={handleShowNavBar}>
               <b className="bg-dark bg-opacity-75 rounded-circle user-icon">
               <i className="bi bi-list d-flex m-0 h4 text-white"></i>
               </b>
               </Link>
            </div>
            <SideBar show={showNavBar} handleClose={handleCloseNavBar}/>
        </>
        
    )
}

export default ProfileNavBar
