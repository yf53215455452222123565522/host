import React, { useState } from 'react';
import Imagegif from "../Assets/img/clock.gif";
import SideBar from '../Components/OffCanvas/SideBar';
import { Link } from 'react-router-dom';
function PaymentDetails() {
   const [showNavBar,setShowNavBar]=useState(false);
   const handleShowNavBar=()=>setShowNavBar(true);
   const handleCloseNavBar=()=>setShowNavBar(false);
    return (
        <div>
            <div className="payment-option d-flex flex-column vh-100">
         
         <div className="bg-white mb-auto shadow-sm border-bottom">
            <div className="d-flex align-items-center gap-3 p-3">
               <Link to="/paymentOption" className="text-primary"><i className="bi bi-arrow-left fs-5"></i></Link>
               <div>
                  <h6 className="fw-bold mb-0">Payment Details</h6>
                  <p className="text-muted small m-0">3 items. Total: 130</p>
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
      
         <div className="my-auto vh-100 d-flex align-items-center justify-content-center p-3">
            <Link to="/orderReceived" className="link-dark">
               <div className="text-center p-4">
                  <div className="mb-5">
                     <span>
                     <img src={Imagegif} alt="" className="img-fluid w-50"/>
                     </span>
                  </div>
                  <h5 className="fw-bold lh-base">Open your UPI app to approve the payment request before the timer runs out</h5>
               </div>
            </Link>
         </div>
        
         <div className=" text-center p-3">
            <p className="text-muted"><span className="text-dark fw-bold">Note:</span> Do not hit back button or close this<br/>
               screen until the transaction is complete
            </p>
         </div>
         <div className="mt-auto p-3">
            <Link to="/trackOrder" className="btn btn-primary w-100 text-uppercase btn-lg fw-bold">Track Order</Link>
            <Link to="/paymentOption" className="btn bg-white shadow-sm border btn-light text-primary w-100 text-uppercase btn-lg fw-bold mt-3">Cancel payment</Link>
         </div>
      </div>
      <SideBar show={showNavBar} handleClose={handleCloseNavBar}/>
        </div>
    )
}

export default PaymentDetails
