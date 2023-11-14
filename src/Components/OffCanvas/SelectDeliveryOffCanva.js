import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function SelectDeliveryOffCanva({showDeliveryOptions,handleCloseDeliveryOptions}) {
  return (
    <div>
        <Offcanvas placement="bottom" show={showDeliveryOptions} onHide={handleCloseDeliveryOptions} className="offcanvas offcanvas-bottom bg-light border-0 h-75" tabindex="-1" id="deliveryoption"
            aria-labelledby="deliveryoptionLabel">
            <Offcanvas.Header className="offcanvas-header">
               <h5 className="offcanvas-title fw-bold text-black" id="deliveryoptionLabel">Selectionner une option de livraison</h5>
            </Offcanvas.Header>
            <Offcanvas.Body className="offcanvas-body p-0">
               <div className="bg-white shadow-sm p-3 border-bottom border-top">
                  <div className="form-check form-check-reverse"> 
                     <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                        value="option1" />
                     <label className="form-check-label d-flex align-items-center gap-2" for="exampleRadios1">
                        <i className="icofont-free-delivery icofont-3x text-primary"></i>
                        <div className="text-start">
                           <h6 className="fw-bold mb-0">Livraison instantannée- <span className="text-success"><del
                              className="text-muted">25DH</del> Gratuit</span></h6>
                           <p className="text-primary small m-0">Livré après 25 - 30 mins</p>
                        </div>
                     </label>
                  </div>
               </div>
               <div className="bg-white shadow-sm p-3">
                  <div className="form-check form-check-reverse mb-3">
                     <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                        value="option2" checked />
                     <label className="form-check-label d-flex align-items-center gap-2" for="exampleRadios2">
                        <i className="icofont-delivery-time icofont-3x text-primary"></i>
                        <div className="text-start">
                           <h6 className="fw-bold mb-0">Livré après - <span className="text-success"><del
                              className="text-muted">15DH</del> Gratuit</span></h6>
                           <p className="text-primary small m-0">Créneau le plus tôt : 13:00 - 14:00 Aujourd'hui</p>
                        </div>
                     </label>
                  </div>
                  <div className="row row-cols-2 g-2 custom-checkbox">
                     <div className="col">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                        <label className="btn btn-outline-danger btn-sm w-100" for="btnradio1">1:00 PM - 2:00 PM</label>
                     </div>
                     <div className="col">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                        <label className="btn btn-outline-danger btn-sm w-100" for="btnradio2">2:00 PM - 3:00 PM</label>
                     </div>
                     <div className="col">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                        <label className="btn btn-outline-danger btn-sm w-100" for="btnradio3">3:00 PM - 4:00 PM</label>
                     </div>
                     <div className="col">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                        <label className="btn btn-outline-danger btn-sm w-100" for="btnradio4">4:00 PM - 5:00 PM</label>
                     </div>
                     <div className="col">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autocomplete="off" />
                        <label className="btn btn-outline-danger btn-sm w-100" for="btnradio5">5:00 PM - 6:00 PM</label>
                     </div>
                     <div className="col">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio6" autocomplete="off" />
                        <label className="btn btn-outline-danger btn-sm w-100" for="btnradio6">6:00 PM - 7:00 PM</label>
                     </div>
                     <div className="col">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio7" autocomplete="off" />
                        <label className="btn btn-outline-danger btn-sm w-100" for="btnradio7">7:00 PM - 8:00 PM</label>
                     </div>
                     <div className="col">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio8" autocomplete="off" />
                        <label className="btn btn-outline-danger btn-sm w-100" for="btnradio8">8:00 PM - 9:00 PM</label>
                     </div>
                     <div className="col">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio9" autocomplete="off" />
                        <label className="btn btn-outline-danger btn-sm w-100" for="btnradio9">9:00 PM - 10:00 PM</label>
                     </div>
                     <div className="col">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio10" autocomplete="off" />
                        <label className="btn btn-outline-danger btn-sm w-100" for="btnradio10">10:00 PM - 11:00 PM</label>
                     </div>
                  </div>
               </div>
            </Offcanvas.Body>
            <div className="offcanvas-footer bg-white shadow-sm border-top">
               <div className="d-flex align-items-center justify-content-between mb-1">
                  <p className="m-0">Prix Total </p>
                  <p className="m-0">$163</p>
               </div>
               <div className="d-flex align-items-center justify-content-between">
                  <p className="text-success m-0">Total Economisez</p>
                  <p className="m-0"><span className="bg-success bg-opacity-25 text-success rounded small p-1">-$33</span></p>
               </div>
               <div className="d-flex align-items-center justify-content-between mt-2 mb-3">
                  <p className="text-primary fw-bold m-0">Delivery Partner Fee</p>
                  <p className="text-success fw-bold m-0"><del className="text-muted me-1">$15</del>FREE</p>
               </div>
               <Link to="/paymentOption" className="btn btn-success text-uppercase w-100 btn-lg fw-bold">Make Payment - $130</Link>
            </div>
         </Offcanvas>
    </div>
  )
}
