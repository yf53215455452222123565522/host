import React from 'react'

export default function OrderDetailsPricingItem({ items }) {
    return (
        <div  className="d-flex align-items-center gap-2 mb-2">
            <i className="icofont-check-alt fs-5 text-success"></i>
            <p className="m-0">{items.quantity} x {items.product.name}</p>
            <p className="ms-auto m-0">{items.product.price} DH</p>
        </div>
    )
}
