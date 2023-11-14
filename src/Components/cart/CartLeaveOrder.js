import React from 'react'

export default function CartLeaveOrder() {
    return (
        <div className="bg-white p-3 mb-2 shadow-sm rounded-3">
            <div className="d-flex align-items-center justify-content-between gap-3">
                <div>
                    <p className="fw-bold mb-1">Récupérer la commande à domicile ou au point de relais</p>
                    <p className="text-muted small m-0">Optez pour aucun contact entre livreur & notre partenaire de livraison  va les laissez à la porte de votre domicile
                    </p>
                </div>
                <span>
                    <input type="checkbox" className="btn-check" id="btn-check-outlined" autoComplete="off" />
                    <label className="btn btn-outline-dark btn-sm d-flex p-0 btn-pill" htmlFor="btn-check-outlined"><i className="icofont-check-alt"></i></label>
                </span>
            </div>
        </div>
    )
}
