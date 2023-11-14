import React, { useState } from 'react';

import { Link } from 'react-router-dom';
export default function HomeFooter() {
   const [showCategories, setShowCategories] = useState(false);

   const handleCloseCategories = () => setShowCategories(false);
   const handleShowCategories = () => setShowCategories(true);


   return (
      <>
         <div className="footer bg-white shadow mt-auto border-top">
            <div className="d-flex align-items-center justify-content-between py-1">
               <Link to="/home" className="link-dark text-center col py-2 p-1">
                  <i className="bi bi-house h3 m-0"></i>
                  <p className="small m-0 pt-1">Accueil</p>
               </Link>
               <Link to="/listing" className="text-muted text-center col py-2 p-1">
                  <i className="bi bi-shop h3 m-0"></i>
                  <p className="small m-0 pt-1">Catalogue</p>
               </Link>
               {/* <Link to="/trackDeliveryBoy" className="text-muted text-center col py-2 p-1">
                  <i className="bi bi-geo-alt h3 m-0"></i>
                  <p className="small m-0 pt-1">Track</p>
               </Link> */}
               <Link to="/cart" className="text-muted text-center col py-2 p-1">
                  <i className="bi bi-basket h3 m-0"></i>
                  <p className="small m-0 pt-1">Pannier</p>
               </Link>
               <Link to="/preferenceProducts" className="text-muted text-center col py-2 p-1">
                  <i className="bi bi-heart h3 m-0"></i>
                  <p className="small m-0 pt-1"> Préference</p>
               </Link>
               <Link to="/profile" className="text-muted text-center col py-2 p-1">
                  <i className="bi bi-person h3 m-0"></i>
                  <p className="small m-0 pt-1">Profil</p>
               </Link>
            </div>
         </div>
         {/* <CategoryModal showCategories={showCategories} handleCloseCategories={handleCloseCategories} /> */}
      </>
   )
}
