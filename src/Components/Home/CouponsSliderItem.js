import React from 'react'

export default function CouponsSliderItem({item}) {
    return (
        <div className="coupons-item">
            <div className="link-dark pb-3 ps-3">
                <div className="d-flex align-items-center gap-3 shadow-sm rounded-4 p-3 bg-white">
                    <i className="icofont-sale-discount icofont-2x text-success"></i>
                    <div>
                        <h6 className="fw-bold osahan-mb-1">{item.title}</h6>
                        <p className="small text-muted text-uppercase mb-0">{item.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
