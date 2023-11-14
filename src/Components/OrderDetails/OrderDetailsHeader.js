import React, { useState } from 'react';

import { useSelector } from 'react-redux';




import { Link } from 'react-router-dom';

import SideBar from '../OffCanvas/SideBar';





export default function OrderDetailsHeader() {

    const order = useSelector(state => state.orders);




    const [showNavBar, setShowNavBar] = useState(false);
    const handleShowNavBar = () => setShowNavBar(true);
    const handleCloseNavBar = () => setShowNavBar(false);
    return (
        <>
            <div className="bg-white mb-auto shadow-sm border-bottom">
                <div className="d-flex align-items-center gap-3 p-3 shadow-sm">

                    <Link to="/profile" className="text-primary"><i className="bi bi-arrow-left fs-5"></i></Link>

                    <div>

                        <h6 className="fw-bold mb-0">Commande : {order.order && order.order.id} </h6>

                        <p className="text-muted small m-0"><span className="text-success">{order.order && order.order.state.state}</span> - {order.order && order.order.items.length} article {order.order && order.order.totalPrice} DH</p>

                    </div>

                    <div className="d-flex align-items-center gap-2 ms-auto">

                        <a className="toggle" href="#" onClick={handleShowNavBar}>

                            <b className="bg-dark bg-opacity-75 rounded-circle user-icon">

                                <i className="bi bi-list d-flex m-0 h4 text-white"></i>

                            </b>

                        </a>

                    </div>

                </div>
            </div>
            <SideBar show={showNavBar} handleClose={handleCloseNavBar} />

        </>

    )
}
