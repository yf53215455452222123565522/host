import React from 'react'
import { couponsCart } from '../../data/cart'
import { Offcanvas } from 'react-bootstrap'

export default function CouponOffCanva({showCoupons,handleCloseCoupons}) {
  return (
    <div>
        <Offcanvas placement="end" show={showCoupons} onHide={handleCloseCoupons} className="bg-light border-0 w-100" >
            <Offcanvas.Header className="bg-primary d-block bg-white shadow-sm"   >
               <div className="d-flex align-items-center justify-content-start gap-3">
                  <a href="#" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleCloseCoupons}><i className="bi bi-arrow-left text-white fs-5"></i></a>
                  <h5 className="offcanvas-title text-white fw-bold" id="applycouponLabel">Appliquez Coupon</h5>
               </div>

               <div className="pt-3">
                  <input type="text" className="form-control rounded-3 border-0 py-2" placeholder="Enter Coupon Code" aria-label="Enter Coupon Code" aria-describedby="search" />
               </div>
            </Offcanvas.Header>
            <Offcanvas.Body className="bg-light">
               <p className="text-black text-uppercase small mb-3">coupons disponibles</p>
               {couponsCart.map((item) => (
                  <div key={item.id} className="bg-white rounded-3 shadow-sm mb-3 osahan-coupons-main">
                     <div className="d-flex align-items-start justify-content-between border-bottom p-3 position-relative">
                        <span className="coupon-top-shape-2 position-absolute"></span>
                        <span className="coupon-bottom-shape-2 position-absolute"></span>
                        <div>
                           <div
                              className="d-flex align-items-center bg-success osahan-coupons-code mb-2 position-relative rounded-3">
                              <i className="icofont-sale-discount text-warning fs-5 border-end p-2"></i>
                              <span
                                 className="d-flex align-items-center text-white fw-bold justify-content-center position-relative flex-grow-1 h-100 fs-6 px-3">
                                 {item.title}
                                 <span className="coupon-top-shape position-absolute"></span>
                                 <span className="coupon-bottom-shape position-absolute"></span>
                              </span>
                           </div>
                           <h6 className="m-0">{item.gender} <span className="fw-bold">{item.value}</span></h6>
                        </div>
                        <a href="#" className="text-primary fw-bold" data-bs-dismiss="offcanvas" aria-label="Close">APPLIQUER</a>
                     </div>
                     <div className="p-3">
                        <p className="text-muted mb-2">{item.condition}
                        </p>
                        <a data-bs-toggle="collapse" className="text-primary" href="#collapseone" role="button" aria-expanded="false" aria-controls="collapseone">
                           + PLUS
                        </a>
                        <div className="collapse" id="collapseone">
                           <div className="card card-body border-0 px-0 pb-0">
                              <p className="text-black mb-2">Termes and Conditions</p>
                              <ul className="d-grid gap-1 text-muted px-3 mb-0">
                                 <li>Valid seulement sur vos 5 premiers commandes chez Foodmart</li>
                                 <li>Valeur minimale de la commande  - 99DH</li>
                                 <li>Cette dispense de livraison gratuite ne s'applique qu'aux frais de livraison.</li>
                                 <li>D'autres conditions générales peuvent s'appliquer</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </Offcanvas.Body>
         </Offcanvas>
    </div>
  )
}
