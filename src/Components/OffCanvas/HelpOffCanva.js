import React from 'react'
import { Offcanvas } from 'react-bootstrap';
function HelpOffCanva({showHelpPage,handleCloseHelpPage}) {
    return (
        <Offcanvas placement="end" show={showHelpPage} onHide={handleCloseHelpPage} className="offcanvas offcanvas-end bg-light border-0" tabindex="-1" id="help" aria-labelledby="helpLabel">
         <Offcanvas.Header className="offcanvas-header bg-primary shadow-sm d-flex align-items-center justify-content-start gap-3">
            <a href="#" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleCloseHelpPage}><i
               className="bi bi-arrow-left text-white fs-5"></i></a>
            <h6 className="offcanvas-title text-uppercase text-white fw-bold" id="helpLabel">Aide & Support</h6>
         </Offcanvas.Header >
         <Offcanvas.Body className="offcanvas-body p-0">
            <div className="bg-white my-3 shadow-sm">
               <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                     <h2 className="accordion-header p-3" id="flush-headingOne">
                        <button className="accordion-button collapsed bg-white shadow-none text-dark p-0 h6 mb-0" type="button"
                           data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                           aria-controls="flush-collapseOne">
                        Où est ma commande?
                        </button>
                     </h2>
                     <div id="flush-collapseOne" className="accordion-collapse collapse p-0"
                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body p-3 pt-0">
                           <p className="text-muted">Vous pouvez suivre l'état de votre commande sur la page de suivi de la commande.
                              de la commande.
                           </p>
                           <div className="w-50">
                              <a href="#" className="btn btn-primary w-100 py-2">Chat avec nous</a>
                              <p className="text-primary text-start small pt-2 m-0">Temps d'attente inférieur à 2 min(s)</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="border-bottom p-3">
                     <h6 className="m-0">Je souhaite modifier les articles de ma commande</h6>
                  </div>
                  <div className="border-bottom p-3">
                     <h6 className="m-0">Je souhaite donner des instructions relatives à la livraison</h6>
                  </div>
                  <div className="accordion-item">
                     <h2 className="accordion-header p-3" id="flush-headingFour">
                        <button className="accordion-button collapsed bg-white shadow-none text-dark p-0 h6 mb-0" type="button"
                           data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false"
                           aria-controls="flush-collapseFour">
                        
                        Je souhaire annuler ma commande
                        </button>
                     </h2>
                     <div id="flush-collapseFour" className="accordion-collapse collapse p-0"
                        aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body p-3 pt-0">
                           <p className="text-muted">Nous vous recommandons d'annuler votre commande avant l'enlèvement. Pour toute
                              questions :
                           </p>
                           <div className="w-50">
                              <a href="#" className="btn btn-primary text-uppercase w-100 py-2">Chat avec nous</a>
                              <p className="text-primary text-start small pt-2 m-0">Temps d'attente inférieur à 2 min(s)</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="p-3">
                     <h6 className="m-0">J'ai des problèmes de paiement et de remboursement</h6>
                  </div>
               </div>
            </div>
         </Offcanvas.Body>
      </Offcanvas>
    )
}

export default HelpOffCanva
