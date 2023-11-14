import React, { useState } from 'react'
import PhoneUpdateOffCanva from '../OffCanvas/PhoneUpdateOffCanva'
import { useSelector } from 'react-redux';

export default function ProfileUpdatePhone() {
    const user = useSelector(state => state.users);
    const [showProfileEditPage, setShowProfileEditPage] = useState(false);
   const handleShowProfileEditPage = () => setShowProfileEditPage(true);
   const handleCloseProfileEditPage = () => setShowProfileEditPage(false);
  return (
    <>
     <div onClick={handleShowProfileEditPage} data-bs-toggle="offcanvas" data-bs-target="#editaccount" aria-controls="editaccount" className="bg-white border-bottom p-3">
                     <div className="d-flex gap-3 align-items-center">
                        <i className="bi bi-pencil fs-5 text-muted"></i>
                        <span>
                           <p className="m-0 small text-muted">Mon compte</p>

                           {user &&
                              <p className="m-0">{user.data.phone && user.data.phone + " , "} {user.data.email} </p>}
                        </span>
                        <a href="#" className="text-primary ms-auto d-flex"><i className="bi bi-chevron-right fs-6"></i></a>
                     </div>
     </div>
     <PhoneUpdateOffCanva showProfileEditPage={showProfileEditPage} handleCloseProfileEditPage={handleCloseProfileEditPage}   />

    </>
  )
}
