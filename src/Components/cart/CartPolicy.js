import React from 'react'

export default function CartPolicy() {
    return (
        <div className="bg-white shadow-sm p-3 rounded-3">
            <h6 className="fw-bold text-black mb-3">Politique d'annulation</h6>
            <div>
                <div className="d-flex align-items-center gap-3 mb-3 border bg-light p-3 rounded-3">
                    <i className="icofont-stopwatch icofont-2x text-danger"></i>
                    <p className="m-0">Commandes ne peuvent être annulé ou  remborsé après livraison une fois emballé pour la livraison.</p>
                    
                </div>
                <div className="d-flex align-items-center gap-3 mb-3 border bg-light p-3 rounded-3">
                    <i className="icofont-file-alt icofont-2x text-danger"></i>
                    <p className="m-0">En cas de retards ou de problèmes imprévus, un remboursement sera effectué.</p>
                </div>
            </div>
            <p className="mb-0 small text-muted">Vérifiez les détails de votre commande et de votre adresse avant de passer la commande. <a href="#" className="text-decoration-underline text-primary">En savoir plus sur la politique </a></p>
        </div>
    )
}
