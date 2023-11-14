import React, { useState } from 'react'
import ImageBanner from '../Assets/img/banner1.png'
import HelpOffCanva from '../Components/OffCanvas/HelpOffCanva';
import SideBar from '../Components/OffCanvas/SideBar';
import { Link } from 'react-router-dom';
function TrackOrder() {
    const [showHelpPage,setShowHelpPage]=useState(false);
    const handleShowHelpPage =()=>setShowHelpPage(true);
    const handleCloseHelpPage=()=>setShowHelpPage(false);
    const [showNavBar,setShowNavBar]=useState(false);
   const handleShowNavBar=()=>setShowNavBar(true);
   const handleCloseNavBar=()=>setShowNavBar(false);
    return (
        <div>
            <div className="track-order d-flex flex-column vh-100">
       
         <div className="d-flex align-items-center gap-3 p-3 shadow-sm">
            <Link to="/orderReceived" className="text-primary"><i className="icofont-close fs-5"></i></Link>
            <div>
               <h6 className="fw-bold mb-0">Order #131784939798052</h6>
               <p className="text-muted small m-0"><Link to="/orderDetails" className="text-primary">View Details</Link> - 12:25 PM</p>
            </div>
            <div className="d-flex align-items-center gap-2 ms-auto">
               <a className="toggle" href="#" onClick={handleShowNavBar}>
               <b className="bg-dark bg-opacity-75 rounded-circle user-icon">
               <i className="bi bi-list d-flex m-0 h4 text-white"></i>
               </b>
               </a>
            </div>
         </div>
        
         <div className="my-auto overflow-auto vh-100">
            
            <div className="ratio ratio-4x3 z-n1">
               <iframe title="position" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501748.249032638!2d73.16727014620984!3d31.00740966166808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0x8fbd263103a38861!2sPunjab!5e0!3m2!1sen!2sin!4v1674302805615!5m2!1sen!2sin" className="border-0 w-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
            <div className="bg-white p-3">
               <div className="text-center">
                  <div className="d-flex justify-content-center mb-3">
                     <div className="bg-white rounded-circle shadow-sm p-2 tracking-time">
                        <span className="bg-white order-time">
                           <div className="text-center">
                              <h1 className="fw-bold m-0">25</h1>
                              <p className="text-muted small m-0">mins</p>
                           </div>
                        </span>
                     </div>
                  </div>
                  <p className="text-muted text-center mb-4">Delivery to Home<br/>H.No. 2834 Street, 784 Sector, Ludhiana, Punjab</p>
               </div>
               <div className="card border-secondary-subtle rounded-3 shadow-sm overflow-hidden mb-4">
                  <div
                     className="card-header d-flex align-items-center justify-content-between border-secondary-subtle border-bottom">
                     <p className="m-0 text-black">3 items to be packed</p>
                     <Link to="/orderDetails" className="text-primary">See all items</Link>
                  </div>
                  <div className="card-body p-0">
                     <div className="d-flex align-items-center gap-3 p-3 border-bottom">
                        <div>
                           <span className="border rounded d-flex align-items-center justify-content-center p-2"><i className="icofont-fast-delivery fs-5 text-muted"></i></span>
                        </div>
                        <div className="text-truncate">
                           <h6 className="osahan-mb-1 fw-normal">We have <span className="fw-bold text-success">recieved</span> your order</h6>
                           <p className="text-muted small text-truncate m-0">Order Received</p>
                        </div>
                     </div>
                     <div className="d-flex align-items-center gap-3 p-3">
                        <div>
                           <span className="border rounded d-flex align-items-center justify-content-center p-2"><i className="icofont-delivery-time fs-5 text-muted"></i></span>
                        </div>
                        <div className="text-truncate">
                           <h6 className="osahan-mb-1 fw-normal">We'll assign a delivery partner soon</h6>
                           <p className="text-muted small text-truncate m-0">Food is Being Prepared</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  <h6 className="fw-bold mb-3">While you wait for your order...</h6>
                  <div className="rounded-4 ps-4 pt-4 shadow-sm d-flex gap-1 align-items-center bg-warning bg-gradient justify-content-between">
                     <div className="pb-4">
                        <h1 className="fw-bolder text-black display-5 mb-1">50% OFF</h1>
                        <p className="text-dark">Special Offer: Get 50% Cashback + <span className="text-success"><i className="bi bi-basket"></i> Free Delivery</span>
                        <b className="bg-primary px-1 rounded-1 small text-uppercase fw-bold text-white mt-1 d-inline-block">New Users</b></p>
                        <Link to="/listing" className="btn btn-light text-success fw-bold rounded-3 shadow-sm btn-sm border-0">SHOP NOW</Link>
                     </div>
                     <img src={ImageBanner} alt="" className="img-fluid mt-auto osahan-offer-banner"/>
                  </div>
               </div>
            </div>
         </div>
         
         <div className="mt-auto shadow-sm">
            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#help"
               onClick={handleShowHelpPage} aria-controls="help" className="btn btn-primary w-100 rounded-0 text-uppercase btn-lg fw-bold">Help</a>
         </div>
      </div>
      <HelpOffCanva showHelpPage={showHelpPage} handleCloseHelpPage={handleCloseHelpPage}/>
      <SideBar show={showNavBar} handleClose={handleCloseNavBar}/>
        </div>
    )
}

export default TrackOrder;
