import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../OffCanvas/SideBar'
import { useSelector } from 'react-redux';

export default function CartHeader() {
    const [showNavBar, setShowNavBar] = useState(false);
    const handleShowNavBar = () => setShowNavBar(true);
    const handleCloseNavBar = () => setShowNavBar(false);
    const user=useSelector(state=>state.users);
    return (
        <>
            <div className="d-flex align-items-center gap-3 p-3 bg-primary">
                <Link to="/listing" className="text-white"><i className="bi bi-arrow-left fs-5"></i></Link>
                <div>
                    <h6 className="fw-bold text-white mb-0">Articles de pannier</h6>
                    <p className="text-white-50 small m-0">Foodmart</p>
                </div>
                <div className="d-flex align-items-center gap-2 ms-auto">
                    <Link to="/profile" className="link-dark">
                    <div className="bg-dark bg-opacity-75 rounded-circle user-icon"><img src={user.data.picture}className="rounded-pill img-fluid" referrerPolicy="no-referrer" /></div>
                    </Link>

                    <a className="toggle" href="#" onClick={handleShowNavBar}>
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
