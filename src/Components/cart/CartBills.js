import React from 'react';
export default function CartBills({ totalPrice, deliveryPartnerFee, handlingFee, subtotal }) {


    return (
        <div className="bg-white p-3 mb-2 shadow-sm rounded-3">
            <h6 className="fw-bold text-black mb-3">Détails de facture</h6>
            <div className="border-bottom">
                
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="m-0">Total de marchandise HT</p>
                    <p className="m-0">{(totalPrice/1.1).toFixed(2)} DH</p>
                </div>

                <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="m-0">Pourcentage des taxes</p>
                    <p className="m-0">10 %</p>
                </div>
                <hr/>
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="m-0">Total de marchandise TTC</p>
                    <p className="m-0">{totalPrice.toFixed(2)} DH</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="m-0">Frais de livraison</p>
                    <p className="m-0">{deliveryPartnerFee.toFixed(2)} DH</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <p className="text-info m-0">Frais de préparation </p>
                    <p className="m-0">{handlingFee.toFixed(2)} DH</p>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between pt-3">
                <h6 className="text-primary m-0">Total</h6>
                <h6 className="fw-bold text-primary m-0">{subtotal.toFixed(2)} DH</h6>
            </div>
        </div>
    );
}
