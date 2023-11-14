import React, { useState } from 'react'
import CouponOffCanva from '../OffCanvas/CouponOffCanva'

export default function CartCoupon() {
    const [showCoupons, setShowCoupons] = useState();
    const handleShowCoupons = () => setShowCoupons(true);
    const handleCloseCoupons = () => setShowCoupons(false);

    return (

        <div>
            <a href="#" className="link-dark" data-bs-toggle="offcanvas" data-bs-target="#applycoupon"
                aria-controls="applycoupon" onClick={handleShowCoupons}>
                <div className="bg-white d-flex align-items-center gap-3 p-3 mb-2 shadow-sm rounded-3">
                    <i className="icofont-sale-discount icofont-2x"></i>
                    <div>
                        <h6 className="fw-bold text-black osahan-mb-1">Appliquer des Coupons</h6>
                        <p className="small text-primary m-0">Economisez plus avec les coupons disponible</p>
                    </div>
                    <div className="ms-auto"><i className="bi bi-chevron-right fs-5"></i></div>
                </div>
            </a>
            <CouponOffCanva showCoupons={showCoupons} handleCloseCoupons={handleCloseCoupons} />

        </div>

    )
}
