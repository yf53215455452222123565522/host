import React, {  useState } from 'react'
import { Link } from 'react-router-dom';
import SideBar from '../OffCanvas/SideBar';
import UserInfo from '../Common/UserInfo';

export default function ProfileHeader() {
    const [showNavBar, setShowNavBar] = useState(false);
   const handleShowNavBar = () => setShowNavBar(true);
   const handleCloseNavBar = () => setShowNavBar(false);
   
  
  
  return (
    <>
     <div className="listing-navbar bg-primary d-flex align-items-center gap-3 shadow-sm mb-auto p-3">
               <Link to="/home"><i className="bi bi-arrow-left text-white fs-5"></i></Link>
               <a href="#" className="text-white" data-bs-toggle="modal" data-bs-target="#categories">
                  <div className="d-flex align-items-center gap-2">
                     {/* <img src={ProfileImage} alt="" className="rounded-pill img-fluid" /> */}

                <UserInfo/>     
                  </div>
               </a>
               <div className="d-flex align-items-center gap-2 ms-auto">
                  <a className="toggle  1" href="#" role="button" aria-controls="hc-nav-1" onClick={handleShowNavBar}>
                     <b className="bg-dark bg-opacity-75 rounded-circle user-icon">
                        <i className="bi bi-list d-flex m-0 h4 text-white"></i>
                     </b>
                  </a>
               </div>
            </div>
            <SideBar show={showNavBar} handleClose={handleCloseNavBar} />

            </>
  )
}
