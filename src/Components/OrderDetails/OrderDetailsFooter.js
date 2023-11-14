import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import HelpOffCanva from '../OffCanvas/HelpOffCanva';


export default function OrderDetailsFooter({id}) {
    const [showHelpPage,setShowHelpPage]=useState(false);
    const handleShowHelpPage =()=>setShowHelpPage(true);
    const handleCloseHelpPage=()=>setShowHelpPage(false);
  return (

    <>
      <div className="mt-auto p-3">
        <Link to={"/trackDeliveryBoy/" + id} className="btn btn-primary w-100 text-uppercase btn-lg fw-bold">Suivi de la commande</Link>
        <a href="#" data-bs-toggle="offcanvas" data-bs-target="#help"
          aria-controls="help" className="btn bg-white shadow-sm border btn-light text-primary w-100 text-uppercase btn-lg fw-bold mt-3" onClick={handleShowHelpPage} >Aide</a>
      </div>
      <HelpOffCanva showHelpPage={showHelpPage} handleCloseHelpPage={handleCloseHelpPage} />
    </>
  )
}