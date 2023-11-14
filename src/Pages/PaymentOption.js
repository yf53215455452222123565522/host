
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SideBar from '../Components/OffCanvas/SideBar';
import { Link } from 'react-router-dom';
function PaymentOption() {
    const [showUpiidPage,setShowUpiidPage]=useState(false);
   const handleShowUpiidPage=()=>setShowUpiidPage(true);
   const handleCloseUpiidPage=()=>setShowUpiidPage(false);
   const [showAddCreditCardPage,setShowAddCreditCardPage]=useState(false);
   const handleShowAddCreditCardPage=()=>setShowAddCreditCardPage(true);
   const handleCloseAddCreditCardPage=()=>setShowAddCreditCardPage(false);
   const [showSelectWalletPage,setShowSelectWalletPage]=useState(false);
   const handleShowSelectWalletPage=()=>setShowSelectWalletPage(true);
   const handleCloseSelectWalletPage=()=>setShowSelectWalletPage(false);
   const [showNavBar,setShowNavBar]=useState(false);
   const handleShowNavBar=()=>setShowNavBar(true);
   const handleCloseNavBar=()=>setShowNavBar(false);
    return (
        <div className='bg-light'>
        <div className="payment-option d-flex flex-column vh-100">
         
         <div className="bg-white mb-auto shadow-sm border-bottom">
            <div className="d-flex align-items-center gap-3 p-3">
               <Link to="/cart" className="text-primary"><i className="bi bi-arrow-left fs-5"></i></Link>
               <div>
                  <h6 className="fw-bold mb-0">Payment Option</h6>
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
        
         <div className="mt-auto overflow-auto vh-100">
           
            <div className="p-3">
              
               <div className="mb-4">
                  <h6 className="fw-bold text-black mb-3">Details</h6>
                  <div className="bg-white rounded-3 shadow-sm p-3">
                     <div className="d-flex gap-3 align-items-center mb-2">
                        <i className="icofont-food-cart fs-5 text-muted"></i>
                        <span>
                           <p className="m-0 small text-muted">Foodmart</p>
                           <p className="m-0">Lower GF 1, Sandhu Tower 2, Gurudev</p>
                        </span>
                     </div>
                     <div className="d-flex gap-3 align-items-center mb-2">
                        <i className="icofont-clock-time fs-5 text-muted"></i>
                        <span>
                           <p className="m-0 small text-muted">Delivery Time</p>
                           <p className="m-0">Today, 1:00 PM - 2:00 PM</p>
                        </span>
                     </div>
                     <div className="d-flex gap-3 align-items-center mb-0">
                        <i className="icofont-ui-home fs-5 text-muted"></i>
                        <span>
                           <p className="m-0 small text-muted">Home</p>
                           <p className="m-0">Phase 1, Urban Estate Dugri, Ludhiana, Punjab</p>
                        </span>
                     </div>
                  </div>
               </div>
             
               <div className="mb-4">
                  <h6 className="fw-bold text-black mb-3">UPI</h6>
                  <a href="#" className="link-dark" data-bs-toggle="offcanvas" data-bs-target="#addUpiId"
                     aria-controls="addUpiId" onClick={handleShowUpiidPage}>
                     <div className="bg-white d-flex align-items-center gap-3 rounded-3 shadow-sm p-3">
                        <div>
                           <i className="icofont-plus-circle text-primary fs-5"></i>
                        </div>
                        <div>
                           <h6 className="text-primary fw-bold osahan-mb-1">Add New UPI ID</h6>
                           <p className="text-muted small m-0">You need to have a registered UPI ID</p>
                        </div>
                     </div>
                  </a>
               </div>
              
               <div className="mb-4">
                  <h6 className="fw-bold text-black mb-3">Credit & Debit cards</h6>
                  <a href="#" onClick={handleShowAddCreditCardPage} className="link-dark" data-bs-toggle="offcanvas" data-bs-target="#addNewCard"
                     aria-controls="addNewCard">
                     <div className="bg-white d-flex align-items-center gap-3 rounded-3 shadow-sm p-3">
                        <div>
                           <i className="icofont-plus-circle text-primary fs-5"></i>
                        </div>
                        <div>
                           <h6 className="text-primary fw-bold osahan-mb-1">Add New Card</h6>
                           <p className="text-muted small m-0">Save and Pay via Cards</p>
                        </div>
                     </div>
                  </a>
               </div>
              
               <div className="mb-4">
                  <h6 className="fw-bold text-black mb-3">More Payment Options</h6>
                  <div className="bg-white rounded-3 shadow-sm">
                     <div className="border-bottom p-3">
                        <a href="#" className="link-dark" data-bs-toggle="offcanvas"
                           data-bs-target="#morepaymentoptions" aria-controls="morepaymentoptions"
                           onClick={handleShowSelectWalletPage}>
                           <div className="d-flex align-items-center gap-3">
                              <div>
                                 <span
                                    className="border rounded d-flex align-items-center justify-content-center p-2"><i
                                    className="icofont-wallet fs-5 text-muted"></i></span>
                              </div>
                              <div className="text-truncate">
                                 <h6 className="osahan-mb-1">Wallets</h6>
                                 <p className="text-muted small text-truncate m-0">Paytm, PhonePe, Amazon Pay & more</p>
                              </div>
                              <div className="ms-auto"><i className="icofont-rounded-right text-muted fs-5"></i></div>
                           </div>
                        </a>
                     </div>
                     <div className="border-bottom p-3">
                        <a href="#" className="link-dark" data-bs-toggle="offcanvas"
                           data-bs-target="#morepaymentoptions" aria-controls="morepaymentoptions"
                           onClick={handleShowSelectWalletPage}>
                           <div className="d-flex align-items-center gap-3">
                              <div>
                                 <span
                                    className="border rounded d-flex align-items-center justify-content-center p-2"><i
                                    className="icofont-credit-card fs-5 text-muted"></i></span>
                              </div>
                              <div className="text-truncate">
                                 <h6 className="osahan-mb-1">Sodexo</h6>
                                 <p className="text-muted small text-truncate m-0">Sodex card valid only on Restaurant &
                                    Insta
                                 </p>
                              </div>
                              <div className="ms-auto"><i className="icofont-rounded-right text-muted fs-5"></i></div>
                           </div>
                        </a>
                     </div>
                     <div className="border-bottom p-3">
                        <a href="#" className="link-dark" data-bs-toggle="offcanvas"
                           data-bs-target="#morepaymentoptions" aria-controls="morepaymentoptions"
                           onClick={handleShowSelectWalletPage}>
                           <div className="d-flex align-items-center gap-3">
                              <div>
                                 <span
                                    className="border rounded d-flex align-items-center justify-content-center p-2"><i
                                    className="icofont-court fs-5 text-muted"></i></span>
                              </div>
                              <div className="text-truncate">
                                 <h6 className="osahan-mb-1">Netbanking</h6>
                                 <p className="text-muted small text-truncate m-0">Select from a list of banks</p>
                              </div>
                              <div className="ms-auto"><i className="icofont-rounded-right text-muted fs-5"></i></div>
                           </div>
                        </a>
                     </div>
                     <div className="p-3">
                        <a href="#" className="link-dark" data-bs-toggle="offcanvas"
                           data-bs-target="#morepaymentoptions" aria-controls="morepaymentoptions"
                           onClick={handleShowSelectWalletPage} >
                           <div className="d-flex align-items-center gap-3">
                              <div>
                                 <span
                                    className="border rounded d-flex align-items-center justify-content-center p-2"><i
                                    className="icofont-mastercard-alt fs-5 text-muted"></i></span>
                              </div>
                              <div className="text-truncate">
                                 <h6 className="osahan-mb-1">CRED pay</h6>
                                 <p className="text-muted small text-truncate m-0">Pay using UPI on CRED</p>
                              </div>
                              <div className="ms-auto"><i className="icofont-rounded-right text-muted fs-5"></i></div>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
            
               <div className="mb-4">
                  <h6 className="fw-bold text-black mb-3">Pay on Delivery</h6>
                  <div className="bg-white rounded-3 shadow-sm p-3">
                     <div className="form-check mx-2">
                        <input className="form-check-input fs-5 my-0" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                           <h6 className="fw-bold osahan-mb-1">Cash/Pay on Delivery</h6>
                           <p className="text-muted small m-0">Cash on delivery is not available. Please use other payment
                              modes.
                           </p>
                        </label>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

{/* off upiid */}
<Offcanvas placement="end" show={showUpiidPage} onHide={handleCloseUpiidPage} className="offcanvas offcanvas-end border-0" tabindex="-1" id="addUpiId" aria-labelledby="addUpiIdLabel">
    

         <Offcanvas.Header className="offcanvas-header d-flex align-items-center justify-content-start gap-3 border-bottom">
            <a href="#" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleCloseUpiidPage}><i
               className="bi bi-arrow-left fs-5 text-primary"></i></a>
            <div>
               <Offcanvas.Title className="offcanvas-title text-black osahan-mb-1" id="addUpiIdLabel">Add new UPI ID</Offcanvas.Title>
               <p className="text-muted m-0">3 items. Total: $130</p>
            </div>
         </Offcanvas.Header>
         <Offcanvas.Body className="offcanvas-body">
            <form className="mb-4">
               <input type="text" className="form-control border rounded-3 py-2 mb-3" placeholder="Enter your UPI ID"
                  value="GPay@1234"/>
               <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked/>
                  <label className="form-check-label" for="flexCheckDefault">
                  Securely save VPA for future use
                  </label>
               </div>
            </form>
         </Offcanvas.Body>
         <div className="offcanvas-footer">
            <Link to="/paymentDetails" className="btn btn-primary rounded-3 btn-lg w-100">Verify and Pay</Link>
         </div>
      
</Offcanvas>
{/* off credit card */}
<Offcanvas placement="end" show={showAddCreditCardPage} onHide={handleCloseAddCreditCardPage} className="offcanvas offcanvas-end border-0" tabindex="-1" id="addUpiId" aria-labelledby="addUpiIdLabel">
    

<Offcanvas.Header className="offcanvas-header d-flex align-items-center justify-content-start gap-3 border-bottom">
            <a href="#" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleCloseAddCreditCardPage}><i
               className="bi bi-arrow-left fs-5 text-primary"></i></a>
            <div>
               <Offcanvas.Title className="offcanvas-title text-black osahan-mb-1" id="addNewCardLabel">Add New Card</Offcanvas.Title>
               <p className="text-muted m-0">3 items. Total: $130</p>
            </div>
</Offcanvas.Header>
         <Offcanvas.Body className="offcanvas-body">
            <form>
               <div className="mb-3">
                  <input type="number" className="form-control rounded-3 py-2" placeholder="Card Number"/>
               </div>
               <div className="row mb-3">
                  <div className="col-8">
                     <input type="month" className="form-control rounded-3 py-2" placeholder="Valid Thought (MM/YY)"/>
                  </div>
                  <div className="col-4">
                     <input type="text" className="form-control rounded-3 py-2" placeholder="CVV"/>
                  </div>
               </div>
               <div className="mb-3">
                  <input type="text" className="form-control rounded-3 py-2" placeholder="Name on Card"/>
               </div>
               <div className="mb-3">
                  <input type="text" className="form-control rounded-3 py-2"
                     placeholder="Card Nickname (for easy identification)"/>
               </div>
               <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" checked/>
                  <label className="form-check-label" for="flexCheckDefault1">
                  Secure this card. <span className="text-decoration-underline">Why is it important?</span>
                  </label>
               </div>
            </form>
         </Offcanvas.Body>
         <div className="offcanvas-footer">
            <Link to="/paymentDetails" className="btn btn-primary rounded-3 btn-lg w-100">Proceed</Link>
         </div>
      
</Offcanvas>
{/* select wallet */}
<Offcanvas placement="end" show={showSelectWalletPage} onHide={handleCloseSelectWalletPage} className="offcanvas offcanvas-end border-0" tabindex="-1" id="addUpiId" aria-labelledby="addUpiIdLabel">
    

<Offcanvas.Header className="offcanvas-header d-flex align-items-center justify-content-start gap-3 border-bottom">
            <a href="#" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleCloseSelectWalletPage}><i
               className="bi bi-arrow-left fs-5 text-primary"></i></a>
            <div>
               <Offcanvas.Title className="offcanvas-title text-black osahan-mb-1" id="addNewCardLabel">Select a wallet</Offcanvas.Title>
               <p className="text-muted m-0">3 items. Total: $130</p>
            </div>
</Offcanvas.Header>
         <Offcanvas.Body className="offcanvas-body">
         <div className="bg-white rounded-3 shadow-sm">
               <div className="border-bottom p-3">
                  <div className="d-flex align-items-center gap-3">
                     <div>
                        <span className="border rounded d-flex align-items-center justify-content-center p-2"><i className="icofont-brand-paypal icofont-2x"></i></span>
                     </div>
                     <h5 className="m-0">Paytm</h5>
                     <Link to="/paymentDetails" className="text-primary ms-auto">Link Account</Link>
                  </div>
               </div>
               <div className="border-bottom p-3">
                  <div className="d-flex align-items-center gap-3">
                     <div>
                        <span className="border rounded d-flex align-items-center justify-content-center p-2"><i className="icofont-apple-pay icofont-2x"></i></span>
                     </div>
                     <h5 className="m-0">PhonePe</h5>
                     <Link  to="/paymentDetails" className="text-primary ms-auto">Link Account</Link>
                  </div>
               </div>
               <div className="border-bottom p-3">
                  <div className="d-flex align-items-center gap-3">
                     <div>
                        <span className="border rounded d-flex align-items-center justify-content-center p-2"><i className="icofont-brand-amazon icofont-2x"></i></span>
                     </div>
                     <h5 className="m-0">Amazon Pay</h5>
                     <Link  to="/paymentDetails" className="text-primary ms-auto">Link Account</Link>
                  </div>
               </div>
               <div className="border-bottom p-3">
                  <div className="d-flex align-items-center gap-3">
                     <div>
                        <span className="border rounded d-flex align-items-center justify-content-center p-2"><i className="icofont-pay icofont-2x"></i></span>
                     </div>
                     <h5 className="m-0">MobiKwik</h5>
                     <Link  to="/paymentDetails" className="text-primary ms-auto">Link Account</Link>
                  </div>
               </div>
            </div>
         </Offcanvas.Body>
        
      
</Offcanvas>
<SideBar show={showNavBar} handleClose={handleCloseNavBar}/>
    </div>
    )
}

export default PaymentOption
